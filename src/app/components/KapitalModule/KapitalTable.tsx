"use client";
import React, { useEffect, useState } from "react";

const KapitalTable = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-[#3F465D]">
      <div className="container mx-auto py-12 md:py-32 px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[2.25rem] md:leading-[3.9rem] text-white mb-4 md:mb-8 hidden md:block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            How does Klaim Kapital
          </span>
          <br className="hidden md:block" />
          compare to conventional <br /> financing?
        </h2>
        <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] leading-[130%] text-white mb-4 md:mb-8 block md:hidden">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
            Klaim Kapital vs.
          </span>
          <br />
          conventional claim financing
        </h2>
        {isClient && (
          <div className="flex items-end my-8 overflow-x-auto">
            <table className="bg-[#323748] text-white rounded-t-lg overflow-hidden w-[25%]">
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1.25rem] md:text-[1.75rem] font-normal leading-[1.875rem] md:leading-[2.25rem]">
                  Model
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[6.5rem] md:h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1.25rem] md:text-[1.75rem] font-normal leading-[1.875rem] md:leading-[2.25rem]">
                  Commitment
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[8rem] md:h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1.25rem] md:text-[1.75rem] font-normal leading-[1.875rem] md:leading-[2.25rem]">
                  Costs
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1.25rem] md:text-[1.75rem] font-normal leading-[1.875rem] md:leading-[2.25rem]">
                  Payment timeline
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1.25rem] md:text-[1.75rem] font-normal leading-[1.875rem] md:leading-[2.25rem]">
                  Onboarding
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1.25rem] md:text-[1.75rem] font-normal leading-[1.875rem] md:leading-[2.25rem]">
                  Interests
                </td>
              </tr>
            </table>

            {/*  */}

            <table className="bg-[#323748] text-white rounded-t-lg overflow-hidden mx-1 md:w-[37.5%]">
              <tr className="border-b-4 border-[#3F465D] h-[4.25rem] flex flex-col justify-center w-[20rem] md:w-auto">
                <td className="px-6 py-4 text-[1.25rem] md:text-[1.75rem] font-bold leading-[1.875rem] md:leading-[2.25rem]">
                  Conventional financing
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/cross.svg" className="mr-6" /> Lending
                  money with fees and interest
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[6.5rem] md:h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/cross.svg" className="mr-6" />{" "}
                  Long-term commitment with complex entry <br /> and exit
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[8rem] md:h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/cross.svg" className="mr-6" />{" "}
                  Interest rate, recurring arrangement and <br /> processing
                  fees, exit fees and cancellation fees.
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/cross.svg" className="mr-6" />{" "}
                  Open-ended
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/cross.svg" className="mr-6" /> Weeks
                  or months
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/cross.svg" className="mr-6" />
                  Often unpredictable
                </td>
              </tr>
            </table>

            {/*  */}

            <table className="bg-linear-table text-white rounded-t-lg overflow-hidden w-[37.5%]">
              <tr className="border-b-4 border-[#3F465D] h-[4.25rem] flex flex-col justify-center w-[20rem] md:w-auto">
                <td className="px-6 py-4 text-[1.25rem] md:text-[1.75rem] font-bold leading-[1.875rem] md:leading-[2.25rem]">
                  Klaim Kapital
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/check.svg" className="mr-6" />{" "}
                  Purchasing claims as assets
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[6.5rem] md:h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/check.svg" className="mr-6" /> No
                  commitment with easy entry and exit
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[8rem] md:h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/check.svg" className="mr-6" /> Minimal
                  one-time admin/legal fee and a claim{" "}
                  <br className="hidden md:block" /> value percentage only
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/check.svg" className="mr-6" /> 24
                  hours after claim purchase
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/check.svg" className="mr-6" /> As
                  little as 5-7 business days
                </td>
              </tr>
              <tr className="border-b-4 border-[#3F465D] h-[5rem] flex flex-col justify-center">
                <td className="px-6 py-4 flex text-[1rem] md:text-[1.125rem] font-semibold leading-[1.5rem]">
                  {" "}
                  <img src="assets/images/check.svg" className="mr-6" /> No
                  interests
                </td>
              </tr>
            </table>
          </div>
        )}
        <div className="text-center py-4">
          <a className="bg-[#F5F7FB] text-[#6135FB] rounded-lg py-4 px-6 text-sm md:text-lg font-bold leading-4 tracking-[0.0225rem]">
            I&#39;m interested
          </a>
        </div>
      </div>
    </section>
  );
};

export default KapitalTable;
