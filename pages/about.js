import React from 'react'
import Head from 'next/head'
import Layout from '../components/MyLayout'


function About() {
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
                        <p className="subhead">About Me</p>
                    </h2>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-8 ">
                                <img className="img-fluid" src="../oct12homework/assets/images/selfp.jpg" alt="pretentious self-portrait" />
                            </div>
                            <div class="col">
                                <p class="bodyText">
                                    In 2019 I moved to Austin and entered the UT Full Stack Coding Bootcamp. My goal is to have a firm understanding of how to use HTML, CSS, and JavaScript. In the process I will be completing several projects demonstrating my abilities in these languages. You can find these projects in the <a href="portfolio.html">Portfolio</a> section of my site.
                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12 mx-auto p-3 m-2 bg-secondary text-white shadow-lg">
                    <h3>
                        Links
              </h3>
                    <h4><a href="https://github.com/danieljhawn">My Github Profile</a></h4>
                </div>
            </div>
        </div>

        <div class="fixed-bottom bg-dark text-white text-center pt-6">
            <p class="pt-6">copyright &copy; 2020 Daniel Hawn</p>
        </div>
    </Layout>
}

export default About