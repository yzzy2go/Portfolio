import Grid from "@mui/material/Grid";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import Background from "../components/background";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yzabelle Go</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ position: "relative", zIndex: "100" }}>
        <Header />
        <Grid
          container
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

          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop: "2em", textAlign: "center" }}
          >
            <Grid item xs={12} sm={3} md={1.7}>
              <h2 className={styles.link}>
                <Link href="/projects">Projects</Link>
              </h2>
            </Grid>
            <Grid item xs={12} sm={3} md={1.7}>
              <h2 className={styles.link}>
                <Link href="/experience">Experience</Link>
              </h2>
            </Grid>
            <Grid item xs={12} sm={3} md={1.7}>
              <h2 className={styles.link}>
                <Link href="/contact">Contact</Link>
              </h2>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Background />
    </div>
  );
}
