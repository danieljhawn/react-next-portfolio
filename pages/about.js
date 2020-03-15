import Link from 'next/link';
import Head from 'next/head'
import Layout from '../components/MyLayout'

const subheadStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    letterSpacing: '7px',
    wordSpacing: '2px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontStyle: 'normal',
    textTransform: 'uppercase',
}

const linkStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    wordSpacing: '2px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontStyle: 'normal',
}

const centerMe = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

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
                    <h2 style={centerMe}>
                        <p style={subheadStyle} className="subhead">About Me</p>
                    </h2>
                    <div className="container-fluid">
                        <div className="row">
                            <div style={centerMe} className="col-lg-4 col-md-6 col-sm-6 col-xs-8 ">
                                <img className="img-fluid" src="/selfp.jpg" alt="pretentious self-portrait" />
                            </div>
                            <div className="col">
                                <p className="bodyText">
                                    In 2019 I moved to Austin and entered the UT Full Stack Coding Bootcamp.
                                    My goal is to have a firm understanding of how to use HTML, CSS, and JavaScript.
                                    In the process I will be completing several projects demonstrating my abilities in these languages.
                                    You can find these projects in the <a style={linkStyle} href="/portfolio">Portfolio</a> section of my site.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 mx-auto p-3 m-2 bg-secondary text-white shadow-lg">
                    <h3 style={subheadStyle}>
                        Links
                    </h3>
                    <h4><a style={linkStyle} href="https://github.com/danieljhawn">My Github Profile</a></h4>
                </div>
            </div>
        </div>


    </Layout>
}

export default About