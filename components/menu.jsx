import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Menu.module.css";

export default function MenuButton() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // todo: is this necessary?
  const closeMenu = (href) => {
    if (router.pathname === href) {
      setOpen(false);
    }
  };

  return (
    <div>
      <div style={{ position: "absolute", top: "2em", right: "2em" }}>
        {/* todo: change this image to a svg */}
        <img
          src="/images/menu.png"
          style={{ height: "2em" }}
          onClick={() => setOpen(true)}
        ></img>
      </div>
      <div
        className={styles.overlay}
        id="menu"
        style={{ display: open ? "block" : "none" }}
      >
        <div className={styles.overlaycontent}>
          <div>
            <h1 style={{ fontSize: "4rem" }}>
              <Link href="/" onClick={() => closeMenu("/")}>
                Home
              </Link>
            </h1>
            <h1 style={{ fontSize: "4rem" }}>
              <Link href="/portfolio" onClick={() => closeMenu("/portfolio")}>
                Portfolio
              </Link>
            </h1>
            <h1 style={{ fontSize: "4rem" }}>
              <Link href="/experience" onClick={() => closeMenu("/experience")}>
                Experience
              </Link>
            </h1>
            <h1 style={{ fontSize: "4rem" }}>
              <Link href="/contact" onClick={() => closeMenu("/contact")}>
                Contact
              </Link>
            </h1>
          </div>
        </div>
        <img
          src="/images/menuClose.png"
          style={{
            position: "absolute",
            top: "2em",
            right: "2em",
            width: "2em",
          }}
          onClick={() => setOpen(false)}
          className={styles.menuButton}
        />
      </div>
    </div>
  );
}
