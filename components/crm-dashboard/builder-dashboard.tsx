"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlignLeft,
  Quote,
  Image as ImageIcon,
  Code,
  Heading,
  List,
  GripVertical,
  Plus,
  X,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  RefreshCw,
  Menu,
  Link2,
  ExternalLink,
  Trash2,
  Copy,
  Pencil,
  Check,
  Globe,
  Eye,
  GitBranch,
  Terminal,
  RotateCcw,
  Clock,
  ArrowLeft,
  Zap,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SiteNavbar from "../optimum-systems/layout01/site-navbar";

// ─── Brand tokens ────────────────────────────────────────────────────────────
// Navy blue:  #0f2557   Action red: #d91f2a
// Light blue: #e8edf7   Light red:  #fef2f2

// ─── Types ───────────────────────────────────────────────────────────────────

type BlockType = "paragraph" | "quote" | "heading" | "image" | "code" | "list";
type PublishStatus = "draft" | "published" | "scheduled";
type ActiveTab = "edit" | "preview" | "versions" | "api";
type ContentTab = "content" | "settings" | "seo";

interface Category {
  id: string;
  label: string;
}

interface ContentBlock {
  id: string;
  type: BlockType;
  content: string;
  meta?: Record<string, string>;
  collapsed?: boolean;
}

interface PostData {
  title: string;
  featuredImage: {
    name: string;
    size: string;
    dims: string;
    url: string;
  } | null;
  categories: Category[];
  blocks: ContentBlock[];
  slug: string;
  metaTitle: string;
  metaDescription: string;
  author: string;
}

