import React from "react";

const Hero = () => {
  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{
          background: 'url("assets/images/klaim/about-hero.jpeg")',
          backgroundSize: "cover",
        }}
      >
        <div className="bg-overlay  bg-overlay-white"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-9 text-center">
              <div className="pages-heading title-heading px-4">
                <h2 className="title-dark">About Us</h2>
                <p className="mb-0 mx-auto">
                  We help healthcare providers streamline the claims
                  reimbursement process aiming to create an efficient process
                  for healthcare providers and revolutionize the healthcare
                  industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-color-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
