import Link from "next/link";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";
import styles from "../styles/Contact.module.css";
import Grid from "@mui/material/Grid";
import Background from "../components/background";

export default function Contact() {
  return (
    <>
      <div style={{ position: "relative", zIndex: "100" }}>
        <HomeButton />
        <Menu />
        <Grid
          container
          direction="row"
          justifyContent="center"
          // todo: make padding more responsive to screen size
          sx={{ minHeight: "100vh", textAlign: "center", paddingTop: "16em" }}
        >
          <Grid item xs={8} md={6} sx={{ textAlign: "left" }}>
            <h1>Contact</h1>
            <hr className={styles.hr} />
            <Grid container spacing={4} sx={{ alignItems: "end" }}>
              <Grid item sm={12} md={2}>
                <h3>email</h3>
              </Grid>
              <Grid item sm={12} md={10}>
                <Link
                  href="mailto:yzabelle.tgo@gmail.com"
                  className={styles.link}
                >
                  <h2 className={styles.email}>↗ yzabelle.tgo@gmail.com</h2>
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <h3>socials</h3>
              </Grid>
              <Grid item xs={12} md={10}>
                <Link
                  href="https://www.linkedin.com/in/yzabelle-go/"
                  target="_blank"
                  className={styles.link}
                >
                  <h2 style={{ whiteSpace: "nowrap" }}>↗ LinkedIn</h2>
                </Link>
                <Link
                  href="https://github.com/yzzy2go"
                  target="_blank"
                  className={styles.link}
                >
                  <h2 style={{ whiteSpace: "nowrap" }}>↗ Github</h2>
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <h3>other</h3>
              </Grid>
              <Grid item xs={12} md={10}>
                <Link
                  href="Yzabelle_Go_resume.pdf"
                  target="_blank"
                  className={styles.link}
                >
                  <h2>↗ Resume</h2>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div style={{ opacity: "75%" }}>
        <Background />
      </div>
    </>
  );
}
