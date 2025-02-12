"use client";
import React from "react";
import { coursesData } from "../../../data/courses";
import CourceCard from "../courseCards/CourseCard";
import { useState, useEffect } from "react";
import { viewStatus } from "../../../data/courses";
import Link from "next/link";
export default function CoursesTwo() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentCourseState, setCurrentCourseState] = useState("All");
  const [pageItem, setPageItem] = useState([]);
  useEffect(() => {
    setDropdownOpen(false);

    if (currentCourseState == "All") {
      setPageItem(coursesData);
    } else {
      const filtered = coursesData.filter(
        (elm) => elm.viewStatus == currentCourseState,
      );
      setPageItem(filtered);
    }
  }, [currentCourseState]);
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-15 justify-between items-center">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Recent courses</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div className="col-lg-auto">
            <div className="d-inline-block">
              <div
                className={`dropdown js-dropdown js-category-active ${
                  dropdownOpen ? "-is-dd-active" : ""
                }`}
              >
                <div
                  onClick={() => setDropdownOpen((pre) => !pre)}
                  className="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                >
                  <span className="js-dropdown-title">Popular Most Viwed</span>
                  <i className="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle ${
                    dropdownOpen ? "-is-el-visible" : ""
                  } `}
                >
                  <div className="text-14 y-gap-15 js-dropdown-list">
                    {viewStatus.map((elm, i) => (
                      <div
                        key={i}
                        className={`d-block js-dropdown-link cursor ${
                          currentCourseState == elm ? "activeMenu" : ""
                        } `}
                        onClick={() => setCurrentCourseState(elm)}
                      >
                        {elm}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row y-gap-30 justify-start pt-50"
          data-aos="fade-right"
          data-aos-offset="80"
          data-aos-duration={800}
        >
          {pageItem.slice(0, 8).map((elm, i) => (
            <CourceCard key={i} index={i} data={elm} />
          ))}
        </div>

        <div className="row justify-center pt-60 lg:pt-40">
          <div className="col-auto">
            <Link
              href="/courses-list-1"
              className="button -icon -purple-3 text-purple-1"
            >
              All Courses
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
