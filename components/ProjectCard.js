import React from "react";

const linkStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "15px",
  letterSpacing: "5px",
  color: "#FFFFFF",
  textDecoration: "none",
  fontStyle: "normal",
  textTransform: "uppercase",

};

const roundRect = {
    WebkitBorderRadius: "18px",
    MozBorderRadius: "18px",
    borderRadius: "18px",
  };

function projectCard(props) {
  return (
    <div style={roundRect}>
      <div className="col">
        <div className="row">
          <div style={roundRect} className="col p-0 position-relative bg-dark m-2 shadow">
            <a href={props.url}>
              <img style={roundRect} src={props.img} className="img-responsive w-100" alt="..." />
            </a>
            <h5 style={linkStyle} className="h-30 m-3 text-white">
              {props.title}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projectCard;
