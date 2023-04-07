import React, { useEffect } from "react";
import Head from "next/head";

const withYandexMetrika = (WrappedComponent) => {
  const WithYandexMetrikaComponent = (props) => {
    useEffect(() => {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(92978867, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      `;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return (
      <>
        <Head>
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/92978867"
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        </Head>
        <WrappedComponent {...props} />
      </>
    );
  };

  return WithYandexMetrikaComponent;
};

export default withYandexMetrika;
