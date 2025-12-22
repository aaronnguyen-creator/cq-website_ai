type GlossaryDetailLayoutProps = {
  article: React.ReactNode;
  sidebar: React.ReactNode;
};

export function GlossaryDetailLayout({
  article,
  sidebar,
}: GlossaryDetailLayoutProps) {
  return (
    <section className="bg-background py-16 text-foreground sm:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-12">
          <div>{article}</div>
          <div className="hidden h-fit lg:block lg:sticky lg:top-24">
            {sidebar}
          </div>
        </div>
        <div className="mt-10 lg:hidden">{sidebar}</div>
      </div>
    </section>
  );
}
