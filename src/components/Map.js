import React from "react";

const Map = () => {
  return (
    <div className="flex w-screen text-center justify-center">
      <img
        src={require("./map.png")}
        alt="map of the US"
        className="w-480 h-480"
      />
    </div>
  );
};

export default Map;
