import React from "react";

const cofounders = [
  {
    name: "Karim Dakki",
    title: "Chief Executive Officer",
    image: "assets/images/about-us-karim.png",
    description:
      "Karim Dakki is an instinctive leader with a stellar 15-year track record in highly demanding private equity and technology management environments. He previously cofounded a Myanmar-based telecom company valued at 700 million USD and has delivered outstanding results as an acting CFO in multiple organizations. Karim’s relentless commitment to excellence has been a driving force in Klaim’s impressive growth.",
  },
  {
    name: "Ghafoor Ahmad",
    title: "Chief Revenue Officer",
    image: "assets/images/about-us-ghafoor.png",
    description:
      "Ghafoor Ahmad is a highly accomplished executive, visionary leader, and serial entrepreneur. He has delivered extraordinary results in sales and leadership roles throughout his 17-year career. Ghafoor also founded AGA Medical Billing Services, one of the UAE’s leading revenue cycle management companies. His exceptional leadership skills have played a pivotal role in Klaim’s rapid growth and market disruption.",
  },
];

const directors = [
  {
    name: "Eli A. Chedid",
    title: "CARE for Hospital Planning & Equipping",
    image: "assets/images/about-us-eli.png",
    description:
      "Eli A. Chedid is a successful entrepreneur with 40 years of experience in business development, sales, and operations in the healthcare industry. His extensive knowledge comes from a broad range of corporate managerial involvement, including strategic planning and execution, industry positioning, and building awareness among leading US and international healthcare companies.",
  },
  {
    name: "Abdullah A. AlOthaim",
    title: "Chief Executive Officer at Mad'a Investment Company",
    image: "assets/images/about-us-abdulah.png",
    description:
      "Abdullah A. AlOthaim is the founder and CEO of Mad’a Investment Company, a venture capital and private equity firm headquartered in Riyadh, Saudi Arabia. During his career, he has achieved successful investments in many growth capital companies.",
  },
  {
    name: "Dr. Majed AlAmeel",
    title: "Director of Health Solutions at Elm Company",
    image: "assets/images/about-us-majed.png",
    description:
      "Dr. Majed AlAmeel leads his firm’s efforts to support healthcare organizations in the development of digital health and integrated information strategies and implementations. His specialties include business development, financial growth, relationship management, product development, and digital health.",
  },
];

const AboutUsOurTeam = () => {
  return (
    <section className="bg-[#F5F7FB] py-32">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D] mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            Meet our team
          </span>
        </h2>
        <h4 className="text-[32px] text-[#3F465D] font-bold leading-[40px]">
          Cofounders
        </h4>
        <div className="mt-8 grid grid-cols-2 gap-4 mb-16">
          {cofounders.map((cofounder) => (
            <div className="px-8 py-7 bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
              <div className="mb-4 flex items-center">
                <img src={cofounder.image} />
                <div className="ml-8">
                  <h5 className="text-[32px] text-[#3F465D] font-bold leading-[40px]">
                    {cofounder.name}
                  </h5>
                  <p className="text-[16px] leading-[25px] text-[#3F465D] mb-2">
                    {cofounder.title}
                  </p>
                  <img src="assets/images/about-us-linkedin.svg" />
                </div>
              </div>
              <p className="text-[16px] leading-[25px] text-[#3F465D]">
                {cofounder.description}
              </p>
            </div>
          ))}
        </div>
        <h4 className="text-[32px] text-[#3F465D] font-bold leading-[40px]">
          Board of Directors
        </h4>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {directors.map((director) => (
            <div className="px-8 py-7 bg-white rounded-lg flex flex-col shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
              <div className="mb-4 flex items-center">
                <img src={director.image} />
                <div className="ml-8">
                  <h5 className="text-[32px] text-[#3F465D] font-bold leading-[40px]">
                    {director.name}
                  </h5>
                  <p className="text-[16px] leading-[25px] text-[#3F465D] mb-2">
                    {director.title}
                  </p>
                </div>
              </div>
              <div className="flex-1 mb-4">
                <p className="text-[16px] leading-[25px] text-[#3F465D]">
                  {director.description}
                </p>
              </div>
              <div>
                <img src="assets/images/about-us-linkedin.svg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsOurTeam;
