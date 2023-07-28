import HomeButton from "../components/homeButton";
import MenuButton from "../components/menuButton";

export default function Portfolio() {
  return (
    <main>
      <HomeButton />
      <MenuButton />
      {/* weirdge translation */}
      <div style={{ transform: "translate(0, 50%)" }}>
        <img
          src="/images/placeholder.png"
          style={{ width: "30vh", display: "inline-block" }}
        ></img>
        <div style={{ display: "inline-block" }}>
          <h1>First Post</h1>
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
    </main>
  );
}
