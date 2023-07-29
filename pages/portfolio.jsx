import HomeButton from "../components/homeButton";
import MenuButton from "../components/menuButton";

export default function Portfolio() {
  return (
    <div style={{ display: "grid", placeContent: "center" }}>
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
    </div>
  );
}
