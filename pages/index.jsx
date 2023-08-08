import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";
import Background from "../components/background";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yzabelle Go</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <HomeButton />
        <Menu />
        <h1 className={styles.title}>Yzabelle Go</h1>

        <p className={styles.description}>
          Software engineer, frontend developer. Looking for full-time
          opportunities.
        </p>
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
      </div>
      <Background />
    </div>
  );
}
