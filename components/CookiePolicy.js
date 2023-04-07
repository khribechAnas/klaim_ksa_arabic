import React, { useEffect, useState } from "react";

const CookiePolicy = () => {
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);

  useEffect(() => {
    const cookiePolicy = localStorage.getItem("cookie-policy");
    const shouldShow = cookiePolicy === "false" ? false : true;
    setShowCookiePolicy(shouldShow);
  }, []);

  const handleCloseClick = () => {
    setShowCookiePolicy(false);
    localStorage.setItem("cookie-policy", false);
  };
  
  return showCookiePolicy ? (
    <div className="card cookie-popup shadow rounded py-3 px-4">
      <p className="text-muted mb-0">
        This website uses cookies to provide you with a great user experience.
        By using it, you accept our{" "}
        <a href="#" target="_blank" className="text-success h6">
          use of cookies
        </a>
      </p>
      <div className="cookie-popup-actions text-end">
        <button onClick={handleCloseClick}>
          <i className="uil uil-times text-dark fs-4"></i>
        </button>
      </div>
    </div>
  ) : null;
};

export default CookiePolicy;
