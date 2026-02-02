import React from "react";
import "./Spoti.scss";
import MacWindow from "./MacWindow";

const Spoti = (pop) => {
  return (
    <MacWindow
      width={350}
      height={300}
      initialX={200}
      initialY={1}
      title="Spotify"
      Zindex={pop.Index.Spoti}
      setIndex={pop.setIndex}
    >
      <div className="spoti-viewer" onClick={() => console.log(pop.setIndex)}>
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
          title="Spotify Viewer"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spoti;
