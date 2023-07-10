import React from "react";

const Hero = () => {
  return (
    <>
      <section
        className="bg-half-170 bg-light d-table w-100 d-print-none"
        style={{
          background: 'url("assets/images/klaim/privacy-policy.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-overlay bg-overlay-white"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="pages-heading">
                <h4 className="title"> Privacy Policy </h4>
                {/* <ul className="list-unstyled mt-4 mb-0">
                  <li className="list-inline-item h6 date text-muted">
                    {" "}
                    <span className="text-dark">Last Revised :</span> 23th Sep,
                    2021
                  </li>
                </ul> */}
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
