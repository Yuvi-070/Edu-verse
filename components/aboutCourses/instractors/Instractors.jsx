"use client";
const categories = [
  { label: "All Categories" },
  { label: "Animation" },
  { label: "Design" },
  { label: "Illustration" },
  { label: "Business" },
];
import React, { useState, useEffect } from "react";
import { teamMembers, sortingOptions } from "@/data/instractors";

import PaginationTwo from "@/components/common/PaginationTwo";
import Image from "next/image";
import Link from "next/link";
export default function Instractors() {
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [currentSortingOption, setCurrentSortingOption] = useState("Default");
  const [sortedFilteredData, setSortedFilteredData] = useState([]);

  useEffect(() => {
    if (currentSortingOption == "Default") {
      setSortedFilteredData(pageData);
    } else if (currentSortingOption == "Rating (asc)") {
      setSortedFilteredData([...pageData].sort((a, b) => a.rating - b.rating));
    } else if (currentSortingOption == "Rating (dsc)") {
      setSortedFilteredData([...pageData].sort((a, b) => b.rating - a.rating));
    }
  }, [currentSortingOption, pageData]);

  const inActivateDD = () => {
    document.getElementById("dd30button").classList.remove("-is-dd-active");
    document.getElementById("dd30content").classList.remove("-is-el-visible");
  };
  useEffect(() => {
    if (currentCategory == "All Categories") {
      setPageData(teamMembers);
    } else {
      setPageData([
        ...teamMembers.filter((elm) => elm.category == currentCategory),
      ]);
    }
  }, [teamMembers, currentCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__tsetCurrentCategoryitle">
                    Instructors
                  </h1>
                </div>

                <div>
                  <p className="page-header__text">
                    We’re on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 items-center justify-between pb-30">
            <div className="col-auto">
              <div className="text-14 lh-12">
                Showing{" "}
                <span className="text-dark-1 fw-500">{pageData.length}</span>{" "}
                total results
              </div>
            </div>

            <div className="col-auto">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <form onSubmit={handleSubmit} className="search-field h-50">
                    <input
                      className="bg-light-3 pr-50"
                      type="text"
                      placeholder="Search Instructors"
                    />
                    <button className="" type="submit">
                      <i className="icon-search text-20"></i>
                    </button>
                  </form>
                </div>
                <div className="col-auto">
                  <div
                    id="dd30button"
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      onClick={() => {
                        document
                          .getElementById("dd30button")
                          .classList.toggle("-is-dd-active");
                        document
                          .getElementById("dd30content")
                          .classList.toggle("-is-el-visible");
                      }}
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">
                        {currentCategory != "All Categories"
                          ? currentCategory
                          : "Category"}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd30content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        {categories.map((category, index) => (
                          <div
                            onClick={() => {
                              setCurrentCategory(category.label);
                              inActivateDD();
                            }}
                            key={index}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                currentCategory == category.label
                                  ? "activeMenu"
                                  : ""
                              } `}
                            >
                              {category.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div
                    id="dd31button"
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      onClick={() => {
                        document
                          .getElementById("dd31button")
                          .classList.toggle("-is-dd-active");
                        document
                          .getElementById("dd31content")
                          .classList.toggle("-is-el-visible");
                      }}
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">
                        Sort by: {currentSortingOption}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd31content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        {sortingOptions.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setCurrentSortingOption((pre) =>
                                pre == elm ? "Default" : elm,
                              );
                              document
                                .getElementById("dd31button")
                                .classList.toggle("-is-dd-active");
                              document
                                .getElementById("dd31content")
                                .classList.toggle("-is-el-visible");
                            }}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                currentSortingOption == elm ? "activeMenu" : ""
                              } `}
                            >
                              {elm}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row y-gap-30">
            {sortedFilteredData
              .slice((pageNumber - 1) * 8, pageNumber * 8)
              .map((elm, i) => (
                <div key={i} className="col-lg-3 col-md-6">
                  <div className="teamCard -type-1">
                    <div className="teamCard__image">
                      <Image
                        width={488}
                        height={537}
                        src={elm.image}
                        alt="image"
                      />
                    </div>
                    <div className="teamCard__content">
                      <h4 className="teamCard__title">
                        <Link
                          className="linkCustom"
                          href={`/instructors/${elm.id}`}
                        >
                          {elm.name}
                        </Link>
                      </h4>
                      <p className="teamCard__text">{elm.role}</p>
                      <div className="d-flex x-gap-10 pt-10">
                        <div className="d-flex items-center">
                          <div className="icon-star text-yellow-1 text-14"></div>
                          <div className="text-13 lh-1 ml-8">{elm.rating}</div>
                        </div>

                        <div className="d-flex items-center">
                          <div className="icon-person-3 text-14"></div>
                          <div className="text-13 lh-1 ml-8">
                            {elm.students} Students
                          </div>
                        </div>

                        <div className="d-flex items-center">
                          <div className="icon-play text-14"></div>
                          <div className="text-13 lh-1 ml-8">
                            {elm.courses} Course
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="row justify-center pt-60 lg:pt-40">
            <div className="col-auto">
              <PaginationTwo
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                data={pageData}
                pageCapacity={8}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
