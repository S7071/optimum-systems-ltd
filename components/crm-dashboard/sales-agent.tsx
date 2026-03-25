"use client";

import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  Plus,
  Video,
  PhoneMissed,
  MoreHorizontal,
  Check,
  CheckCheck,
  Paperclip,
  Smile,
  Mic,
  Send,
  Phone,
  X,
  Play,
  FileText,
  Download,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Types ──────────────────────────────────────────────── */

interface Contact {
  id: string;
  name: string;
  avatar?: string;
  initials?: string;
  online: boolean;
  lastMessage: string;
  time: string;
  unread?: number;
  status: "sent" | "delivered" | "read";
}

type MessageType = "text" | "file" | "video" | "audio" | "images";

interface Message {
  id: string;
  type: MessageType;
  content?: string;
  file?: { name: string; size: string };
  videoThumb?: string;
  videoDuration?: string;
  images?: string[];
  audioSrc?: string;
  time: string;
  from: "me" | "them";
  readStatus?: "sent" | "delivered" | "read";
}

/* ─── Mock Data ───────────────────────────────────────────── */

const contacts: Contact[] = [
  { id: "1", name: "Jacquenetta Slowgrave", avatar: "https://i.pravatar.cc/40?img=1", online: true, lastMessage: "Great! Looking forward to it. See you later!", time: "10 minutes", unread: 8, status: "sent" },
  { id: "2", name: "Nickola Peever", avatar: "https://i.pravatar.cc/40?img=2", online: true, lastMessage: "Sounds perfect! I've been wanting to try that place. See you there!", time: "40 minutes", unread: 2, status: "read" },
  { id: "3", name: "Farand Hume", initials: "FH", online: true, lastMessage: "How about 7 PM at the new Italian place downtown?", time: "Yesterday", status: "read" },
  { id: "4", name: "Ossie Peasey", avatar: "https://i.pravatar.cc/40?img=4", online: true, lastMessage: "Hey Bonnie, yes, definitely! What time should we meet?", time: "13 days", status: "sent" },
  { id: "5", name: "Hall Negri", avatar: "https://i.pravatar.cc/40?img=5", online: true, lastMessage: "No worries at all! I'll grab a table and wait for you. Drive safe!", time: "2 days", status: "delivered" },
  { id: "6", name: "Elyssa Segot", avatar: "https://i.pravatar.cc/40?img=6", online: true, lastMessage: "She just told me today.", time: "Yesterday", status: "read" },
  { id: "7", name: "Gil Wilfing", avatar: "https://i.pravatar.cc/40?img=7", online: true, lastMessage: "See you in 5 minutes!", time: "1 day", status: "sent" },
  { id: "8", name: "Bab Cleaton", avatar: "https://i.pravatar.cc/40?img=8", online: true, lastMessage: "If it takes long you can mail", time: "3 hours", status: "delivered" },
  { id: "9", name: "Janith Satch", avatar: "https://i.pravatar.cc/40?img=9", online: true, lastMessage: "Absolutely! It's amazing to see her so happy and passionate about it.", time: "1 day", unread: 2, status: "read" },
  { id: "10", name: "Biron Alison", avatar: "https://i.pravatar.cc/40?img=10", online: true, lastMessage: "Yeah, she mentioned it last week.", time: "1 day", status: "read" },
  { id: "11", name: "Baily Younie", avatar: "https://i.pravatar.cc/40?img=11", online: true, lastMessage: "Thanks, I appreciate it!", time: "Yesterday", unread: 2, status: "sent" },
  { id: "12", name: "Lawton Broadbury", avatar: "https://i.pravatar.cc/40?img=12", online: true, lastMessage: "Drive safe!", time: "1 hours", status: "read" },
  { id: "13", name: "Ealasaid Bohlje", initials: "EB", online: true, lastMessage: "I might be 10 minutes late. Sorry!", time: "10 days", status: "read" },
];

const PLACEHOLDER_IMGS = [
  "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=200&h=150&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=150&fit=crop",
  "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=200&h=150&fit=crop",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=150&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop",
  "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=200&h=150&fit=crop",
];

