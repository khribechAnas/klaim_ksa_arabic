export function CaseStudy({caseStudy}: any) {
    return <div className="flex flex-col gap-3 justify-between bg-gray-100 rounded" key={'id-here'}>
        <a href={`/case-studies/${caseStudy.attributes.slug}`}>
          <img
            src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${caseStudy.attributes.featuredImage.data.attributes.url}`}
            className="w-full object-cover rounded-t"
          />
        </a>

        <div className={'flex flex-col gap-5 justify-end pl-4'}>
        <img src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${caseStudy?.attributes?.companyLogo?.data?.attributes?.url}`} alt="" className={'w-[20%] h-auto px-2 pt-2'}/>

        <p className="text-[#000000] text-base font-medium px-2 w-full whitespace-pre-wrap text-ellipsis line-clamp-2">
            <h4>{caseStudy.attributes.title}</h4>
        </p>
    
        <p className="text-[#adadad] text-base font-medium mb-1 px-2 pb-4 flex items-end">
          <a href={`/case-studies/${caseStudy.attributes.slug}`}>{`Read More  >`}</a>
        </p>
        </div>
      </div>
} 