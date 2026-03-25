"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Upload,
  Folder,
  FileText,
  MoreHorizontal,
  ChevronRight,
  Home,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  FolderPlus,
  X,
} from "lucide-react";

// Types
type FileType = "folder" | "pdf" | "sketch" | "figma" | "word" | "ai" | "ps";

interface FileItem {
  id: string;
  name: string;
  type: FileType;
  date: string;
  size: string;
  owner?: string;
  ownerAvatar?: string;
  location?: string;
  modified?: string;
  created?: string;
}

interface FileSettings {
  fileSharing: boolean;
  backup: boolean;
  sync: boolean;
}

type BreadcrumbItem = { label: string; path: string[] };

// Sample Data
const ROOT_FILES: FileItem[] = [
  { id: "1",  name: "Arion – Admin Dashboard & UI Kit",  type: "sketch", date: "12.09.20", size: "1.2 MB", owner: "ArtTemplate", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "2",  name: "Brand Styles Guide",                type: "pdf",    date: "12.09.20", size: "4.5 MB", owner: "ArtTemplate", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "3",  name: "Brand Styles Guide",                type: "pdf",    date: "12.09.20", size: "4.5 MB", owner: "ArtTemplate", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "4",  name: "Design",                            type: "folder", date: "12.09.20", size: "5.8 GB", ownerAvatar: "/images/avatars/01.png", owner: "John D.", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "5",  name: "Design",                            type: "ai",     date: "12.09.20", size: "1.9 GB", owner: "ArtTemplate", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "6",  name: "Documents",                         type: "folder", date: "12.09.20", size: "440 MB", ownerAvatar: "/images/avatars/09.png", owner: "Jane S.", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "7",  name: "Downloads",                         type: "folder", date: "12.09.20", size: "10.1 GB", owner: "ArtTemplate", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "8",  name: "Music",                             type: "folder", date: "12.09.20", size: "1.5 GB", ownerAvatar: "/images/avatars/01.png", owner: "John D.", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "9",  name: "Pictures",                          type: "folder", date: "12.09.20", size: "1.7 GB", ownerAvatar: "/images/avatars/09.png", owner: "Jane S.", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "10", name: "Project Brief",                     type: "figma",  date: "12.09.20", size: "1.4 MB", owner: "ArtTemplate", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "11", name: "Project Brief",                     type: "word",   date: "12.09.20", size: "1.2 MB", owner: "ArtTemplate", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "12", name: "Projects",                          type: "folder", date: "12.09.20", size: "3.2 GB", ownerAvatar: "/images/avatars/04.png", owner: "Mike R.", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "13", name: "Rocket – Admin Dashboard & UI Kit", type: "figma",  date: "12.09.20", size: "1.8 MB", owner: "ArtTemplate", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "14", name: "Rocket – Admin Dashboard & UI Kit", type: "sketch", date: "12.09.20", size: "1.5 MB", owner: "ArtTemplate", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "15", name: "vCard – Resume",                    type: "ps",     date: "12.09.20", size: "2.5 MB", owner: "ArtTemplate", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
];

const DESIGN_FILES: FileItem[] = [
  { id: "d1", name: "Mockups",       type: "figma",  date: "12.09.20", size: "45 MB",  ownerAvatar: "/images/avatars/03.png", owner: "Sara K.", location: "Design", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  { id: "d2", name: "UI Components", type: "folder", date: "12.09.20", size: "2.1 GB", ownerAvatar: "/images/avatars/05.png", owner: "Tom B.",  location: "Design", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
];

const FOLDER_DATA: Record<string, FileItem[]> = {
  "Design": DESIGN_FILES,
  "UI Components": [],
};

function fileTypeLabel(type: FileType): string {
  const map: Record<FileType, string> = {
    folder: "Folder", pdf: "PDF Document", sketch: "Sketch File",
    figma: "Figma File", word: "Word Document", ai: "Illustrator File", ps: "Photoshop File",
  };
  return map[type];
}

// File Icon
function FileIcon({ type, size = "sm" }: { type: FileType; size?: "sm" | "lg" }) {
  if (type === "folder") {
    return <Folder className={size === "lg" ? "h-16 w-16 text-yellow-500" : "h-5 w-5 text-yellow-500"} />;
  }

  const configs: Record<Exclude<FileType, "folder">, { bg: string; label: string }> = {
    pdf: { bg: "bg-red-600", label: "" }, sketch: { bg: "bg-yellow-500", label: "S" },
    figma: { bg: "bg-purple-500", label: "F" }, word: { bg: "bg-blue-600", label: "W" },
    ai: { bg: "bg-orange-600", label: "Ai" }, ps: { bg: "bg-blue-800", label: "Ps" },
  };
  const { bg, label } = configs[type];

  if (size === "lg") {
    return (
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl font-bold text-2xl text-white ${bg}`}>
        {type === "pdf" ? <FileText className="h-8 w-8" /> : label}
      </div>
    );
  }

  return (
    <div className={`flex h-5 w-5 items-center justify-center rounded text-xs font-bold text-white ${bg}`}>
      {type === "pdf" ? <FileText className="size-3" /> : label}
    </div>
  );
}

// File Detail Panel
function FileDetailPanel({ file, onClose }: { file: FileItem; onClose: () => void }) {
  const [settings, setSettings] = useState<FileSettings>({ fileSharing: true, backup: false, sync: false });
  const toggle = (key: keyof FileSettings) => setSettings((s) => ({ ...s, [key]: !s[key] }));

  const infoRows = [
    { label: "Type",     value: fileTypeLabel(file.type) },
    { label: "Size",     value: file.size },
    { label: "Owner",    value: file.owner ?? "—" },
    { label: "Location", value: file.location ?? "My Files" },
    { label: "Modified", value: file.modified ?? "—" },
    { label: "Created",  value: file.created ?? "—" },
  ];

  const settingRows: { key: keyof FileSettings; label: string }[] = [
    { key: "fileSharing", label: "File Sharing" },
    { key: "backup",      label: "Backup" },
    { key: "sync",        label: "Sync" },
  ];

  return (
    <div className="flex h-full w-72 shrink-0 flex-col border-l bg-background overflow-y-auto">
      {/* Close button */}
      <div className="flex justify-end p-3">
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Icon + name */}
      <div className="flex flex-col items-center gap-3 px-6 pb-6">
        <FileIcon type={file.type} size="lg" />
        <p className="text-center text-sm font-semibold leading-snug">{file.name}</p>
      </div>

      <div className="border-t" />

      {/* INFO */}
      <div className="px-6 py-5 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Info</p>
        <dl className="space-y-2.5">
          {infoRows.map(({ label, value }) => (
            <div key={label} className="flex items-baseline justify-between gap-3">
              <dt className="text-sm text-muted-foreground shrink-0">{label}</dt>
              <dd className="text-sm text-right truncate max-w-[150px]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-t" />

      {/* SETTINGS */}
      <div className="px-6 py-5 space-y-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Settings</p>
        {settingRows.map(({ key, label }) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-sm">{label}</span>
            <Switch checked={settings[key]} onCheckedChange={() => toggle(key)} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Upload Modal
function UploadModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Upload Files</DialogTitle>
          <DialogDescription>Drag and drop files here or click to select files</DialogDescription>
        </DialogHeader>
        <div
          className={`mt-2 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-colors cursor-pointer
            ${dragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/50"}`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files[0]; if (f) setFile(f); }}
          onClick={() => document.getElementById("file-upload-input")?.click()}
        >
          <input id="file-upload-input" type="file" className="hidden" onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])} />
          <Upload className="h-10 w-10 text-muted-foreground mb-3" />
          {file ? (
            <p className="text-sm font-medium">{file.name}</p>
          ) : (
            <>
              <p className="text-sm text-muted-foreground">Upload a file <span className="text-foreground font-medium">or drag and drop</span></p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG, GIF up to 10MB</p>
            </>
          )}
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button disabled={!file} onClick={() => onOpenChange(false)}>Start Upload</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Main Component
export default function FileExplorer() {
  const [path, setPath]             = useState<string[]>([]);
  const [search, setSearch]         = useState("");
  const [sortDir, setSortDir]       = useState<"asc" | "desc">("asc");
  const [selected, setSelected]     = useState<Set<string>>(new Set());
  const [uploadOpen, setUploadOpen] = useState(false);
  const [activeFile, setActiveFile] = useState<FileItem | null>(null);
  const [rowsPerPage]               = useState(25);

  const currentFiles: FileItem[] =
    path.length === 0 ? ROOT_FILES : FOLDER_DATA[path[path.length - 1]] ?? [];

  const filtered = currentFiles
    .filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortDir === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    selected.size === filtered.length
      ? setSelected(new Set())
      : setSelected(new Set(filtered.map((f) => f.id)));
  };

  const handleRowClick = (file: FileItem) => {
    setActiveFile((prev) => (prev?.id === file.id ? null : file));
  };

  const handleRowDoubleClick = (file: FileItem) => {
    if (file.type !== "folder") return;
    setPath((prev) => [...prev, file.name]);
    setSelected(new Set());
    setSearch("");
    setActiveFile(null);
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Files", path: [] },
    ...path.map((seg, i) => ({ label: seg, path: path.slice(0, i + 1) })),
  ];

  const isEmpty = filtered.length === 0;

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-2">
              {idx > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
              {idx === 0 ? (
                <button
                  onClick={() => { setPath([]); setSelected(new Set()); setActiveFile(null); }}
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {path.length === 0
                    ? <h1 className="text-2xl font-bold tracking-tight text-foreground">Files</h1>
                    : <Home className="h-4 w-4" />}
                </button>
              ) : (
                <button
                  onClick={() => { setPath(crumb.path); setSelected(new Set()); setActiveFile(null); }}
                  className={`transition-colors ${idx === breadcrumbs.length - 1 ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {crumb.label}
                </button>
              )}
            </span>
          ))}
        </div>
        <Button onClick={() => setUploadOpen(true)}>
          <Upload className="mr-1.5 h-4 w-4" />
          Upload
        </Button>
      </div>

      {/* Body */}
      <div className="flex flex-1 border-t overflow-hidden">
        {/* File list */}
        <div className="flex min-w-0 flex-1 flex-col overflow-auto">
          {/* Toolbar */}
          <div className="flex items-center gap-2 border-b px-4 py-2 sticky top-0 bg-background z-10">
            <Checkbox
              checked={filtered.length > 0 && selected.size === filtered.length}
              onCheckedChange={toggleAll}
              aria-label="Select all"
            />
            <Input
              placeholder="Search for files and folders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border-0 bg-background shadow-none focus-visible:ring-0"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">Sort: Name {sortDir === "asc" ? "↑" : "↓"}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSortDir("asc")}>Name ↑</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortDir("desc")}>Name ↓</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Rows */}
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4 text-muted-foreground">
              <div className="rounded-full bg-muted p-5">
                <FolderPlus className="h-10 w-10" />
              </div>
              <p className="text-base">This folder is empty.</p>
              <Button onClick={() => setUploadOpen(true)}>
                <Upload className="mr-1.5 h-4 w-4" />
                Upload
              </Button>
            </div>
          ) : (
            filtered.map((file) => {
              const isActive = activeFile?.id === file.id;
              return (
                <div
                  key={file.id}
                  className={`group flex cursor-pointer items-center justify-between border-b px-4 py-3 transition-colors
                    ${isActive ? "bg-muted/70" : selected.has(file.id) ? "bg-muted/50" : "hover:bg-muted/40"}`}
                  onClick={() => handleRowClick(file)}
                  onDoubleClick={() => handleRowDoubleClick(file)}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <Checkbox
                      checked={selected.has(file.id)}
                      onCheckedChange={() => toggleSelect(file.id)}
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Select ${file.name}`}
                    />
                    <div className="shrink-0"><FileIcon type={file.type} /></div>
                    <span className="min-w-0 truncate text-sm font-medium">{file.name}</span>
                  </div>

                  <div className="ml-4 flex shrink-0 items-center gap-4 text-sm text-muted-foreground">
                    <span className="hidden w-16 text-right lg:inline">{file.date}</span>
                    <span className="hidden w-16 text-right lg:inline">{file.size}</span>
                    <Avatar className="h-6 w-6">
                      {file.ownerAvatar && <AvatarImage src={file.ownerAvatar} />}
                      <AvatarFallback className="text-xs">U</AvatarFallback>
                    </Avatar>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem>Compress</DropdownMenuItem>
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem>Move</DropdownMenuItem>
                        <DropdownMenuItem>Copy</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500 focus:text-red-500">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              );
            })
          )}

          {/* Pagination */}
          {!isEmpty && (
            <div className="mt-4 flex items-center justify-between gap-4 px-4 pb-4">
              <div className="flex items-center gap-3">
                <label htmlFor="rows-select" className="hidden text-sm text-muted-foreground font-medium lg:block">
                  Rows per page
                </label>
                <Select defaultValue="25">
                  <SelectTrigger id="rows-select" className="h-8 w-16 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground">1–{Math.min(rowsPerPage, filtered.length)}</span>
                  {" "}of{" "}
                  <span className="text-foreground">{filtered.length}</span>
                </p>
                <nav className="flex items-center gap-0.5">
                  {([ChevronFirst, ChevronLeft, ChevronRight, ChevronLast] as const).map((Icon, i) => (
                    <Button key={i} variant="ghost" size="icon" className="h-8 w-8" disabled>
                      <Icon className="h-4 w-4" />
                    </Button>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>

        {/* Detail Panel */}
        {activeFile && (
          <FileDetailPanel file={activeFile} onClose={() => setActiveFile(null)} />
        )}
      </div>

      <UploadModal open={uploadOpen} onOpenChange={setUploadOpen} />
    </div>
  );
}