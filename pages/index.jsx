import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";
import Background from "../components/background";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yzabelle Go</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ position: "relative", zIndex: "100" }}>
        <HomeButton />
        <Menu />
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={12}>
            <h1 className={styles.title}>Yzabelle Go</h1>
          </Grid>
          <Grid item xs={12}>
            <p className={styles.description}>
              Software engineer, frontend developer. Looking for full-time
              opportunities.
            </p>
          </Grid>

          <Grid item xs={12}>
            <div style={{ marginTop: "2rem" }}>
              <h2 style={{ marginRight: "4rem" }} className={styles.link}>
                <Link href="/projects">Projects</Link>
              </h2>
              <h2 style={{ marginRight: "4rem" }} className={styles.link}>
                <Link href="/experience">Experience</Link>
              </h2>
              <h2 className={styles.link}>
                <Link href="/contact">Contact</Link>
              </h2>
            </div>
          </Grid>
        </Grid>
      </div>
      <Background />
    </div>
  );
}
