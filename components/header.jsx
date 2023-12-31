import styles from "../styles/Header.module.css";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";

export default function Header() {
  return (
    <div className={styles.header}>
      <div style={{ display: "inline-block" }}>
        <HomeButton />
      </div>
      <div style={{ display: "inline-block" }}>
        <Menu />
      </div>
    </div>
  );
}
