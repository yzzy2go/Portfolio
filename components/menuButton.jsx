import { useState } from "react";
import Link from "next/link";

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div style={{ position: "absolute", top: "2em", right: "2em" }}>
        {/* todo: change this image to a svg */}
        <img
          src="/images/menu.png"
          style={{ height: "2em" }}
          // onClick={setOpen(true)}
          onClick={() => setOpen(true)}
        ></img>
      </div>
      <overlay id="menu" style={{ display: open ? "block" : "none" }}>
        <overlaycontent>
          <div>
            <h2 style={{ marginRight: "20px" }}>
              <Link href="/portfolio">Portfolio</Link>
            </h2>
            <h2 style={{ marginRight: "20px" }}>
              <Link href="/experience">Experience</Link>
            </h2>
            <h2>
              <Link href="/contact">Contact</Link>
            </h2>
          </div>
        </overlaycontent>
        <img
          src="/images/menuClose.png"
          style={{
            position: "absolute",
            top: "2em",
            right: "2em",
            width: "2em",
          }}
          onClick={() => setOpen(false)}
        />
      </overlay>
      <style jsx>
        {`
          img:hover {
            cursor: pointer;
          }
          overlay {
            /* Height & width depends on how you want to reveal the overlay (see JS below) */
            /* height: 100%; */
            /* width: 0; */
            height: 100%;
            width: 100%;
            position: fixed; /* Stay in place */
            z-index: 10; /* Sit on top */
            left: 0;
            top: 0;
            background-color: rgba(100, 100, 100, 0.9);
            /* background-color: rgb(0, 0, 0); /* Black fallback color */
            /* background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
            overflow-x: hidden; /* Disable horizontal scroll */
            transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
          }

          /* Position the content inside the overlay */
          overlaycontent {
            color: #ffffff;
            position: relative;
            top: 25%; /* 25% from the top */
            width: 100%; /* 100% width */
            text-align: center; /* Centered text/links */
            margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
          }
        `}
      </style>
    </div>
  );
}
