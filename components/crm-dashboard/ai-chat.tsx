"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Search,
  Plus,
  Compass,
  Library,
  History,
  Sparkles,
  Paperclip,
  Mic,
  ArrowUp,
  Globe,
  ChevronDown,
  MoreHorizontal,
  Code2,
  Palette,
  FileText,
  BookOpen,
  Menu,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ChatItem {
  id: string;
  title: string;
  active?: boolean;
}

interface ChatGroup {
  label: string;
  chats: ChatItem[];
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  codeBlock?: { language: string; code: string };
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const chatHistory: ChatGroup[] = [
  {
    label: "Today",
    chats: [
      { id: "1", title: "What's something you've learned", active: true },
      { id: "2", title: "Best travel experience" },
      { id: "3", title: "Favorite book" },
    ],
  },
  {
    label: "Yesterday",
    chats: [{ id: "4", title: "If you could teleport anywhere..." }],
  },
  {
    label: "7 Days Ago",
    chats: [
      { id: "5", title: "What's one goal you want to..." },
      { id: "6", title: "Favorite programming language" },
      { id: "7", title: "Learning new skills" },
      { id: "8", title: "Weekend plans" },
      { id: "9", title: "Evening reflections" },
    ],
  },
];

const INITIAL_MESSAGES: Message[] = [
  {
    id: "m1",
    role: "assistant",
    content:
      "Of course! The filter method lets you create a new array with only the elements that meet a certain condition. Here's a quick example:",
    codeBlock: {
      language: "javascript",
      code: `const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4, 6]`,
    },
  },
  {
    id: "m2",
    role: "assistant",
    content: "This keeps only the even numbers from the original array.",
  },
  {
    id: "m3",
    role: "user",
    content: "That makes sense! When should I use `map` versus `filter`?",
  },
  {
    id: "m4",
    role: "assistant",
    content:
      "Great follow-up! Use map when you want to transform all items in an array into something new. Use filter when you want to remove some items based on a condition but keep the rest as they are.",
  },
];

const quickActions = [
  { label: "Summary", icon: FileText },
  { label: "Code", icon: Code2 },
  { label: "Design", icon: Palette },
  { label: "Research", icon: BookOpen },
];

const models = ["Claude 3.5 Sonnet", "Claude 3 Haiku", "Claude 3 Opus"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Orb() {
  return (
    <div className="relative mx-auto mb-6 h-40 w-40 select-none" aria-hidden>
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300/40 via-pink-200/30 to-orange-200/40 blur-2xl" />
      {/* Main sphere */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-300 via-pink-200 to-orange-300 shadow-2xl shadow-purple-200/60">
        {/* Inner shimmer */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-white/50 via-transparent to-transparent" />
        <div className="absolute left-[15%] top-[12%] h-[28%] w-[28%] rounded-full bg-white/60 blur-sm" />
      </div>
      {/* Floating dot */}
      <div className="absolute right-2 top-2 h-2 w-2 animate-pulse rounded-full bg-rose-400/70" />
    </div>
  );
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  return (
    <div className="my-3 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 text-sm">
      <div className="flex items-center justify-between border-b border-zinc-700 px-4 py-2">
        <span className="font-mono text-xs text-zinc-400">{language}</span>
      </div>
      <pre className="overflow-x-auto p-4 leading-relaxed">
        <code className="font-mono text-zinc-100 text-xs whitespace-pre">
          {code.split("\n").map((line, i) => {
            // Very minimal syntax colouring
            const coloredLine = line
              .replace(
                /(const|let|var|function|return|if|else|for|of|from|import|export)/g,
                '<span class="text-pink-400">$1</span>'
              )
              .replace(
                /(\[.*?\])/g,
                '<span class="text-amber-300">$1</span>'
              )
              .replace(/(\/\/.*)/g, '<span class="text-zinc-500">$1</span>');
            return (
              <span
                key={i}
                dangerouslySetInnerHTML={{ __html: coloredLine + "\n" }}
              />
            );
          })}
        </code>
      </pre>
    </div>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  if (msg.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[75%] rounded-2xl bg-zinc-900 px-4 py-3 text-sm text-white shadow-sm">
          {msg.content}
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-[85%] rounded-2xl border border-zinc-100 bg-white px-5 py-4 text-sm text-zinc-700 shadow-sm">
      <p>{msg.content}</p>
      {msg.codeBlock && (
        <CodeBlock
          language={msg.codeBlock.language}
          code={msg.codeBlock.code}
        />
      )}
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function SidebarContent({
  activeChat,
  onSelectChat,
  onNewChat,
}: {
  activeChat: string;
  onSelectChat: (id: string) => void;
  onNewChat: () => void;
}) {
  const [query, setQuery] = useState("");
  return (
    <div className="flex h-full flex-col">
      {/* Search */}
      <div className="border-b px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search chats..."
            className="pl-9 text-sm border-transparent shadow-none bg-transparent focus-visible:ring-0"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Chat list */}
      <ScrollArea className="flex-1 px-2 py-4">
        <div className="space-y-6">
          {chatHistory.map((group) => (
            <div key={group.label}>
              <p className="mb-2 px-2 text-xs text-muted-foreground">
                {group.label}
              </p>
              <div className="space-y-0.5">
                {group.chats
                  .filter((c) =>
                    c.title.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((chat) => (
                    <div key={chat.id} className="group flex items-center">
                      <button
                        onClick={() => onSelectChat(chat.id)}
                        className={cn(
                          "flex-1 truncate rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-muted",
                          activeChat === chat.id && "bg-muted font-medium"
                        )}
                      >
                        {chat.title}
                      </button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Nav + New Chat */}
      <div className="mt-auto">
        <div className="px-2 py-2 space-y-0.5">
          {[
            { icon: History, label: "History" },
          ].map(({ icon: Icon, label }) => (
            <Button
              key={label}
              variant="ghost"
              className="w-full justify-start gap-2 text-sm"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          ))}
        </div>
        <Separator />
        <div className="p-3">
          <Button className="w-full gap-2" onClick={onNewChat}>
            <Plus className="h-4 w-4" />
            New Chat
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Chat Input ───────────────────────────────────────────────────────────────

function ChatInputBar({
  onSend,
  model,
  onModelChange,
}: {
  onSend: (text: string) => void;
  model: string;
  onModelChange: (m: string) => void;
}) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const send = () => {
    if (!value.trim()) return;
    onSend(value.trim());
    setValue("");
    if (textareaRef.current) textareaRef.current.style.height = "52px";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const autoResize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "52px";
    el.style.height = Math.min(el.scrollHeight, 200) + "px";
  };

  return (
    <div className="bg-primary/10 w-full rounded-2xl p-1 pt-0">
      <div className="flex gap-2 px-4 py-2 text-xs text-muted-foreground">
        Use our faster AI on Pro Plan{" "}
        <span className="mx-1">•</span>
        <button className="hover:underline text-foreground">Upgrade</button>
      </div>
      <div className="bg-background rounded-2xl border-0 overflow-hidden shadow-none">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            autoResize();
          }}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          rows={1}
          className="w-full resize-none border-none bg-transparent p-4 text-sm outline-none focus:ring-0 min-h-[52px]"
          style={{ height: "52px" }}
        />
        <div className="flex items-center justify-between gap-2 p-3">
          {/* Left controls */}
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <label className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-secondary transition-colors">
                    <input type="file" multiple className="hidden" />
                    <Paperclip className="h-5 w-5 text-primary" />
                  </label>
                </TooltipTrigger>
                <TooltipContent>Attach files</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full gap-1.5 text-xs h-8 border"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden lg:inline">{model}</span>
                  <ChevronDown className="h-3 w-3 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {models.map((m) => (
                  <DropdownMenuItem key={m} onClick={() => onModelChange(m)}>
                    {m}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right controls */}
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="size-9 rounded-full">
                    <Mic className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Voice input</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button
              size="icon"
              className="size-8 rounded-full"
              disabled={!value.trim()}
              onClick={send}
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Welcome Screen ───────────────────────────────────────────────────────────

function WelcomeScreen({
  onSend,
  model,
  onModelChange,
}: {
  onSend: (text: string) => void;
  model: string;
  onModelChange: (m: string) => void;
}) {
  return (
    <div className="mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center space-y-6 px-4 lg:px-6">
      <Orb />
      <h1 className="text-center text-2xl font-medium leading-tight lg:text-4xl">
        Good Morning, Toby
        <br />
        How Can I{" "}
        <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
          Assist You Today?
        </span>
      </h1>

      <div className="w-full">
        <ChatInputBar onSend={onSend} model={model} onModelChange={onModelChange} />
      </div>

      {/* Quick-action chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {quickActions.map(({ label, icon: Icon }) => (
          <Button
            key={label}
            variant="outline"
            size="sm"
            className="gap-1.5 rounded-full text-sm"
            onClick={() => onSend(label)}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}

// ─── Chat View ────────────────────────────────────────────────────────────────

function ChatView({
  messages,
  onSend,
  model,
  onModelChange,
}: {
  messages: Message[];
  onSend: (text: string) => void;
  model: string;
  onModelChange: (m: string) => void;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="mx-auto flex h-full w-full max-w-3xl flex-col px-4 lg:px-6">
      <ScrollArea className="flex-1 pt-6">
        <div className="space-y-4 pb-4">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}
          <div ref={bottomRef} />
        </div>
      </ScrollArea>
      <div className="py-4">
        <ChatInputBar onSend={onSend} model={model} onModelChange={onModelChange} />
      </div>
    </div>
  );
}

// ─── Root Component ───────────────────────────────────────────────────────────

export default function AIChatInterface() {
  const [activeChat, setActiveChat] = useState("1");
  const [messages, setMessages] = useState<Message[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [model, setModel] = useState(models[0]);

  const handleNewChat = () => {
    setActiveChat("");
    setMessages([]);
    setHasStarted(false);
  };

  const handleSelectChat = (id: string) => {
    setActiveChat(id);
    if (id === "1") {
      setMessages(INITIAL_MESSAGES);
      setHasStarted(true);
    } else {
      setMessages([]);
      setHasStarted(false);
    }
  };

  const handleSend = (text: string) => {
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
    };
    const assistantMsg: Message = {
      id: `a-${Date.now()}`,
      role: "assistant",
      content: `You asked: "${text}". I'm here to help — this is a demo response. In a real implementation, this would call the AI backend.`,
    };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setHasStarted(true);
  };

  const sidebar = (
    <SidebarContent
      activeChat={activeChat}
      onSelectChat={handleSelectChat}
      onNewChat={handleNewChat}
    />
  );

  return (
    <div className="relative flex h-[92vh] bg-primary-cbe-50/30 overflow-hidden overflow-clip overflow-y-auto">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-72 flex-col border-r">
        {sidebar}
      </aside>

      {/* Mobile Sidebar via Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-2 z-10 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          {sidebar}
        </SheetContent>
      </Sheet>

      {/* Main area */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {hasStarted ? (
          <ChatView
            messages={messages}
            onSend={handleSend}
            model={model}
            onModelChange={setModel}
          />
        ) : (
          <WelcomeScreen
            onSend={handleSend}
            model={model}
            onModelChange={setModel}
          />
        )}
      </main>
    </div>
  );
}