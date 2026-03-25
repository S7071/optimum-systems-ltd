import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { LucideProps } from "lucide-react";

export type LucideIcon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUserIdFromPath(pathname: string | null): string | null {
  if (!pathname) return null;
  // Normalize trailing slash: ensure no trailing slash except root
  const path = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

  // Match /cms/<user-id> or /cms/<user-id>/...
  const m = path.match(/^\/cms\/([^\/]+)(?:\/|$)/);
  if (!m) return null;

  // decode in case id contains encoded characters
  try {
    return decodeURIComponent(m[1]);
  } catch {
    return m[1];
  }
}

export function getPathSegments(path: string): string[] {
  return path
    .split("/")
    .filter(Boolean)       // remove empty segments
    .filter((_, i) => i !== 1); // remove index 1
}