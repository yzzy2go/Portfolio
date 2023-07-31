import { useState } from "react";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";
import styles from "../styles/Portfolio.module.css";

export default function Portfolio() {
  const [projectOpen, setProjectOpen] = useState("");

  const closeProject = (name) => {
    if (projectOpen === name) {
      setProjectOpen("");
    } else {
      setProjectOpen(name);
    }
  };

  const renderProject = (name, description) => {
    return (
      <div>
        <div className={styles.project}>
          {/* todo: make a proper link, don't like how it highlights the word */}
          <h2 onClick={() => closeProject(name)} style={{ cursor: "pointer" }}>
            {name}
          </h2>
          <h3>web</h3>
        </div>
        {/* todo: Just use state to hide this? -> but want nice animation */}
        <div
          style={{
            maxWidth: "30vw",
            display: projectOpen === name ? "block" : "none",
          }}
        >
          <p style={{ marginBottom: "1.5rem" }}>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <HomeButton />
      <Menu />
      <div className={styles.container}>
        <div>
          {/* todo: make this conditional when having more pics */}
          <img
            src="/images/placeholder.png"
            style={{
              width: "32vw",
              display: "inline-block",
              verticalAlign: "top",
              visibility: projectOpen !== "" ? "visible" : "hidden",
            }}
          ></img>
          <div
            style={{
              display: "inline-block",
              minWidth: "30vw",
              marginLeft: "6rem",
            }}
          >
            <h1>Projects</h1>
            <hr className={styles.hr} />

            {renderProject(
              "uwexplore",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`
            )}
            <hr className={styles.hr} />
            {renderProject(
              "uwexplor",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`
            )}
            <hr className={styles.hr} />
            {renderProject(
              "deliverydog",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`
            )}
            <hr className={styles.hr} />
            {renderProject(
              "spacestagram",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
