import React, { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

const wowAnimated = (WrappedComponent) => {
  const WithWowAnimation = (props) => {
    useEffect(() => {
      new WOW().init();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithWowAnimation;
};

export default wowAnimated;
