import { useState } from "react";
import styles from "../styles/Projects.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Background from "../components/background";
import Header from "../components/header";

export default function Portfolio() {
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
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: "100" }}>
        <Header />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "relative",
            minHeight: "100vh",
            textAlign: "center",
          }}
        >
          {/* todo: add picture gallery */}
          {/* <Grid item xs={5} sx={{ marginRight: "2em" }}>
            <img
              src={`/images/${projectOpen}.png`}
              style={{
                visibility: projectOpen !== "" ? "visible" : "hidden",
                maxWidth: "100%",
              }}
              className={styles.image}
            ></img>
          </Grid> */}

          <Grid item xs={8} md={6} sx={{ textAlign: "left", margin: "6em 0" }}>
            <Box>
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
            </Box>
          </Grid>
        </Grid>
      </div>
      <div style={{ opacity: "75%" }}>
        <Background />
      </div>
    </div>
  );
}
