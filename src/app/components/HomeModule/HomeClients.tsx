import React from "react";

const HomeClients = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-12 md:py-32 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
          Trusted by <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            40+ healthcare providers
          </span>{" "}
          <br />
          in the UAE and KSA
        </h2>
        <div className="mt-4 md:mt-16">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 items-center justify-center">
            <img src="assets/images/client1.png" />
            <img src="assets/images/client2.png" />
            <img src="assets/images/client3.png" />
            <img src="assets/images/client4.png" />
            <img src="assets/images/client5.png" />
            <img src="assets/images/client6.png" />
            <img src="assets/images/client7.png" />
            <img src="assets/images/client8.png" />
            <img src="assets/images/client9.png" />
            <img src="assets/images/client10.png" />
            <img src="assets/images/client11.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeClients;
