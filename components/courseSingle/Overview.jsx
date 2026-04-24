"use client";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { learnList, requirements } from "@/data/aboutcourses";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const catalogBlurb = `Our catalog spans Python, Java, C++, data structures, UI/UX, digital marketing with AI, Blender 3D, generative AI, finance, and Excel. Each course page links to a primary YouTube lesson or series so you learn from established educators without hosting heavy video files yourself.`;

export default function Overview({ description }) {
  const [showMore, setShowMore] = useState(false);
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

    </div>
  );
}
