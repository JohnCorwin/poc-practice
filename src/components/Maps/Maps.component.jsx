import React from "react";

const Maps = () => {
  return (
    <>
      <div className="map map1" js-hook="map1"></div>
      <div className="map map2 is-hidden" js-hook="map2"></div>
      <div className="map map3 is-hidden" js-hook="map3"></div>
    </>
  );
}

export default Maps;
