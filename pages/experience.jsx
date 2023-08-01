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
            display: projectOpen === name ? "block" : "none",
          }}
          className={styles.description}
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
              `At Lacework I created an analytics website for the Documentation team 
              that allowed them to see different metrics tracking traffic to their docs. 
              This was done through the use of React, Netlify, and Amazon S3.`,
              "software engineer",
              "https://www.lacework.com/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "Behaviour",
              `At Behaviour I led the design and creation of a multi-page React site 
              with data-driven map elements, including integration of a video streaming 
              third-party SDK and external APIs. I also aided in developing game elements.`,
              "game developer",
              "https://www.bhvr.com/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "Polar",
              `During my internship at Polar I designed and introduced a feature using 
              React components, Django forms, and Django serializers to integrate new customers 
              into an ad-management software.`,
              "software engineer",
              "https://www.createwithnova.com/blog/polar-is-now-nova"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "Bunch",
              `While at Bunch I automated sorting of bugs using Selenium and Javascript. I also 
              reduced the app crash rates from 6.3% to 4.2% through analysis of Firebase device 
              logs for bugs found during bi-weekly regression tests.`,
              "software engineer",
              "https://bunch.live/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "BlueCat",
              `At BlueCat I developed style guides and design system libraries in Sketch to be used 
              company wide. In addition, I aided in conducting user interviews to gain feedback 
              on features.`,
              "ux designer",
              "https://bluecatnetworks.com/"
            )}
            <hr className={styles.hr} />
            {renderProject(
              "Seneca",
              `During my time at Seneca I populated web pages with media elements for online courses 
              using HTML, CSS, and WordPress.`,
              "learning developer",
              "https://www.senecacollege.ca/home.html"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
