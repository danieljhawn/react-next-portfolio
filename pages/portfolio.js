import React from "react";
import Head from "next/head";
import Layout from "../components/MyLayout";
import ProjectCard from "../components/ProjectCard";

const subheadStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  letterSpacing: "7px",
  wordSpacing: "2px",
  color: "#FFFFFF",
  textDecoration: "none",
  fontStyle: "normal",
  textTransform: "uppercase",
  textShadow:
    "0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, -18px 2px 2px rgba(122,16,59,0)",
};

const centerMe = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const maxHeight = {
  height: "100px"
}

const roundRect = {
    WebkitBorderRadius: "18px",
    MozBorderRadius: "18px",
    borderRadius: "18px",
  };

function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Daniel Hawn's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div style={roundRect} className="col-md-6 col-sm-12 col-xs-12 mx-auto p-3 m-2 bg-secondary text-white shadow-lg">
            <h2 style={centerMe}>
              <p style={subheadStyle} className="subhead">
                Projects
              </p>
            </h2>
            <div className="container-fluid">
              <div className="col">
                <ProjectCard
                  url={"https://danieljhawn.github.io/dayPlanner/"}
                  img={"./dayPlannerThumb_300x300.jpg"}
                  title={"Day Planner"}
                  description={"Uses Moment.js and localStorage to create an hourly day planner"}
                  style={maxHeight}
                />
                {/* <ProjectCard
                  url={"https://danieljhawn.github.io/weatherApp/"}
                  img={"./weatherApp_300x300.jpg"}
                  title={"Weather App"}
                /> */}
                <ProjectCard
                  url={"https://danieljhawn.github.io/passwordGenerator/"}
                  img={"./passGen_300x300.jpg"}
                  title={"Password Generator"}
                  description={"Plain Javascript app that generates a random password based on prompts to the user"}
                />
                <ProjectCard
                  url={"https://project-2-spotify.herokuapp.com/"}
                  img={"./spotifyTracker_300x300.jpg"}
                  title={"Spotify Genre Map"}
                  description={"Scrapes data from Spotify to create listener map"}
                />
                <ProjectCard
                  url={"https://project-nighthawk.now.sh/"}
                  img={"./nightHawk_300x300.jpg"}
                  title={"Project Nighthawk"}
                  description={"React app that creates estimates for print jobs"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;
