import React, { useState } from "react";
import "./Finder.scss";
import MacWindow from "../windows/MacWindow";
import FinderLeft from "../components/FinderLeft";
import FinderRight from "../components/FinderRight";
const Finder = (pop) => {
  const [selected, setSelected] = useState("grid");

  const openPhoto = () => {
    pop.setOpenWindows((prev) => {
      return { ...prev, Photo: true };
    });
    pop.setIndex((prev) => {
      return { ...prev, Photo: Math.max(...Object.values(prev)) + 1 };
    });
  };

  return (
    <>
      <MacWindow
        width={900}
        height={500}
        finder={true}
        setSelected={setSelected}
        selected={selected}
        title="Finder"
        initialX={0}
        initialY={0}
        Zindex={pop.Index.Finder}
        setIndex={pop.setIndex}
        setOpenWindows={pop.setOpenWindows}
        openWindows={pop.openWindows}
      >
        <div className="finder-window">
          <FinderLeft onOpenPhoto={openPhoto} />
          <FinderRight
            selected={selected}
            setSelected={setSelected}
            setOpenWindows={pop.setOpenWindows}
            openWindows={pop.openWindows}
            Image={pop.image}
            setImage={pop.setImage}
            Index={pop.Index}
            setIndex={pop.setIndex}
          />
        </div>
      </MacWindow>
    </>
  );
};

export default Finder;
