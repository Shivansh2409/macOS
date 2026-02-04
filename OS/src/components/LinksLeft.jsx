import React from "react";
import "./LinksLeft.scss";
import {
  Search,
  Radio,
  DoorOpen,
  Paintbrush,
  Send,
  Download,
} from "lucide-react";

const LinksLeft = (pop) => {
  return (
    <>
      <div className="left-container">
        <div className="search">
          <Search className="search-icon"></Search>
          <input type="text" placeholder="Search" />
        </div>
        <div
          className="Social selected"
          onClick={() => {
            pop.setActiveBar("social");
          }}
        >
          <Radio className="i"></Radio>
          <p>Social Links</p>
        </div>
        <div
          className="experience selected"
          onClick={() => {
            pop.setActiveBar("experience");
          }}
        >
          <DoorOpen className="i"></DoorOpen>
          <p>Experience</p>
        </div>
        <div className="create selected">
          <Paintbrush className="i"></Paintbrush>
          <p>Create</p>
        </div>
        <div className="work selected">
          <Send className="i"></Send>
          <p>Work</p>
        </div>
        <div className="update selected">
          <Download className="i"></Download>
          <p>update</p>
        </div>
      </div>
    </>
  );
};

export default LinksLeft;
