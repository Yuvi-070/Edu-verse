"use client";

import React, { useEffect, useState } from "react";
import FooterNine from "../layout/footers/FooterNine";
import { coursesData } from "@/data/dashboard";
import Pagination from "../common/Pagination";
import CoursesCardDashboard from "./DashBoardCards/CoursesCardDashboard";
const ddItems = [
  { id: 1, label: "All Categories" },
  { id: 2, label: "Animation" },
  { id: 3, label: "Design" },
  { id: 4, label: "Illustration" },
  { id: 5, label: "Business" },
];
export default function MyCourses() {
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  const [pageItems, setPageItems] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [pageData, setPageData] = useState(coursesData);
  useEffect(() => {
    if (activeTab == 1) {
      setPageData(coursesData);
    } else if (activeTab == 2) {
      setPageData(coursesData.filter((elm) => elm.status == "Finished"));
    } else if (activeTab == 3) {
      setPageData(coursesData.filter((elm) => elm.status == "Not enrolled"));
    }
  }, [activeTab]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (currentCategory == "All Categories") {
      setPageItems(pageData);
    } else {
      setPageItems([
        ...pageData.filter((elm) => elm.category == currentCategory),
      ]);
    }
  }, [currentCategory, pageData]);

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">My Courses</h1>
            <div className="mt-10">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="tabs -active-purple-2 js-tabs">
                <div className="tabs__controls d-flex items-center pt-20 px-30 border-bottom-light js-tabs-controls">
                  <button
                    className={`text-light-1 lh-12 tabs__button js-tabs-button ${
                      activeTab == 1 ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-1"
                    type="button"
                    onClick={() => setActiveTab(1)}
                  >
                    All Courses
                  </button>
                  <button
                    className={`text-light-1 lh-12 tabs__button js-tabs-button ml-30 ${
                      activeTab == 2 ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-2"
                    type="button"
                    onClick={() => setActiveTab(2)}
                  >
                    Finished
                  </button>
                  <button
                    className={`text-light-1 lh-12 tabs__button js-tabs-button ml-30 ${
                      activeTab == 3 ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-3"
                    type="button"
                    onClick={() => setActiveTab(3)}
                  >
                    Not enrolled
                  </button>
                </div>

                <div className="tabs__content py-30 px-30 js-tabs-content">
                  <div className="tabs__pane -tab-item-1 is-active">
                    <div className="row y-gap-10 justify-between">
                      <div className="col-auto">
                        <form
                          className="search-field border-light rounded-8 h-50"
                          onSubmit={handleSubmit}
                        >
                          <input
                            required
                            className="bg-white -dark-bg-dark-2 pr-50"
                            type="text"
                            placeholder="Search Courses"
                          />
                          <button className="" type="submit">
                            <i className="icon-search text-light-1 text-20"></i>
                          </button>
                        </form>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex flex-wrap y-gap-10 x-gap-20">
                          <div>
                            <div
                              id="dd14button"
                              onClick={() => {
                                document
                                  .getElementById("dd14button")
                                  .classList.toggle("-is-dd-active");
                                document
                                  .getElementById("dd14content")
                                  .classList.toggle("-is-el-visible");
                              }}
                              className="dropdown js-dropdown js-category-active"
                            >
                              <div
                                className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 text-14 lh-12"
                                data-el-toggle=".js-category-toggle"
                                data-el-toggle-active=".js-category-active"
                              >
                                <span className="js-dropdown-title">
                                  {currentCategory != 'All Categories' ? currentCategory :'Categories' }
                                  
                                </span>
                                <i className="icon text-9 ml-40 icon-chevron-down"></i>
                              </div>

                              <div
                                id="dd14content"
                                className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                              >
                                <div className="text-14 y-gap-15 js-dropdown-list">
                                  {ddItems.map((item, ind) => (
                                    <div
                                      onClick={() =>
                                        setCurrentCategory(item.label)
                                        
                                      }
                                      key={ind}
                                      className={`d-block js-dropdown-link cursor ${
                                        currentCategory == item.label
                                          ? "activeMenu"
                                          : ""
                                      } `}
                                    >
                                      <span
                                        style={{ cursor: "pointer" }}
                                        className="d-block js-dropdown-link"
                                      >
                                        {item.label}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              id="dd15button"
                              onClick={() => {
                                document
                                  .getElementById("dd15button")
                                  .classList.toggle("-is-dd-active");
                                document
                                  .getElementById("dd15content")
                                  .classList.toggle("-is-el-visible");
                              }}
                              className="dropdown js-dropdown js-review-active"
                            >
                              <div
                                className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 text-14 lh-12"
                                data-el-toggle=".js-review-toggle"
                                data-el-toggle-active=".js-review-active"
                              >
                                <span className="js-dropdown-title">
                                  Old Review
                                </span>
                                <i className="icon text-9 ml-40 icon-chevron-down"></i>
                              </div>

                              <div
                                id="dd15content"
                                className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-review-toggle"
                              >
                                <div className="text-14 y-gap-15 js-dropdown-list">
                                  <div>
                                    <a
                                      href="#"
                                      className="d-block js-dropdown-link"
                                    >
                                      Animation
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      className="d-block js-dropdown-link"
                                    >
                                      Design
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      className="d-block js-dropdown-link"
                                    >
                                      Illustration
                                    </a>
                                  </div>

                                  <div>
                                    <a
                                      href="#"
                                      className="d-block js-dropdown-link"
                                    >
                                      Business
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row y-gap-30 pt-30">
                      {pageItems.map((data, i) => (
                        <CoursesCardDashboard data={data} key={i} />
                      ))}
                    </div>

                    <div className="row justify-center pt-30">
                      <div className="col-auto">
                        <Pagination />
                      </div>
                    </div>
                  </div>

                  {/* <div className="tabs__pane -tab-item-2"></div>
                  <div className="tabs__pane -tab-item-3"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterNine />
    </div>
  );
}
