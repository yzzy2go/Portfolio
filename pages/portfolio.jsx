import Link from "next/link";

export default function Portfolio() {
  return (
    <main>
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
          max-height: 100vh;
        }
      `}</style>
    </main>
  );
}
