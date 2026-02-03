import React, { useState } from "react";
import "./Finder.scss";
import MacWindow from "../windows/MacWindow";
import FinderLeft from "../components/FinderLeft";
import FinderRight from "../components/FinderRight";
const Finder = (pop) => {
  const [selected, setSelected] = useState("grid");
  return (
    <>
      <MacWindow
        width={900}
        height={500}
        finder={true}
        setSelected={setSelected}
        selected={selected}
        title="Finder"
        Zindex={pop.Index.Finder}
        setIndex={pop.setIndex}
        setOpenWindows={pop.setOpenWindows}
        openWindows={pop.openWindows}
      >
        <div className="finder-window">
          <FinderLeft />
          <FinderRight selected={selected} setSelected={setSelected} />
        </div>
      </MacWindow>
    </>
  );
};

export default Finder;
