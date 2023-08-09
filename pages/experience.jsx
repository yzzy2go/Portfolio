import { useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";

import styles from "../styles/Projects.module.css";
import Background from "../components/background";
import Header from "../components/header";

export default function Experience() {
  const [projectHover, setProjectHover] = useState("");

  const mouseEnter = (name) => {
    setProjectHover(name);
  };

  const mouseLeave = () => {
    setProjectHover("");
  };

  const renderProject = (name, description, type, link) => {
    return (
      <div>
        <div className={styles.project}>
          <Grid container direction="row" alignItems="end">
            <Grid item xs={12} sm={6}>
              {link === "" ? (
                <h2 className={styles.noLink}>{name}</h2>
              ) : (
                <Link href={link} target="_blank">
                  <h2
                    onMouseOver={() => mouseEnter(name)}
                    onMouseLeave={mouseLeave}
                    className={styles.title}
                  >
                    {`${projectHover === name ? "↗" : ""} ${name}`}
                  </h2>
                </Link>
              )}
            </Grid>
            <Grid item xs={12} sm={6} className={styles.type}>
              <h3>{type}</h3>
            </Grid>
          </Grid>
        </div>
        <div className={styles.description}>
          <p style={{ marginBottom: "1.5rem", marginTop: "0.75em" }}>
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div style={{ position: "relative", zIndex: "100" }}>
        <Header />
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh", textAlign: "center" }}
        >
          <Grid item xs={8} md={6} sx={{ textAlign: "left", margin: "6em 0" }}>
            <h1>Experience</h1>
            <hr className={styles.hr} />
            {renderProject(
              "Lacework",
              `At Lacework I created an analytics website for the Documentation team
              that allowed them to see different metrics tracking traffic to their docs.
              This was done through the use of React, Netlify, and S3 buckets.`,
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
          </Grid>
        </Grid>
      </div>
      <div style={{ opacity: "75%" }}>
        <Background />
      </div>
    </>
  );
}