const initialMessages: Message[] = [
  { id: "m1", type: "text", content: "Sorry :( send you as soon as possible.", time: "05:23 PM", from: "me", readStatus: "read" },
  { id: "m2", type: "text", content: "I know how important this file is to you. You can trust me ;) I know how important this file is to you. You can trust me ;) know how important this file is to you. You can trust me ;)", time: "05:23 PM", from: "them" },
  { id: "m3", type: "file", file: { name: "resume.pdf", size: "10KB" }, time: "05:23 PM", from: "them" },
  { id: "m4", type: "text", content: "I know how important this file is to you. You can trust me ;) me ;)", time: "05:23 PM", from: "me", readStatus: "read" },
  { id: "m5", type: "text", content: "I know how important this file is to you. You can trust me ;) I know how important this file is to you. You can trust me ;) know how important this file is to you. You can trust me ;)", time: "05:23 PM", from: "them" },
  { id: "m6", type: "text", content: "I know how important this file is to you. You can trust me ;) I know how important this file is to you. You can trust me ;) know how important this file is to you. You can trust me ;)", time: "05:23 PM", from: "them" },
  { id: "m7", type: "text", content: "I know how important this file is to you. You can trust me ;) I know how important this file is to you. You can trust me ;) know how important this file is to you. You can trust me ;)", time: "05:23 PM", from: "me", readStatus: "read" },
  { id: "m8", type: "text", content: "I know how important this file is to you. You can trust me ;) I know how important this file is to you. You can trust me ;) know how important this file is to you. You can trust me ;)", time: "05:23 PM", from: "them" },
  { id: "m9", type: "video", videoThumb: PLACEHOLDER_IMGS[0], videoDuration: "2:42", time: "05:23 PM", from: "them" },
  { id: "m10", type: "file", file: { name: "important_documents.pdf", size: "50KB" }, time: "05:23 PM", from: "me", readStatus: "read" },
  { id: "m11", type: "audio", audioSrc: "", time: "05:23 PM", from: "me", readStatus: "read" },
  { id: "m12", type: "video", videoThumb: PLACEHOLDER_IMGS[1], videoDuration: "5:42", time: "05:23 PM", from: "me", readStatus: "read" },
  { id: "m13", type: "images", images: PLACEHOLDER_IMGS.slice(2), time: "05:23 PM", from: "me", readStatus: "read" },
];

/* ─── Sub-components ──────────────────────────────────────── */

function StatusIcon({ status, className }: { status: "sent" | "delivered" | "read"; className?: string }) {
  if (status === "sent") return <Check className={cn("h-4 w-4 text-muted-foreground", className)} />;
  if (status === "delivered") return <CheckCheck className={cn("h-4 w-4 text-muted-foreground", className)} />;
  return <CheckCheck className={cn("h-4 w-4 text-green-500", className)} />;
}

function OnlineDot() {
  return <div className="size-2 absolute rounded-full bg-green-400 end-0.5 bottom-0.5 ring-2 ring-background" />;
}

