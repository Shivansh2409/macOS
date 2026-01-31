import React, { useState } from "react";
import "./Finder.scss";
import MacWindow from "../windows/MacWindow";
import FinderLeft from "../components/FinderLeft";
import FinderRight from "../components/FinderRight";
const Finder = () => {
  const [selected, setSelected] = useState("grid");
  return (
    <>
      <MacWindow
        width={900}
        height={500}
        finder={true}
        setSelected={setSelected}
        selected={selected}
      >
        <div className="finder-window">
          <FinderLeft />
          <FinderRight />
        </div>
      </MacWindow>
    </>
  );
};

export default Finder;
