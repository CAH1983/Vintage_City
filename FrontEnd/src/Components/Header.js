import React from "react";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="inline-flex container">
        <a href="/">Logo</a>
        <a href="/Music">Music</a>
        <a href="/TVshows">TV Shows</a>
        <a href="/Collector">Collectors</a>
        <a href="/Clothing">Clothing</a>
        <button className="btn btn-primary">Sign Up / Login</button>
      </div>
    </header>
  );
}

export default Header;
