import Link from "next/link";

const nameStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "30px",
  letterSpacing: "15px",
  wordSpacing: "2px",
  color: "#FFFFFF",
  fontWeight: 700,
  textDecoration: "none",
  fontStyle: "normal",
  textTransform: "uppercase",
  textShadow:
    "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 2px 2px 2px rgba(122,16,59,0)",
};

const linkStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "15px",
  letterSpacing: "7px",
  wordSpacing: "2px",
  color: "#FFFFFF",
  textDecoration: "none",
  fontStyle: "normal",
  textTransform: "uppercase",
};

const Header = () => (
  <div>
    <div className="navbar-expand navbar-dark bg-dark text-white p-3">
      <div className="container col-6 align-items-center">
        <div className="row align-items-center">
          <div className="col text-center align-items-center">
            <h1 style={nameStyle}>Daniel Hawn</h1>
          </div>
          <div className="col align-items-center">
            <div className="navbar-nav justify-content-center align-items-center">
                <>
                <Link href="/about">
                  <a
                    className="nav-item nav-link active align-items-center"
                    style={linkStyle}
                    href="/about"
                  >
                    About
                  </a></Link>{" "}
                  |
                  <Link href="/portfolio">
                  <a
                    className="nav-item nav-link m-1"
                    style={linkStyle}
                    href="/portfolio"
                  >
                    Portfolio
                  </a></Link>{" "}
                  |
                  <Link href="/contact">
                  <a
                    className="nav-item nav-link"
                    style={linkStyle}
                    href="/contact"
                  >
                    Contact
                  </a></Link>
                </>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
