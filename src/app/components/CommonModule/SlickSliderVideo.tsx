"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const SlickSliderVideo: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [showAboutUsVideoModal, setShowAboutUsVideoModal] = useState<
    number | null
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* <Lightbox
        open={showAboutUsVideoModal !== null}
        close={() => setShowAboutUsVideoModal(null)}
        carousel={{ finite: true }}
        styles={{ container: { backgroundColor: "rgba(26,42,58,0.94)" } }}
        slides={videos}
        render={{
          slide: ({ slide }) => <>
          <iframe
            width="1000"
            height="563"
            src={showAboutUsVideoModal}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </>,
        }}
      /> */}
      <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
        <div
          key={1}
          className="ml-36 cursor-pointer"
          // onClick={() => setShowAboutUsVideoModal(true)}
        >
          <div className="mx-2 pb-8 pt-12 px-6 bg-[#F5F7FB] rounded-lg">1</div>
        </div>
        <div key={2} className="ml-36">
          <div className="mx-2 pb-8 pt-12 px-6 bg-[#F5F7FB] rounded-lg">2</div>
        </div>
        <div key={3} className="ml-36">
          <div className="mx-2 pb-8 pt-12 px-6 bg-[#F5F7FB] rounded-lg">3</div>
        </div>
      </Slider>
      <div className="mt-12 flex items-center justify-end">
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
