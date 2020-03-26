import React from "react";

const headerCss = {
  margin:"auto",
  textAlign:"center"
};

const Header = ({ numMovies }) => {
  return (
    <div className="row">
      <div style={headerCss}>
        <h2>
          All Movies{" "}
          <span className="badge badge-pill badge-success">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;