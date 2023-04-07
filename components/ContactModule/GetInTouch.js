import Script from "next/script";
import React from "react";
import { useHubspotForm } from "next-hubspot";

const GetInTouch = () => {
  const {} = useHubspotForm({
    portalId: "9149608",
    formId: "3d7dcd60-d105-4fd9-aaa4-825c830b7898",
    region: "na1",
    target: "#hubspot-form-wrapper",
  });

  return (
    <div className="container mt-100 mb-100 overflow-hidden">
      <div className="row">
        <div
          className="col-lg-5 col-md-6 pt-2 pt-sm-0 wow animate__animated animate__fadeInLeft"
          data-wow-delay=".1s"
        >
          <div className="card shadow rounded border-0">
            <div className="card-body py-5">
              <h4 className="card-title">Get In Touch !</h4>
              <div className="custom-form mt-3" id="hubspot-form-wrapper" />
            </div>
          </div>
        </div>

        <div
          className="col-lg-7 col-md-6 ps-md-3 pe-md-3 wow animate__animated animate__fadeInRight"
          data-wow-delay=".1s"
        >
          <div className="card h-100 map map-height-two rounded map-gray border-0">
            <div className="card-body p-0 mt-4 mt-lg-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8677202077897!2d55.1428037!3d25.0724722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43abcd025df1%3A0xaf99ee725abb3a2d!2sKLAIM%20Technologies%20DMCC!5e0!3m2!1sen!2smk!4v1679152411580!5m2!1sen!2smk"
                width="100%"
                height="100%"
                className="contact-map"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* <div className="card-body p-0 pt-4 mt-4 mt-lg-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8677202077897!2d55.1428037!3d25.0724722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43abcd025df1%3A0xaf99ee725abb3a2d!2sKLAIM%20Technologies%20DMCC!5e0!3m2!1sen!2smk!4v1679152411580!5m2!1sen!2smk"
                width="100%"
                height="100%"
                style={{ border: 0, height: "200px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="card-body p-0 pt-4 mt-4 mt-lg-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8677202077897!2d55.1428037!3d25.0724722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43abcd025df1%3A0xaf99ee725abb3a2d!2sKLAIM%20Technologies%20DMCC!5e0!3m2!1sen!2smk!4v1679152411580!5m2!1sen!2smk"
                width="100%"
                height="100%"
                style={{ border: 0, height: "200px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
