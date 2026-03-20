"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
type Product = {
  id: string;
  icon: string;
  name: string;
  price: number;
  bg: string;
  category: string;
};
type CartItem = {
  id: string;
  icon: string;
  name: string;
  price: number;
  qty: number;
};
type PayMethod = "cash" | "mpesa" | "card";

// ─── Static data ─────────────────────────────────────────────────────────────
const STATS = [
  { value: "2,500+", label: "Active businesses" },
  { value: "KSh 50M+", label: "Processed monthly" },
  { value: "99.9%", label: "Uptime guarantee" },
];

const CATEGORIES = ["All", "Drinks", "Snacks", "Dairy", "Bakery"];

const PRODUCTS: Product[] = [
  {
    id: "milk",
    icon: "🥛",
    name: "Fresh Milk",
    price: 65,
    bg: "bg-amber-100",
    category: "Dairy",
  },
  {
    id: "bread",
    icon: "🍞",
    name: "White Bread",
    price: 55,
    bg: "bg-green-100",
    category: "Bakery",
  },
  {
    id: "soda",
    icon: "🥤",
    name: "Soda 500ml",
    price: 70,
    bg: "bg-red-100",
    category: "Drinks",
  },
  {
    id: "shampoo",
    icon: "🧴",
    name: "Shampoo",
    price: 150,
    bg: "bg-violet-100",
    category: "All",
  },
  {
    id: "choc",
    icon: "🍫",
    name: "Chocolate",
    price: 45,
    bg: "bg-amber-100",
    category: "Snacks",
  },
  {
    id: "eggs",
    icon: "🥚",
    name: "Eggs (tray)",
    price: 480,
    bg: "bg-green-100",
    category: "Dairy",
  },
  {
    id: "water",
    icon: "💧",
    name: "Water 1L",
    price: 50,
    bg: "bg-sky-100",
    category: "Drinks",
  },
  {
    id: "tomato",
    icon: "🍅",
    name: "Tomato Sauce",
    price: 95,
    bg: "bg-red-100",
    category: "All",
  },
  {
    id: "sweets",
    icon: "🍬",
    name: "Sweets Pack",
    price: 20,
    bg: "bg-gray-100",
    category: "Snacks",
  },
];

