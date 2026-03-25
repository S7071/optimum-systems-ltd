"use client";

import * as React from "react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  Archive,
  ArchiveX,
  Clock,
  File,
  Forward,
  Inbox,
  Reply,
  ReplyAll,
  Search,
  Send,
  Trash2,
  MoreVertical,
  ChevronDown,
  Bell,
  Settings,
  LogOut,
  User,
} from "lucide-react";

/* ─────────────────────────── GLOBAL STYLES ─────────────────────────────── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

  :root {
    --brand-navy: #0f2544;
    --brand-navy-mid: #1a3a6b;
    --brand-navy-light: #254d8f;
    --brand-red: #d9281a;
    --brand-red-hover: #b91c11;
    --brand-red-soft: rgba(217,40,26,0.10);
  }

  * { font-family: 'DM Sans', sans-serif; }
  .font-mono { font-family: 'DM Mono', monospace; }

  /* ── Sidebar nav item ── */
  .nav-item {
    position: relative;
    overflow: hidden;
    transition: background 0.18s ease, color 0.18s ease;
  }
  .nav-item::before {
    content: '';
    position: absolute;
    left: 0; top: 50%;
    transform: translateY(-50%) scaleY(0);
    width: 3px; height: 70%;
    background: var(--brand-red);
    border-radius: 0 3px 3px 0;
    transition: transform 0.18s ease;
  }
  .nav-item.active::before { transform: translateY(-50%) scaleY(1); }
  .nav-item:hover::before  { transform: translateY(-50%) scaleY(0.6); }

  /* ── Email card ── */
  .email-card {
    transition: transform 0.14s ease, box-shadow 0.14s ease, background 0.14s ease;
  }
  .email-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(15,37,68,0.08);
  }
  .email-card.selected {
    background: rgba(15,37,68,0.05);
    border-color: rgba(15,37,68,0.2);
  }

  /* ── Send button pulse ── */
  @keyframes btn-pulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(217,40,26,0.35); }
    50%      { box-shadow: 0 0 0 6px rgba(217,40,26,0); }
  }
  .send-btn:focus { animation: btn-pulse 1.4s ease infinite; }

  /* ── Slide-in for email detail ── */
  @keyframes slide-in {
    from { opacity: 0; transform: translateX(12px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  .detail-panel { animation: slide-in 0.22s ease forwards; }

  /* ── Unread dot pulse ── */
  @keyframes dot-pulse {
    0%,100% { opacity: 1; }
    50%      { opacity: 0.4; }
  }
  .unread-dot { animation: dot-pulse 2.2s ease-in-out infinite; }

  /* ── Toolbar icon hover ── */
  .tool-btn {
    transition: background 0.14s ease, color 0.14s ease, transform 0.14s ease;
  }
  .tool-btn:hover { transform: scale(1.08); }

  /* ── Custom scrollbar ── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(15,37,68,0.15); border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(15,37,68,0.28); }
`;

/* ─────────────────────────── TYPES ─────────────────────────────────────── */
type TagVariant = "default" | "secondary" | "outline";
type Tag = { label: string; variant: TagVariant };

type Email = {
  id: string;
  from: string;
  initials: string;
  subject: string;
  preview: string;
  date: string;
  tags: Tag[];
  unread?: boolean;
  body: string;
  replyTo: string;
};

/* ─────────────────────────── DATA ──────────────────────────────────────── */
const emails: Email[] = [
  {
    id: "1", from: "William Smith", initials: "WS",
    subject: "Meeting Tomorrow",
    preview: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share.",
    date: "over 2 years ago",
    tags: [{ label: "meeting", variant: "secondary" }, { label: "work", variant: "default" }, { label: "important", variant: "secondary" }],
    body: "Hi,\n\nLet's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have.\n\nLooking forward to seeing you all tomorrow!\n\nBest,\nWilliam",
    replyTo: "williamsmith@example.com",
  },
  {
    id: "2", from: "Alice Smith", initials: "AS",
    subject: "Re: Project Update",
    preview: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive.",
    date: "over 2 years ago",
    tags: [{ label: "work", variant: "default" }, { label: "important", variant: "secondary" }],
    body: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards,\nAlice",
    replyTo: "alicesmith@example.com",
  },
  {
    id: "3", from: "Bob Johnson", initials: "BJ",
    subject: "Weekend Plans",
    preview: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.",
    date: "almost 3 years ago",
    tags: [{ label: "personal", variant: "outline" }],
    body: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest,\nBob",
    replyTo: "bobjohnson@example.com",
  },
  {
    id: "4", from: "Emily Davis", initials: "ED",
    subject: "Re: Question about Budget",
    preview: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.",
    date: "almost 3 years ago",
    tags: [{ label: "work", variant: "default" }, { label: "budget", variant: "secondary" }],
    unread: true,
    body: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your review.\n\nBest,\nEmily",
    replyTo: "emilydavis@example.com",
  },
  {
    id: "5", from: "Michael Wilson", initials: "MW",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our product launch approach.",
    date: "about 3 years ago",
    tags: [{ label: "meeting", variant: "secondary" }, { label: "work", variant: "default" }, { label: "important", variant: "secondary" }],
    unread: true,
    body: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch.\n\nWe've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nPlease be prepared to discuss this during our meeting.\n\nBest,\nMichael",
    replyTo: "michaelwilson@example.com",
  },
  {
    id: "6", from: "Sarah Brown", initials: "SB",
    subject: "Re: Feedback on Proposal",
    preview: "Thank you for your feedback on the proposal. I'm pleased to hear that you found it promising. The team worked diligently.",
    date: "about 3 years ago",
    tags: [{ label: "work", variant: "default" }],
    body: "Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised.\n\nI've attached the revised proposal for your review. Please let me know if you have any further comments.\n\nBest,\nSarah",
    replyTo: "sarahbrown@example.com",
  },
  {
    id: "7", from: "David Lee", initials: "DL",
    subject: "New Project Idea",
    preview: "I have an exciting new project idea involving expanding our services to a niche market with considerable recent growth.",
    date: "about 3 years ago",
    tags: [{ label: "meeting", variant: "secondary" }, { label: "work", variant: "default" }, { label: "important", variant: "secondary" }],
    unread: true,
    body: "I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.\n\nI've prepared a detailed proposal outlining the potential benefits and the strategy for execution.\n\nThis project has the potential to significantly increase our revenue and market share.\n\nBest,\nDavid",
    replyTo: "davidlee@example.com",
  },
  {
    id: "8", from: "Olivia Wilson", initials: "OW",
    subject: "Vacation Plans",
    preview: "Let's plan our vacation for next month. I've been thinking of visiting a tropical paradise and put together some options.",
    date: "over 3 years ago",
    tags: [{ label: "personal", variant: "outline" }],
    body: "Let's plan our vacation for next month. What do you think? I've been thinking of visiting a tropical paradise, and I've put together some destination options.\n\nI believe it's time for us to unwind and recharge. Please take a look at the options and let me know your preferences.\n\nBest,\nOlivia",
    replyTo: "oliviawilson@example.com",
  },
  {
    id: "9", from: "James Martin", initials: "JM",
    subject: "Re: Conference Registration",
    preview: "I've completed the registration for the conference next month. It promises to be a great networking opportunity.",
    date: "over 3 years ago",
    tags: [{ label: "work", variant: "default" }, { label: "conference", variant: "secondary" }],
    body: "I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.\n\nI've also attached the conference schedule for your reference.\n\nBest,\nJames",
    replyTo: "jamesmartin@example.com",
  },
  {
    id: "10", from: "Sophia White", initials: "SW",
    subject: "Team Dinner",
    preview: "Let's have a team dinner next week to celebrate our success. We've achieved some significant milestones worth acknowledging.",
    date: "over 3 years ago",
    tags: [{ label: "meeting", variant: "secondary" }, { label: "work", variant: "default" }],
    unread: true,
    body: "Let's have a team dinner next week to celebrate our success. We've achieved some significant milestones, and it's time to acknowledge our hard work and dedication.\n\nI've made reservations at a lovely restaurant, and I'm sure it'll be an enjoyable evening.\n\nPlease confirm your availability and any dietary preferences.\n\nBest,\nSophia",
    replyTo: "sophiawhite@example.com",
  },
  {
    id: "11", from: "Daniel Johnson", initials: "DJ",
    subject: "Feedback Request",
    preview: "I'd like your feedback on the latest project deliverables. We've made significant progress and I value your input.",
    date: "over 3 years ago",
    tags: [{ label: "work", variant: "default" }],
    unread: true,
    body: "I'd like your feedback on the latest project deliverables. We've made significant progress, and I value your input to ensure we're on the right track.\n\nI've attached the deliverables for your review, and I'm particularly interested in any areas where you think we can further enhance the quality.\n\nThank you in advance.\n\nBest,\nDaniel",
    replyTo: "danieljohnson@example.com",
  },
];

const navItems = [
  { icon: Inbox,   label: "Inbox",   badge: 128, badgeVariant: "default"  as const },
  { icon: File,    label: "Drafts",  badge: 9,   badgeVariant: "outline"  as const },
  { icon: Send,    label: "Sent",    badge: null, badgeVariant: null },
  { icon: ArchiveX,label: "Junk",   badge: 23,  badgeVariant: "outline"  as const },
  { icon: Trash2,  label: "Trash",   badge: null, badgeVariant: null },
  { icon: Archive, label: "Archive", badge: null, badgeVariant: null },
];

const categories = [
  { color: "bg-indigo-400", label: "Social",     badge: 972 },
  { color: "bg-teal-400",   label: "Updates",    badge: 342 },
  { color: "bg-orange-400", label: "Forums",     badge: 128 },
  { color: "bg-lime-400",   label: "Shopping",   badge: 8   },
  { color: "bg-pink-400",   label: "Promotions", badge: 21  },
];

/* ─────────────────────────── AVATAR ────────────────────────────────────── */
function Avatar({ initials, size = "md" }: { initials: string; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "size-7 text-xs", md: "size-9 text-sm", lg: "size-11 text-base" };
  // Give each user a deterministic color based on their initials
  const colors = [
    "bg-blue-900 text-blue-100",
    "bg-slate-700 text-slate-100",
    "bg-indigo-800 text-indigo-100",
    "bg-navy text-white",
  ];
  const idx = (initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % colors.length;
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-semibold select-none",
        "bg-[#1a3a6b] text-white",
        sizes[size]
      )}
    >
      {initials}
    </span>
  );
}

/* ─────────────────────────── TAG BADGE ─────────────────────────────────── */
function TagBadge({ tag }: { tag: Tag }) {
  if (tag.variant === "default") {
    return (
      <span className="inline-flex items-center rounded-full bg-[#0f2544] px-2 py-0.5 text-[10px] font-semibold text-white tracking-wide">
        {tag.label}
      </span>
    );
  }
  if (tag.variant === "secondary") {
    return (
      <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 border border-slate-200">
        {tag.label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-slate-300 px-2 py-0.5 text-[10px] font-medium text-slate-500">
      {tag.label}
    </span>
  );
}

/* ─────────────────────────── EMAIL CARD ────────────────────────────────── */
function EmailCard({ email, isSelected, onClick }: { email: Email; isSelected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "email-card w-full flex flex-col items-start gap-2 rounded-xl border p-3.5 text-left text-sm",
        isSelected
          ? "selected border-[#0f2544]/20 bg-[#0f2544]/[0.05] shadow-sm"
          : "border-slate-200/80 bg-white hover:border-slate-300"
      )}
    >
      <div className="flex w-full items-center gap-2">
        <span className="font-semibold text-slate-800 text-[13px]">{email.from}</span>
        {email.unread && (
          <span className="unread-dot flex size-2 rounded-full bg-[#d9281a] shrink-0" />
        )}
        <span className={cn(
          "ml-auto text-[11px] font-medium shrink-0",
          isSelected ? "text-[#0f2544]/70" : "text-slate-400"
        )}>
          {email.date}
        </span>
      </div>
      <div className="text-xs font-semibold text-slate-700">{email.subject}</div>
      <div className="line-clamp-2 text-[11.5px] text-slate-500 leading-relaxed">{email.preview}</div>
      {email.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          {email.tags.map((t) => <TagBadge key={t.label} tag={t} />)}
        </div>
      )}
    </button>
  );
}

