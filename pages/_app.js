import { useEffect } from "react";
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
      <div id="cursor" class="cursor"></div>
      <Component {...pageProps} />
    </>
  );
}
