import React from "react";
import RangeSlider from "./RangeSlider";

export default function Tooltips() {
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">Tooltips</div>
      <div className="d-flex mt-24">
        <div className="tooltip -top px-35 py-15 bg-light-3 rounded-8">
          Top
          <div className="tooltip__content">Top</div>
        </div>
        <div className="tooltip -bottom px-35 py-15 bg-light-3 rounded-8 ml-12">
          Bottom
          <div className="tooltip__content">Bottom</div>
        </div>
        <div className="tooltip -left px-35 py-15 bg-light-3 rounded-8 ml-12">
          Left
          <div className="tooltip__content">Left</div>
        </div>
        <div className="tooltip -right px-35 py-15 bg-light-3 rounded-8 ml-12">
          Right
          <div className="tooltip__content">Right</div>
        </div>
      </div>

      <RangeSlider />
    </div>
  );
}