function ContactRow({
  contact,
  active,
  onClick,
}: {
  contact: Contact;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative flex min-w-0 cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/60",
        active && "bg-muted"
      )}
    >
      <div className="relative shrink-0">
        <Avatar className="size-10">
          {contact.avatar ? <AvatarImage src={contact.avatar} alt={contact.name} /> : null}
          <AvatarFallback className="text-xs font-medium">{contact.initials ?? contact.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        {contact.online && <OnlineDot />}
      </div>
      <div className="min-w-0 grow">
        <div className="flex items-center justify-between">
          <span className="truncate text-sm font-medium">{contact.name}</span>
          <span className="flex-none text-xs text-muted-foreground">{contact.time}</span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <StatusIcon status={contact.status} className="shrink-0" />
          <span className="truncate text-xs text-muted-foreground">{contact.lastMessage}</span>
          {contact.unread ? (
            <div className="ms-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-[11px] font-semibold text-white">
              {contact.unread}
            </div>
          ) : null}
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="absolute end-3 opacity-0 group-hover:opacity-100 size-8 rounded-full bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View profile</DropdownMenuItem>
          <DropdownMenuItem>Add to archive</DropdownMenuItem>
          <DropdownMenuItem>Block</DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isMe = message.from === "me";

  const bubble = (
    <div
      className={cn(
        "inline-flex max-w-sm rounded-xl border bg-muted p-4 text-sm leading-relaxed",
        isMe && "order-1"
      )}
    >
      {message.type === "text" && <span>{message.content}</span>}

      {message.type === "file" && (
        <div className="flex items-start gap-3">
          <FileText className="size-8 shrink-0 opacity-50 mt-0.5" strokeWidth={1.5} />
          <div className="flex flex-col gap-2">
            <div className="text-sm">
              {message.file!.name}
              <span className="text-muted-foreground ms-2 text-xs">({message.file!.size})</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
                <Download className="size-3" /> Download
              </Button>
              <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
                <Eye className="size-3" /> Preview
              </Button>
            </div>
          </div>
        </div>
      )}

      {message.type === "audio" && (
        <audio controls className="w-64 h-8">
          <source src={message.audioSrc} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );

  if (message.type === "video") {
    return (
      <div className={cn("flex max-w-sm", isMe ? "self-end" : "self-start")}>
        <div className="flex items-start gap-2">
          <div
            className={cn("relative flex aspect-video w-52 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-cover bg-center transition-opacity hover:opacity-90", isMe && "order-1")}
            style={{ backgroundImage: `url(${message.videoThumb})` }}
          >
            <div className="rounded-full bg-black/40 p-2">
              <Play className="size-6 text-white/90" fill="white" />
            </div>
            <div className="absolute end-2 top-2 text-xs font-semibold text-white/80 bg-black/30 rounded px-1">
              {message.videoDuration}
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8 rounded-full">
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Reply</DropdownMenuItem>
              <DropdownMenuItem>Forward</DropdownMenuItem>
              <DropdownMenuItem>Save</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    );
  }

  if (message.type === "images") {
    const imgs = message.images ?? [];
    return (
      <div className={cn("flex max-w-xs", isMe ? "self-end" : "self-start")}>
        <div className={cn("rounded-xl border bg-muted p-3", isMe && "order-1")}>
          <div className="grid grid-cols-2 gap-1.5">
            {imgs.slice(0, 4).map((src, i) => (
              <div key={i} className="relative cursor-pointer overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="aspect-video w-24 object-cover transition-opacity hover:opacity-90"
                />
                {i === 3 && imgs.length > 4 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-xl font-bold text-white">
                    +{imgs.length - 4}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-start">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8 rounded-full">
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Reply</DropdownMenuItem>
              <DropdownMenuItem>Forward</DropdownMenuItem>
              <DropdownMenuItem>Save all</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex max-w-sm items-start gap-2", isMe ? "self-end" : "self-start")}>
      {bubble}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className={cn("size-8 rounded-full", isMe ? "" : "order-2")}>
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Reply</DropdownMenuItem>
          <DropdownMenuItem>Forward</DropdownMenuItem>
          <DropdownMenuItem>Copy</DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function MessageGroup({ message }: { message: Message }) {
  const isMe = message.from === "me";
  return (
    <div className={cn("flex flex-col gap-1", isMe ? "items-end" : "items-start")}>
      <MessageBubble message={message} />
      <div className={cn("flex items-center gap-1 text-xs text-muted-foreground px-1", isMe && "flex-row-reverse")}>
        <span>{message.time}</span>
        {isMe && message.readStatus && <StatusIcon status={message.readStatus} />}
      </div>
    </div>
  );
}

/* ─── Empty State ─────────────────────────────────────────── */
function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-muted-foreground">
      <div className="rounded-full bg-muted p-6">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      <div className="text-center">
        <p className="font-medium">Select a conversation</p>
        <p className="text-sm">Choose from your existing chats or start a new one</p>
      </div>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────── */

export default function SalesAgent() {
  const [activeContact, setActiveContact] = useState<Contact | null>(null);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [showCall, setShowCall] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeContact]);

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  function sendMessage() {
    if (!input.trim()) return;
    const msg: Message = {
      id: `msg-${Date.now()}`,
      type: "text",
      content: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      from: "me",
      readStatus: "sent",
    };
    setMessages((prev) => [...prev, msg]);
    setInput("");
  }

  return (
    <div className="flex h-screen w-full bg-background font-sans antialiased">
      {/* ── Sidebar ── */}
      <aside className="flex w-80 shrink-0 flex-col border-r">
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <h1 className="text-xl font-bold tracking-tight">Chats</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="size-8 rounded-full">
                <Plus className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>New chat</DropdownMenuItem>
              <DropdownMenuItem>Create group</DropdownMenuItem>
              <DropdownMenuItem>Add contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Chats search..."
              className="ps-9 h-9 rounded-full bg-muted/50 border-0 focus-visible:ring-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="divide-y">
            {filtered.map((contact) => (
              <ContactRow
                key={contact.id}
                contact={contact}
                active={activeContact?.id === contact.id}
                onClick={() => setActiveContact(contact)}
              />
            ))}
          </div>
        </ScrollArea>
      </aside>

      {/* ── Chat Panel ── */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {activeContact ? (
          <>
            {/* Header */}
            <header className="flex items-center justify-between border-b px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="size-9">
                    {activeContact.avatar ? (
                      <AvatarImage src={activeContact.avatar} alt={activeContact.name} />
                    ) : null}
                    <AvatarFallback className="text-xs">
                      {activeContact.initials ?? activeContact.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {activeContact.online && <OnlineDot />}
                </div>
                <div>
                  <p className="text-sm font-semibold">{activeContact.name}</p>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Button variant="outline" size="icon" className="size-9 rounded-md">
                  <Video className="size-4" />
                </Button>
                <Button variant="outline" size="icon" className="size-9 rounded-md" onClick={() => setShowCall(true)}>
                  <Phone className="size-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-9 rounded-md">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View profile</DropdownMenuItem>
                    <DropdownMenuItem>Add to archive</DropdownMenuItem>
                    <DropdownMenuItem>Block</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>

            {/* Messages */}
            <ScrollArea className="flex-1 px-5 py-6">
              <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                  <MessageGroup key={msg.id} message={msg} />
                ))}
                <div ref={bottomRef} />
              </div>
            </ScrollArea>

            {/* Input bar */}
            <div className="border-t px-4 py-3">
              <div className="relative flex items-center rounded-xl border bg-muted/40">
                <Input
                  placeholder="Enter message..."
                  className="h-12 border-0 bg-transparent pe-36 ps-4 text-sm shadow-none focus-visible:ring-0"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <div className="absolute end-3 flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="size-8 rounded-full">
                    <Smile className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8 rounded-full">
                    <Paperclip className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8 rounded-full">
                    <Mic className="size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ms-1 h-8 px-3 gap-1.5"
                    onClick={sendMessage}
                  >
                    Send <Send className="size-3" />
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </main>

      {/* ── Incoming Call Dialog ── */}
      <Dialog open={showCall} onOpenChange={setShowCall}>
        <DialogContent className="max-w-xs rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <Avatar className="size-14">
              <AvatarImage src="https://i.pravatar.cc/60?img=47" />
              <AvatarFallback>JN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Jennica calling ...</p>
              <p className="text-xs text-muted-foreground animate-pulse">Incoming call</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ms-auto size-7 rounded-full"
              onClick={() => setShowCall(false)}
            >
              <X className="size-4" />
            </Button>
          </div>
          <div className="mt-4 flex justify-center gap-6">
            <Button
              size="icon"
              className="size-12 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-md"
              onClick={() => setShowCall(false)}
            >
              <X className="size-5" />
            </Button>
            <Button
              size="icon"
              className="size-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-md"
              onClick={() => setShowCall(false)}
            >
              <Phone className="size-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}