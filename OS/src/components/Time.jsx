import React, { useEffect, useState } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const day = now.toLocaleString("en-US", { weekday: "short" });
      const date = now.getDate();
      const month = now.toLocaleString("en-US", { month: "short" });
      const time = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(`${day} ${month} ${date} ` + ` ${time}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return <div>{currentTime}</div>;
};

export default Time;
