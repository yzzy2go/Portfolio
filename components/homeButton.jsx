import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomeButton() {
  const router = useRouter();
  const [hoverClass, setHoverClass] = useState("homeButton");

  useEffect(() => {
    if (router.pathname === "/") {
      setHoverClass("");
    } else {
      setHoverClass("homeButton");
    }
  }, []);

  return (
    <div>
      <Link href="/">
        <img
          src="/images/logo.svg"
          style={{ width: "3em" }}
          className={hoverClass}
        />
      </Link>
    </div>
  );
}
