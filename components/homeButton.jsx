import Link from "next/link";

export default function HomeButton() {
  return (
    <div>
      <Link href="/">
        <img src="/images/logo.svg" style={{ width: "3em" }} />
      </Link>
    </div>
  );
}
