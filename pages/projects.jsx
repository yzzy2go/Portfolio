import { useState } from "react";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";
import styles from "../styles/Projects.module.css";

export default function Portfolio() {
  const [projectOpen, setProjectOpen] = useState("");

  const closeProject = (name) => {
    if (projectOpen === name) {
      setProjectOpen("");
    } else {
      setProjectOpen(name);
    }
  };

  const renderProject = (name, description, type) => {
    return (
      <div>
        <div className={styles.project}>
          {/* todo: make a proper link, don't like how it highlights the word */}
          <button className={styles.button}>
            <h2 onClick={() => closeProject(name)} className={styles.title}>
              {`${projectOpen == name ? "￩" : "￫"} ${name}`}
            </h2>
          </button>

          <h3>{type}</h3>
        </div>
        {/* todo: Just use state to hide this? -> but want nice animation */}
        <div
          style={{
            maxWidth: "35vw",
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
          {/* todo: make this conditional when having more pics */}
          <img
            src={`/images/${projectOpen}.png`}
            style={{
              width: "35vw",
              display: "inline-block",
              verticalAlign: "top",
              visibility: projectOpen !== "" ? "visible" : "hidden",
              marginTop: "1rem",
              marginLeft: "-4rem",
            }}
          ></img>
          <div
            style={{
              display: "inline-block",
              minWidth: "40vw",
              marginLeft: "4rem",
            }}
          >
            <h1>Projects</h1>
            <hr className={styles.hr} />

            {renderProject(
              "uwexplore",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "web"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "spacestagram",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "web"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "deliverydog",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "game"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "portfolio",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "web"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
