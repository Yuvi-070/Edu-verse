"use client";

import React from "react";
import CourceCard from "../courseCards/CourseCard";
import { coursesData, catagories } from "../../../data/courses";
import { useState, useEffect } from "react";
export default function Courses() {
  const [filtered, setFiltered] = useState();
  const [category, setCategory] = useState("All Categories");
  useEffect(() => {
    if (category == "All Categories") {
      setFiltered();
    } else {
      const filteredData = coursesData.filter(
        (elm) => elm.category == category,
      );
      setFiltered(filteredData);
    }
  }, [category]);

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="row justify-center text-center">
        <div className="col-auto">
          <div className="sectionTitle ">
            <h2 className="sectionTitle__title sm:text-24">
              Our Most Popular Courses
            </h2>

            <p className="sectionTitle__text ">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
      </div>
      <div className="tabs__controls flex-wrap  pt-50 d-flex justify-center x-gap-10 js-tabs-controls">
        {catagories.map((elm, i) => (
          <div onClick={() => setCategory(elm)} key={i}>
            <button
              className={`tabs__button px-15 py-8 rounded-8 js-tabs-button ${
                category == elm ? "tabActive" : ""
              } `}
              data-tab-target=".-tab-item-2"
              type="button"
            >
              {elm}
            </button>
          </div>
        ))}
      </div>

      <div
        className="pt-60 m-auto row y-gap-30 container pl-0 pr-0"
        data-aos="fade-right"
        data-aos-offset="80"
        data-aos-duration={800}
      >
        {filtered
          ? filtered.map((elm, index) => (
              <CourceCard
                key={index}
                data={elm}
                index={index}
                data-aos="fade-right"
                data-aos-duration={(index + 1) * 300}
              />
            ))
          : coursesData
              .slice(0, 8)
              .map((elm, index) => <CourceCard key={index} data={elm} />)}
      </div>
    </section>
  );
}
