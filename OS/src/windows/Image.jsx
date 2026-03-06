import React, { useState } from "react";
import "./Image.scss";
import MacWindow from "./MacWindow";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

const Image = (pop) => {
  const [index, setIndex] = useState(1);
  return (
    <>
      <MacWindow
        width={400}
        height={500}
        initialX={900}
        initialY={1}
        title="Image"
        Zindex={pop.Index.Image}
        setIndex={pop.setIndex}
        setOpenWindows={pop.setOpenWindows}
        openWindows={pop.openWindows}
      >
        <div className="img">
          {" "}
          <img src={pop.Image} alt="" />
          <div className="con">
            <button
              className="Left"
              onClick={() => {
                setIndex((prev) => prev - 1);
                if (index < 2) {
                  setIndex(39);
                }

                let newAdd = `../images/${index}.jpeg`;
                console.log(index);
                pop.setImage(newAdd);
              }}
            >
              <ArrowBigLeftDash className="i"></ArrowBigLeftDash>
            </button>
            <button
              className="Right"
              onClick={() => {
                setIndex((prev) => prev + 1);
                if (index > 38) {
                  setIndex(1);
                }
                let newAdd = `../images/${index}.jpeg`;
                pop.setImage(newAdd);
                console.log(index);
              }}
            >
              <ArrowBigRightDash className="i"></ArrowBigRightDash>
            </button>
          </div>
        </div>
      </MacWindow>
    </>
  );
};

export default Image;
