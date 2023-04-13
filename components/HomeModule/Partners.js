import React from "react";

const Partners = () => {
  return (
    <section className="section mt-5">
      <div className="container">
        <div className="row justify-content-center" id="counter">
          <div
            className="col-12 section-title text-center wow animate__animated animate__fadeInUp"
            data-wow-delay=".1s"
          >
            <h4 className="title">
              Trusted by{" "}
              <span className="text-primary fw-bold">
                <span className="counter-value">40</span>+
              </span>{" "}
              Healthcare Providers in UAE
            </h4>
            {/* <p className="text-muted mb-0 mx-auto">
              Unlock Immediate Reimbursements with KLAIM
            </p> */}
          </div>
        </div>

        <div
          className="d-flex flex-wrap mt-5 justify-content-center wow animate__animated animate__fadeInUp"
          data-wow-delay=".1s"
        >
          <a
            href="https://www.dhcc.ae/media/news/dubai-healthcare-city-authority-signs-agreement-with-klaim-to-boost-healthcare-provider-performance-and-revenue-management"
            target="_blank"
          >
            <img
              src="assets/images/klaim/dhcc.png"
              className="avatar logo-partner mx-4 my-4"
              alt=""
            />
          </a>
          <img
            src="assets/images/klaim/life_works.png"
            className="avatar logo-partner mx-4 my-4"
            alt=""
          />
          <img
            src="assets/images/klaim/samc.png"
            className="avatar logo-partner mx-4 my-4"
            alt=""
          />
          <img
            src="assets/images/klaim/Image332.png"
            className="avatar logo-partner mx-4 my-4"
            alt=""
          />
          <img
            src="assets/images/klaim/valiant.png"
            className="avatar logo-partner mx-4 my-4"
            alt=""
          />
          <img
            src="assets/images/klaim/vasan_eye_care.png"
            className="avatar logo-partner mx-4 my-4"
            alt=""
          />
          <img
            src="assets/images/klaim/Image331.png"
            className="avatar logo-partner mx-4 my-4"
            alt=""
          />
          <img
            src="assets/images/klaim/transform.png"
            className="avatar logo-partner mx-4 my-4"
            alt=""
          />
          <img
            src="assets/images/klaim/Image333.png"
            className="avatar logo-partner mx-4 my-4 partner-logo-fix"
            alt=""
          />
          <img
            src="assets/images/klaim/Image334.png"
            className="avatar logo-partner mx-4 my-4 partner-logo-fix"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
