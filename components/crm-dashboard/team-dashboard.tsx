"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  CirclePlus,
  Columns2,
  MoreHorizontal,
  UserPlus,
  Users,
  UserCheck,
  UserX,
  Clock,
  Search,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────
// Primary blue : #0D2B6B  deep navy
// Accent blue  : #1A56DB  link / highlight
// Action red   : #D72638  CTA buttons
// Surface      : #F5F7FC  cool off-white bg

// ─── Types ────────────────────────────────────────────────────────────────────
type Status = "active" | "pending" | "inactive";
type Plan = "Basic" | "Team" | "Enterprise";

interface User {
  id: string;
  name: string;
  avatar?: string;
  role: string;
  plan: Plan;
  email: string;
  country: string;
  status: Status;
}

// ─── Sample Data ──────────────────────────────────────────────────────────────
const data: User[] = [
  {
    id: "1",
    name: "Stern Thireau",
    avatar: "/images/avatars/01.png",
    role: "Construction Foreman",
    plan: "Basic",
    email: "sthireau0@prlog.org",
    country: "Portugal",
    status: "active",
  },
  {
    id: "2",
    name: "Ford McKibbin",
    avatar: "/images/avatars/02.png",
    role: "Project Manager",
    plan: "Team",
    email: "fmckibbin1@slate.com",
    country: "Mexico",
    status: "pending",
  },
  {
    id: "3",
    name: "Foss Roglieri",
    avatar: "/images/avatars/03.png",
    role: "Construction Expeditor",
    plan: "Basic",
    email: "froglieri2@xing.com",
    country: "Brazil",
    status: "active",
  },
  {
    id: "4",
    name: "Maurits Elgey",
    avatar: "/images/avatars/04.png",
    role: "Construction Manager",
    plan: "Enterprise",
    email: "melgey3@blogger.com",
    country: "Poland",
    status: "active",
  },
  {
    id: "5",
    name: "Gun Kaasmann",
    role: "Construction Foreman",
    plan: "Team",
    email: "gkaasmann4@economist.com",
    country: "Russia",
    status: "pending",
  },
  {
    id: "6",
    name: "Edmund McCrae",
    role: "Project Manager",
    plan: "Team",
    email: "emccrae5@woothemes.com",
    country: "Poland",
    status: "pending",
  },
  {
    id: "7",
    name: "Samuel Totman",
    role: "Surveyor",
    plan: "Basic",
    email: "stotman6@wisc.edu",
    country: "France",
    status: "active",
  },
  {
    id: "8",
    name: "Patsy Cuardall",
    role: "Architect",
    plan: "Basic",
    email: "pcuardall7@barnesandnoble.com",
    country: "Indonesia",
    status: "inactive",
  },
  {
    id: "9",
    name: "Barnaby Carl",
    role: "Subcontractor",
    plan: "Basic",
    email: "bcarl8@alexa.com",
    country: "Peru",
    status: "active",
  },
  {
    id: "10",
    name: "Mary Stivens",
    avatar: "/images/avatars/10.png",
    role: "Construction Manager",
    plan: "Basic",
    email: "mstivens9@facebook.com",
    country: "Russia",
    status: "active",
  },
  {
    id: "11",
    name: "Lena Hoffmann",
    role: "Project Manager",
    plan: "Enterprise",
    email: "lhoffmann@example.com",
    country: "Germany",
    status: "active",
  },
  {
    id: "12",
    name: "Kofi Asante",
    role: "Site Engineer",
    plan: "Team",
    email: "kasante@example.com",
    country: "Ghana",
    status: "pending",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const AVATAR_PALETTES = [
  { bg: "#0D2B6B", text: "#fff" },
  { bg: "#1A56DB", text: "#fff" },
  { bg: "#1e4d8c", text: "#fff" },
  { bg: "#0369a1", text: "#fff" },
  { bg: "#2563EB", text: "#fff" },
  { bg: "#164e63", text: "#fff" },
];
function avatarColor(name: string) {
  return AVATAR_PALETTES[name.charCodeAt(0) % AVATAR_PALETTES.length];
}

// ─── Status Badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: Status }) {
  const cfg = {
    active: {
      wrap: "border-emerald-200 bg-emerald-50  text-emerald-700",
      dot: "bg-emerald-500",
    },
    pending: {
      wrap: "border-amber-200   bg-amber-50    text-amber-700",
      dot: "bg-amber-500",
    },
    inactive: {
      wrap: "border-red-200     bg-red-50      text-red-700",
      dot: "bg-red-500",
    },
  }[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${cfg.wrap}`}
    >
      <span className={`size-1.5 rounded-full ${cfg.dot}`} />
      <span className="capitalize">{status}</span>
    </span>
  );
}

// ─── Plan Badge ───────────────────────────────────────────────────────────────
function PlanBadge({ plan }: { plan: Plan }) {
  const cfg = {
    Basic: "text-slate-500  bg-slate-100",
    Team: "text-blue-700   bg-blue-50",
    Enterprise: "text-indigo-700 bg-indigo-50",
  }[plan];
  return (
    <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${cfg}`}>
      {plan}
    </span>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({
  label,
  value,
  icon: Icon,
  accent,
  delay,
}: {
  label: string;
  value: number;
  icon: React.ElementType;
  accent: string;
  delay: number;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
      style={{
        animation: `fadeSlideUp 0.4s ease both`,
        animationDelay: `${delay}ms`,
      }}
    >
      <div
        className="absolute inset-y-0 left-0 w-1 rounded-l-xl"
        style={{ background: accent }}
      />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {label}
          </p>
          <p className="mt-1 text-3xl font-extrabold tracking-tight text-slate-800">
            {value}
          </p>
        </div>
        <div
          className="flex size-10 items-center justify-center rounded-xl"
          style={{ background: `${accent}18` }}
        >
          <Icon
            className="size-5"
            style={{ color: accent }}
            strokeWidth={2.2}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Filter Popover ───────────────────────────────────────────────────────────
function FilterPopover<T extends string>({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: T[];
  selected: T[];
  onChange: (v: T[]) => void;
}) {
  const toggle = (o: T) =>
    onChange(
      selected.includes(o) ? selected.filter((s) => s !== o) : [...selected, o],
    );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex h-9 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 shadow-none transition-colors hover:border-[#1A56DB] hover:text-[#1A56DB]">
          <CirclePlus className="size-3.5" />
          {label}
          {selected.length > 0 && (
            <span className="flex size-4 items-center justify-center rounded-full bg-[#0D2B6B] text-[10px] text-white">
              {selected.length}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-44 p-1.5 shadow-xl" align="start">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-slate-50"
          >
            <Checkbox
              checked={selected.includes(option)}
              onCheckedChange={() => toggle(option)}
              className="border-slate-300 data-[state=checked]:bg-[#0D2B6B] data-[state=checked]:border-[#0D2B6B]"
            />
            <span className="capitalize font-medium text-slate-700">
              {option}
            </span>
          </label>
        ))}
      </PopoverContent>
    </Popover>
  );
}

// ─── Column Definitions ───────────────────────────────────────────────────────
const SortBtn = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 transition-colors hover:text-[#0D2B6B]"
  >
    {label} <ArrowUpDown className="size-3" />
  </button>
);

const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
        aria-label="Select all"
        className="border-slate-300 data-[state=checked]:bg-[#0D2B6B] data-[state=checked]:border-[#0D2B6B]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(v) => row.toggleSelected(!!v)}
        aria-label="Select row"
        className="border-slate-300 data-[state=checked]:bg-[#0D2B6B] data-[state=checked]:border-[#0D2B6B]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: () => (
      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
        Name
      </span>
    ),
    cell: ({ row }) => {
      const user = row.original;
      const pal = avatarColor(user.name);
      return (
        <div className="flex items-center gap-3">
          <Avatar className="size-8 rounded-lg">
            {user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
            <AvatarFallback
              className="rounded-lg text-[11px] font-bold"
              style={{ background: pal.bg, color: pal.text }}
            >
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
          <span className="font-semibold text-slate-800">{user.name}</span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <SortBtn
        label="Role"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => (
      <span className="text-sm text-slate-600">{row.getValue("role")}</span>
    ),
    filterFn: (row, id, value: string[]) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "plan",
    header: ({ column }) => (
      <SortBtn
        label="Plan"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => <PlanBadge plan={row.getValue("plan")} />,
    filterFn: (row, id, value: string[]) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <SortBtn
        label="Email"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => (
      <span className="text-sm text-slate-500">{row.getValue("email")}</span>
    ),
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <SortBtn
        label="Country"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => (
      <span className="text-sm text-slate-600">{row.getValue("country")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <SortBtn
        label="Status"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    filterFn: (row, id, value: string[]) => value.includes(row.getValue(id)),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="size-8 rounded-lg p-0 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44 shadow-xl">
            <DropdownMenuLabel className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuItem
              className="cursor-pointer text-sm"
              onClick={() => navigator.clipboard.writeText(user.email)}
            >
              Copy email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-sm">
              View profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-sm">
              Edit user
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-sm text-red-600 focus:bg-red-50 focus:text-red-600">
              Delete user
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function UsersTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<Status[]>([]);
  const [planFilter, setPlanFilter] = React.useState<Plan[]>([]);
  const [roleFilter, setRoleFilter] = React.useState<string[]>([]);

  const allRoles = React.useMemo(
    () => Array.from(new Set(data.map((u) => u.role))).sort(),
    [],
  );

  React.useEffect(() => {
    const f: ColumnFiltersState = [];
    if (statusFilter.length) f.push({ id: "status", value: statusFilter });
    if (planFilter.length) f.push({ id: "plan", value: planFilter });
    if (roleFilter.length) f.push({ id: "role", value: roleFilter });
    setColumnFilters(f);
  }, [statusFilter, planFilter, roleFilter]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    globalFilterFn: "includesString",
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    initialState: { pagination: { pageSize: 10 } },
  });

  const activeCount = data.filter((u) => u.status === "active").length;
  const pendingCount = data.filter((u) => u.status === "pending").length;
  const inactiveCount = data.filter((u) => u.status === "inactive").length;
  const filteredCount = table.getFilteredRowModel().rows.length;
  const selectedCount = Object.keys(rowSelection).length;

  return (
    <section className="h-[92vh] bg-primary-cbe-50/30 overflow-hidden overflow-clip overflow-y-auto">
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .animate-fade-up   { animation: fadeSlideUp 0.4s ease both; }
        .animate-fade-in   { animation: fadeIn 0.35s ease both;     }

        /* Subtle hover shimmer on stat cards */
        .stat-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.45) 100%);
          pointer-events: none;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.25s;
        }
        .stat-card:hover::after { opacity: 1; }

        /* Nav underline slide */
        .nav-active {
          position: relative;
        }
        .nav-active::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px;
          background: #D72638;
          border-radius: 2px;
        }

        /* Row entrance */
        .row-in {
          animation: fadeIn 0.3s ease both;
        }

        /* Red button glow on hover */
        .btn-action:hover {
          box-shadow: 0 4px 18px rgba(215, 38, 56, 0.38);
        }
      `}</style>

      <div className="mx-auto max-w-screen-2xl space-y-5 px-6 py-7">
        <div className="fm-a fm-d0 flex items-center justify-between">
          <div>
            <h1 className="text-[22px] font-bold tracking-tight text-slate-900">
              User Management
            </h1>
            <p className="mt-0.5 text-sm text-slate-400">
              Est nostrud nostrud elit fugiat dolor occaecat ipsum.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm">
              <UserPlus className="size-3.5" /> Add New User
            </Button>
          </div>
        </div>

        {/* ── Stat Cards ──────────────────────────────────────────────── */}
        <div className="mb-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard
            label="Total Users"
            value={data.length}
            icon={Users}
            accent="#0D2B6B"
            delay={60}
          />
          <StatCard
            label="Active"
            value={activeCount}
            icon={UserCheck}
            accent="#10b981"
            delay={120}
          />
          <StatCard
            label="Pending"
            value={pendingCount}
            icon={Clock}
            accent="#f59e0b"
            delay={180}
          />
          <StatCard
            label="Inactive"
            value={inactiveCount}
            icon={UserX}
            accent="#D72638"
            delay={240}
          />
        </div>

        {/* ── Table Card ──────────────────────────────────────────────── */}
        <div
          className="animate-fade-up overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          style={{ animationDelay: "100ms" }}
        >
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 px-5 py-4">
            <div className="relative flex-1 min-w-[200px] max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search users…"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="h-9 rounded-full border-slate-200 bg-[#F5F7FC] pl-8 text-sm placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-[#1A56DB] focus-visible:border-[#1A56DB]"
              />
            </div>

            <FilterPopover<Status>
              label="Status"
              options={["active", "pending", "inactive"]}
              selected={statusFilter}
              onChange={setStatusFilter}
            />
            <FilterPopover<Plan>
              label="Plan"
              options={["Basic", "Team", "Enterprise"]}
              selected={planFilter}
              onChange={setPlanFilter}
            />
            <FilterPopover<string>
              label="Role"
              options={allRoles}
              selected={roleFilter}
              onChange={setRoleFilter}
            />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="ml-auto flex h-9 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 transition-colors hover:border-[#1A56DB] hover:text-[#1A56DB]">
                  <Columns2 className="size-3.5" />
                  <span className="hidden md:inline">Columns</span>
                  <ChevronDown className="size-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="shadow-xl">
                {table
                  .getAllColumns()
                  .filter((c) => c.getCanHide())
                  .map((col) => (
                    <DropdownMenuCheckboxItem
                      key={col.id}
                      className="cursor-pointer capitalize text-sm"
                      checked={col.getIsVisible()}
                      onCheckedChange={(v) => col.toggleVisibility(!!v)}
                    >
                      {col.id}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((hg) => (
                  <TableRow
                    key={hg.id}
                    className="border-slate-100 hover:bg-transparent"
                  >
                    {hg.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className="whitespace-nowrap bg-[#F5F7FC] px-4 py-3 first:pl-5 last:pr-5"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row, i) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="row-in border-slate-100 transition-colors hover:bg-[#EEF3FF] data-[state=selected]:bg-[#EEF3FF]"
                      style={{ animationDelay: `${i * 28}ms` }}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="whitespace-nowrap px-4 py-3 first:pl-5 last:pr-5"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-32 text-center text-slate-400"
                    >
                      No users found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-slate-100 bg-[#FAFBFE] px-5 py-3">
            <p className="text-xs font-medium text-slate-400">
              {selectedCount > 0
                ? `${selectedCount} of ${filteredCount} selected`
                : `${filteredCount} user${filteredCount !== 1 ? "s" : ""}`}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="flex h-8 items-center rounded-full border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 transition-colors hover:border-[#1A56DB] hover:text-[#1A56DB] disabled:pointer-events-none disabled:opacity-35"
              >
                ← Prev
              </button>
              <span className="min-w-[80px] text-center text-xs text-slate-400 tabular-nums">
                Page {table.getState().pagination.pageIndex + 1} /{" "}
                {Math.max(1, table.getPageCount())}
              </span>
              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="flex h-8 items-center rounded-full border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 transition-colors hover:border-[#1A56DB] hover:text-[#1A56DB] disabled:pointer-events-none disabled:opacity-35"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
