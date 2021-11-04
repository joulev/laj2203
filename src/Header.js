import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div onClick={() => props.onClick()} className="bg-light shadow text-center p-5 mb-3 position-relative">
      <p className="fs-2">LAJ2203 Learning Journal</p>
      <p className="text-muted mb-0">by joulev @ NUS</p>
      <Link to="/" className="stretched-link" />
    </div>
  );
}

export default Header;