interface Version {
  id: string;
  label: string;
  author: string;
  avatar: string;
  timestamp: string;
  relativeTime: string;
  status: PublishStatus;
  isCurrent?: boolean;
  changes: string[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

const BLOCK_TYPES: {
  type: BlockType;
  label: string;
  icon: React.ElementType;
  description: string;
}[] = [
  {
    type: "paragraph",
    label: "Paragraph",
    icon: AlignLeft,
    description: "Plain text block",
  },
  {
    type: "heading",
    label: "Heading",
    icon: Heading,
    description: "Section heading",
  },
  {
    type: "quote",
    label: "Quote Block",
    icon: Quote,
    description: "Pull quote or blockquote",
  },
  {
    type: "image",
    label: "Image",
    icon: ImageIcon,
    description: "Embedded image",
  },
  { type: "code", label: "Code", icon: Code, description: "Code snippet" },
  {
    type: "list",
    label: "List",
    icon: List,
    description: "Bullet or numbered list",
  },
];

const CATEGORY_OPTIONS: Category[] = [
  { id: "space", label: "Space" },
  { id: "technology", label: "Technology" },
  { id: "science", label: "Science" },
  { id: "montoya", label: "Carlos Montoya" },
  { id: "engineering", label: "Engineering" },
];

const MOCK_VERSIONS: Version[] = [
  {
    id: "v24",
    label: "Version 24",
    author: "Carlos Montoya",
    avatar: "https://picsum.photos/seed/carlos/40/40",
    timestamp: "July 13th 2024, 9:55 AM",
    relativeTime: "2 minutes ago",
    status: "draft",
    isCurrent: true,
    changes: ["Updated featured image", "Edited intro paragraph"],
  },
  {
    id: "v23",
    label: "Version 23",
    author: "Carlos Montoya",
    avatar: "https://picsum.photos/seed/carlos/40/40",
    timestamp: "July 13th 2024, 9:41 AM",
    relativeTime: "16 minutes ago",
    status: "draft",
    changes: ["Added 'Reusability' heading block", "Expanded paragraph 3"],
  },
  {
    id: "v22",
    label: "Version 22",
    author: "Sarah Kim",
    avatar: "https://picsum.photos/seed/sarah/40/40",
    timestamp: "July 12th 2024, 4:18 PM",
    relativeTime: "Yesterday",
    status: "draft",
    changes: ["SEO meta description updated", "Slug adjusted"],
  },
  {
    id: "v21",
    label: "Version 21",
    author: "Sarah Kim",
    avatar: "https://picsum.photos/seed/sarah/40/40",
    timestamp: "July 11th 2024, 11:03 AM",
    relativeTime: "2 days ago",
    status: "published",
    changes: ["Published to production"],
  },
  {
    id: "v20",
    label: "Version 20",
    author: "Marcus Webb",
    avatar: "https://picsum.photos/seed/marcus/40/40",
    timestamp: "July 10th 2024, 3:27 PM",
    relativeTime: "3 days ago",
    status: "draft",
    changes: ["Added quote block", "Minor copy edits"],
  },
  {
    id: "v19",
    label: "Version 19",
    author: "Carlos Montoya",
    avatar: "https://picsum.photos/seed/carlos/40/40",
    timestamp: "July 8th 2024, 10:55 AM",
    relativeTime: "5 days ago",
    status: "draft",
    changes: [
      "Initial content draft",
      "Set featured image",
      "Added categories",
    ],
  },
  {
    id: "v1",
    label: "Version 1",
    author: "Carlos Montoya",
    avatar: "https://picsum.photos/seed/carlos/40/40",
    timestamp: "October 17th 2023, 2:47 PM",
    relativeTime: "Oct 2023",
    status: "draft",
    changes: ["Post created"],
  },
];

const INITIAL_POST: PostData = {
  title: "Breaking the Barrier: The Future of Launch Technology",
  featuredImage: {
    name: "launch-blog-featured-image",
    size: "80KB",
    dims: "1920×1080",
    url: "https://picsum.photos/1920/1080?random=42",
  },
  categories: [{ id: "montoya", label: "Carlos Montoya" }],
  author: "Carlos Montoya",
  slug: "breaking-the-barrier-future-launch-technology",
  metaTitle: "Breaking the Barrier: The Future of Launch Technology",
  metaDescription:
    "Explore the groundbreaking technologies and innovative launch systems that are pushing the boundaries of what's possible in space exploration.",
  blocks: [
    {
      id: "b1",
      type: "paragraph",
      content:
        "As humanity sets its sights on deeper space exploration, overcoming Earth's gravity remains one of the biggest engineering challenges. In this article, we explore the groundbreaking technologies and innovative launch systems that are pushing the boundaries of what's possible.",
    },
    {
      id: "b2",
      type: "quote",
      content:
        "Escaping Earth's gravitational pull is one of the most energy-intensive parts of any mission. New technologies are essential to make space travel accessible to all.",
      collapsed: false,
    },
    {
      id: "b3",
      type: "paragraph",
      content:
        "Modern rocket propulsion has evolved dramatically over the past decade. Reusable launch vehicles have slashed costs, while new propellants and engine designs promise even greater efficiency in the coming years.",
    },
    { id: "b4", type: "heading", content: "Reusability: The Game Changer" },
    {
      id: "b5",
      type: "paragraph",
      content:
        "The introduction of reusable first-stage boosters marked a paradigm shift. By recovering and refurbishing rocket components, launch providers have dramatically reduced per-kilogram costs to orbit.",
    },
  ],
};

// ─── Micro helpers ────────────────────────────────────────────────────────────

function BlockIcon({
  type,
  className,
}: {
  type: BlockType;
  className?: string;
}) {
  const found = BLOCK_TYPES.find((b) => b.type === type);
  if (!found) return null;
  const Icon = found.icon;
  return <Icon className={cn("h-3.5 w-3.5", className)} />;
}

function BlockLabel({ type }: { type: BlockType }) {
  return <span>{BLOCK_TYPES.find((b) => b.type === type)?.label ?? type}</span>;
}

function PublishBadge({ status }: { status: PublishStatus }) {
  return (
    <span
      className={cn(
        "text-xs font-semibold tracking-wide",
        status === "published" && "text-emerald-600",
        status === "draft" && "text-amber-500",
        status === "scheduled" && "text-sky-600",
      )}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function StatusDot({
  status,
  size = "sm",
}: {
  status: PublishStatus;
  size?: "sm" | "md";
}) {
  const sz = size === "md" ? "h-2 w-2" : "h-1.5 w-1.5";
  return (
    <span
      className={cn(
        "inline-block rounded-full shrink-0",
        sz,
        status === "published" && "bg-emerald-500",
        status === "draft" && "bg-amber-400",
        status === "scheduled" && "bg-sky-500",
      )}
    />
  );
}

// ─── Live Preview ─────────────────────────────────────────────────────────────

function LivePreview({ post, showNav }: { post: PostData; showNav: boolean }) {
  return (
    <div className="h-full bg-white overflow-y-auto text-gray-900">
      {showNav && <SiteNavbar />}
      <div className="px-8 pt-10 pb-10 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold leading-snug text-[#0f2557] mb-5 text-center tracking-tight">
          {post.title || "Untitled Post"}
        </h1>
        {post.featuredImage && (
          <div className="rounded-xl overflow-hidden mb-6 shadow-md ring-1 ring-gray-100">
            <img
              src={post.featuredImage.url}
              alt={post.featuredImage.name}
              className="w-full object-cover max-h-72"
            />
          </div>
        )}
        <p className="text-center text-xs text-gray-400 mb-8 font-medium">
          Written by {post.author}
        </p>
        <div className="space-y-5">
          {post.blocks.map((block) => {
            if (block.type === "paragraph")
              return (
                <p
                  key={block.id}
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  {block.content}
                </p>
              );
            if (block.type === "heading")
              return (
                <h2
                  key={block.id}
                  className="text-lg font-bold text-[#0f2557] mt-7 mb-2 border-b border-[#e8edf7] pb-2"
                >
                  {block.content}
                </h2>
              );
            if (block.type === "quote")
              return (
                <blockquote
                  key={block.id}
                  className="relative bg-[#e8edf7] border-l-4 border-[#d91f2a] rounded-r-xl pl-6 pr-5 py-4"
                >
                  <span className="absolute -top-1 left-3 text-3xl text-[#d91f2a]/30 font-serif leading-none select-none">
                    &ldquo;
                  </span>
                  <p className="text-sm text-[#0f2557]/80 italic leading-relaxed">
                    {block.content}
                  </p>
                </blockquote>
              );
            if (block.type === "code")
              return (
                <pre
                  key={block.id}
                  className="bg-[#0f1f3d] rounded-xl p-4 text-xs text-emerald-400 overflow-x-auto font-mono shadow-md"
                >
                  {block.content}
                </pre>
              );
            if (block.type === "list") {
              const items = block.content.split("\n").filter(Boolean);
              return (
                <ul key={block.id} className="space-y-2 pl-2">
                  {items.map((it, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 flex gap-2.5 items-start"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d91f2a] shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "image")
              return (
                <div
                  key={block.id}
                  className="rounded-xl bg-[#e8edf7] flex flex-col items-center justify-center h-32 text-[#0f2557]/30 text-xs gap-2 border border-[#c5d0e8]"
                >
                  <ImageIcon className="h-6 w-6" />
                  <span>{block.content || "Image block"}</span>
                </div>
              );
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Content Block Item ───────────────────────────────────────────────────────

function ContentBlockItem({
  block,
  index,
  total,
  onUpdate,
  onDelete,
  onDuplicate,
  onMove,
  onToggleCollapse,
  onAddAfter,
}: {
  block: ContentBlock;
  index: number;
  total: number;
  onUpdate: (id: string, v: string) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onMove: (id: string, d: "up" | "down") => void;
  onToggleCollapse: (id: string) => void;
  onAddAfter: (i: number) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group/block relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left gutter handles */}
      <div
        className={cn(
          "absolute -left-7 top-1 flex flex-col items-center gap-0.5 transition-all duration-150",
          hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1",
        )}
      >
        <button className="cursor-grab text-gray-300 hover:text-[#0f2557] p-0.5 transition-colors">
          <GripVertical className="h-3.5 w-3.5" />
        </button>
        <button
          className="text-gray-300 hover:text-[#d91f2a] p-0.5 transition-colors"
          onClick={() => onAddAfter(index)}
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>

      {/* Block card */}
      <div
        className={cn(
          "rounded-lg border overflow-hidden transition-all duration-200 shadow-sm",
          hovered
            ? "border-[#0f2557]/20 shadow-md shadow-[#0f2557]/5"
            : "border-gray-200 bg-white",
        )}
      >
        {/* Header */}
        <div
          className={cn(
            "flex items-center justify-between px-3 py-2 border-b",
            hovered
              ? "bg-[#f5f7fc] border-[#0f2557]/10"
              : "bg-gray-50 border-gray-100",
          )}
        >
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "p-1 rounded transition-colors",
                hovered ? "bg-[#0f2557]/10" : "bg-gray-100",
              )}
            >
              <BlockIcon
                type={block.type}
                className={hovered ? "text-[#0f2557]" : "text-gray-400"}
              />
            </div>
            <span className="text-xs font-semibold text-gray-600">
              <BlockLabel type={block.type} />
            </span>
            {block.type === "quote" && (
              <span className="text-[10px] font-medium border border-[#0f2557]/20 text-[#0f2557] bg-[#e8edf7] rounded-full px-2 py-0.5">
                Product
              </span>
            )}
          </div>
          <div className="flex items-center gap-0.5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-400 hover:text-gray-600 p-1.5 rounded-md hover:bg-gray-200 transition-all">
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="text-xs min-w-[150px] shadow-lg"
              >
                <DropdownMenuItem
                  className="cursor-pointer gap-2 text-xs"
                  onClick={() => onMove(block.id, "up")}
                  disabled={index === 0}
                >
                  <ChevronUp className="h-3 w-3 text-gray-400" /> Move Up
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer gap-2 text-xs"
                  onClick={() => onMove(block.id, "down")}
                  disabled={index === total - 1}
                >
                  <ChevronDown className="h-3 w-3 text-gray-400" /> Move Down
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer gap-2 text-xs"
                  onClick={() => onDuplicate(block.id)}
                >
                  <Copy className="h-3 w-3 text-gray-400" /> Duplicate
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-500 cursor-pointer gap-2 text-xs"
                  onClick={() => onDelete(block.id)}
                >
                  <Trash2 className="h-3 w-3" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              className="text-gray-400 hover:text-[#0f2557] p-1.5 rounded-md hover:bg-gray-200 transition-all"
              onClick={() => onToggleCollapse(block.id)}
            >
              {block.collapsed ? (
                <ChevronDown className="h-3.5 w-3.5" />
              ) : (
                <ChevronUp className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Body */}
        {!block.collapsed && (
          <div className="p-3 bg-white">
            {block.type === "heading" ? (
              <Input
                value={block.content}
                onChange={(e) => onUpdate(block.id, e.target.value)}
                className="border-0 border-b-2 border-[#e8edf7] rounded-none px-0 text-[#0f2557] text-sm font-bold focus-visible:ring-0 focus-visible:border-[#0f2557] placeholder:text-gray-300 bg-transparent transition-colors"
                placeholder="Heading text..."
              />
            ) : (
              <Textarea
                value={block.content}
                onChange={(e) => onUpdate(block.id, e.target.value)}
                className={cn(
                  "border-0 resize-none px-0 text-gray-700 text-xs leading-relaxed focus-visible:ring-0 placeholder:text-gray-300 min-h-[64px] bg-transparent",
                  block.type === "quote" &&
                    "italic text-gray-500 border-l-2 border-[#d91f2a]/30 pl-3",
                  block.type === "code" &&
                    "font-mono text-emerald-700 bg-[#f0fdf4] rounded-lg px-3 py-2 text-[11px]",
                )}
                placeholder={
                  block.type === "quote"
                    ? "Enter quote text..."
                    : block.type === "code"
                      ? "// Enter code..."
                      : "Enter content..."
                }
              />
            )}
          </div>
        )}
      </div>

      {/* Between-block insert zone */}
      <div
        className={cn(
          "flex items-center gap-2 py-1.5 transition-all duration-150",
          hovered ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0f2557]/10 to-transparent" />
        <button
          onClick={() => onAddAfter(index)}
          className="flex items-center gap-1 text-[10px] font-medium text-[#0f2557]/50 hover:text-[#d91f2a] transition-colors bg-white border border-[#0f2557]/10 hover:border-[#d91f2a]/30 rounded-full px-2.5 py-0.5 shadow-sm"
        >
          <Plus className="h-2.5 w-2.5" /> Add Block
        </button>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0f2557]/10 to-transparent" />
      </div>
    </div>
  );
}

// ─── Add Block Dialog ─────────────────────────────────────────────────────────

function AddBlockMenu({
  open,
  onClose,
  onAdd,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (t: BlockType) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm border-0 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-sm font-bold text-[#0f2557]">
            Insert Block
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-2 py-2">
          {BLOCK_TYPES.map(({ type, label, icon: Icon, description }) => (
            <button
              key={type}
              onClick={() => {
                onAdd(type);
                onClose();
              }}
              className="group flex flex-col gap-2 p-3.5 rounded-xl border-2 border-gray-100 hover:border-[#0f2557]/30 hover:bg-[#f5f7fc] text-left transition-all duration-150"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#e8edf7] group-hover:bg-[#0f2557] transition-colors">
                  <Icon className="h-3.5 w-3.5 text-[#0f2557] group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  {label}
                </span>
              </div>
              <span className="text-[10px] text-gray-400 leading-tight">
                {description}
              </span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Settings Panel ───────────────────────────────────────────────────────────

function SettingsPanel({
  post,
  onChange,
}: {
  post: PostData;
  onChange: (p: Partial<PostData>) => void;
}) {
  return (
    <div className="space-y-4">
      {[
        { label: "URL Slug", key: "slug", value: post.slug },
        { label: "Author", key: "author", value: post.author },
      ].map(({ label, key, value }) => (
        <div key={key} className="space-y-1.5">
          <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {label}
          </Label>
          <Input
            value={value}
            onChange={(e) => onChange({ [key]: e.target.value })}
            className="h-8 text-xs focus-visible:ring-1 focus-visible:ring-[#0f2557]/30 focus-visible:border-[#0f2557]/50 transition-all"
          />
        </div>
      ))}
      <div className="space-y-1.5">
        <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Template
        </Label>
        <Select defaultValue="standard">
          <SelectTrigger className="h-8 text-xs focus:ring-1 focus:ring-[#0f2557]/30">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard" className="text-xs">
              Standard
            </SelectItem>
            <SelectItem value="feature" className="text-xs">
              Feature Story
            </SelectItem>
            <SelectItem value="minimal" className="text-xs">
              Minimal
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

// ─── SEO Panel ────────────────────────────────────────────────────────────────

function SeoPanel({
  post,
  onChange,
}: {
  post: PostData;
  onChange: (p: Partial<PostData>) => void;
}) {
  const tl = post.metaTitle.length,
    dl = post.metaDescription.length;
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Meta Title
          </Label>
          <span
            className={cn(
              "text-[10px] font-bold tabular-nums",
              tl > 60
                ? "text-[#d91f2a]"
                : tl > 45
                  ? "text-amber-500"
                  : "text-gray-400",
            )}
          >
            {tl}/60
          </span>
        </div>
        <Input
          value={post.metaTitle}
          onChange={(e) => onChange({ metaTitle: e.target.value })}
          className="h-8 text-xs focus-visible:ring-1 focus-visible:ring-[#0f2557]/30 focus-visible:border-[#0f2557]/50"
        />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Meta Description
          </Label>
          <span
            className={cn(
              "text-[10px] font-bold tabular-nums",
              dl > 160
                ? "text-[#d91f2a]"
                : dl > 120
                  ? "text-amber-500"
                  : "text-gray-400",
            )}
          >
            {dl}/160
          </span>
        </div>
        <Textarea
          value={post.metaDescription}
          onChange={(e) => onChange({ metaDescription: e.target.value })}
          className="text-xs resize-none min-h-[80px] focus-visible:ring-1 focus-visible:ring-[#0f2557]/30 focus-visible:border-[#0f2557]/50"
        />
      </div>
      {/* Google preview card */}
      <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm space-y-1.5">
        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">
          Search Preview
        </p>
        <p className="text-xs text-emerald-700 truncate font-mono">
          localhost:3000/posts/{post.slug}
        </p>
        <p className="text-sm text-[#0f2557] font-semibold leading-snug">
          {post.metaTitle || "—"}
        </p>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
          {post.metaDescription || "—"}
        </p>
      </div>
    </div>
  );
}

// ─── Versions Panel ───────────────────────────────────────────────────────────

function VersionsPanel({ versions }: { versions: Version[] }) {
  const [selected, setSelected] = useState<string | null>("v24");
  const detail = versions.find((v) => v.id === selected);

  return (
    <div className="flex flex-1 min-h-0 overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 shrink-0 border-r border-gray-200 flex flex-col bg-white overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-[#f5f7fc] to-white">
          <h2 className="text-sm font-bold text-[#0f2557]">Version History</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            {versions.length} versions saved
          </p>
        </div>
        <div className="flex-1 overflow-y-auto">
          {versions.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelected(selected === v.id ? null : v.id)}
              className={cn(
                "w-full flex gap-3 px-4 py-3.5 text-left transition-all duration-150 border-b border-gray-50 relative",
                selected === v.id
                  ? "bg-[#f5f7fc] border-l-[3px] border-l-[#0f2557]"
                  : "hover:bg-gray-50/80 border-l-[3px] border-l-transparent",
              )}
            >
              <Avatar className="h-8 w-8 shrink-0 ring-2 ring-white shadow-sm">
                <AvatarImage src={v.avatar} alt={v.author} />
                <AvatarFallback className="text-[10px] bg-[#e8edf7] text-[#0f2557] font-bold">
                  {v.author.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "text-xs font-bold",
                      selected === v.id ? "text-[#0f2557]" : "text-gray-700",
                    )}
                  >
                    {v.label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <StatusDot status={v.status} />
                    <span
                      className={cn(
                        "text-[10px] font-semibold capitalize",
                        v.status === "published"
                          ? "text-emerald-600"
                          : "text-amber-500",
                      )}
                    >
                      {v.status}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 truncate">{v.author}</p>
                <p className="text-[10px] text-gray-400 font-medium">
                  {v.relativeTime}
                </p>
                {v.isCurrent && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#0f2557] bg-[#e8edf7] border border-[#0f2557]/20 rounded-full px-2 py-0.5">
                    <span className="h-1 w-1 rounded-full bg-[#0f2557] inline-block animate-pulse" />{" "}
                    Current
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail */}
      <div className="flex-1 overflow-y-auto bg-[#f8f9fc]">
        {detail ? (
          <div className="max-w-xl mx-auto py-10 px-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-7">
              <button
                onClick={() => setSelected(null)}
                className="p-1.5 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 text-gray-400 hover:text-[#0f2557] transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <h3 className="text-base font-bold text-[#0f2557]">
                {detail.label}
              </h3>
              {detail.isCurrent && (
                <span className="text-[9px] font-bold text-[#0f2557] bg-[#e8edf7] border border-[#0f2557]/20 rounded-full px-2.5 py-1">
                  Current
                </span>
              )}
            </div>

            <div className="space-y-3">
              {/* Author + Saved */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Author
                  </p>
                  <div className="flex items-center gap-2.5">
                    <Avatar className="h-8 w-8 ring-2 ring-[#e8edf7]">
                      <AvatarImage src={detail.avatar} />
                      <AvatarFallback className="text-[9px] bg-[#e8edf7] text-[#0f2557] font-bold">
                        {detail.author.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-semibold text-gray-800">
                      {detail.author}
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Saved
                  </p>
                  <div className="flex items-start gap-2">
                    <Clock className="h-3.5 w-3.5 text-[#0f2557]/40 mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-700 leading-snug font-medium">
                      {detail.timestamp}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Status
                </p>
                <div className="flex items-center gap-2.5">
                  <StatusDot status={detail.status} size="md" />
                  <PublishBadge status={detail.status} />
                </div>
              </div>

              {/* Changes */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Changes in this version
                </p>
                <ul className="space-y-2.5">
                  {detail.changes.map((change, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-gray-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#d91f2a]/50 shrink-0" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              {!detail.isCurrent && (
                <div className="flex gap-2.5 pt-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs gap-2 h-8 border-[#0f2557]/20 text-[#0f2557] hover:bg-[#e8edf7] hover:border-[#0f2557]/40 transition-all"
                  >
                    <Eye className="h-3.5 w-3.5" /> Preview version
                  </Button>
                  <Button
                    size="sm"
                    className="text-xs gap-2 h-8 bg-[#d91f2a] hover:bg-[#b91920] text-white shadow-sm transition-all"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Restore version
                  </Button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="h-16 w-16 rounded-2xl bg-[#e8edf7] flex items-center justify-center shadow-inner">
              <GitBranch className="h-7 w-7 text-[#0f2557]/40" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600">
                Select a version
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Compare, preview or restore any saved version
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── API Panel ────────────────────────────────────────────────────────────────

function ApiPanel({ slug }: { slug: string }) {
  const endpoints = [
    {
      method: "GET",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      path: `localhost:3000/api/posts/${slug}`,
    },
    {
      method: "POST",
      color: "text-purple-600  bg-purple-50  border-purple-200",
      path: "localhost:3000/api/posts",
    },
    {
      method: "PATCH",
      color: "text-amber-600   bg-amber-50   border-amber-200",
      path: "localhost:3000/api/posts/:id",
    },
    {
      method: "DELETE",
      color: "text-[#d91f2a]   bg-red-50     border-red-200",
      path: "localhost:3000/api/posts/:id",
    },
  ];

  return (
    <div className="flex-1 flex items-center justify-center bg-[#f8f9fc] p-8">
      <div className="w-full max-w-lg space-y-5">
        <div className="text-center space-y-2">
          <div className="h-14 w-14 rounded-2xl bg-[#e8edf7] flex items-center justify-center mx-auto shadow-inner">
            <Terminal className="h-6 w-6 text-[#0f2557]" />
          </div>
          <h2 className="text-base font-bold text-[#0f2557]">API Explorer</h2>
          <p className="text-xs text-gray-400">
            Query this document via the REST or GraphQL API
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md">
          <div className="px-4 py-2.5 bg-[#f5f7fc] border-b border-gray-100 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#d91f2a]/50" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
            </div>
            <span className="text-[10px] text-gray-400 font-mono ml-1">
              REST Endpoints
            </span>
          </div>
          <div className="p-4 space-y-2.5 font-mono text-xs">
            {endpoints.map(({ method, color, path }) => (
              <div key={method} className="flex items-center gap-3">
                <span
                  className={cn(
                    "text-[10px] font-black px-2 py-0.5 rounded border",
                    color,
                  )}
                >
                  {method}
                </span>
                <span className="text-[#0f2557] truncate">{path}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md">
          <div className="px-4 py-2.5 bg-[#f5f7fc] border-b border-gray-100">
            <span className="text-[10px] text-gray-400 font-mono">
              GraphQL Endpoint
            </span>
          </div>
          <div className="p-4 font-mono text-xs">
            <span className="text-purple-600 font-black text-[10px] px-2 py-0.5 rounded border bg-purple-50 border-purple-200 mr-3">
              POST
            </span>
            <span className="text-[#0f2557]">localhost:3000/api/graphql</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PayloadEditor() {
  const [post, setPost] = useState<PostData>(INITIAL_POST);
  const [status, setStatus] = useState<PublishStatus>("draft");
  const [activeTab, setActiveTab] = useState<ActiveTab>("edit");
  const [contentTab, setContentTab] = useState<ContentTab>("content");
  const [savedAt, setSavedAt] = useState("less than a minute ago");
  const [isSaving, setIsSaving] = useState(false);
  const [addBlockOpen, setAddBlockOpen] = useState(false);
  const [insertAfterIndex, setInsertAfterIndex] = useState<number | null>(null);
  const [categoryInput, setCategoryInput] = useState("");
  const [showCatDrop, setShowCatDrop] = useState(false);
  const autoSaveRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerSave = useCallback(() => {
    if (autoSaveRef.current) clearTimeout(autoSaveRef.current);
    setIsSaving(true);
    autoSaveRef.current = setTimeout(() => {
      setIsSaving(false);
      setSavedAt("less than a minute ago");
    }, 900);
  }, []);

  const updatePost = useCallback(
    (patch: Partial<PostData>) => {
      setPost((p) => ({ ...p, ...patch }));
      triggerSave();
    },
    [triggerSave],
  );

  const updateBlock = useCallback(
    (id: string, content: string) => {
      setPost((p) => ({
        ...p,
        blocks: p.blocks.map((b) => (b.id === id ? { ...b, content } : b)),
      }));
      triggerSave();
    },
    [triggerSave],
  );

  const deleteBlock = useCallback(
    (id: string) => {
      setPost((p) => ({ ...p, blocks: p.blocks.filter((b) => b.id !== id) }));
      triggerSave();
    },
    [triggerSave],
  );

  const duplicateBlock = useCallback(
    (id: string) => {
      setPost((p) => {
        const idx = p.blocks.findIndex((b) => b.id === id);
        if (idx === -1) return p;
        const copy = { ...p.blocks[idx], id: `${Date.now()}` };
        const blocks = [...p.blocks];
        blocks.splice(idx + 1, 0, copy);
        return { ...p, blocks };
      });
      triggerSave();
    },
    [triggerSave],
  );

  const moveBlock = useCallback(
    (id: string, dir: "up" | "down") => {
      setPost((p) => {
        const blocks = [...p.blocks];
        const idx = blocks.findIndex((b) => b.id === id);
        if (idx === -1) return p;
        const t = dir === "up" ? idx - 1 : idx + 1;
        if (t < 0 || t >= blocks.length) return p;
        [blocks[idx], blocks[t]] = [blocks[t], blocks[idx]];
        return { ...p, blocks };
      });
      triggerSave();
    },
    [triggerSave],
  );

  const toggleCollapse = useCallback((id: string) => {
    setPost((p) => ({
      ...p,
      blocks: p.blocks.map((b) =>
        b.id === id ? { ...b, collapsed: !b.collapsed } : b,
      ),
    }));
  }, []);

  const addBlock = useCallback(
    (type: BlockType) => {
      const nb: ContentBlock = {
        id: `${Date.now()}`,
        type,
        content: type === "list" ? "First item\nSecond item\nThird item" : "",
        collapsed: false,
      };
      setPost((p) => {
        const blocks = [...p.blocks];
        const at =
          insertAfterIndex !== null ? insertAfterIndex + 1 : blocks.length;
        blocks.splice(at, 0, nb);
        return { ...p, blocks };
      });
      setInsertAfterIndex(null);
      triggerSave();
    },
    [insertAfterIndex, triggerSave],
  );

  const openAdd = (i: number) => {
    setInsertAfterIndex(i);
    setAddBlockOpen(true);
  };

  const removeCategory = (id: string) =>
    updatePost({ categories: post.categories.filter((c) => c.id !== id) });
  const addCategoryItem = (cat: Category) => {
    if (post.categories.find((c) => c.id === cat.id)) return;
    updatePost({ categories: [...post.categories, cat] });
    setCategoryInput("");
    setShowCatDrop(false);
  };
  const filteredCats = CATEGORY_OPTIONS.filter(
    (c) =>
      !post.categories.find((pc) => pc.id === c.id) &&
      c.label.toLowerCase().includes(categoryInput.toLowerCase()),
  );

  const handlePublish = () => {
    setStatus((s) => (s === "published" ? "draft" : "published"));
    setSavedAt("just now");
    triggerSave();
  };

  // Tab config
  const tabs = [
    { id: "edit" as ActiveTab, label: "Edit", icon: Pencil },
    { id: "preview" as ActiveTab, label: "Live Preview", icon: Eye },
    {
      id: "versions" as ActiveTab,
      label: "Versions",
      icon: GitBranch,
      count: MOCK_VERSIONS.length,
    },
    { id: "api" as ActiveTab, label: "API", icon: Terminal },
  ];

  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen bg-white text-gray-900 font-sans select-none overflow-hidden max-h-[92vh]">
        {/* ── Top chrome: brand nav bar ── */}
        <div className="flex items-center justify-between px-4 h-12 bg-[#0f2557] shrink-0 shadow-lg">
          <div className="flex items-center gap-3">
            <button className="text-white/60 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-all">
              <Menu className="h-3.5 w-3.5" />
            </button>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-white/60 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-all">
                  <RefreshCw
                    className={cn("h-3.5 w-3.5", isSaving && "animate-spin")}
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="text-xs bg-[#0f2557] border-[#0f2557]/50"
              >
                Refresh
              </TooltipContent>
            </Tooltip>
            <div className="w-px h-4 bg-white/15" />
            {/* Logo mark */}
            <div className="flex items-center gap-2 mr-1">
              <div className="flex items-center justify-center h-7 w-7 rounded-md bg-white/10 ring-1 ring-white/20">
                <Globe className="h-4 w-4 text-white" />
              </div>
            </div>


            {/* Breadcrumb */}
            <nav className="flex items-center gap-1 text-xs">
              <span className="text-white/30">/</span>
              <button className="text-white/60 hover:text-white font-medium transition-colors hover:underline underline-offset-2">
                Posts
              </button>
              {/* <ChevronRight className="h-3 w-3 text-white/30" /> */}
              <span className="text-white/30">/</span>
              <span className="text-white/80 truncate max-w-[220px] font-medium">
                {post.title || "Untitled"}
              </span>
            </nav>
          </div>

          <Avatar className="h-8 w-8 ring-2 ring-white/20 cursor-pointer hover:ring-white/40 transition-all">
            <AvatarImage src="https://picsum.photos/seed/user1/40/40" />
            <AvatarFallback className="text-[10px] bg-[#d91f2a] text-white font-bold">
              CM
            </AvatarFallback>
          </Avatar>
        </div>

        {/* ── Page header ── */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 bg-white shrink-0 shadow-sm">
          <h1 className="text-sm font-bold text-[#0f2557] tracking-tight truncate max-w-md">
            {post.title || "Untitled Post"}
          </h1>
          {/* Tab switcher */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            {tabs.map(({ id, label, icon: Icon, count }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150",
                  activeTab === id
                    ? "bg-[#0f2557] text-white shadow-sm"
                    : "text-gray-500 hover:text-[#0f2557] hover:bg-white/60",
                )}
              >
                <Icon className="h-3 w-3" />
                <span>{label}</span>
                {count !== undefined && (
                  <span
                    className={cn(
                      "rounded-full px-1.5 text-[9px] font-bold leading-4",
                      activeTab === id
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 text-gray-500",
                    )}
                  >
                    {count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Status bar ── */}
        <div className="flex items-center justify-between px-6 py-2 border-b border-gray-100 bg-[#fafbfd] shrink-0">
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              Status: <PublishBadge status={status} />
            </span>
            <div className="w-px h-3 bg-gray-200" />
            <span className="flex items-center gap-1.5">
              {isSaving ? (
                <>
                  <RefreshCw className="h-3 w-3 animate-spin text-[#0f2557]/50" />
                  <span className="text-[#0f2557]/60 font-medium">Saving…</span>
                </>
              ) : (
                <>
                  <Check className="h-3 w-3 text-emerald-500" />
                  <span>Saved {savedAt}</span>
                </>
              )}
            </span>
            <div className="w-px h-3 bg-gray-200" />
            <span>
              Modified:{" "}
              <span className="text-gray-600 font-medium">
                July 13th 2024, 9:55 AM
              </span>
            </span>
            <div className="w-px h-3 bg-gray-200" />
            <span>
              Created:{" "}
              <span className="text-gray-600 font-medium">
                October 17th 2023, 2:47 PM
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Preview button */}
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-3 text-xs gap-1.5 border-[#0f2557]/20 text-[#0f2557] hover:bg-[#e8edf7] hover:border-[#0f2557]/40 transition-all"
            >
              <Link2 className="h-3 w-3" /> Preview
            </Button>

            {/* Publish / Published toggle */}
            <Button
              size="sm"
              onClick={handlePublish}
              className={cn(
                "h-7 px-4 text-xs font-bold gap-1.5 transition-all duration-200 shadow-sm",
                status === "published"
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : "bg-[#d91f2a] hover:bg-[#b91920] text-white hover:shadow-md hover:shadow-[#d91f2a]/25",
              )}
            >
              {status === "published" ? (
                <>
                  <Check className="h-3 w-3" /> Published
                </>
              ) : (
                <>
                  <Zap className="h-3 w-3" /> Publish Changes
                </>
              )}
            </Button>

            {/* More */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-400 hover:text-[#0f2557] p-1.5 rounded-lg border border-gray-200 hover:border-[#0f2557]/20 hover:bg-[#f5f7fc] transition-all">
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="text-xs min-w-[170px] shadow-xl"
              >
                <DropdownMenuItem className="cursor-pointer gap-2 text-xs">
                  <Copy className="h-3.5 w-3.5 text-gray-400" /> Duplicate Post
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer gap-2 text-xs">
                  <ExternalLink className="h-3.5 w-3.5 text-gray-400" /> View
                  Live
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer gap-2 text-xs">
                  <Globe className="h-3.5 w-3.5 text-gray-400" /> Schedule
                  Publish
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-[#d91f2a] cursor-pointer gap-2 text-xs">
                  <Trash2 className="h-3.5 w-3.5" /> Delete Post
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* ── Body ── */}
        {activeTab === "versions" ? (
          <VersionsPanel versions={MOCK_VERSIONS} />
        ) : activeTab === "api" ? (
          <ApiPanel slug={post.slug} />
        ) : (
          <div className="flex flex-1 min-h-0 overflow-hidden">
            {/* Left panel */}
            {activeTab === "edit" && (
              <div className="w-[420px] shrink-0 border-r border-gray-200 flex flex-col overflow-hidden bg-white">
                <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 scroll-smooth">
                  {/* Title */}
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Title
                    </Label>
                    <Input
                      value={post.title}
                      onChange={(e) => updatePost({ title: e.target.value })}
                      className="text-sm h-9 font-medium focus-visible:ring-1 focus-visible:ring-[#0f2557]/30 focus-visible:border-[#0f2557]/50 transition-all placeholder:text-gray-300"
                      placeholder="Post title..."
                    />
                  </div>

                  {/* Featured Image */}
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wide flex items-center gap-1">
                      Featured Image{" "}
                      <span className="text-[#d91f2a] normal-case font-black">
                        *
                      </span>
                    </Label>
                    {post.featuredImage ? (
                      <div className="flex items-center gap-3 p-2.5 rounded-xl border-2 border-[#e8edf7] bg-[#f5f7fc] hover:border-[#0f2557]/20 transition-all group">
                        <div className="h-12 w-16 rounded-lg overflow-hidden shrink-0 bg-gray-100 shadow-sm">
                          <img
                            src={post.featuredImage.url}
                            alt={post.featuredImage.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-700 truncate">
                            {post.featuredImage.name}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5">
                            {post.featuredImage.size} ·{" "}
                            {post.featuredImage.dims} · PNG
                          </p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded-lg text-gray-400 hover:text-[#0f2557] hover:bg-[#e8edf7] transition-all">
                            <Pencil className="h-3.5 w-3.5" />
                          </button>
                          <button
                            className="p-1.5 rounded-lg text-gray-400 hover:text-[#d91f2a] hover:bg-red-50 transition-all"
                            onClick={() => updatePost({ featuredImage: null })}
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() =>
                          updatePost({
                            featuredImage: {
                              name: "launch-blog-featured-image",
                              size: "80KB",
                              dims: "1920×1080",
                              url: "https://picsum.photos/1920/1080?random=42",
                            },
                          })
                        }
                        className="w-full flex flex-col items-center justify-center gap-2.5 h-24 rounded-xl border-2 border-dashed border-[#0f2557]/20 bg-[#f5f7fc] hover:border-[#0f2557]/40 hover:bg-[#edf0f8] transition-all text-[#0f2557]/40 hover:text-[#0f2557]/70"
                      >
                        <ImageIcon className="h-6 w-6" />
                        <span className="text-xs font-medium">
                          Upload or select image
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Categories */}
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Categories
                    </Label>
                    <div className="relative">
                      <div className="flex items-center flex-wrap gap-1.5 min-h-[38px] px-2.5 py-1.5 rounded-xl border-2 border-gray-200 bg-white focus-within:border-[#0f2557]/40 focus-within:ring-2 focus-within:ring-[#0f2557]/10 transition-all">
                        {post.categories.map((cat) => (
                          <span
                            key={cat.id}
                            className="flex items-center gap-1 bg-[#e8edf7] border border-[#0f2557]/15 text-[#0f2557] text-xs font-semibold rounded-full px-2.5 py-1"
                          >
                            <Pencil className="h-2.5 w-2.5 text-[#0f2557]/40" />
                            {cat.label}
                            <button
                              onClick={() => removeCategory(cat.id)}
                              className="text-[#0f2557]/40 hover:text-[#d91f2a] ml-0.5 transition-colors"
                            >
                              <X className="h-2.5 w-2.5" />
                            </button>
                          </span>
                        ))}
                        <input
                          value={categoryInput}
                          onChange={(e) => {
                            setCategoryInput(e.target.value);
                            setShowCatDrop(true);
                          }}
                          onFocus={() => setShowCatDrop(true)}
                          onBlur={() =>
                            setTimeout(() => setShowCatDrop(false), 150)
                          }
                          className="flex-1 bg-transparent text-xs text-gray-700 outline-none placeholder:text-gray-300 min-w-[80px] font-medium"
                          placeholder={
                            post.categories.length === 0
                              ? "Search categories..."
                              : ""
                          }
                        />
                        <div className="flex items-center gap-1 ml-auto shrink-0">
                          {post.categories.length > 0 && (
                            <button
                              onClick={() => updatePost({ categories: [] })}
                              className="text-gray-300 hover:text-[#d91f2a] transition-colors p-0.5"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          )}
                          <ChevronDown className="h-3 w-3 text-gray-300" />
                          <button
                            className="text-[#0f2557]/50 hover:text-[#d91f2a] transition-colors p-0.5"
                            onClick={() => setShowCatDrop(!showCatDrop)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                      {showCatDrop && filteredCats.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden">
                          {filteredCats.map((cat) => (
                            <button
                              key={cat.id}
                              onMouseDown={() => addCategoryItem(cat)}
                              className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-medium text-gray-600 hover:bg-[#f5f7fc] hover:text-[#0f2557] transition-colors"
                            >
                              <Plus className="h-3 w-3 text-[#d91f2a]" />
                              {cat.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content / Settings / SEO tabs */}
                  <div className="space-y-4">
                    <div className="flex items-center border-b-2 border-gray-100">
                      {(["content", "settings", "seo"] as ContentTab[]).map(
                        (tab) => (
                          <button
                            key={tab}
                            onClick={() => setContentTab(tab)}
                            className={cn(
                              "px-4 py-2.5 text-xs font-bold capitalize transition-all border-b-2 -mb-0.5",
                              contentTab === tab
                                ? "border-[#d91f2a] text-[#0f2557]"
                                : "border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-200",
                            )}
                          >
                            {tab}
                          </button>
                        ),
                      )}
                    </div>

                    {contentTab === "content" && (
                      <div className="space-y-0.5 pl-7">
                        {/* Top add */}
                        <div className="flex items-center gap-2 py-2 mb-1">
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0f2557]/10 to-transparent" />
                          <button
                            onClick={() => openAdd(-1)}
                            className="flex items-center gap-1 text-[10px] font-medium text-gray-400 hover:text-[#d91f2a] transition-colors border border-transparent hover:border-[#d91f2a]/20 rounded-full px-2.5 py-0.5 hover:bg-red-50"
                          >
                            <Plus className="h-2.5 w-2.5" /> Add Block
                          </button>
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0f2557]/10 to-transparent" />
                        </div>

                        {post.blocks.map((block, idx) => (
                          <ContentBlockItem
                            key={block.id}
                            block={block}
                            index={idx}
                            total={post.blocks.length}
                            onUpdate={updateBlock}
                            onDelete={deleteBlock}
                            onDuplicate={duplicateBlock}
                            onMove={moveBlock}
                            onToggleCollapse={toggleCollapse}
                            onAddAfter={openAdd}
                          />
                        ))}
                      </div>
                    )}
                    {contentTab === "settings" && (
                      <SettingsPanel post={post} onChange={updatePost} />
                    )}
                    {contentTab === "seo" && (
                      <SeoPanel post={post} onChange={updatePost} />
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Right: Live preview */}
            <div className="flex-1 min-w-0 overflow-hidden bg-[#eef0f5]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 h-10 border-b border-gray-200 bg-white shrink-0 shadow-sm">
                {/* Fake traffic lights */}
                <div className="flex gap-1.5 shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#d91f2a]/50" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
                </div>
                <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 h-6 flex-1 max-w-lg mx-2 shadow-inner">
                  <Globe className="h-3 w-3 text-[#0f2557]/40 shrink-0" />
                  <span className="text-[10px] text-gray-500 truncate font-mono">
                    localhost:3000/posts/{post.slug}
                  </span>
                </div>
                <div className="flex items-center gap-0.5 ml-auto">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="text-gray-400 hover:text-[#0f2557] p-1.5 rounded-md hover:bg-gray-100 transition-all">
                        <RefreshCw className="h-3.5 w-3.5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="text-xs">
                      Reload preview
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="text-gray-400 hover:text-[#0f2557] p-1.5 rounded-md hover:bg-gray-100 transition-all">
                        <ExternalLink className="h-3.5 w-3.5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="text-xs">
                      Open in new tab
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Preview frame */}
              <div className="h-[calc(100%-40px)] p-4 overflow-auto">
                <div className="h-full rounded-2xl overflow-hidden shadow-2xl shadow-[#0f2557]/10 border border-gray-200 ring-1 ring-black/5">
                  <LivePreview post={post} showNav={activeTab === "preview"} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <AddBlockMenu
        open={addBlockOpen}
        onClose={() => {
          setAddBlockOpen(false);
          setInsertAfterIndex(null);
        }}
        onAdd={addBlock}
      />
    </TooltipProvider>
  );
}
