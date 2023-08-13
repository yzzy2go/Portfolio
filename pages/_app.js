import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
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
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MQ6FQTTWWQ"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MQ6FQTTWWQ');`}
        </script>
        <title>Yzabelle Go</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="cursor" class="cursor"></div>
      <Component {...pageProps} />
    </>
  );
}
