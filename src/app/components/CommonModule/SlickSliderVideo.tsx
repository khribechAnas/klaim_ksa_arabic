"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const videos = [
  {
    key: 1,
    img: "/assets/images/thumbnail1.png",
    video: "https://www.youtube.com/embed/V4xYylZ5Ers",
  },
  {
    key: 2,
    img: "/assets/images/thumbnail2.png",
    video: "https://www.youtube.com/embed/47CDBY_j7KA",
  },
  {
    key: 3,
    img: "/assets/images/thumbnail3.png",
    video: "https://www.youtube.com/embed/edZWAMvC3X8",
  },
  {
    key: 4,
    img: "/assets/images/thumbnail4.png",
    video: "https://www.youtube.com/embed/F4WJESvD2u0",
  },
];

const SlickSliderVideo: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [showAboutUsVideoModal, setShowAboutUsVideoModal] = useState<
    string | null
  >(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: false,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          className: "center",
          centerMode: false,
          infinite: true,
          arrows: false,
          centerPadding: "50px",
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: false,
          infinite: true,
          arrows: false,
          centerPadding: "50px",
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Lightbox
        open={!!showAboutUsVideoModal}
        close={() => setShowAboutUsVideoModal(null)}
        carousel={{ finite: true }}
        styles={{ container: { backgroundColor: "rgba(26,42,58,0.94)" } }}
        slides={[
          {
            type: "image",
            src: "",
          },
        ]}
        render={{
          slide: ({ slide }) => (
            <>
              <iframe
                width="1000"
                height="563"
                src={showAboutUsVideoModal as string}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </>
          ),
        }}
      />
      {/* <div className="relative">
        <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
          {videos.map((video) => {
            return (
              <div
                key={video.key}
                className="pr-0 md:pr-28 cursor-pointer rounded-lg"
                onClick={() => setShowAboutUsVideoModal(video.video)}
              >
                <div className="mx-0 md:mx-2 rounded-lg">
                  <img src={video.img} className="rounded-lg" />
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="absolute rounded-l-lg top-0 right-0 bottom-[7px] bg-gradient-to-r from-gray-300 to-transparent w-[104px] hidden md:block" />
      </div> */}
      <div className="relative">
        <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
          {videos.map((video) => {
            return (
              <div
                key={video.key}
                className="pr-0 md:pr-8 -ml-0 md:-ml-10 cursor-pointer rounded-lg"
                onClick={() => setShowAboutUsVideoModal(video.video)}
              >
                <div className="mx-4 md:mx-0 rounded-lg">
                  <img src={video.img} className="rounded-lg" />
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="absolute rounded-l-lg top-0 right-0 bottom-[7px] bg-gradient-to-l from-white via-[rgba(255,255,255,0.7)] to-transparent w-[120px] hidden md:block" />
        {/* <div className="absolute rounded-l-lg top-0 right-0 bottom-[7px] bg-gradient-to-l from-white via-[rgba(255,255,255,0.7)] to-transparent w-[70px] block md:hidden" />
        <div className="absolute rounded-r-lg top-0 left-0 bottom-[7px] bg-gradient-to-r from-white via-[rgba(255,255,255,0.7)] to-transparent w-[70px] block md:hidden" /> */}
      </div>
      <div className="mt-8 flex items-center justify-end">
        <a className="mr-4 cursor-pointer" onClick={previous}>
          <img src="assets/images/arrowLeft.svg" />
        </a>
        <a className="cursor-pointer" onClick={next}>
          <img src="assets/images/arrowRight.svg" />
        </a>
      </div>
    </div>
  );
};

export default SlickSliderVideo;
