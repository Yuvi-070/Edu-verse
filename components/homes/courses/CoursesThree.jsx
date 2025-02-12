"use client";

import { coursesData } from "../../../data/courses";
import React, { useState, useEffect } from "react";
import CourseCardTwo from "@/components/homes/courseCards/CourseCardTwo";
import { allCategories } from "../../../data/courses";
import { viewStatus } from "../../../data/courses";
import { difficulty } from "../../../data/courses";
import Link from "next/link";
export default function CategoriesTwo() {
  const [pageItems, setPageItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [rating, setRating] = useState("All");
  const [currentdifficulty, setCurrentdifficulty] = useState("All");
  const [currentDropdown, setCurrentDropdown] = useState("");

  useEffect(() => {
    setCurrentDropdown("");

    let filtered = [];

    if (currentCategory == "All") {
      filtered = coursesData;
    } else {
      filtered = coursesData.filter((elm) => elm.category == currentCategory);
    }
    if (rating != "All") {
      filtered = filtered.filter((elm) => elm.viewStatus == rating);
    }

    if (currentdifficulty != "All") {
      filtered = filtered.filter((elm) => elm.difficulty == currentdifficulty);
    }

    setPageItems(filtered);
  }, [rating, currentdifficulty, currentCategory]);

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-15 justify-between items-center">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title sm:text-20">
                Our Most Popular Courses
              </h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div className="col-lg-auto">
            <div className="d-flex items-center">
              <div className="text-dark-1">Filter By:</div>

              <div className="d-flex flex-wrap x-gap-20 y-gap-20 items-center pl-15">
                <div>
                  <div
                    className={`dropdown js-dropdown js-drop1-active ${
                      currentDropdown == "category" ? "-is-dd-active" : ""
                    }`}
                  >
                    <div
                      onClick={() =>
                        setCurrentDropdown((pre) =>
                          pre == "category" ? "" : "category",
                        )
                      }
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                      data-el-toggle=".js-drop1-toggle"
                      data-el-toggle-active=".js-drop1-active"
                    >
                      <span className="js-dropdown-title">
                        {currentCategory == "All"
                          ? "Category"
                          : currentCategory}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop1-toggle ${
                        currentDropdown == "category" ? "-is-el-visible" : ""
                      } `}
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        {allCategories.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setCurrentCategory(elm);
                              setCurrentDropdown("");
                            }}
                            className={`d-block js-dropdown-link cursor ${
                              currentCategory == elm ? "activeMenu" : ""
                            } `}
                          >
                            {elm}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className={`dropdown js-dropdown js-drop2-active ${
                      currentDropdown == "rating" ? "-is-dd-active" : ""
                    }`}
                  >
                    <div
                      onClick={() =>
                        setCurrentDropdown((pre) =>
                          pre == "rating" ? "" : "rating",
                        )
                      }
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                      data-el-toggle=".js-drop2-toggle"
                      data-el-toggle-active=".js-drop2-active"
                    >
                      <span className="js-dropdown-title">
                        {rating == "All" ? "Rating" : rating}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop2-toggle ${
                        currentDropdown == "rating" ? "-is-el-visible" : ""
                      } `}
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        {viewStatus.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setRating(elm);
                              setCurrentDropdown("");
                            }}
                            className={`d-block js-dropdown-link cursor ${
                              rating == elm ? "activeMenu" : ""
                            } `}
                          >
                            {elm}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className={`dropdown js-dropdown js-drop3-active ${
                      currentDropdown == "difficulty" ? "-is-dd-active" : ""
                    }`}
                  >
                    <div
                      onClick={() =>
                        setCurrentDropdown((pre) =>
                          pre == "difficulty" ? "" : "difficulty",
                        )
                      }
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                      data-el-toggle=".js-drop3-toggle"
                      data-el-toggle-active=".js-drop3-active"
                    >
                      <span className="js-dropdown-title">
                        {currentdifficulty == "All"
                          ? "Diffiulty"
                          : currentdifficulty}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop3-toggle ${
                        currentDropdown == "difficulty" ? "-is-el-visible" : ""
                      } `}
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        {difficulty.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setCurrentdifficulty(elm);
                              setCurrentDropdown("");
                            }}
                            className={`d-block js-dropdown-link cursor ${
                              currentdifficulty == elm ? "activeMenu" : ""
                            } `}
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
          </div>
        </div>

        <div
          className="row y-gap-30 justify-start pt-50"
          data-aos="fade-right"
          data-aos-offset="80"
          data-aos-duration={800}
        >
          {pageItems.slice(0, 8).map((elm, i) => (
            <CourseCardTwo key={i} data={elm} index={i} />
          ))}
        </div>

        <div className="row justify-center pt-60 lg:pt-40">
          <div className="col-auto">
            <Link
              href="/courses-list-1"
              className="button -md -outline-purple-1 text-purple-1"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
