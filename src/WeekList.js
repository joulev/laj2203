import React from "react";
import { Link } from "react-router-dom";

const weekNo = Array.from(Array(12), (_, i) => i + 1); // [1, 2, ..., 12]

function WeekList(props) {
  return (
    <>
    {weekNo.map(no => (
      <div className="btn btn-light p-0" title={"Week " + no} key={no}>
        <Link to={"/week/" + no} className="small stretched-link" onClick={() => props.onClick(no)}>
          W{no}
        </Link>
      </div>
    ))}
    </>
  );
}

export default WeekList;
