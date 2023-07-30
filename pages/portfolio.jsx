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

  return (
    <div>
      <HomeButton />
      <Menu />
      <div className={styles.container}>
        <div>
          <img
            src="/images/placeholder.png"
            style={{
              width: "32vw",
              display: "inline-block",
              verticalAlign: "top",
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

            {/* todo: make a reusable component/function! */}
            <div className={styles.project}>
              {/* todo: make a proper link, don't like how it highlights the word */}
              <h2
                onClick={() => closeProject("uwexplore")}
                style={{ cursor: "pointer" }}
              >
                uwexplore
              </h2>
              <h3>web</h3>
            </div>
            {/* Just use state to hide this? -> but want nice animation */}
            <table
              style={{
                maxWidth: "30vw",
                visibility:
                  projectOpen === "uwexplore" ? "visible" : "collapse",
              }}
            >
              <p style={{ marginBottom: "1.5rem" }}>
                Hello! I am a description for a project. I should take up a
                couple of lines and only appear when the title is clicked on!
                Hello! I am a description for a project. I should take up a
                couple of lines and only appear when the title is clicked on!
              </p>
            </table>
            <hr className={styles.hr} />

            <div className={styles.project}>
              {/* todo: make a proper link, don't like how it highlights the word */}
              <h2
                onClick={() => closeProject("uwexplor")}
                style={{ cursor: "pointer" }}
              >
                uwexplor
              </h2>
              <h3>web</h3>
            </div>
            {/* Just use state to hide this? -> but want nice animation */}
            <table
              style={{
                maxWidth: "30vw",
                visibility: projectOpen === "uwexplor" ? "visible" : "collapse",
              }}
            >
              <p style={{ marginBottom: "1.5rem" }}>
                Hello! I am a description for a project. I should take up a
                couple of lines and only appear when the title is clicked on!
                Hello! I am a description for a project. I should take up a
                couple of lines and only appear when the title is clicked on!
              </p>
            </table>
            <hr className={styles.hr} />

            <div className={styles.project}>
              {/* todo: make a proper link, don't like how it highlights the word */}
              <h2
                onClick={() => closeProject("deliverydog")}
                style={{ cursor: "pointer" }}
              >
                deliverydog
              </h2>
              <h3>web</h3>
            </div>
            {/* Just use state to hide this? -> but want nice animation */}
            <table
              style={{
                maxWidth: "30vw",
                visibility:
                  projectOpen === "deliverydog" ? "visible" : "collapse",
              }}
            >
              <p style={{ marginBottom: "1.5rem" }}>
                Hello! I am a description for a project. I should take up a
                couple of lines and only appear when the title is clicked on!
                Hello! I am a description for a project. I should take up a
                couple of lines and only appear when the title is clicked on!
              </p>
            </table>
            <hr className={styles.hr} />
            <div className={styles.project}>
              {/* todo: make a proper link, don't like how it highlights the word */}
              <h2
                onClick={() => closeProject("spacestagram")}
                style={{ cursor: "pointer" }}
              >
                spacestagram
              </h2>
              <h3>web</h3>
            </div>
            {/* Just use state to hide this? -> but want nice animation */}
            <table
              style={{
                maxWidth: "30vw",
                visibility:
                  projectOpen === "spacestagram" ? "visible" : "collapse",
              }}
            >
              <p style={{ marginBottom: "1.5rem" }}>
                Hello! I am a description for a project. I should take up a
                couple of lines and only appear when the title is clicked on!
                Hello! I am a description for a project. I should take up a
                couple of lines and only appear when the title is clicked on!
              </p>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
