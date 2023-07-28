import Link from "next/link";
import HomeButton from "../components/homeButton";
import MenuButton from "../components/menuButton";

export default function Portfolio() {
  return (
    <main>
      <HomeButton />
      <MenuButton />
      <div>
        <img
          src="/images/placeholder.png"
          style={{ width: "30vh", display: "inline-block" }}
        ></img>
        <div style={{ display: "inline-block" }}>
          <h1>First Post</h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </div>
      </div>
      <style jsx>{`
        main {
          display: grid;
          place-content: center;
          background-color: rgb(12, 12, 26);
          color: white;
        }
      `}</style>
    </main>
  );
}
