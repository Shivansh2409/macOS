import React, { useState } from "react";
import "./Links.scss";
import MacWindow from "./MacWindow";
import LinksLeft from "../components/LinksLeft";
import LinksRight from "../components/LinksRight";

const Links = (pop) => {
  const [activeBar, setActiveBar] = useState("experience");

  return (
    <MacWindow
      width={900}
      height={600}
      title="Links"
      Zindex={pop.Index.Links}
      setIndex={pop.setIndex}
      setOpenWindows={pop.setOpenWindows}
      openWindows={pop.openWindows}
    >
      <div className="app-store-container">
        <LinksLeft activeBar={activeBar} setActiveBar={setActiveBar} />
        <LinksRight activeBar={activeBar} />
      </div>
    </MacWindow>
  );
};

export default Links;
