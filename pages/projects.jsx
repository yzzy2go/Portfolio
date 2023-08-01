import { useState } from "react";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";
import styles from "../styles/Projects.module.css";
import Link from "next/link";

export default function Portfolio() {
  const [projectOpen, setProjectOpen] = useState("");

  const closeProject = (name) => {
    if (projectOpen === name) {
      setProjectOpen("");
    } else {
      setProjectOpen(name);
    }
  };
  const renderLink = (name, link) => {
    return (
      <Link href={link} target="blank">
        <h3
          style={{
            display: projectOpen == name ? "inline-block" : "none",
          }}
          className={styles.visit}
        >
          {`↗ visit`}
        </h3>
      </Link>
    );
  };

  const renderProject = (name, description, type, link) => {
    return (
      <div>
        <div className={styles.project}>
          <div>
            <button className={styles.button}>
              <h2 onClick={() => closeProject(name)} className={styles.title}>
                {`${projectOpen == name ? "￩" : "￫"} ${name}`}
              </h2>
            </button>
            {link !== "" ? renderLink(name, link) : <></>}
          </div>
          <h3>{type}</h3>
        </div>
        {/* todo: Just use state to hide this? -> but want nice animation */}
        <div
          style={{
            maxWidth: "40vw",
            display: projectOpen === name ? "block" : "none",
          }}
        >
          <p style={{ marginBottom: "1.5rem" }}>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div style={{ height: "100vh" }}>
      <HomeButton />
      <Menu />
      <div className={styles.container}>
        <div>
          <img
            src={`/images/${projectOpen}.png`}
            style={{
              visibility: projectOpen !== "" ? "visible" : "hidden",
            }}
            className={styles.image}
          ></img>
          <div className={styles.content}>
            <h1>Projects</h1>
            <hr className={styles.hr} />

            {renderProject(
              "uwexplore",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "web",
              "https://uwexplore.com/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "spacestagram",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "web",
              "https://yzzy2go.github.io/Spacestagram/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "deliverydog",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "game",
              "https://play.unity3dusercontent.com/webgl/34ef30be-d09e-4462-9fbb-5a11cf50858c?screenshot=false&embedType=embed"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "portfolio",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "web",
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
