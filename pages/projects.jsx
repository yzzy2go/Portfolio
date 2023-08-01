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
              `uwexplore is a web application that streamlines the course searching and planning process 
              for University of Waterloo undergraduate students. The interactive planner allows students 
              to view courses, check graduation requirements, and visualize their schedule. I was responsible 
              for creating the frontend using TypeScript.`,
              "web",
              "https://uwexplore.com/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "spacestagram",
              `Spacestagram is an Instagram-esque photo feed populated with images
              from NASA's Astonomy Picture of the Day API. It was built using React with
              design system Polaris, and tested using Jest and Lighthouse.`,
              "web",
              "https://yzzy2go.github.io/Spacestagram/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "deliverydog",
              `I created a simple WebGL infinite runner game using C# scripts, 
              rigidbody2D components, box colliders, triggers and animations.`,
              "game",
              "https://play.unity3dusercontent.com/webgl/34ef30be-d09e-4462-9fbb-5a11cf50858c?screenshot=false&embedType=embed"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "portfolio",
              `This portfolio was created with Next.js and custom components and styling. It 
              showcases past projects and work experience I've accumulated over the years.`,
              "web",
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
