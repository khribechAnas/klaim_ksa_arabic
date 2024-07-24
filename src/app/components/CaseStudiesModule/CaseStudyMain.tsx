export function CaseStudyMain({caseStudy}: any) {
    return <div className={'w-full flex flex-col gap-20 items-center justify-center'}>
        <div className="w-full flex flex-col lg:flex-row gap-4 rounded" key={'id-here'}>
            <div className={'w-[100%] lg:w-[50%] md:flex-grow-12 h-auto'}>
                <a href={`/case-studies/${caseStudy.attributes.slug}`}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${caseStudy.attributes.featuredImage.data.attributes.url}`}
                        className="w-full h-auto object-cover mb-4 rounded"
                    />
                </a>
            </div>

            <div className={'flex flex-col justify-between'}>
                <div className={'h-[33%]'}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT}${caseStudy?.attributes?.companyLogo?.data?.attributes?.url}`}
                        alt="" className={'w-[20%] h-auto mb-3.5 px-2'}/>
                </div>

                <div className={'h-[33%] flex flex-col gap-2 justify-center'}>
                    <p className="text-[#000000] text-2xl font-medium px-2">
                        <h4>{caseStudy.attributes.title}</h4>
                    </p>

                    <p className="text-[#adadad] text-xl font-medium  px-2">
                        <a href={`/case-studies/${caseStudy.attributes.slug}`}>{`Read More  >`}</a>
                    </p>
                </div>

                <div className={'h-[33%]'}>
                    <wbr/>
                </div>
            </div>
        </div>

        <p className={'w-[60%] flex justify-center items-center mb-24 text-lg md:text-xl lg:text-2xl text-gray-700 text-center'}>
            Worrying about payment delays is a thing of the past. <br/> Klaim helped us concentrate on the quality of our
            medical services
        </p>

    </div>
}