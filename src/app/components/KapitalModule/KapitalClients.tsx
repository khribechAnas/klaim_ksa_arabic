import React from "react";

const KapitalClients = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4 flex flex-col lg:flex-row items-center justify-between">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
          Trusted by <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            40+ healthcare providers
          </span>{" "}
          <br />
          in the UAE and KSA
        </h2>
        <div className="mt-4 md:mt-0">
          <div className="grid grid-cols-2 md:flex items-center justify-between">
            <img src="assets/images/client1.png" />
            <img src="assets/images/client4.png" />
          </div>
          <div className="grid grid-cols-2 md:flex items-center justify-between my-8">
            <img src="assets/images/client8.png" />
            <img src="assets/images/client7.png" className="ml-12 md:ml-0" />
          </div>
          <div className="grid grid-cols-2 md:flex items-center justify-between">
            <img src="assets/images/client3.png" />
            <img src="assets/images/client6.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KapitalClients;
