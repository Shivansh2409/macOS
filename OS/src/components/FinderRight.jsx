import React, { useState } from "react";
import "./FinderRight.scss";
import List from "./List";
import Grid from "./Grid";

const FinderRight = ({
  selected,
  setSelected,
  setOpenWindows,
  openWindows,
  Image,
  setImage,
  Index,
  setIndex,
}) => {
  const [items, setItems] = useState("HackCBS 8.0");
  return (
    <>
      <div className="finder-right">
        {selected === "list" ? (
          <Grid
            items={items}
            setItems={setItems}
            setOpenWindows={setOpenWindows}
            openWindows={openWindows}
            Image={Image}
            setImage={setImage}
            Index={Index}
            setIndex={setIndex}
          ></Grid>
        ) : (
          <List
            items={items}
            setItems={setItems}
            setSelected={setSelected}
            selected={selected}
          ></List>
        )}
      </div>
    </>
  );
};

export default FinderRight;
