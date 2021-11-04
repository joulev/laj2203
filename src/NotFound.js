import React from "react";

function NotFound() {
  return (
    <div className="serif">
      <h1>404 – Not found</h1>
      <hr className="mt-4" />
      <p>The requested page could not be found.</p>
      <p>
        If you typed the URL yourself, probably you mistyped a character or two. You
        can either type it again, or you can find the link to the journal entries
        below.
      </p>
      <p>
        If you got here by following another link in this page, please contact me by
        the issue tracker at {" "}
        <a href="https://github.com/joulev/laj2203/issues">
          the GitHub repository's issue tracker
        </a>
        .
      </p>
    </div>
  );
}

export default NotFound;
