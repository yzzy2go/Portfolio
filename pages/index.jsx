import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import HomeButton from "../components/homeButton";
import MenuButton from "../components/menuButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeButton />
        <MenuButton />
        <h1 className={styles.title}>Hello</h1>

        <p className={styles.description}>
          Software Engineer, frontend developer. Looking for full-time
          opportunities.
        </p>
        <div>
          <h2 style={{ display: "inline-block", marginRight: "20px" }}>
            <Link href="/portfolio">Portfolio</Link>
          </h2>
          <h2 style={{ display: "inline-block", marginRight: "20px" }}>
            <Link href="/experience">Experience</Link>
          </h2>
          <h2 style={{ display: "inline-block" }}>
            <Link href="/contact">Contact</Link>
          </h2>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          color: #ffffff;
          background-color: rgb(12, 12, 26);
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
