import React from "react";
import { Eye, Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import PersonModal from "./PersonModal";

const ADVISORS = [
  // {
  //   id: "hicham-lahlou",
  //   name: "Hicham Lahlou",
  //   title: "Principal Director, Strategy & Consulting at Accenture",
  //   description:
  //     "Previously head of Technology Strategy at First Abu Dhabi Bank, and head of the Digital Factory of the bank. With 20 years of experience under his belt, Hicham has established himself as an experienced and trusted strategic consultant and digital disrupter in the MENA and UK. Hicham holds a deep passion for implementing business & digital transformation strategy, as well as leading teams in overcoming challenging strategic issues.",
  //   imgSrc: "assets/images/klaim/hicham-lahlou.png",
  //   animateClass: "animate__fadeInLeft",
  //   linkedInProfile: "https://www.linkedin.com/in/hicham-lahlou-b4689a12/",
  // },
  // {
  //   id: "remi-thiolet",
  //   name: "Remi Thiolet",
  //   title: "President of ComSecProd",
  //   description:
  //     "With his company clients located across Europe, North America, Africa and Middle-East and being the International Advisor for one of the top 5 healthcare research centers in the world for oncology, he is armed with the requisite knowledge to drive-up the company’s efficiency and accelerate progress.",
  //   imgSrc: "assets/images/klaim/remi-thiolet.png",
  //   animateClass: "animate__fadeInUp",
  //   linkedInProfile: "https://www.linkedin.com/in/rémi-thiolet-a3200633/",
  // },
  // {
  //   id: "emmanuel-leonard",
  //   name: "Emmanuel Léonard",
  //   title: "Corporate executive",
  //   description:
  //     "Emmanuel Léonard is a corporate executive with extensive fundraising, investing, business development and M&A experience across multiple sectors and geographies. He has been involved in scaling several companies from inception to IPO. Notably between 2013 and 2020 Emmanuel held a variety of roles at Helios Towers plc, a FTSE 250 independent telecommunications infrastructure operator listed on the London Stock Exchange since 2019. Emmanuel is a graduate of Institut Polytechnique de Paris ENSAE, SciencesPo Paris and Columbia University in New York.",
  //   imgSrc: "assets/images/klaim/emmanuel-leonard.png",
  //   animateClass: "animate__fadeInRight",
  //   linkedInProfile: "https://www.google.com/",
  // },
  {
    id: "eli-chedid",
    name: "Eli A. Chedid",
    title: "CARE for Hospital Planning & Equipping",
    description:
      "Eli is a successful entrepreneur with a strong record of success in business development, sales, and operations, who brings over 40 years of experience in the healthcare industry to the role. His extensive knowledge comes from his broad-based corporate managerial involvement, such as planning and execution of strategic visions and business objectives, industry positioning, and awareness with leading US and international healthcare companies.",
    imgSrc: "assets/images/klaim/eli-chedid.png",
    animateClass: "animate__fadeInUp",
    linkedInProfile: "https://www.linkedin.com/in/eli-chedid-9594b110/",
  },
  // {
  //   id: "jad-zerouali",
  //   name: "Jad Zerouali",
  //   title: "Senior Partner at Bain & Company",
  //   description:
  //     "Jad holds a Masters of Science in Engineering from Ecole Centrale de Paris and an MBA from INSEAD. His prolific academic achievements are complemented by his expertise in strategic consulting and financial services practice.",
  //   imgSrc: "assets/images/klaim/jad-zerouali.png",
  //   animateClass: "animate__fadeInRight",
  //   linkedInProfile: "https://www.linkedin.com/in/jad-zerouali-b89843/",
  // },
  {
    id: "abdullah-alothaim",
    name: "Abdullah A. AlOthaim",
    title: "Chief Executive Officer at Mad'a Investment",
    description:
      "Founder and CEO of Mad’a Investment Company, a Venture Capital & Private Equity firm (Growth Capital) headquartered in Riyadh, Saudi Arabia and a wholly owned subsidiary of Abdulaziz AlOthaim & Sons Holding Company (ASO&SONS). As the CEO of Mad’a, Abdullah has successfully overseen and invested in many growth capital companies.",
    imgSrc: "assets/images/klaim/abdullah-alothaim.jpg",
    animateClass: "animate__fadeInRight",
    linkedInProfile: "https://www.linkedin.com/in/abdullahalothaim/",
  },
  {
    id: "majed-alameel",
    name: "Dr Majed AlAmeel",
    title: "Director Health Solutions at Elm Company",
    description:
      "Leading Elm's healthcare and health informatics practices in supporting providers and healthcare organizations in the development of integrated information and digital health strategies and projects.",
    imgSrc: "assets/images/klaim/dr-majed.jpg",
    animateClass: "animate__fadeInRight",
    linkedInProfile: "https://www.linkedin.com/in/malameel/",
  },
];

const Advisors = () => {
  const renderModals = () =>
    ADVISORS.map((person) => (
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
    ADVISORS.map((person) => (
      <div
        className={`col-lg-4 col-md-6 mt-4 pt-2 wow animate__animated ${person.animateClass}`}
        data-wow-delay=".1s"
        key={person.id}
      >
        <div className="card team h-100 team-primary bg-light text-center rounded shadow border-0">
          <div className="card-body">
            <div className="position-relative">
              <img
                src={person.imgSrc}
                className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                alt=""
              />
              <ul className="list-unstyled mb-0 team-icon">
                <li className="list-inline-item mx-1">
                  <a
                    href="javascript:void(0)"
                    target="_blank"
                    className="btn btn-primary btn-pills btn-sm btn-icon"
                    data-bs-toggle="modal"
                    data-bs-target={`#${person.id}`}
                  >
                    <Eye className="icons" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="content pt-3">
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
      <section className="section overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-12 wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="section-title mb-lg-4 mb-0 pb-2 text-center">
                <h4 className="title mb-lg-4 mb-0">Board of Directors</h4>
                {/* <p className="text-muted para-desc mb-0 mx-auto">
                  Team of experts who brings a wealth of knowledge and
                  experience to our organization. They provide guidance and
                  support to help us achieve our goals and objectives
                </p> */}
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            {renderMembers()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Advisors;
