import React from 'react'
import Head from 'next/head'
import Layout from '../components/MyLayout'
import ProjectCard from '../components/ProjectCard'

const subheadStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    letterSpacing:  '7px',
    wordSpacing: '2px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontStyle: 'normal',
    textTransform: 'uppercase',
}

const centerMe = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

function Portfolio() {
    return <Layout>
        <Head>
            <title>Daniel Hawn's Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </Head>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 mx-auto p-3 m-2 bg-secondary text-white shadow-lg">
                    <h2 style={centerMe}>
                        <p style={subheadStyle} className="subhead">Projects</p>
                    </h2>
                    <div className="container-fluid">
                        <div style={centerMe} className="row">
                        <ProjectCard url={"https://danieljhawn.github.io/dayPlanner/"} img={"./dayPlannerThumb_300x300.jpg"} title={"Day Planner"}/>
                        <ProjectCard url={"https://danieljhawn.github.io/weatherApp/"} img={"./weatherApp_300x300.jpg"} title={"Weather App"}/>
                        <ProjectCard url={"https://danieljhawn.github.io/passwordGenerator/"} img={"./passGen_300x300.jpg"} title={"Password Generator"}/>
                        <ProjectCard url={"https://project-2-spotify.herokuapp.com/"} img={"./spotifyTracker_300x300.jpg"} title={"Spotify Genre Map"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}

export default Portfolio


{/* <div style="display:flex;justify-content:center;align-items:center;">
  <div></div>
</div> */}