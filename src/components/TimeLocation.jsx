import React, { useState, useEffect } from "react";

const TimeLocation = () => {
  const [time, setTime] = useState("");
  const [location] = useState("Lagos, Nigeria");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Africa/Lagos",
        timeZoneName: "short",
      };
      const formattedTime = now.toLocaleTimeString("en-US", options);
      setTime(formattedTime);
    };

    // Update the time every second
    const interval = setInterval(updateTime, 1000);
    updateTime();

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full sm:w-auto">
      <div className="border bg-[#1d1d1d] rounded-full py-2 px-4 border-gray-700">
        <div className="flex gap-3">
          <div>
            <h1 className="text-sm text-white">{time}</h1>
          </div>
          <div>
            <h1 className="text-sm text-white">{location}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLocation;
