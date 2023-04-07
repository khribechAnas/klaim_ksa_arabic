import React, { useEffect } from "react";
import { ArrowUp } from "react-feather";

const ScrollToTop = () => {
  useEffect(() => {
    var mybutton = document.getElementById("back-to-top");
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (mybutton != null) {
        if (
          document.body.scrollTop > 500 ||
          document.documentElement.scrollTop > 500
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    }
  }, []);

  return (
    <>
      <a href="#" id="back-to-top" className="back-to-top fs-5">
        <ArrowUp className="fea icon-sm icons align-middle" />
      </a>
    </>
  );
};

export default ScrollToTop;
