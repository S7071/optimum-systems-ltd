import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { LucideProps } from "lucide-react";

export type LucideIcon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
