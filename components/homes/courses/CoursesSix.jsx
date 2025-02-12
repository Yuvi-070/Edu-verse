"use client";

import React, { useState, useEffect } from "react";
import { coursesData, catagories } from "../../../data/courses";
import CourseCardSix from "@/components/homes/courseCards/CourseCardSix";
export default function CoursesSix() {
  const [pageItems, setPageItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  useEffect(() => {
    let filtered = [];

    if (currentCategory == "All Categories") {
      filtered = coursesData;
    } else {
      filtered = coursesData.filter((elm) => elm.category == currentCategory);
    }

    setPageItems(filtered);
  }, [currentCategory]);

  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container tabs -pills-2 js-tabs">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Explore Featured Courses</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div className="col-auto">
            <div className="tabs__controls row justify-center x-gap-10 bg-light-3 rounded-200 py-5 js-tabs-controls">
              {catagories.slice(0, 4).map((elm, i) => (
                <div
                  key={i}
                  className="col-auto"
                  onClick={() => setCurrentCategory(elm)}
                >
                  <button
                    className={`tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button ${
                      currentCategory == elm ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    {elm}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-active">
            <div
              className="row y-gap-30 justify-start"
              data-aos="fade-right"
              data-aos-offset="80"
              data-aos-duration={800}
            >
              {pageItems.slice(0, 6).map((elm, i) => (
                <CourseCardSix data={elm} key={i} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
