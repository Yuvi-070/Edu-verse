"use client";

import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
export default function RangeSlider() {
  const [value, setValue] = useState([200, 1500]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="text-18 lh-1 text-dark-1 fw-500 mb-30 mt-60">
        Range Slider
      </div>

      <div className="js-price-rangeSlider">
        <div className="px-5">
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            max={2000}
            min={200}
            disableSwap
          />
        </div>

        <div className="d-flex justify-center mt-15">
          <div className="d-flex items-center h-30 px-15 rounded-4 bg-purple-3 text-14 text-purple-1">
            <span className="js-lower">{value[0]}</span>-
            <span className="js-upper">{value[1]}</span>
          </div>
        </div>
      </div>
    </>
  );
}
