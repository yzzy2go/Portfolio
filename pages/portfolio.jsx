import HomeButton from "../components/homeButton";
import MenuButton from "../components/menuButton";
import styles from "../styles/Portfolio.module.css";

export default function Portfolio() {
  return (
    <div>
      <HomeButton />
      <MenuButton />
      <div className={styles.container}>
        <div>
          <img
            src="/images/placeholder.png"
            style={{
              width: "32vw",
              display: "inline-block",
              verticalAlign: "top",
            }}
          ></img>
          <div
            style={{
              display: "inline-block",
              minWidth: "30vw",
              marginLeft: "6rem",
            }}
          >
            <h1>Projects</h1>
            <hr className={styles.hr} />
            <div className={styles.project}>
              <h2>uwexplore</h2>
              <h3>web</h3>
            </div>
            <hr className={styles.hr} />
            <div className={styles.project}>
              <h2>uwexplore</h2>
              <h3>web</h3>
            </div>
            <hr className={styles.hr} />
            <div className={styles.project}>
              <h2>uwexplore</h2>
              <h3>web</h3>
            </div>
            <hr className={styles.hr} />
            <div className={styles.project}>
              <h2>uwexplore</h2>
              <h3>web</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
