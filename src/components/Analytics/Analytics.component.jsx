import React, { useState, useEffect, useRef } from "react";
import Tableau from 'tableau-api';
import './Analytics.css';

const { tableau } = window;

const Analytics = () => {
  const [url, setUrl] = useState(
    "https://public.tableau.com/views/RegionalSampleWorkbook/Storms"
  );

  const ref = useRef(null);

  const initViz = () => {
    new tableau.Viz(ref.current, url);
  };

  useEffect(initViz, []);

  return (
    <div className="analytics-content">
      <h1>Example Tableau</h1>
      <div style={setVizStyle} ref={ref} />
    </div>
  );
}

const setVizStyle = {
  width: "800px",
  height: "700px",
};

export default Analytics;