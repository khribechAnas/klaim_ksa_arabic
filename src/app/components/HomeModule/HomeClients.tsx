import React from "react";

const HomeClients = () => {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="container mx-auto py-32">
        <h2 className="text-5xl font-semibold leading-[130%] text-[#3F465D]">
          Trusted by <br />
          <span className="text-linear">40+ healthcare providers</span> <br />
          in the UAE and KSA
        </h2>
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <img src="assets/images/client1.png" />
            <img src="assets/images/client2.png" />
            <img src="assets/images/client3.png" />
            <img src="assets/images/client4.png" />
          </div>
          <div className="flex items-center justify-between mt-8">
            <img src="assets/images/client5.png" />
            <img src="assets/images/client6.png" />
            <img src="assets/images/client7.png" />
            <img src="assets/images/client8.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeClients;
