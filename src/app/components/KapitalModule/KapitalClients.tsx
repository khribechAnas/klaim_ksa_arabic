import React from "react";

const KapitalClients = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
          Trusted by <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            100+ healthcare providers
          </span>{" "}
          <br />
          in the UAE and KSA
        </h2>
        <div className="mt-4 md:mt-16">
          <div className="grid grid-cols-2 gap-x-12 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 items-center justify-center">
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client1.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client2.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client3.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client4.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client5.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client6.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client7.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client8.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client9.png"
                className="h-[50px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client10.png"
                className="h-[50px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KapitalClients;
