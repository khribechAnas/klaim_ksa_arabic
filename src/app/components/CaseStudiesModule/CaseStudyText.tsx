
import { headers } from "next/headers";

const CaseStudyText = ({ caseStudy, html }: any) => {
  const headersList = headers();


  return (
    <section className="container mx-auto px-4">
      <div className="px-[4rem] lg:px-[8rem] xl:px-[18rem] 2xl:px-[26rem] relative mb-14 text-[#222B45]">
        <div
          className="prose prose-p:my-0"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        <div className="absolute top-0 left-[0rem] lg:left-[2rem] xl:left-[12rem] 2xl:left-[20rem]">
          <a
            href={`https://www.linkedin.com/feed/?shareActive=true&text=${
              process.env.NEXT_PUBLIC_WEBSITE_URL
            }${headersList.get("x-invoke-path")}`}
            target="_blank"
          >
            <img src="/assets/images/linked-in-blog.png" className="mb-6" />
          </a>
          <a
            href={`https://www.facebook.com/sharer.php?u=${
              process.env.NEXT_PUBLIC_WEBSITE_URL
            }${headersList.get("x-invoke-path")}`}
            target="_blank"
          >
            <img src="/assets/images/facebook-blog.png" className="mb-7" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${
              process.env.NEXT_PUBLIC_WEBSITE_URL
            }${headersList.get("x-invoke-path")}`}
            target="_blank"
          >
            <img src="/assets/images/twitter-blog.png" className="mb-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyText;
