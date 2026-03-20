import { ArrowRight, X } from "lucide-react";

export default function SiteBanner() {
  return (
    <section className="flex items-center justify-between gap-2 bg-primary-cbe-500 border-b-5 border-primary-cta text-background border-t-3 border-t-primary bg-muted px-6 py-2 dark:bg-card w-full">
      <div className="flex flex-1 items-center gap-4 text-sm font-medium md:justify-center md:text-center">
        <p>
          Our Premium Plan is now live! 🎉 Enjoy more features and flexibility.
          <a href="#" className="ml-2 whitespace-nowrap underline md:hidden">
            <span>Learn more</span>
          </a>
        </p>
        <div
          data-orientation="vertical"
          role="none"
          data-slot="separator"
          className="shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch hidden self-stretch bg-primary data-[orientation=vertical]:h-auto md:block"
        ></div>
        <a href="#" className="group hidden items-center gap-2 md:flex">
          <span>Learn more</span>
          <ArrowRight size={18} />
        </a>
      </div>
      <button
        data-slot="button"
        data-variant="ghost"
        data-size="icon"
        className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([className*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground size-9"
      >
        <X size={24} />
      </button>
    </section>
  );
}
