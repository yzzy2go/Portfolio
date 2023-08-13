import { useEffect } from "react";
import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    var cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function (e) {
      (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px");
    });
  }, []);
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WXKNG85R');
        `}
      </Script>
      <div id="cursor" class="cursor"></div>
      <Component {...pageProps} />
    </>
  );
}
