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
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
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
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-D0PLRFEHF5"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-D0PLRFEHF5');
              `}
            </Script>
            <Script
              defer
              data-domain="klaim.ai"
              src="https://plausible.klaim.ai/js/script.js"
            ></Script>
            <Script id="hotjar" strategy="afterInteractive">
              {`(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3541445,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `}
            </Script>
            <Script id="linkedin" strategy="afterInteractive">
              {`
              _linkedin_partner_id = "5667689";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              </Script><Script type="text/javascript">
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
              `}
            </Script>
          </>
        )}
        <Component {...pageProps} />
        <ScrollToTop />
        <CookiePolicy />
      </HubspotProvider>
      <Script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js" />
      <Script src="/assets/js/app.js" />
      {loading && <Preloader />}
    </>
  );
}

export default MyApp;
