import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Menu.module.css";
import Grid from "@mui/material/Grid";

export default function MenuButton() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
          src="/images/menuButton.svg"
          style={{ height: "1.5em" }}
          onClick={() => setOpen(true)}
          className={styles.menuButton}
        ></img>
      </div>
      <div
        className={styles.overlay}
        style={{ display: open ? "inline-block" : "none" }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={12}>
            <h1 style={{ fontSize: "4rem" }} className={styles.page}>
              <Link href="/" onClick={() => closeMenu("/")}>
                Home
              </Link>
            </h1>
          </Grid>
          <Grid item xs={12}>
            <h1
              style={{ fontSize: "4rem", marginTop: "2rem" }}
              className={styles.page}
            >
              <Link href="/projects" onClick={() => closeMenu("/projects")}>
                Projects
              </Link>
            </h1>
          </Grid>
          <Grid item xs={12}>
            <h1
              style={{ fontSize: "4rem", marginTop: "2rem" }}
              className={styles.page}
            >
              <Link href="/experience" onClick={() => closeMenu("/experience")}>
                Experience
              </Link>
            </h1>
          </Grid>
          <Grid item xs={12}>
            <h1
              style={{ fontSize: "4rem", marginTop: "2rem" }}
              className={styles.page}
            >
              <Link href="/contact" onClick={() => closeMenu("/contact")}>
                Contact
              </Link>
            </h1>
          </Grid>
        </Grid>
        <img
          src="/images/menuClose.svg"
          style={{
            position: "absolute",
            top: "1.5em",
            right: "2em",
            width: "2.5em",
            padding: "5px",
          }}
          onClick={() => setOpen(false)}
          className={styles.closeButton}
        />
      </div>
    </div>
  );
}
