import React from "react";
import preval from "preval.macro";

function Footer() {
  return (
    <div className="bg-dark text-light shadow text-center p-4">
      <p>
        Site built with <a href="https://reactjs.org">React</a>. Source code
        can be found at <a href="https://github.com/joulev/laj2203">GitHub</a>.
      </p>
      <small>
        Build time: {preval`module.exports = new Date().toLocaleString("en-SG", { timeZone: "Singapore" });`} (Singapore time)
      </small>
    </div>
  );
}

export default Footer;
