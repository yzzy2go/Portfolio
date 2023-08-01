import { useState } from "react";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";
import styles from "../styles/Projects.module.css";
import Link from "next/link";

export default function Experience() {
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
            <h1>Experience</h1>
            <hr className={styles.hr} />

            {renderProject(
              "Lacework",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "software engineer",
              "https://www.lacework.com/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "Behaviour",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "game developer",
              "https://www.bhvr.com/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "Polar",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "software engineer",
              "https://www.createwithnova.com/blog/polar-is-now-nova"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "Bunch",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "software engineer",
              "https://bunch.live/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "BlueCat",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "ux designer",
              "https://bluecatnetworks.com/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "Seneca",
              `Hello! I am a description for a project. I should take up a couple
            of lines and only appear when the title is clicked on! Hello! I am a
            description for a project. I should take up a couple of lines and
            only appear when the title is clicked on!`,
              "learning developer",
              "https://www.senecacollege.ca/home.html"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
