import React from "react";
import { Eye, Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import PersonModal from "./PersonModal";

const FOUNDERS = [
  {
    id: "karim-dakki",
    name: "Karim Dakki",
    title: "CEO",
    description:
      "Being an instinctive leader, Karim has a glaring 15-year record of accomplishments in highly demanding environments of private equity and technology management. With his relentless commitment to excellence and execution, he co-founded a Myanmar-based telecom company valued at 700m USD and has delivered outstanding results as an acting CFO in multiple startups and organizations.",
    imgSrc: "assets/images/klaim/karim-dakki.png",
    animateClass: "animate__fadeInLeft",
    linkedInProfile: "https://www.linkedin.com/in/karimdakki/",
  },
  {
    id: "ahmad-ghafoor",
    name: "Ghafoor Ahmad",
    title: "CRO",
    description:
      "Ghafoor Ahmad is a highly accomplished executive, visionary leader, and serial entrepreneur with a 17-year career. He excels in sales and leadership roles, delivering outstanding results. As the Co-Founder and Chief Revenue Officer of Klaim, he played a pivotal role in its rapid growth and market disruption. Ghafoor also founded AGA Medical Billing Company, a leading RCM company. His exceptional leadership skills have consistently driven organizational growth and success.",
    imgSrc: "assets/images/klaim/ahmad-ghafoor.png",
    animateClass: "animate__fadeInRight",
    linkedInProfile: "https://www.linkedin.com/in/ghafoor-ahmad-7b98a3164/",
  },
];

const Founders = () => {
  const renderModals = () =>
    FOUNDERS.map((person) => (
      <PersonModal
        key={person.id}
        id={person.id}
        name={person.name}
        title={person.title}
        description={person.description}
        imgSrc={person.imgSrc}
        linkedInProfile={person.linkedInProfile}
      />
    ));

  const renderMembers = () =>
    FOUNDERS.map((person) => (
      <div
        className={`col-lg-4 col-md-6 mt-4 pt-2 wow animate__animated ${person.animateClass}`}
        data-wow-delay=".1s"
        key={person.id}
      >
        <div className="card team team-primary text-center bg-transparent border-0">
          <div className="card-body p-0">
            <div className="position-relative">
              <img
                src={person.imgSrc}
                className="img-fluid avatar avatar-ex-large rounded-circle"
                alt=""
              />
              <ul className="list-unstyled mb-0 team-icon">
                <li className="list-inline-item mx-1">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-primary btn-pills btn-sm btn-icon"
                    data-bs-toggle="modal"
                    data-bs-target={`#${person.id}`}
                  >
                    <Eye className="icons" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="content pt-3 pb-3">
              <h5 className="mb-0">
                <a
                  href="javascript:void(0)"
                  className="name text-dark"
                  data-bs-toggle="modal"
                  data-bs-target={`#${person.id}`}
                >
                  {person.name}
                </a>
              </h5>
              <small className="designation text-muted">{person.title}</small>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      {renderModals()}
      <section className="section overflow-hidden mt-lg-0 mt-4">
        <div className="container">
          <div className="row">
            <div
              className="col-12 text-center wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="section-title mb-lg-4 mb-0 pb-2">
                <h4 className="title mb-lg-4 mb-0">Our Founding Members</h4>
                {/* <p className="text-muted para-desc mx-auto mb-0">
                  Klaim.ai’s drive to success is fuelled by the dedication and
                  commitment of our strong team
                </p> */}
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
            {renderMembers()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Founders;
