import Link from "next/link";

export default function HomeButton() {
  return (
    <div style={{ position: "absolute", top: "2em", left: "2em" }}>
      <Link href="/">
        <div style={{ position: "relative", textAlign: "center" }}>
          <img src="/images/logo.svg" style={{ width: "3em" }} />
          {/* <div style={{ position: "absolute", top: "1em", left: "1.5em" }}>
            <h2
              style={{
                marginTop: "0px",
                textDecoration: "none",
                color: "white",
              }}
            >
              Y
            </h2>
          </div> */}
        </div>
      </Link>
    </div>
  );
}
