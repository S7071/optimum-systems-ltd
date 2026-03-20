// components/ui/badge-pill.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const pillVariants = cva("inline-flex items-center gap-3", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
    },
    // kept minimal — add more variants if you need
  },
  defaultVariants: {
    size: "sm",
  },
})

export type BadgePillVariants = VariantProps<typeof pillVariants>

interface BadgePillProps
  extends React.ComponentProps<"span">,
    BadgePillVariants {
  /** text shown in the pill (label-placeholder) */
  label: React.ReactNode
  /** if true, render right bar so label appears centered between two bars. defaults to false */
  centered?: boolean
  /** shadcn-style asChild to render a custom wrapper */
  asChild?: boolean
}

export function BadgePill({
  label,
  centered = false,
  size,
  className,
  asChild = false,
  ...props
}: BadgePillProps) {
  const Comp = asChild ? Slot.Root : "span"

  const bar = (
    <div
      className="h-[3px] w-8 rounded-full bg-primary-cta"
      aria-hidden
    />
  )

  return (
    <Comp
      data-slot="badge-pill"
      className={cn(pillVariants({ size }), "items-center", className)}
      {...props}
    >
      {/* left bar */}
      {bar}

      {/* label */}
      <span
        className="text-xs font-semibold uppercase tracking-widest text-primary-cta"
      >
        {label}
      </span>

      {/* right bar only when centered === true */}
      {centered ? bar : null}
    </Comp>
  )
}

export { pillVariants }
export default BadgePill