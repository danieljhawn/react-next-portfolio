import React from 'react'
import Head from 'next/head'
import Layout from '../components/MyLayout'

const subheadStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    // fontSize: '30px',
    letterSpacing:  '7px',
    wordSpacing: '2px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontStyle: 'normal',
    textTransform: 'uppercase',
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
                    <h2>
                        <p style={subheadStyle} className="subhead">Projects</p>
                    </h2>
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col">
                                <div className="row">
                                    <div className="col p-0 position-relative bg-dark m-2 shadow">
                                        <a href="https://danieljhawn.github.io/dayPlanner/">
                                            <img src="./dayPlannerThumb.jpg"
                                                className="img-responsive w-100" alt="..." /></a>
                                        <h5 style={subheadStyle} className="h-30 m-3 text-white">Day Planner</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col p-0 position-relative bg-dark m-2 shadow">
                                        <a href="https://danieljhawn.github.io/dayPlanner/">
                                            <img src="./weatherApp.jpg"
                                                className="img-responsive w-100" alt="..." /></a>
                                        <h5 style={subheadStyle} className="h-30 m-3 text-white">Weather App</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fixed-bottom bg-dark text-white text-center pt-6">
            <p class="pt-6">copyright &copy; 2020 Daniel Hawn</p>
        </div>
    </Layout>
}

export default Portfolio