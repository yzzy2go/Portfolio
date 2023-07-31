import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <HomeButton />
        <Menu />
        <h1 className={styles.title}>Yzabelle Go</h1>

        <p className={styles.description}>
          Software Engineer, frontend developer. Looking for full-time
          opportunities.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ display: "inline-block", marginRight: "4rem" }}>
            <Link href="/portfolio">Portfolio</Link>
          </h2>
          <h2 style={{ display: "inline-block", marginRight: "4rem" }}>
            <Link href="/experience">Experience</Link>
          </h2>
          <h2 style={{ display: "inline-block" }}>
            <Link href="/contact">Contact</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
