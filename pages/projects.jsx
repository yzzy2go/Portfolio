import { useState } from "react";
import HomeButton from "../components/homeButton";
import Menu from "../components/menu";
import styles from "../styles/Projects.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Background from "../components/background";

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

          <h3>{type}</h3>
        </div>
        {/* todo: Just use state to hide this? -> but want nice animation */}
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
        <HomeButton />
        <Menu />
        <Grid
          container
          direction="row"
          justifyContent="center"
          // todo: make padding more responsive to screen size
          sx={{ minHeight: "100vh", textAlign: "center", paddingTop: "16em" }}
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

          <Grid item xs={8} md={6} sx={{ textAlign: "left" }}>
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
    </>
  );
}
