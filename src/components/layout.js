import React from "react";

import Navigation from "./navigation";

export default const Layout = ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Header</h3>
      </Link>
    </header>
    <Navigation />
    { children }
  </div>
);
