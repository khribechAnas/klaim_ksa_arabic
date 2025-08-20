import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

export function FeatureSection() {
  const { description } = siteConfig.featureSection;

  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center gap-10 w-full relative px-6 py-16"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          How Klaim Flow Works
        </h2>
        <p className="text-muted-foreground font-inter text-center text-balance font-medium">
          {description}
        </p>
      </SectionHeader>
      
      <div className="w-full h-full md:ml-10 lg:h-[250px] flex items-center justify-center">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ml-0 lg:ml-12">
          {/* One-Time Onboarding Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium tracking-tight text-primary text-center">
              One-Time Onboarding
            </h3>
            
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image 
                    src="/how-it-works/flow/step1.svg" 
                    alt="Apply to qualify" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <div className="text-center max-w-[120px]">
                  <p className="text-sm font-medium text-primary leading-tight">
                    Apply to qualify
                  </p>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="flex items-center md:mt-8">
                <svg className="transform md:rotate-0 rotate-90" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H18M18 5L14 1M18 5L14 9" stroke="#5cc2ac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image 
                    src="/how-it-works/flow/step2.svg" 
                    alt="Share your invoices" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <div className="text-center max-w-[120px]">
                  <p className="text-sm font-medium text-primary leading-tight">
                    Share your invoices
                  </p>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="flex items-center md:mt-8">
                <svg className="transform md:rotate-0 rotate-90" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H18M18 5L14 1M18 5L14 9" stroke="#5cc2ac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image 
                    src="/how-it-works/estate/step3.svg" 
                    alt="Get a custom offer" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <div className="text-center max-w-[120px]">
                  <p className="text-sm font-medium text-primary leading-tight">
                    Get a custom offer
                  </p>
                </div>
              </div>

              {/* Arrow 3 */}
              <div className="flex items-center md:mt-8">
                <svg className="transform md:rotate-0 rotate-90" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H18M18 5L14 1M18 5L14 9" stroke="#5cc2ac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image 
                    src="/how-it-works/estate/step4.svg" 
                    alt="Get paid in 24 hours" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <div className="text-center max-w-[120px]">
                  <p className="text-sm font-medium text-primary leading-tight">
                    Get paid in 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ongoing Flow Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium tracking-tight text-primary text-center">
              Ongoing Flow
            </h3>
            
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6">
              {/* Ongoing Step 1 */}
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image 
                    src="/how-it-works/estate/ongoing1.svg" 
                    alt="Share your invoices" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <div className="text-center max-w-[120px]">
                  <p className="text-sm font-medium text-primary leading-tight">
                    Share your invoices
                  </p>
                </div>
              </div>

              {/* Middle Arrows - Left and Right */}
              <div className="flex flex-row md:flex-col items-center mt-4 md:mt-8 space-x-2 md:space-x-0 md:space-y-2">
                {/* Right Arrow */}
                <svg className="transform rotate-90 md:rotate-0" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H18M18 5L14 1M18 5L14 9" stroke="#5cc2ac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {/* Left Arrow */}
                <svg className="transform rotate-90 md:rotate-0" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5H20M2 5L6 1M2 5L6 9" stroke="#5cc2ac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Ongoing Step 2 */}
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image 
                    src="/how-it-works/estate/ongoing2.svg" 
                    alt="Get paid" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <div className="text-center max-w-[120px]">
                  <p className="text-sm font-medium text-primary leading-tight">
                    Get paid in 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
