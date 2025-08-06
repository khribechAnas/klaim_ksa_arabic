"use client";

export function IndustrySection() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-20 w-full relative px-6">
      <div className="w-full mt-auto ">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-background/80 backdrop-blur-sm py-6 px-5 rounded-2xl border border-border flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center">
            <div className="flex-1 border-b md:border-b-0 md:border-r border-border pb-5 md:pb-0 md:pr-6 flex flex-col items-center">
              <h3 className="text-primary text-xl font-semibold mb-1">
                Less requirements
              </h3>
              <p className="text-muted-foreground text-sm">
                vs. conventional loans
              </p>
            </div>

            <div className="flex-1 border-b md:border-b-0 md:border-r border-border pb-5 md:pb-0 md:px-6 flex flex-col items-center">
              <h3 className="font-semibold text-xl text-primary">Not a loan</h3>
              <p className="text-muted-foreground text-sm">
                No debt on your balance sheet
              </p>
            </div>

            <div className="flex-1 md:pl-6 flex flex-col items-center">
              <h3 className="text-primary text-xl font-semibold mb-1">
                0 commitment
              </h3>
              <p className="text-muted-foreground text-sm">
                Use only when needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
