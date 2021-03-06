import Link from "next/link";
import Head from "next/head";
import Layout from "../components/MyLayout";

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

const linkStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  wordSpacing: "2px",
  color: "#FFFFFF",
  textDecoration: "underline solid",
  fontStyle: "normal",
};

const centerMe = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const roundRect = {
  WebkitBorderRadius: "18px",
  mozBorderRadius: "18px",
  borderRadius: "18px",
};

function About() {
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
                About Me
              </p>
            </h2>
            <div className="container-fluid">
              <div className="row">
                <div
                  style={centerMe}
                  className="col-lg-4 col-md-6 col-sm-6 col-xs-8 "
                >
                  <img
                    className="img-fluid"
                    src="/selfp.jpg"
                    alt="pretentious self-portrait"
                    style={roundRect}
                  />
                </div>
                <div className="col">
                  <p className="bodyText">
                    Full Stack Developer with a love of Front End and UI/UX
                    Design. You can find these projects in the{" "}
                    <a style={linkStyle} href="/portfolio">
                      Portfolio
                    </a>{" "}
                    section of my site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div style={roundRect} className="col-md-6 col-sm-12 col-xs-12 mx-auto p-3 m-2 bg-secondary text-white shadow-lg">
            <div style={centerMe}>
              <h3 style={subheadStyle}>Links</h3>
            </div>
            <div className="col mx-auto">
              <h4>
                <a style={linkStyle} href="https://github.com/danieljhawn">
                  Github
                </a>
              </h4>
              <h4>
                <a
                  style={linkStyle}
                  href="https://www.linkedin.com/in/daniel-hawn-bb866b72/"
                >
                  LinkedIn
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
