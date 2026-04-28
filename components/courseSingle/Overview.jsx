"use client";
import React, { useState } from "react";
const catalogBlurb = `Our catalog spans Python, Java, C++, data structures, UI/UX, digital marketing with AI, Blender 3D, generative AI, finance, and Excel. Each course page links to a primary YouTube lesson or series so you learn from established educators without hosting heavy video files yourself.`;

export default function Overview({ course }) {
  const [showMore, setShowMore] = useState(false);
  const description = course?.desc;
  const primary =
    description && String(description).trim().length > 0
      ? String(description).trim()
      : catalogBlurb;

  return (
    <div id="overview" className="pt-60 lg:pt-40 to-over">
      <h4 className="text-18 fw-500">Description</h4>

      <div
        className={`show-more  mt-30 js-show-more ${
          showMore ? "is-active" : ""
        } `}
      >
        <div
          className="show-more__content "
          style={showMore ? { maxHeight: "370px" } : {}}
        >
          <p className="text-15 lh-15 text-light-1">{primary}</p>
        </div>

        <button
          type="button"
          onClick={() => setShowMore((pre) => !pre)}
          className="show-more__button text-purple-1 fw-500 underline mt-30"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>

      <div className="row y-gap-20 pt-35">
        <div className="col-md-6">
          <div className="edu-verse-detail-panel">
            <h4 className="text-18 fw-500 mb-15">What you will learn</h4>
            <div className="y-gap-10 d-flex flex-column">
              {(course?.outcomes || []).map((item) => (
                <div key={item} className="d-flex items-start">
                  <i className="icon-check text-green-1 mr-10 mt-5"></i>
                  <span className="text-15">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="edu-verse-detail-panel">
            <h4 className="text-18 fw-500 mb-15">Prerequisites</h4>
            <div className="y-gap-10 d-flex flex-column">
              {(course?.prerequisites || []).map((item) => (
                <div key={item} className="d-flex items-start">
                  <i className="icon-check text-green-1 mr-10 mt-5"></i>
                  <span className="text-15">{item}</span>
                </div>
              ))}
            </div>
            <div className="d-flex x-gap-8 y-gap-8 flex-wrap mt-20">
              {(course?.tags || []).map((tag) => (
                <span key={tag} className="edu-verse-pill -muted">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
