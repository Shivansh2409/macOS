import React, { useState } from "react";
import "./Links.scss";
import MacWindow from "./MacWindow";
import LinksLeft from "../components/LinksLeft";
import LinksRight from "../components/LinksRight";

const Links = (pop) => {
  const [activeBar, setActiveBar] = useState("experience");
  return (
    <>
      <MacWindow
        width={800}
        height={400}
        initialX={200}
        initialY={1}
        title="Links"
        Zindex={pop.Index.Links}
        setIndex={pop.setIndex}
        setOpenWindows={pop.setOpenWindows}
        openWindows={pop.openWindows}
      >
        <div className="link-container">
          <LinksLeft setActiveBar={setActiveBar}></LinksLeft>
          <LinksRight activeBar={activeBar}></LinksRight>
        </div>
      </MacWindow>
    </>
  );
};

export default Links;
