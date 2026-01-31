import React from "react";
import "./FinderRight.scss";
import List from "./List";
import Grid from "./Grid";

const FinderRight = ({ selected, setSelected }) => {
  return (
    <>
      <div className="finder-right">
        {selected === "list" ? <Grid></Grid> : <List></List>}
      </div>
    </>
  );
};

export default FinderRight;
