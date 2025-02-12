import React from "react";

export default function ProgressBars() {
  return (
    <div className="col-lg-6">
      <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">Progress bars</div>
      <div className="progress-bar">
        <div className="progress-bar__bg bg-light-3"></div>
        <div className="progress-bar__bar bg-purple-1 col-10">
          <span>90%</span>
        </div>
      </div>
      <div className="progress-bar mt-50">
        <div className="progress-bar__bg bg-light-3"></div>
        <div className="progress-bar__bar bg-purple-1 col-6">
          <span>50%</span>
        </div>
      </div>
      <div className="progress-bar mt-50">
        <div className="progress-bar__bg bg-light-3"></div>
        <div className="progress-bar__bar bg-purple-1 col-5">
          <span>40%</span>
        </div>
      </div>
    </div>
  );
}
