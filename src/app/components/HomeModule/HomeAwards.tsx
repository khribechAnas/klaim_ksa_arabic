import React from "react";

const HomeAwards = () => {
  return (
    <section className="bg-linear pt-8 pb-8 px-4 md:px-0 md:pt-8 md:pb-16">
      <div className="container mx-auto text-white text-center">
        <h3 className="text-[20px] md:text-[28px] leading-[30px] leading-9 font-bold mb-4 md:mb-8">
          Award winning company
        </h3>
        <div className="grid grid-cols-4 xl:grid-cols-7 gap-4">
          {/* md:flex items-center justify-between */}
          <div className="flex items-center justify-center">
            <img src="assets/images/Award1.png" />
          </div>
          <div className="flex items-center justify-center">
            <img src="assets/images/Award2.png" />
          </div>
          <div className="flex items-center justify-center">
            <img src="assets/images/hero5.png" />
          </div>
          <div className="flex items-center justify-center">
            <img src="assets/images/Award3.png" />
          </div>
          <div className="flex items-center justify-center">
            <img src="assets/images/Award4.png" />
          </div>
          <div className="flex items-center justify-center">
            <img src="assets/images/Award5.png" />
          </div>
          <div className="flex items-center justify-center">
            <img src="assets/images/Award6.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAwards;
