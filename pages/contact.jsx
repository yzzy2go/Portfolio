import Link from "next/link";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <HomeButton />
      <Menu />
      <div className={styles.container}>
        <h1>Contact</h1>
        <hr className={styles.hr} />

        {/* todo: fix the resizing issue */}
        <div className={styles.links}>
          <div>
            <h3 style={{ display: "inline-block" }}>email</h3>
            <h2 style={{ display: "inline-block", marginLeft: "30px" }}>
              yzabelle.tgo@gmail.com
            </h2>
          </div>

          <div style={{ display: "grid", marginRight: "8em" }}>
            <div>
              <h3 style={{ display: "inline-block" }}>socials</h3>
              <div style={{ display: "inline-block", marginLeft: "30px" }}>
                <div style={{ display: "grid" }}>
                  <h2>LinkedIn</h2>
                  <h2>Github</h2>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ display: "inline-block" }}>other</h3>
              {/* todo: sketchy marginLeft - not responsive? */}
              <h2 style={{ display: "inline-block", marginLeft: "40px" }}>
                Resume
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
