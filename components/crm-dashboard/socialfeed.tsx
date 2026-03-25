"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Bookmark,
  BadgeCheck,
  Ellipsis,
  Heart,
  Home,
  ListTodo,
  Users,
  Globe,
  CreditCard,
  Settings,
  HelpCircle,
  MessageCircle,
  Send,
  Plus,
  Search,
  X,
  Link,
  Share2,
  EyeOff,
  UserMinus,
  Flag,
  Image,
  Video,
  Play,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Post {
  id: number;
  user: string;
  handle: string;
  avatar: string;
  verified: boolean;
  time: string;
  type: "image" | "video" | "text";
  media?: string;
  caption: string;
  likes: number;
  comments: number;
  liked: boolean;
  bookmarked: boolean;
}

interface Story {
  name: string;
  avatar: string;
  active: boolean;
}

interface Suggestion {
  name: string;
  handle: string;
  avatar: string;
  followed: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const initialPosts: Post[] = [
  {
    id: 1,
    user: "crunchtech",
    handle: "crunchtech",
    avatar: "https://i.pravatar.cc/150?img=10",
    verified: true,
    time: "1m ago",
    type: "image",
    media: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likes: 1243,
    comments: 3,
    liked: true,
    bookmarked: false,
  },
  {
    id: 2,
    user: "thoughts_daily",
    handle: "thoughts_daily",
    avatar: "https://i.pravatar.cc/150?img=15",
    verified: false,
    time: "15m ago",
    type: "text",
    caption: "Success comes by taking small steps every day. Every step you take today lays the foundation for tomorrow. Never give up! 💪✨",
    likes: 892,
    comments: 2,
    liked: false,
    bookmarked: false,
  },
  {
    id: 3,
    user: "travel_vibes",
    handle: "travel_vibes",
    avatar: "https://i.pravatar.cc/150?img=20",
    verified: true,
    time: "1h ago",
    type: "video",
    media: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    caption: "An amazing sunset in the Alps 🏔️ I will never forget this moment!",
    likes: 3421,
    comments: 3,
    liked: false,
    bookmarked: false,
  },
  {
    id: 4,
    user: "foodie_paradise",
    handle: "foodie_paradise",
    avatar: "https://i.pravatar.cc/150?img=25",
    verified: false,
    time: "2h ago",
    type: "image",
    media: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    caption: "Homemade Italian pizza 🍕 Recipe in the comments!",
    likes: 2156,
    comments: 2,
    liked: false,
    bookmarked: false,
  },
  {
    id: 5,
    user: "dev_community",
    handle: "dev_community",
    avatar: "https://i.pravatar.cc/150?img=30",
    verified: true,
    time: "3h ago",
    type: "text",
    caption: "🚀 Tips for beginners:\n\n1. Write code every day\n2. Work on projects\n3. Engage with the community\n4. Never stop learning\n\n#coding #developer #tips",
    likes: 4521,
    comments: 2,
    liked: false,
    bookmarked: false,
  },
];

const stories: Story[] = [
  { name: "Elon Musk", avatar: "https://i.pravatar.cc/150?img=1", active: true },
  { name: "Olivia Car...", avatar: "https://i.pravatar.cc/150?img=2", active: true },
  { name: "Azumi Tan...", avatar: "https://i.pravatar.cc/150?img=3", active: false },
  { name: "Xander Ellis", avatar: "https://i.pravatar.cc/150?img=4", active: false },
  { name: "Theo Black", avatar: "https://i.pravatar.cc/150?img=5", active: false },
  { name: "David Gil...", avatar: "https://i.pravatar.cc/150?img=6", active: false },
  { name: "Gerard Way", avatar: "https://i.pravatar.cc/150?img=7", active: false },
  { name: "Asuna Yuuki", avatar: "https://i.pravatar.cc/150?img=8", active: false },
];

const navItems = [
  { icon: Home, label: "Home", badge: 10, active: true },
  { icon: ListTodo, label: "Tasks", badge: null, active: false },
  { icon: Users, label: "Users", badge: 2, active: false },
  { icon: Globe, label: "APIs", badge: null, active: false },
  { icon: CreditCard, label: "Subscription", badge: null, active: false },
  { icon: Settings, label: "Settings", badge: null, active: false },
];

const suggestions: Suggestion[] = [
  { name: "Azunyan Senpai", handle: "@nyancat221b", avatar: "https://i.pravatar.cc/150?img=11", followed: false },
  { name: "Oarack Babama", handle: "@oarackbabama", avatar: "https://i.pravatar.cc/150?img=12", followed: false },
  { name: "David Gilmore", handle: "@davidgilmore", avatar: "https://i.pravatar.cc/150?img=13", followed: false },
  { name: "Gerard Way", handle: "@gerardway", avatar: "https://i.pravatar.cc/150?img=14", followed: true },
  { name: "Mary Suez", handle: "@marysuez821", avatar: "https://i.pravatar.cc/150?img=15", followed: false },
  { name: "Edgar Wright", handle: "@davidgilmore", avatar: "https://i.pravatar.cc/150?img=16", followed: false },
];

const trendingArtists: Suggestion[] = [
  { name: "Saylor Twift", handle: "@saylortwiftofficial", avatar: "https://i.pravatar.cc/150?img=20", followed: false },
  { name: "Frank Iero", handle: "@frankieroofficial", avatar: "https://i.pravatar.cc/150?img=21", followed: false },
  { name: "Charlie XXX", handle: "@clarliexx", avatar: "https://i.pravatar.cc/150?img=22", followed: false },
  { name: "Star Warz", handle: "@starwarzofficial", avatar: "https://i.pravatar.cc/150?img=23", followed: false },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function PostCard({ post, onLike, onBookmark }: {
  post: Post;
  onLike: (id: number) => void;
  onBookmark: (id: number) => void;
}) {
  const [comment, setComment] = useState("");

  return (
    <div className="space-y-3 rounded-xl border bg-background">
      <div className="space-y-3 px-4 pt-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="size-8">
              <AvatarImage src={post.avatar} />
              <AvatarFallback>{post.user[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold">{post.user}</span>
                {post.verified && (
                  <BadgeCheck className="size-4 text-foreground" aria-hidden="true" />
                )}
              </div>
              <span className="text-muted-foreground text-xs">{post.time}</span>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <Ellipsis className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="gap-2">
                <Bookmark className="size-4" /> Save Post
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Link className="size-4" /> Copy Link
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Share2 className="size-4" /> Share to...
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <EyeOff className="size-4" /> Hide Post
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <UserMinus className="size-4" /> Unfollow @{post.handle}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                <Flag className="size-4" /> Report Post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Media */}
        {post.type === "image" && post.media && (
          <div className="overflow-hidden rounded-lg">
            <img
              alt="Post"
              className="aspect-video w-full object-cover"
              src={post.media}
            />
          </div>
        )}

        {post.type === "video" && post.media && (
          <div className="relative overflow-hidden rounded-lg">
            <img
              alt="Video thumbnail"
              className="aspect-video w-full object-cover"
              src={post.media}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="bg-background/90 flex h-16 w-16 items-center justify-center rounded-full">
                <Play className="h-8 w-8 fill-current" />
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="size-9 rounded-full"
              onClick={() => onLike(post.id)}
            >
              <Heart
                className={`size-4 ${post.liked ? "fill-destructive text-destructive" : ""}`}
              />
            </Button>
            <Button variant="ghost" size="icon" className="size-9 rounded-full">
              <MessageCircle className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-9 rounded-full">
              <Send className="size-4" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-9 rounded-full"
            onClick={() => onBookmark(post.id)}
          >
            <Bookmark className={`size-4 ${post.bookmarked ? "fill-foreground" : ""}`} />
          </Button>
        </div>

        {/* Likes */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <Avatar className="h-5 w-5 border-2 border-background">
              <AvatarImage src="https://i.pravatar.cc/150?img=40" />
            </Avatar>
            <Avatar className="h-5 w-5 border-2 border-background">
              <AvatarImage src="https://i.pravatar.cc/150?img=41" />
            </Avatar>
          </div>
          <span className="text-sm">
            <span className="font-semibold">{post.likes.toLocaleString()}</span> likes
          </span>
        </div>

        {/* Caption */}
        <p className="text-sm whitespace-pre-line">
          <span className="mr-1 font-semibold">{post.user}</span>
          {post.caption}
        </p>

        <Button variant="link" className="text-muted-foreground hover:text-foreground h-auto p-0 text-xs font-normal">
          View all {post.comments} comments
        </Button>
      </div>

      {/* Comment input */}
      <div className="flex items-center gap-1 border-t px-4 py-3">
        <Avatar className="size-8">
          <AvatarImage src="https://i.pravatar.cc/150?img=50" />
        </Avatar>
        <Input
          className="flex-1 border-0 shadow-none focus-visible:ring-0"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button variant="ghost" size="sm" disabled={!comment.trim()}>
          Post
        </Button>
      </div>
    </div>
  );
}

function CreatePostDialog() {
  const [postType, setPostType] = useState<"text" | "photo" | "video">("text");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size="lg" className="w-full">
          <Plus className="size-4" /> Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage src="https://i.pravatar.cc/150?img=19" />
            <AvatarFallback>TB</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">Optimum Systems Ltd</p>
            <p className="text-xs text-muted-foreground">Public</p>
          </div>
        </div>
        <div className="flex gap-2">
          {(["text", "photo", "video"] as const).map((type) => (
            <Button
              key={type}
              variant={postType === type ? "default" : "outline"}
              size="sm"
              className="gap-1.5 capitalize"
              onClick={() => setPostType(type)}
            >
              {type === "photo" && <Image className="size-4" />}
              {type === "video" && <Video className="size-4" />}
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </div>
        <Textarea
          placeholder="What's on your mind?"
          className="min-h-32 resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end">
          <Button
            disabled={!content.trim()}
            onClick={() => { setContent(""); setOpen(false); }}
          >
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SocialFeed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [sugg, setSugg] = useState<Suggestion[]>(suggestions);
  const [artists, setArtists] = useState<Suggestion[]>(trendingArtists);
  const [search, setSearch] = useState("");
  const [activeNav, setActiveNav] = useState("Home");
  const [promoVisible, setPromoVisible] = useState(true);

  const handleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );
  };

  const handleBookmark = (id: number) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, bookmarked: !p.bookmarked } : p))
    );
  };

  const toggleFollow = (
    list: Suggestion[],
    setList: React.Dispatch<React.SetStateAction<Suggestion[]>>,
    handle: string
  ) => {
    setList((prev) =>
      prev.map((s) => (s.handle === handle ? { ...s, followed: !s.followed } : s))
    );
  };

  return (
    <section className="h-[92vh] bg-primary-cbe-50/30 overflow-hidden overflow-clip overflow-y-auto">
      <div className="mx-auto max-w-screen-2xl space-y-5 px-6 py-7">
        <div className="grid h-full gap-4 md:grid-cols-[280px_auto] lg:grid-cols-[280px_auto_280px]">

          {/* ── Left Sidebar ── */}
          <aside className="flex flex-col gap-4 h-fit sticky top-7 z-40">
            {/* Profile + Nav */}
            <div className="bg-muted flex flex-col p-4 rounded-xl gap-6">
              <div className="flex flex-row items-center gap-0 w-full gap-4">
                <Avatar size="lg">
                  <AvatarImage src="https://i.pravatar.cc/150?img=19" />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="text-sm font-medium">Optimum Systems Ltd</div>
                  <div className="text-muted-foreground text-xs">@Optimum_Systems</div>
                </div>
                <Button variant="ghost" size="icon" className="ms-auto size-9">
                  <Settings className="size-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                  <Input
                    className="pl-9"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                  {navItems.map(({ icon: Icon, label, badge, active }) => (
                    <button
                      key={label}
                      onClick={() => setActiveNav(label)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        activeNav === label
                          ? "bg-accent text-foreground font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground font-medium"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="size-4" aria-hidden="true" />
                        <span>{label}</span>
                      </div>
                      {badge !== null && (
                        <Badge variant="secondary" className="h-5 min-w-5 rounded-full px-1.5 text-xs">
                          {badge}
                        </Badge>
                      )}
                    </button>
                  ))}
                </nav>

                <CreatePostDialog />
              </div>
            </div>

            {/* Promo banner */}
            {promoVisible && (
              <div className="bg-muted relative p-4 rounded-xl">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 size-8 p-0 text-muted-foreground"
                  onClick={() => setPromoVisible(false)}
                >
                  <X className="size-4" />
                </Button>
                <div className="pt-2">
                  <div className="bg-background mb-3 flex size-8 items-center justify-center rounded-lg border">
                    <X className="size-4" />
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Enjoy unlimited access to our template by paying just a small fee.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setPromoVisible(false)}>
                      Dismiss
                    </Button>
                    <Button size="sm" asChild>
                      <a href="#" target="_blank" rel="noreferrer">Go Pro</a>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </aside>

          {/* ── Main Feed ── */}
          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-xl space-y-4">
              {/* Stories */}
              <div className="flex gap-1 overflow-x-auto py-1.5 scrollbar-hide">
                {/* Create story */}
                <div className="flex cursor-pointer flex-col items-center gap-2 px-2">
                  <Avatar className="size-14 ring-2 ring-muted">
                    <AvatarFallback>
                      <Plus className="size-4 opacity-50" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-muted-foreground text-xs">Create</span>
                </div>

                {stories.map((story) => (
                  <div key={story.name} className="flex cursor-pointer flex-col items-center gap-2 px-1 hover:opacity-80 lg:px-2">
                    <Avatar
                      className={`size-14 outline-2 outline-offset-2 ${
                        story.active ? "outline outline-green-600" : "outline outline-black/20"
                      }`}
                    >
                      <AvatarImage src={story.avatar} />
                      <AvatarFallback>{story.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-muted-foreground max-w-16 truncate text-xs">{story.name}</span>
                  </div>
                ))}
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {posts.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onLike={handleLike}
                    onBookmark={handleBookmark}
                  />
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline">More posts</Button>
              </div>
            </div>
          </main>

          {/* ── Right Sidebar ── */}
          <aside className="hidden flex-col gap-4 lg:flex sticky top-7 z-40 h-fit">
            {/* Suggested */}
            <div className="bg-muted flex flex-col p-4 rounded-xl gap-6">
              <div className="flex flex-row items-center justify-between">
                <span className="font-semibold">Suggested For You</span>
                <Button variant="link" size="sm" className="text-xs font-normal h-auto p-0">
                  See All
                </Button>
              </div>
              <div className="space-y-3">
                {sugg.map((s) => (
                  <div key={s.handle + s.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8">
                        <AvatarImage src={s.avatar} />
                        <AvatarFallback>{s.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{s.name}</p>
                        <p className="text-muted-foreground text-xs">{s.handle}</p>
                      </div>
                    </div>
                    <Button
                      variant="link"
                      size="sm"
                      className={`text-xs ${s.followed ? "text-muted-foreground" : "text-primary"}`}
                      onClick={() => toggleFollow(sugg, setSugg, s.handle)}
                    >
                      {s.followed ? "Followed" : "Follow"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Artists */}
            <div className="bg-muted flex flex-col p-4 rounded-xl gap-6">
              <div className="flex flex-row items-center justify-between">
                <span className="font-semibold">Trending Artists</span>
                <Button variant="link" size="sm" className="text-xs font-normal h-auto p-0">
                  See All
                </Button>
              </div>
              <div className="space-y-3">
                {artists.map((a) => (
                  <div key={a.handle + a.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8">
                        <AvatarImage src={a.avatar} />
                        <AvatarFallback>{a.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{a.name}</p>
                        <p className="text-muted-foreground text-xs">{a.handle}</p>
                      </div>
                    </div>
                    <Button
                      variant="link"
                      size="sm"
                      className={`text-xs ${a.followed ? "text-muted-foreground" : "text-primary"}`}
                      onClick={() => toggleFollow(artists, setArtists, a.handle)}
                    >
                      {a.followed ? "Followed" : "Follow"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}