const INITIAL_CART: CartItem[] = [
  { id: "milk", icon: "🥛", name: "Fresh Milk", price: 65, qty: 2 },
  { id: "bread", icon: "🍞", name: "White Bread", price: 55, qty: 1 },
  { id: "soda", icon: "🥤", name: "Soda 500ml", price: 70, qty: 2 },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
const fmt = (n: number) => `KSh ${n.toLocaleString()}`;

// Mini sparkline path (static decorative)
const SPARKLINE = "M0,18 L6,14 L12,16 L18,10 L24,12 L30,6 L36,8 L42,4 L48,2";

// ─── Component ───────────────────────────────────────────────────────────────
export default function SiteHero() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const ampm = h >= 12 ? "PM" : "AM";
      setTime(`${h % 12 || 12}:${m < 10 ? "0" : ""}${m} ${ampm}`);
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  const [cart, setCart] = useState<CartItem[]>(INITIAL_CART);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [payMethod, setPayMethod] = useState<PayMethod>("cash");
  const [phone, setPhone] = useState("");
  const [flashId, setFlashId] = useState<string | null>(null);
  const [stage, setStage] = useState<"idle" | "processing" | "success">("idle");
  const [txCount, setTxCount] = useState(47);
  const [sales, setSales] = useState(28_450);
  const [showToast, setShowToast] = useState(true);

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const vat = Math.round(subtotal * 0.16);
  const total = subtotal + vat;
  const totalQty = cart.reduce((s, c) => s + c.qty, 0);

  const visible = PRODUCTS.filter((p) => {
    const matchCat = category === "All" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const hit = prev.find((c) => c.id === p.id);
      return hit
        ? prev.map((c) => (c.id === p.id ? { ...c, qty: c.qty + 1 } : c))
        : [
            ...prev,
            { id: p.id, icon: p.icon, name: p.name, price: p.price, qty: 1 },
          ];
    });
    setFlashId(p.id);
    setTimeout(() => setFlashId(null), 350);
  };

  const updateQty = (id: string, delta: number) =>
    setCart((prev) => {
      const item = prev.find((c) => c.id === id);
      if (!item) return prev;
      return item.qty + delta <= 0
        ? prev.filter((c) => c.id !== id)
        : prev.map((c) => (c.id === id ? { ...c, qty: c.qty + delta } : c));
    });

  const removeItem = (id: string) =>
    setCart((prev) => prev.filter((c) => c.id !== id));

  const handleCharge = () => {
    if (cart.length === 0) return;
    setStage("processing");
    setTimeout(() => {
      setStage("success");
      setTxCount((n) => n + 1);
      setSales((s) => s + total);
      setShowToast(true);
    }, 1_200);
  };

  const newTransaction = () => {
    setCart([]);
    setStage("idle");
    setPayMethod("cash");
    setPhone("");
  };

  const chargeLabel =
    stage === "processing"
      ? "Processing…"
      : cart.length === 0
        ? "Cart is empty"
        : payMethod === "mpesa"
          ? "Send STK Push"
          : payMethod === "card"
            ? "Process Card"
            : `CHARGE ${fmt(total)}`;

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <section className="w-full overflow-hidden bg-primary-cbe-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
        {/* ── LEFT ──────────────────────────────────────── */}
        <div className="px-6 sm:px-16 xl:px-20 py-14 flex flex-col justify-center relative overflow-hidden gap-7 max-w-full shrink-0">
          <div className="inline-flex items-center gap-3 w-fit">
            <div className="size-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 p-1.5 border border-primary-cbe-100">
              <Image
                src="/logos/approved/pos-dark-icon.svg"
                alt="UltimatePOS"
                width={10}
                height={10}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
              Ultimate POS
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-800 tracking-[-1px]">
            The Ultimate
            <br />
            <span className="text-primary-cbe-500 font-bold">
              Point of Sale
            </span>
            <br />
            System
          </h1>

          <p className="text-primary-cbe-800 text-base leading-relaxed max-w-[340px] sm:max-w-[440px]">
            Built for Kenyan businesses. Manage inventory, process transactions,
            and track revenue — all from one intelligent platform.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-11">
            <Button variant="default" size="lg">
              Book a Demo
              <ArrowRight size={4} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary-cbe-800"
            >
              <Play className="size-3.5 fill-current text-primary-cbe-800 hidden sm:block" />
              Watch Overview
            </Button>
          </div>

          <div className="flex gap-7 pt-7 border-t border-primary-cbe-100">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-bold text-xl text-primary-cbe-800 tracking-[-0.4px]">
                  {s.value}
                </div>
                <div className="text-[11px] text-primary-cbe-800/40 mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ─────────────────────────────────────── */}
        <div className="bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 flex items-center justify-center py-12 px-12 relative overflow-hidden min-h-[600px]">
          {/* ── Atmosphere: glow orbs ─────────────────── */}
          <div className="absolute -top-24 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-16 w-[320px] h-[320px] rounded-full bg-indigo-600/15 blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 -left-20 w-[200px] h-[200px] rounded-full bg-blue-400/10 blur-[60px] pointer-events-none" />

          {/* ── Atmosphere: dot grid ──────────────────── */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />

          {/* ── Atmosphere: diagonal hairlines ───────── */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
            <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
            <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
            <div className="absolute top-1/4 left-0 w-full h-px bg-white" />
            <div className="absolute top-3/4 left-0 w-full h-px bg-white" />
          </div>

          {/* ── FLOATING WIDGET: Revenue (top-right) ─── */}
          <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] min-w-[156px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] text-white/50 font-bold uppercase tracking-wider">
                Today&apos;s Revenue
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[8px] text-green-400 font-semibold">
                  Live
                </span>
              </span>
            </div>
            <div className="text-[20px] font-bold text-white tabular-nums leading-none mb-1.5">
              KSh {sales.toLocaleString()}
            </div>
            {/* Sparkline */}
            <svg
              width="100%"
              height="20"
              viewBox="0 0 48 20"
              fill="none"
              preserveAspectRatio="none"
              className="mb-1.5"
            >
              <path
                d={SPARKLINE}
                stroke="rgba(74,222,128,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <div className="flex items-center gap-1">
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 9l3-4 2 2 3-5"
                  stroke="#4ade80"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[9px] text-green-400 font-semibold">
                +12% vs yesterday
              </span>
            </div>
          </div>

          {/* ── FLOATING WIDGET: Online cashiers (bottom-right) */}
          <div className="absolute bottom-7 right-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
            <span className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-60 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
            </span>
            <span className="text-[10px] font-semibold text-white/80">
              24 cashiers online
            </span>
          </div>

          {/* ── FLOATING WIDGET: Transaction count (bottom-left area) */}
          <div className="absolute bottom-7 left-5 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/25 border border-blue-400/25 flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 10h14M10 3l7 7-7 7"
                  stroke="#93c5fd"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[15px] font-bold text-white tabular-nums leading-none">
                {txCount}
              </div>
              <div className="text-[9px] text-white/45 mt-0.5">
                Transactions today
              </div>
            </div>
          </div>

          {/* ── FLOATING WIDGET: Feature chips (left side) ─ */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
            {[
              {
                icon: "📦",
                label: "Inventory Sync",
                sub: "1,240 items",
                iconBg: "bg-blue-500/20  border-blue-400/25",
              },
              {
                icon: "📊",
                label: "Live Analytics",
                sub: "↑ 12% today",
                iconBg: "bg-green-500/20 border-green-400/25",
                subColor: "text-green-400/90",
              },
              {
                icon: "💳",
                label: "M-Pesa Ready",
                sub: "Instant push",
                iconBg: "bg-amber-500/20 border-amber-400/25",
              },
            ].map((chip) => (
              <div
                key={chip.label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2.5 flex items-center gap-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-white/15 transition-colors cursor-default"
              >
                <div
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center text-[14px] shrink-0 ${chip.iconBg}`}
                >
                  {chip.icon}
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white leading-tight">
                    {chip.label}
                  </div>
                  <div
                    className={`text-[9px] leading-tight mt-0.5 ${(chip as typeof chip & { subColor?: string }).subColor ?? "text-white/45"}`}
                  >
                    {chip.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── FLOATING WIDGET: Payment toast (top-left) ── */}
          {showToast && (
            <div className="absolute top-6 left-5 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3.5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-green-500/25 border border-green-400/25 flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8l4 4 6-7"
                    stroke="#4ade80"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[9.5px] font-bold text-white leading-tight">
                  Payment received
                </div>
                <div className="text-[8.5px] text-white/45 leading-tight mt-0.5">
                  KSh 1,200 · M-Pesa
                </div>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="text-white/25 hover:text-white/60 transition-colors text-[10px] ml-1 bg-transparent border-none cursor-pointer leading-none"
              >
                ✕
              </button>
            </div>
          )}

          {/* ── POS CARD (with perspective tilt) ─────── */}
          <div className="[transform:perspective(1200px)_rotateY(-6deg)_rotateX(1deg)] hover:[transform:perspective(1200px)_rotateY(-1deg)_rotateX(0deg)] transition-all duration-700 ease-out z-10 w-full max-w-[430px]">
            {/* Outer glow ring */}
            <div className="rounded-2xl p-px bg-gradient-to-br from-white/25 via-white/10 to-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.45),0_12px_32px_rgba(0,0,0,0.3)]">
              <div className="bg-white rounded-[15px] overflow-hidden">
                {/* Header bar */}
                <div className="bg-[#1B4FD8] px-3.5 py-2.5 flex items-center justify-between">
                  <span className="text-white font-bold text-[13px]">
                    🏪 Nairobi Supermart — Till 1
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-[7px] h-[7px] rounded-full bg-green-400 animate-pulse shrink-0" />
                    <span className="text-white/60 text-[11px]">{time}</span>
                  </div>
                </div>

                {/* ── SUCCESS SCREEN ────────────────────── */}
                {stage === "success" ? (
                  <div className="h-[430px] flex flex-col items-center justify-center px-7 bg-white">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="#16a34a"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-[15px] font-bold text-[#111] mb-1">
                      Payment Successful
                    </p>
                    <p className="text-[11px] text-[#999] mb-6">
                      Transaction complete
                    </p>

                    <div className="w-full bg-[#F7F9FD] rounded-xl p-4 mb-5 border border-[#E8EDF5]">
                      {[
                        {
                          label: "Amount paid",
                          value: fmt(total),
                          accent: true,
                        },
                        {
                          label: "Method",
                          value:
                            payMethod === "mpesa"
                              ? "M-Pesa"
                              : payMethod === "card"
                                ? "Card"
                                : "Cash",
                          accent: false,
                        },
                        {
                          label: "Items",
                          value: `${totalQty} item${totalQty !== 1 ? "s" : ""}`,
                          accent: false,
                        },
                        { label: "Ref", value: "QWE847321", accent: false },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="flex justify-between items-center py-[6px] border-b border-[#EEF1F8] last:border-0"
                        >
                          <span className="text-[11px] text-[#999]">
                            {row.label}
                          </span>
                          <span
                            className={`text-[11px] font-semibold ${row.accent ? "text-[#111] font-bold" : "text-[#1B4FD8]"}`}
                          >
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={newTransaction}
                      className="w-full bg-[#1B4FD8] text-white rounded-lg py-3 text-[12px] font-bold cursor-pointer border-none hover:bg-[#1641b5] transition-colors"
                    >
                      + New Transaction
                    </button>
                  </div>
                ) : (
                  /* ── NORMAL POS ───────────────────────── */
                  <div className="grid grid-cols-[1fr_170px] h-[430px]">
                    {/* Products panel */}
                    <div className="flex flex-col border-r border-[#EEF1F8] overflow-hidden">
                      <div className="px-2.5 pt-2.5 pb-1.5 shrink-0 space-y-2">
                        <div className="relative">
                          <svg
                            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#bbb]"
                            width="11"
                            height="11"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <circle
                              cx="7"
                              cy="7"
                              r="5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M11 11l3 3"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                          <input
                            className="w-full bg-[#F4F6FB] border border-[#E5EAF4] focus:border-[#1B4FD8] rounded-md pl-7 pr-2.5 py-[6px] text-[11px] text-[#333] outline-none font-[inherit] placeholder:text-[#bbb] transition-colors"
                            placeholder="Search products…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </div>
                        <div className="flex gap-1 overflow-x-auto scrollbar-none pb-0.5">
                          {CATEGORIES.map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setCategory(cat)}
                              className={`px-2.5 py-[3px] rounded-full text-[9px] font-bold whitespace-nowrap cursor-pointer border-none transition-colors ${
                                category === cat
                                  ? "bg-[#1B4FD8] text-white"
                                  : "bg-[#EDF0F9] text-[#666] hover:bg-[#DDE5F4]"
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 overflow-y-auto px-2.5 pb-2.5">
                        {visible.length === 0 ? (
                          <div className="h-full flex items-center justify-center text-[11px] text-[#bbb]">
                            No products found
                          </div>
                        ) : (
                          <div className="grid grid-cols-3 gap-[5px]">
                            {visible.map((p) => (
                              <button
                                key={p.id}
                                onClick={() => addToCart(p)}
                                className={`border rounded-[8px] px-[5px] pt-2 pb-[7px] text-center cursor-pointer transition-all duration-150 w-full font-[inherit] group ${
                                  flashId === p.id
                                    ? "border-[#1B4FD8] bg-blue-50 scale-95"
                                    : "bg-[#F7F9FD] border-[#E8EDF5] hover:border-[#1B4FD8] hover:bg-white hover:scale-[0.97] hover:shadow-sm"
                                }`}
                              >
                                <div
                                  className={`w-[28px] h-[28px] rounded-[8px] mx-auto mb-1.5 flex items-center justify-center text-[14px] ${p.bg} group-hover:scale-110 transition-transform duration-150`}
                                >
                                  {p.icon}
                                </div>
                                <div className="text-[8px] text-[#333] font-semibold leading-tight">
                                  {p.name}
                                </div>
                                <div className="text-[8px] text-[#1B4FD8] font-bold mt-0.5">
                                  {fmt(p.price)}
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Cart panel */}
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#EEF1F8] shrink-0">
                        <span className="text-[10px] font-bold text-[#1B4FD8] tracking-[0.7px] uppercase">
                          Order
                        </span>
                        {totalQty > 0 && (
                          <span className="text-[8px] font-bold text-white bg-[#1B4FD8] rounded-full px-1.5 py-[2px] min-w-[18px] text-center leading-tight">
                            {totalQty}
                          </span>
                        )}
                      </div>

                      <div className="flex-1 overflow-y-auto px-2 py-1.5">
                        {cart.length === 0 ? (
                          <div className="h-full flex flex-col items-center justify-center gap-1.5 opacity-40 select-none">
                            <span className="text-3xl">🛒</span>
                            <span className="text-[9.5px] text-[#888] text-center leading-tight">
                              Tap a product
                              <br />
                              to add to order
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-1.5">
                            {cart.map((item) => (
                              <div
                                key={item.id}
                                className="bg-[#F7F9FD] border border-[#EEF1F8] rounded-[7px] px-2 py-1.5"
                              >
                                <div className="flex items-start justify-between mb-1.5">
                                  <div className="flex items-center gap-1 min-w-0">
                                    <span className="text-[10px] shrink-0">
                                      {item.icon}
                                    </span>
                                    <span className="text-[8px] font-semibold text-[#222] leading-tight truncate">
                                      {item.name}
                                    </span>
                                  </div>
                                  <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-[#d0d4de] hover:text-red-500 transition-colors cursor-pointer bg-transparent border-none p-0 leading-none text-[9px] shrink-0 ml-1"
                                  >
                                    ✕
                                  </button>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1">
                                    <button
                                      onClick={() => updateQty(item.id, -1)}
                                      className="w-4 h-4 rounded-[4px] bg-[#E8EDF5] text-[#444] hover:bg-[#1B4FD8] hover:text-white flex items-center justify-center text-[11px] font-bold cursor-pointer border-none leading-none transition-colors"
                                    >
                                      −
                                    </button>
                                    <span className="text-[9px] font-bold text-[#222] min-w-[12px] text-center tabular-nums">
                                      {item.qty}
                                    </span>
                                    <button
                                      onClick={() => updateQty(item.id, 1)}
                                      className="w-4 h-4 rounded-[4px] bg-[#E8EDF5] text-[#444] hover:bg-[#1B4FD8] hover:text-white flex items-center justify-center text-[11px] font-bold cursor-pointer border-none leading-none transition-colors"
                                    >
                                      +
                                    </button>
                                  </div>
                                  <span className="text-[9px] font-bold text-[#111] tabular-nums">
                                    {fmt(item.price * item.qty)}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="px-2.5 pb-2.5 shrink-0">
                        <div className="h-px bg-[#EEF0F5] mb-2" />
                        <div className="space-y-1 mb-2">
                          <div className="flex justify-between">
                            <span className="text-[9px] text-[#aaa]">
                              Subtotal
                            </span>
                            <span className="text-[9px] font-semibold text-[#666] tabular-nums">
                              {fmt(subtotal)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[9px] text-[#aaa]">
                              VAT (16%)
                            </span>
                            <span className="text-[9px] font-semibold text-[#666] tabular-nums">
                              {fmt(vat)}
                            </span>
                          </div>
                        </div>
                        <div className="h-px bg-[#EEF0F5] mb-2" />
                        <div className="flex justify-between items-baseline mb-3">
                          <span className="text-[11px] font-bold text-[#111]">
                            Total
                          </span>
                          <span className="text-[12px] font-bold text-[#111] tabular-nums">
                            {fmt(total)}
                          </span>
                        </div>

                        {/* Payment method tabs */}
                        <div className="grid grid-cols-3 gap-1 mb-2">
                          {(
                            [
                              { id: "cash", icon: "💵", label: "Cash" },
                              { id: "mpesa", icon: "📱", label: "M-Pesa" },
                              { id: "card", icon: "💳", label: "Card" },
                            ] as {
                              id: PayMethod;
                              icon: string;
                              label: string;
                            }[]
                          ).map((m) => (
                            <button
                              key={m.id}
                              onClick={() => setPayMethod(m.id)}
                              className={`flex flex-col items-center justify-center py-[5px] rounded-[6px] border cursor-pointer font-[inherit] transition-all ${
                                payMethod === m.id
                                  ? "bg-[#EEF3FF] border-[#1B4FD8] text-[#1B4FD8] scale-[0.98]"
                                  : "bg-[#F7F9FD] border-[#E8EDF5] text-[#888] hover:border-[#b3c6f7]"
                              }`}
                            >
                              <span className="text-[12px] leading-tight">
                                {m.icon}
                              </span>
                              <span className="text-[7px] font-bold leading-tight mt-0.5">
                                {m.label}
                              </span>
                            </button>
                          ))}
                        </div>

                        {payMethod === "mpesa" && (
                          <input
                            className="w-full bg-[#F4F6FB] border border-[#E5EAF4] focus:border-[#1B4FD8] rounded-md px-2.5 py-[6px] text-[10px] text-[#333] outline-none font-[inherit] mb-2 placeholder:text-[#bbb] transition-colors"
                            placeholder="+254 7XX XXX XXX"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            maxLength={13}
                          />
                        )}

                        {payMethod === "card" && (
                          <div className="flex items-center gap-1.5 bg-[#F4F6FB] border border-[#E5EAF4] rounded-md px-2.5 py-[6px] mb-2">
                            <span className="text-[11px]">💳</span>
                            <span className="text-[9px] text-[#888]">
                              Tap / insert card on reader
                            </span>
                          </div>
                        )}

                        <button
                          onClick={handleCharge}
                          disabled={cart.length === 0 || stage === "processing"}
                          className={`w-full rounded-[8px] py-[10px] text-[10px] font-bold border-none transition-all tracking-[0.4px] ${
                            cart.length === 0
                              ? "bg-[#E8EDF5] text-[#bbb] cursor-not-allowed"
                              : stage === "processing"
                                ? "bg-red-400 text-white cursor-wait animate-pulse"
                                : "bg-red-600 text-white hover:bg-red-700 active:scale-[0.98] cursor-pointer"
                          }`}
                        >
                          {chargeLabel}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer bar */}
                <div className="bg-[#F7F9FD] border-t border-[#EEF1F8] px-4 py-[7px] flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-[12px] font-bold text-[#1B4FD8] tabular-nums">
                      {txCount}
                    </div>
                    <div className="text-[8px] text-[#aab]">Transactions</div>
                  </div>
                  <div className="h-8 w-px bg-[#E8EDF5]" />
                  <div className="text-center">
                    <div className="text-[12px] font-bold text-[#1B4FD8] tabular-nums">
                      KSh {sales.toLocaleString()}
                    </div>
                    <div className="text-[8px] text-[#aab]">
                      Today&apos;s sales
                    </div>
                  </div>
                  <div className="h-8 w-px bg-[#E8EDF5]" />
                  <div className="text-center">
                    <div className="text-[12px] font-bold text-[#e87c2a] tabular-nums">
                      12
                    </div>
                    <div className="text-[8px] text-[#aab]">Low stock</div>
                  </div>
                </div>
              </div>
              {/* /bg-white */}
            </div>
            {/* /gradient ring */}
          </div>
          {/* /perspective wrapper */}
        </div>
        {/* /RIGHT */}
      </div>
    </section>
  );
}
