/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";

const products = [
  {
    img: "/assets/images/klaim/thumbnail1.png",
    video: "https://www.youtube.com/embed/V4xYylZ5Ers",
  },
  {
    img: "/assets/images/klaim/thumbnail2.png",
    video: "https://www.youtube.com/embed/47CDBY_j7KA",
  },
  {
    img: "/assets/images/klaim/thumbnail3.png",
    video: "https://www.youtube.com/embed/edZWAMvC3X8",
  },
  {
    img: "/assets/images/klaim/thumbnail4.jpeg",
    video: "https://www.youtube.com/embed/woCS0nwXCzI",
  },
];

const Review = () => {
  const sliderRef = useRef(null);
  const [showAboutUsVideoModal, setShowAboutUsVideoModal] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    variableWidth: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    appendDots: (dots) => (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <ul
          className="carousel-indicators position-relative"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {dots.map((dot, index) => {
            return (
              <div key={index}>
                {dot.props.className === "slick-active" ? (
                  <button
                    onClick={() => sliderRef.current.slickGoTo(index)}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    className="active"
                    aria-current="true"
                  ></button>
                ) : (
                  <button
                    onClick={() => sliderRef.current.slickGoTo(index)}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    className=""
                  ></button>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    ),
  };

  return (
    <>
      <Lightbox
        open={showAboutUsVideoModal}
        close={() => setShowAboutUsVideoModal(null)}
        carousel={{ finite: true }}
        styles={{ container: { backgroundColor: "rgba(26,42,58,0.94)" } }}
        slides={[{ type: "about-video" }]}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
          slide: (slide) => {
            switch (slide.type) {
              case "about-video":
                return (
                  <>
                    <iframe
                      width="1000"
                      height="563"
                      src={showAboutUsVideoModal}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </>
                );
            }
          },
        }}
      />
      <div className="container mt-200 mt-60">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div
              className="section-title mb-4 pb-2 wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              <h4 className="title mb-4">
                Discover Why Healthcare Providers Trust Us
              </h4>
              <p className="text-muted para-desc mb-0 mx-auto">
                Review testimonials from satisfied healthcare providers and see
                for yourself why KLAIM is a trusted partner in the industry
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 mt-4">
            <Slider {...settings} ref={sliderRef}>
              {products.map((x, i) => {
                return (
                  <div className="position-relative klaim-slide" key={x.img}>
                    <img
                      src={x.img}
                      className="rounded img-fluid mx-auto d-block shadow rounded slick-custom-img"
                      alt=""
                    />
                    <div className="play-icon">
                      <a
                        className="play-btn border-0"
                        onClick={() => setShowAboutUsVideoModal(x.video)}
                      >
                        <i
                          className="mdi mdi-play text-primary rounded-circle shadow"
                          style={{ width: 50, height: 50, lineHeight: "50px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
