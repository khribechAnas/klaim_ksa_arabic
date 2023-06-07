import Script from "next/script";

import "../styles/globals.css";
import "tiny-slider/dist/tiny-slider.css";
import "../public/assets/libs/animate.css/animate.min.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/icons.min.css";
import "../public/assets/libs/@iconscout/unicons/css/line.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "yet-another-react-lightbox/styles.css";
import "../public/assets/css/style.css";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import ScrollToTop from "../components/ScrollToTop";
import { Router } from "next/router";
import { HubspotProvider } from "next-hubspot";
import Head from "next/head";
import CookiePolicy from "../components/CookiePolicy";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    // const CC = window.CookieConsent;
  }, []);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url, { shallow }) => {
      console.log({ url, shallow });
      setLoading(true);
    });
    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [Router.events]);

  return (
    <>
      <HubspotProvider>
        <Head>
          <link rel="shortcut icon" href="assets/images/klaim/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <ScrollToTop />
        <CookiePolicy />
      </HubspotProvider>
      <Script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js" />
      <Script src="/assets/js/app.js" />
      <Script src="/assets/libs/shufflejs/shuffle.min.js" />
      {loading && <Preloader />}
    </>
  );
}

export default MyApp;
