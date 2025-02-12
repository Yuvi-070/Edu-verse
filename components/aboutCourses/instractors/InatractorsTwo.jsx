"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  categories,
  rating,
  sortingOptions,
  teamMembers,
} from "@/data/instractors";
import PaginationTwo from "@/components/common/PaginationTwo";
import Star from "@/components/common/Star";
import Link from "next/link";
export default function InatractorsTwo() {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [ratingOpen, setRatingOpen] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("All Categories");

  const [filterCategories, setFilterCategories] = useState([]);
  const [filterRatingRange, setFilterRatingRange] = useState([]);

  const [currentSortingOption, setCurrentSortingOption] = useState("Default");

  const [filteredData, setFilteredData] = useState([]);

  const [sortedFilteredData, setSortedFilteredData] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    let refItems = [];
    if (filterCategories.length > 0) {
      const filtered = teamMembers.filter((elm) =>
        filterCategories.includes(elm.category),
      );
      refItems = filtered;
    } else {
      refItems = teamMembers;
    }

    let filteredArrays = [];

    if (filterRatingRange.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          elm.rating >= filterRatingRange[0] &&
          elm.rating <= filterRatingRange[1],
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    const commonItems = refItems.filter((item) =>
      filteredArrays.every((array) => array.includes(item)),
    );
    setFilteredData(commonItems);
    setPageNumber(1);
  }, [filterCategories, filterRatingRange]);

  useEffect(() => {
    if (currentSortingOption == "Default") {
      setSortedFilteredData(filteredData);
    } else if (currentSortingOption == "Rating (asc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => a.rating - b.rating),
      );
    } else if (currentSortingOption == "Rating (dsc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => b.rating - a.rating),
      );
    }
  }, [currentSortingOption, filteredData]);

  const handleFilterCategories = (item) => {
    if (filterCategories.includes(item)) {
      const filtered = filterCategories.filter((elm) => elm != item);
      setFilterCategories([...filtered]);
    } else {
      setFilterCategories((pre) => [...pre, item]);
    }
  };
  const handleFilterRatingRange = (item) => {
    setFilterRatingRange(item);
  };

  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Instructors</h1>
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
          <div className="row y-gap-50">
            <div className="col-lg-3 pr-50">
              <div className="sidebar -courses">
                <div className="sidebar__item">
                  <div className="accordion js-accordion">
                    <div
                      className={`accordion__item js-accordion-item-active ${
                        categoryOpen ? "is-active" : ""
                      } `}
                    >
                      <div
                        className="accordion__button items-center"
                        onClick={() => setCategoryOpen((pre) => !pre)}
                      >
                        <h5 className="sidebar__title">Category</h5>

                        <div className="accordion__icon">
                          <div className="icon icon-chevron-down"></div>
                          <div className="icon icon-chevron-up"></div>
                        </div>
                      </div>

                      <div
                        className="accordion__content"
                        style={categoryOpen ? { maxHeight: "350px" } : {}}
                      >
                        <div className="accordion__content__inner">
                          <div className="sidebar-checkbox">
                            <div
                              onClick={() => setFilterCategories([])}
                              className="sidebar-checkbox__item"
                            >
                              <div className="form-checkbox">
                                <input
                                  type="checkbox"
                                  checked={
                                    filterCategories.length ? false : true
                                  }
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">All</div>
                              <div className="sidebar-checkbox__count"></div>
                            </div>
                            {categories.map((elm, i) => (
                              <div
                                key={i}
                                onClick={() =>
                                  handleFilterCategories(elm.title)
                                }
                                className="sidebar-checkbox__item cursor"
                              >
                                <div className="form-checkbox">
                                  <input
                                    type="checkbox"
                                    checked={
                                      filterCategories.includes(elm.title)
                                        ? true
                                        : false
                                    }
                                  />
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check"></div>
                                  </div>
                                </div>

                                <div className="sidebar-checkbox__title">
                                  {elm.title}
                                </div>
                                <div className="sidebar-checkbox__count">
                                  (
                                  {
                                    teamMembers.filter(
                                      (itm) => itm.category == elm.title,
                                    ).length
                                  }
                                  )
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="sidebar__more mt-15">
                            <a
                              href="#"
                              className="text-14 fw-500 underline text-purple-1"
                            >
                              Show more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar__item">
                  <div className="accordion js-accordion">
                    <div
                      className={`accordion__item js-accordion-item-active ${
                        ratingOpen ? "is-active" : ""
                      } `}
                    >
                      <div
                        className="accordion__button items-center"
                        onClick={() => setRatingOpen((pre) => !pre)}
                      >
                        <h5 className="sidebar__title">Ratings</h5>

                        <div className="accordion__icon">
                          <div className="icon icon-chevron-down"></div>
                          <div className="icon icon-chevron-up"></div>
                        </div>
                      </div>

                      <div
                        className="accordion__content"
                        style={ratingOpen ? { maxHeight: "350px" } : {}}
                      >
                        <div className="accordion__content__inner">
                          <div className="sidebar-checkbox">
                            <div
                              onClick={() => setFilterRatingRange([])}
                              className="sidebar-checkbox__item"
                            >
                              <div className="form-radio mr-10">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    checked={
                                      filterRatingRange.length < 1
                                        ? "checked"
                                        : ""
                                    }
                                  />
                                  <div className="radio__mark">
                                    <div className="radio__icon"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title d-flex items-center">
                                <div className="d-flex x-gap-5 pr-10">
                                  <Star star={5} textSize={"text-11"} />
                                </div>
                                All
                              </div>
                              <div className="sidebar-checkbox__count"></div>
                            </div>
                            {rating.map((elm, i) => (
                              <div
                                key={i}
                                onClick={() =>
                                  handleFilterRatingRange(elm.range)
                                }
                                className="sidebar-checkbox__item cursor"
                              >
                                <div className="form-radio mr-10">
                                  <div className="radio">
                                    <input
                                      type="radio"
                                      checked={
                                        filterRatingRange.join(" ").trim() ==
                                        elm.range.join(" ").trim()
                                          ? "checked"
                                          : ""
                                      }
                                    />
                                    <div className="radio__mark">
                                      <div className="radio__icon"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="sidebar-checkbox__title d-flex items-center">
                                  <div className="d-flex x-gap-5 pr-10">
                                    <Star star={5} textSize={"text-11"} />
                                  </div>
                                  {elm.text}
                                </div>
                                <div className="sidebar-checkbox__count">
                                  (
                                  {
                                    teamMembers.filter(
                                      (itm) =>
                                        itm.rating >= elm.range[0] &&
                                        itm.rating <= elm.range[1],
                                    ).length
                                  }
                                  )
                                </div>
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

            <div className="col-lg-9">
              <div className="row y-gap-20 items-center justify-between pb-30">
                <div className="col-auto">
                  <div className="text-14 lh-12">
                    Showing{" "}
                    <span className="text-dark-1 fw-500">
                      {sortedFilteredData.length}
                    </span>{" "}
                    total results
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-12 fw-500 text-dark-1 mr-20">
                      Sort by:
                    </div>

                    <div
                      id="dd33button"
                      className="dropdown js-dropdown js-category-active"
                    >
                      <div
                        onClick={() => {
                          document
                            .getElementById("dd33button")
                            .classList.toggle("-is-dd-active");
                          document
                            .getElementById("dd33content")
                            .classList.toggle("-is-el-visible");
                        }}
                        className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                        data-el-toggle=".js-category-toggle"
                        data-el-toggle-active=".js-category-active"
                      >
                        <span className="js-dropdown-title">
                          {currentSortingOption}
                        </span>
                        <i className="icon text-9 ml-40 icon-chevron-down"></i>
                      </div>

                      <div
                        id="dd33content"
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
                                  .getElementById("dd33button")
                                  .classList.toggle("-is-dd-active");
                                document
                                  .getElementById("dd33content")
                                  .classList.toggle("-is-el-visible");
                              }}
                            >
                              <span
                                className={`d-block js-dropdown-link cursor ${
                                  currentSortingOption == elm
                                    ? "activeMenu"
                                    : ""
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

              <div className="row y-gap-30">
                {sortedFilteredData
                  .slice((pageNumber - 1) * 6, pageNumber * 6)
                  .map((elm, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                      <div className="teamCard -type-1 px-10 py-10 rounded-8 border-light">
                        <div className="teamCard__image">
                          <Image
                            width={488}
                            height={537}
                            src={elm.image}
                            alt="image"
                          />
                        </div>
                        <div className="teamCard__content mt-10 px-10 pb-5">
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
                              <div className="text-13 lh-1 ml-8">
                                {elm.rating}
                              </div>
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
                    data={sortedFilteredData}
                    pageCapacity={6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
