export function CaseStudy({caseStudy}: any) {
    return <div className="flex flex-col" key={'id-here'}>
        <a href={`/case-studies/${caseStudy.attributes.slug}`}>
          <img
            src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${caseStudy.attributes.featuredImage.data.attributes.url}`}
            className="w-full h-[17rem] object-cover rounded-lg mb-4"
          />
        </a>
        <p className="text-[#000000] text-base font-medium mb-3.5">
            <h4>{caseStudy.attributes.title}</h4>
        </p>
    
        <p className="text-[#adadad] text-base font-medium mb-3.5">
          <a href={`/case-studies/${caseStudy.attributes.slug}`}>{`Read More  >`}</a>
        </p>
      </div>
} 