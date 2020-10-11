import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, margin-right: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default const Navigation = () => (
  <nav>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/contact">Contact</ListLink>
    <ul>
  </div>
);
