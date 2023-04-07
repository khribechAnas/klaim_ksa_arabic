import React from "react";

const PersonModal = ({
  id,
  name,
  title,
  description,
  imgSrc,
  linkedInProfile,
}) => {
  return (
    <div className="modal fade" id={id} tabindex="-1" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content rounded shadow border-0">
          <div className="modal-body p-5">
            <button
              type="button"
              className="btn btn-icon btn-close absolute-button"
              data-bs-dismiss="modal"
              id="close-modal"
            >
              <i className="uil uil-times fs-4 text-dark"></i>
            </button>
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="position-relative d-flex justify-content-start">
                  <img
                    src={imgSrc}
                    className="rounded-pill shadow img-fluid z-index-2 position-inherit modal-img-round"
                    alt={id}
                  />
                  <div className="position-absolute top-0 start-0 z-index-1">
                    <img
                      src="assets/images/klaim/dots.svg"
                      className="avatar avatar-xl-large"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ps-4">
                  <span className="badge rounded-pill bg-soft-primary">
                    {title}
                  </span>
                  <h4 className="title mt-2 mb-2">
                    {name} <br />
                  </h4>
                  <p className="para-desc text-muted pb-2">{description}</p>
                  <div>
                    <a href={linkedInProfile} target="_blank">
                      <img
                        src="/assets/images/klaim/linkedin-icon.png"
                        height="32px"
                        width="36px"
                        className="me-4"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonModal;