/* ─────────────────────────── TOOL BUTTON ───────────────────────────────── */
function ToolBtn({ icon: Icon, label, onClick }: { icon: React.ElementType; label: string; onClick?: () => void }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className="tool-btn flex size-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-[#0f2544]"
          aria-label={label}
        >
          <Icon className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-xs">{label}</TooltipContent>
    </Tooltip>
  );
}

/* ─────────────────────────── MAIN ──────────────────────────────────────── */
export default function OptimumMailApp() {
  const [selected, setSelected] = useState<Email>(emails[1]);
  const [detailKey, setDetailKey] = useState(emails[1].id);
  const [activeNav, setActiveNav] = useState("Inbox");
  const [replyText, setReplyText] = useState("");
  const [muted, setMuted] = useState(false);
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");

  function handleSelect(email: Email) {
    setSelected(email);
    setDetailKey(email.id); // re-trigger slide-in animation
    setReplyText("");
  }

  const filtered = emails.filter((e) => {
    if (tab === "unread" && !e.unread) return false;
    if (search) {
      const q = search.toLowerCase();
      return e.from.toLowerCase().includes(q) || e.subject.toLowerCase().includes(q);
    }
    return true;
  });

  const unreadCount = emails.filter(e => e.unread).length;

  return (
    <>
      <style>{globalStyles}</style>
      <TooltipProvider delayDuration={100}>
        <div className="h-screen flex flex-col overflow-hidden bg-slate-50 max-h-[92vh] overflow-y-auto overflow-clip">

          {/* ══════════════════════ TOP BAR ══════════════════════ */}
          <header className="flex h-12 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 shadow-[0_1px_3px_rgba(15,37,68,0.06)]">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex size-7 items-center justify-center rounded-md bg-[#0f2544]">
                <span className="text-[10px] font-bold text-white tracking-tight">OE</span>
              </div>
              <span className="text-[13px] font-bold text-[#0f2544] tracking-tight">
                Optimum Mail
              </span>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-1.5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="relative flex size-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                    <Bell className="size-4" />
                    <span className="absolute top-1.5 right-1.5 flex size-1.5 rounded-full bg-[#d9281a]" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Notifications</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex size-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                    <Settings className="size-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Settings</TooltipContent>
              </Tooltip>

              <div className="ml-1 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 cursor-pointer hover:border-slate-300 transition-colors">
                <Avatar initials="AK" size="sm" />
                <span className="text-xs font-medium text-slate-700">Alicia Koch</span>
                <ChevronDown className="size-3 text-slate-400" />
              </div>
            </div>
          </header>

          {/* ══════════════════════ BODY ══════════════════════════ */}
          <div className="flex flex-1 overflow-hidden">
            <ResizablePanelGroup className="h-full">

              {/* ── SIDEBAR ── */}
              <ResizablePanel defaultSize={300} minSize={300} maxSize={300}>
                <div className="flex h-full flex-col bg-[#0f2544]">

                  {/* Compose button */}
                  <div className="px-4 py-4">
                    <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#d9281a] px-3 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#d9281a]/30 hover:bg-[#b91c11] transition-all active:scale-[0.98]">
                      <span className="text-base leading-none">+</span>
                      Compose
                    </button>
                  </div>

                  {/* Primary nav */}
                  <nav className="flex flex-col gap-0.5 px-3 pb-2">
                    {navItems.map(({ icon: Icon, label, badge, badgeVariant }) => {
                      const isActive = activeNav === label;
                      return (
                        <button
                          key={label}
                          onClick={() => setActiveNav(label)}
                          className={cn(
                            "nav-item flex h-9 w-full items-center gap-3 rounded-lg pl-4 pr-3 text-[12.5px] font-medium transition-all",
                            isActive
                              ? "active bg-white/10 text-white"
                              : "text-white/60 hover:bg-white/8 hover:text-white/90"
                          )}
                        >
                          <Icon className={cn("size-4 shrink-0", isActive ? "text-white" : "text-white/50")} />
                          <span className="flex-1 text-left">{label}</span>
                          {badge !== null && (
                            <span className={cn(
                              "inline-flex min-w-[20px] items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                              isActive
                                ? "bg-[#d9281a] text-white"
                                : "bg-white/15 text-white/70"
                            )}>
                              {badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </nav>

                  {/* Divider */}
                  <div className="mx-4 my-1 border-t border-white/10" />

                  {/* Categories */}
                  <div className="px-4 pt-3 pb-1">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                      Categories
                    </p>
                    <nav className="flex flex-col gap-0.5">
                      {categories.map(({ color, label, badge }) => (
                        <button
                          key={label}
                          className="nav-item flex h-8 w-full items-center gap-3 rounded-lg px-1 text-[12px] font-medium text-white/60 hover:bg-white/8 hover:text-white/90 transition-all"
                        >
                          <span className={cn("size-2 shrink-0 rounded-full", color)} />
                          <span className="flex-1 text-left">{label}</span>
                          <span className="text-[10px] font-semibold text-white/35">{badge}</span>
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Bottom logout */}
                  <div className="mt-auto border-t border-white/10 px-4 py-3">
                    <button className="flex w-full items-center gap-3 rounded-lg px-1 py-1.5 text-[12px] font-medium text-white/40 hover:text-white/70 transition-colors">
                      <LogOut className="size-3.5" />
                      Sign out
                    </button>
                  </div>
                </div>
              </ResizablePanel>

              <ResizableHandle className="bg-transparent w-0" />

              {/* ── EMAIL LIST ── */}
              <ResizablePanel defaultSize={350} minSize={350} maxSize={350}>
                <div className="flex h-full flex-col border-r border-slate-200 bg-slate-50">

                  {/* Header */}
                  <div className="flex items-center gap-3 px-5 py-3.5">
                    <div>
                      <h1 className="text-[17px] font-bold text-[#0f2544] tracking-tight">Inbox</h1>
                      <p className="text-[11px] text-slate-400 font-medium">{unreadCount} unread messages</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm">
                      <button
                        onClick={() => setTab("all")}
                        className={cn(
                          "rounded-md px-3 py-1 text-[11px] font-semibold transition-all",
                          tab === "all"
                            ? "bg-[#0f2544] text-white shadow-sm"
                            : "text-slate-500 hover:text-slate-700"
                        )}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setTab("unread")}
                        className={cn(
                          "rounded-md px-3 py-1 text-[11px] font-semibold transition-all",
                          tab === "unread"
                            ? "bg-[#0f2544] text-white shadow-sm"
                            : "text-slate-500 hover:text-slate-700"
                        )}
                      >
                        Unread
                      </button>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="px-4 pb-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-400" />
                      <input
                        placeholder="Search messages…"
                        className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-4 py-2 text-[12.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#0f2544]/10 transition-all"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* List */}
                  <ScrollArea className="flex-1">
                    <div className="flex flex-col gap-2 px-4 pb-4">
                      {filtered.map((email) => (
                        <EmailCard
                          key={email.id}
                          email={email}
                          isSelected={selected.id === email.id}
                          onClick={() => handleSelect(email)}
                        />
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </ResizablePanel>

              <ResizableHandle className="bg-slate-200 w-px" />

              {/* ── EMAIL DETAIL ── */}
              <ResizablePanel defaultSize={400}>
                <div key={detailKey} className="detail-panel flex h-full flex-col bg-white">

                  {/* Toolbar */}
                  <div className="flex h-12 items-center gap-1 border-b border-slate-100 px-4">
                    <div className="flex items-center gap-0.5">
                      <ToolBtn icon={Archive}  label="Archive" />
                      <ToolBtn icon={ArchiveX} label="Move to junk" />
                      <ToolBtn icon={Trash2}   label="Delete" />
                    </div>

                    <div className="mx-2 h-5 w-px bg-slate-200" />

                    <ToolBtn icon={Clock} label="Snooze" />

                    <div className="ml-auto flex items-center gap-0.5">
                      <ToolBtn icon={Reply}    label="Reply" />
                      <ToolBtn icon={ReplyAll} label="Reply all" />
                      <ToolBtn icon={Forward}  label="Forward" />
                    </div>

                    <div className="mx-2 h-5 w-px bg-slate-200" />

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="tool-btn flex size-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-[#0f2544]">
                          <MoreVertical className="size-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="text-sm">
                        <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                        <DropdownMenuItem>Star thread</DropdownMenuItem>
                        <DropdownMenuItem>Add label</DropdownMenuItem>
                        <DropdownMenuItem>Mute thread</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Sender block */}
                  <div className="flex items-start gap-4 px-7 py-5">
                    <Avatar initials={selected.initials} size="lg" />
                    <div className="flex flex-1 flex-col gap-0.5">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[15px] font-bold text-[#0f2544]">{selected.from}</span>
                        <span className="text-[11px] font-medium text-slate-400">Oct 22, 2023 · 10:30 AM</span>
                      </div>
                      <span className="text-[12.5px] font-semibold text-slate-700">{selected.subject}</span>
                      <span className="text-[11.5px] text-slate-400">
                        <span className="font-medium text-slate-500">Reply-To:</span> {selected.replyTo}
                      </span>
                    </div>
                  </div>

                  <div className="mx-7 border-t border-slate-100" />

                  {/* Body */}
                  <ScrollArea className="flex-1">
                    <div className="px-7 py-6 text-[13.5px] leading-relaxed text-slate-700 whitespace-pre-wrap">
                      {selected.body}
                    </div>
                  </ScrollArea>

                  {/* Reply composer */}
                  <div className="border-t border-slate-100 bg-slate-50/80 px-7 py-4">
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden focus-within:border-[#1a3a6b] focus-within:ring-2 focus-within:ring-[#0f2544]/8 transition-all">
                      <textarea
                        className="w-full resize-none px-4 pt-3.5 pb-2 text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none bg-transparent min-h-[80px]"
                        placeholder={`Reply to ${selected.from}…`}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      />
                      <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2.5 bg-slate-50/60">
                        <label className="flex cursor-pointer items-center gap-2 text-[11.5px] font-medium text-slate-500 select-none">
                          <Switch
                            checked={muted}
                            onCheckedChange={setMuted}
                            className="data-[state=checked]:bg-[#0f2544] scale-75"
                          />
                          Mute this thread
                        </label>
                        <button
                          className="send-btn flex items-center gap-2 rounded-lg bg-[#d9281a] px-5 py-2 text-[12.5px] font-bold text-white shadow-md shadow-[#d9281a]/25 hover:bg-[#b91c11] active:scale-[0.97] transition-all"
                        >
                          <Send className="size-3.5" />
                          Send
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </ResizablePanel>

            </ResizablePanelGroup>
          </div>
        </div>
      </TooltipProvider>
    </>
  );
}