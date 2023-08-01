import Link from "next/link";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div style={{ maxHeight: "100vh" }}>
      <HomeButton />
      <Menu />
      <div className={styles.container}>
        <h1>Contact</h1>
        <hr className={styles.hr} />

        {/* todo: fix the resizing issue */}
        <div className={styles.links}>
          <div style={{ marginRight: "2em" }}>
            <h3 style={{ display: "inline" }}>email</h3>
            <Link href="mailto:yzabelle.tgo@gmail.com" className={styles.link}>
              <h2 style={{ display: "inline", marginLeft: "30px" }}>
                yzabelle.tgo@gmail.com
              </h2>
            </Link>
          </div>

          <div style={{ display: "grid", marginRight: "8em" }}>
            <div>
              <h3 style={{ display: "inline", marginRight: "30px" }}>
                socials
              </h3>
              <div style={{ display: "inline-block" }}>
                <div style={{ display: "grid", gridGap: "1em" }}>
                  <Link
                    href="https://www.linkedin.com/in/yzabelle-go/"
                    className={styles.link}
                  >
                    <h2>LinkedIn</h2>
                  </Link>
                  <Link
                    href="https://github.com/yzzy2go"
                    className={styles.link}
                  >
                    <h2>Github</h2>
                  </Link>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1em" }}>
              <h3 style={{ display: "inline" }}>other</h3>
              {/* todo: sketchy marginLeft - not responsive? */}
              <Link
                href="Yzabelle_Go_resume.pdf"
                target="_blank"
                className={styles.link}
              >
                <h2 style={{ display: "inline", marginLeft: "40px" }}>
                  Resume
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
