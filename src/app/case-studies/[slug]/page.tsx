
import CaseStudyText from "@/app/components/CaseStudiesModule/CaseStudyText";
import CaseStudyTitle from "@/app/components/CaseStudiesModule/CaseStudyTitle";
import Footer from "@/app/components/CommonModule/Footer";
import Header from "@/app/components/CommonModule/Header";
import React from "react";

const loadCaseStudy = async (slug: string) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/case-studies?populate=*&filters[slug][$eq]=${slug}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
            },
            cache: "no-store"
        }
    );
    return response.json();
};

const solveButtons = (caseStudy: any) => {
    let tmpHtml = caseStudy?.attributes?.content.replaceAll('src="',
        `src="${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}`) ?? "";
    const html = caseStudy?.attributes?.content ?? "";

    let openBracketIndex = -1;
    let closedBracketIndex = -1;
    let closedBracketsCounter = 0;

    for (let i = 0; i < html.length; i++) {
        if (html[i] === "{" && openBracketIndex === -1) {
            openBracketIndex = i;
            continue;
        }

        if (html[i] === "}" && closedBracketsCounter === 0) {
            closedBracketsCounter++;
            continue;
        }

        if (html[i] === "}" && closedBracketsCounter === 1) {
            closedBracketsCounter++;
            closedBracketIndex = i;
        }

        if (openBracketIndex !== -1 && closedBracketIndex !== -1 && closedBracketsCounter === 2) {
            const fullString = html.substring(openBracketIndex, closedBracketIndex + 1);
            const stringWithoutBrackets = fullString.replaceAll('{', '').replaceAll('}', '');

            if(stringWithoutBrackets.indexOf(',') > -1) {
                const attributes = stringWithoutBrackets.split(',');
                const text = attributes[0];
                const href = attributes[1];
                
                tmpHtml = tmpHtml.replace(fullString, `<div class="w-full flex justify-center mt-2 mb-2"><p class="bg-[#6135FB] px-5 py-2 rounded-lg font-semibold mx-2.5"><a class="font-semibold text-white no-underline block" href=${href} target="_blank">${text}</a></p></div>`)
                closedBracketsCounter = 0;
                openBracketIndex = -1;
                closedBracketIndex = -1;
            }
            else {
                tmpHtml = tmpHtml.replace(fullString, `<div class="mt-2 mb-2"><iframe width="100%" height="365px" src=${stringWithoutBrackets} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>`)
                closedBracketsCounter = 0;
                openBracketIndex = -1;
                closedBracketIndex = -1;
            }


        }
    }

    return tmpHtml;
}

const BlogPostPage = async ({params}: any) => {

    const caseStudy = await loadCaseStudy(params.slug);
    const html = solveButtons(caseStudy.data[0]);

    return (
        <>
            <Header/>
            <CaseStudyTitle caseStudy={caseStudy.data[0]} html={html}/>
            <CaseStudyText caseStudy={caseStudy.data[0]} html={html}/>
            {/* <BlogPostAuthor blogPost={blogPost.data[0]} /> */}
            {/* <BlogPostNewsLetter /> */}
            {/* <BlogPostRelated blogPost={blogPost.data[0]} /> */}
            <Footer/>
        </>
    );
};

export default BlogPostPage;
