"use client";

import { SectionHeader } from "@/components/section-header";
import { SimpleBlogWithGrid } from "@/components/ui/simple-blog-with-grid";

export function BlogSection() {
  return (
    <section
      id="blog"
      className="flex flex-col items-center justify-center gap-10 w-full relative px-6"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          Latest Insights & News
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          Stay updated with our latest articles, news, and announcements.
        </p>
      </SectionHeader>
      <SimpleBlogWithGrid />
    </section>
  );
}
