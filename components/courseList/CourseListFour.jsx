"use client";

import {
  categories,
  coursesData,
  duration,
  instractorNames,
  languages,
  levels,
  prices,
  rating,
  sortingOptions,
} from "@/data/courses";
import React, { useState, useEffect } from "react";
import Star from "../common/Star";
import Image from "next/image";
import Link from "next/link";
import PaginationTwo from "../common/PaginationTwo";

export default function CourseListFour() {
  const [filterCategories, setFilterCategories] = useState([]);
  const [filterRatingRange, setFilterRatingRange] = useState([]);
  const [filterInstractors, setFilterInstractors] = useState([]);
  const [filterPrice, setFilterPrice] = useState("All");
  const [filterLevels, setFilterLevels] = useState([]);
  const [filterlanguange, setFilterlanguange] = useState([]);
  const [filterDuration, setFilterDuration] = useState([]);

  const [currentSortingOption, setCurrentSortingOption] = useState("Default");

  const [filteredData, setFilteredData] = useState([]);

  const [sortedFilteredData, setSortedFilteredData] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const refItems = coursesData.filter((elm) => {
      if (filterPrice == "All") {
        return true;
      } else if (filterPrice == "Free") {
        return !elm.paid;
      } else if (filterPrice == "Paid") {
        return elm.paid;
      }
    });

    let filteredArrays = [];

    if (filterInstractors.length > 0) {
      const filtered = refItems.filter((elm) =>
        filterInstractors.includes(elm.authorName),
      );
      filteredArrays = [...filteredArrays, filtered];
    }
    if (filterCategories.length > 0) {
      const filtered = refItems.filter((elm) =>
        filterCategories.includes(elm.category),
      );
      filteredArrays = [...filteredArrays, filtered];
    }
    if (filterLevels.length > 0) {
      const filtered = refItems.filter((elm) =>
        filterLevels.includes(elm.level),
      );
      filteredArrays = [...filteredArrays, filtered];
    }
    if (filterlanguange.length > 0) {
      const filtered = refItems.filter((elm) =>
        filterlanguange.includes(elm.languange),
      );
      filteredArrays = [...filteredArrays, filtered];
    }
    if (filterRatingRange.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          elm.rating >= filterRatingRange[0] &&
          elm.rating <= filterRatingRange[1],
      );
      filteredArrays = [...filteredArrays, filtered];
    }
    if (filterDuration.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          elm.duration >= filterDuration[0] &&
          elm.duration <= filterDuration[1],
      );
      filteredArrays = [...filteredArrays, filtered];
    }

    const commonItems = refItems.filter((item) =>
      filteredArrays.every((array) => array.includes(item)),
    );
    setFilteredData(commonItems);
    setPageNumber(1);
  }, [
    filterCategories,
    filterRatingRange,
    filterInstractors,
    filterPrice,
    filterLevels,
    filterlanguange,
    filterDuration,
  ]);

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
    } else if (currentSortingOption == "Price (asc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => a.discountedPrice - b.discountedPrice),
      );
    } else if (currentSortingOption == "Price (dsc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => b.discountedPrice - a.discountedPrice),
      );
    } else if (currentSortingOption == "Duration (asc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => a.duration - b.duration),
      );
    } else if (currentSortingOption == "Duration (dsc)") {
      setSortedFilteredData(
        [...filteredData].sort((a, b) => b.duration - a.duration),
      );
    }
  }, [currentSortingOption, filteredData]);

  const handleFilterCategories = (item) => {
    if (filterCategories.includes(item)) {
      setFilterCategories([]);
    } else {
      setFilterCategories([item]);
    }
    document.getElementById("dd52button").classList.toggle("-is-dd-active");
    document.getElementById("dd52content").classList.toggle("-is-el-visible");
  };
  const handleFilterRatingRange = (item) => {
    setFilterRatingRange(item);
    document.getElementById("dd53button").classList.toggle("-is-dd-active");
    document.getElementById("dd53content").classList.toggle("-is-el-visible");
  };
  const handleFilterInstractors = (item) => {
    if (filterInstractors.includes(item)) {
      setFilterInstractors([]);
    } else {
      setFilterInstractors([item]);
    }
    document.getElementById("dd54button").classList.toggle("-is-dd-active");
    document.getElementById("dd54content").classList.toggle("-is-el-visible");
  };
  const handleFilterPrice = (item) => {
    setFilterPrice(item);
    document.getElementById("dd55button").classList.toggle("-is-dd-active");
    document.getElementById("dd55content").classList.toggle("-is-el-visible");
  };
  const handleFilterLevels = (item) => {
    if (filterLevels.includes(item)) {
      const filtered = filterLevels.filter((elm) => elm != item);
      setFilterLevels([]);
    } else {
      setFilterLevels([item]);
    }
    document.getElementById("dd56button").classList.toggle("-is-dd-active");
    document.getElementById("dd56content").classList.toggle("-is-el-visible");
  };
  const handleFilterlanguange = (item) => {
    if (filterlanguange.includes(item)) {
      setFilterlanguange([]);
    } else {
      setFilterlanguange([item]);
    }
    document.getElementById("dd57button").classList.toggle("-is-dd-active");
    document.getElementById("dd57content").classList.toggle("-is-el-visible");
  };
  const handleFilterDuration = (item) => {
    setFilterDuration(item);
    document.getElementById("dd58button").classList.toggle("-is-dd-active");
    document.getElementById("dd58content").classList.toggle("-is-el-visible");
  };
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">User Interface Courses</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    Write an introductory description of the category.
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
            <div className="col-12">
              <div className="text-14 lh-12">
                Showing{" "}
                <span className="text-dark-1 fw-500">
                  {filteredData.length}
                </span>{" "}
                total results
              </div>
            </div>

            <div className="col-12">
              <div className="row x-gap-20 y-gap-20">
                <div className="col-auto">
                  <div
                    id="dd52button"
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      onClick={() => {
                        document
                          .getElementById("dd52button")
                          .classList.toggle("-is-dd-active");
                        document
                          .getElementById("dd52content")
                          .classList.toggle("-is-el-visible");
                      }}
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">
                        {filterCategories.length
                          ? filterCategories[0]
                          : "Category"}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd52content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div
                          onClick={() => {
                            setFilterCategories([]);
                            document
                              .getElementById("dd52button")
                              .classList.toggle("-is-dd-active");
                            document
                              .getElementById("dd52content")
                              .classList.toggle("-is-el-visible");
                          }}
                        >
                          <span
                            className={`d-block js-dropdown-link cursor ${
                              filterCategories.length == 0 ? "activeMenu" : ""
                            } `}
                          >
                            All
                          </span>
                        </div>
                        {categories.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => handleFilterCategories(elm.title)}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                filterCategories[0] == elm.title
                                  ? "activeMenu"
                                  : ""
                              } `}
                            >
                              {elm.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div
                    id="dd53button"
                    className="dropdown js-dropdown js-ratings-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      onClick={() => {
                        document
                          .getElementById("dd53button")
                          .classList.toggle("-is-dd-active");
                        document
                          .getElementById("dd53content")
                          .classList.toggle("-is-el-visible");
                      }}
                      data-el-toggle=".js-ratings-toggle"
                      data-el-toggle-active=".js-ratings-active"
                    >
                      <span className="js-dropdown-title">
                        {filterRatingRange.length
                          ? `${filterRatingRange[0]} to ${filterRatingRange[1]}`
                          : "Ratings"}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd53content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-ratings-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div
                          onClick={() => {
                            setFilterRatingRange([]);
                            document
                              .getElementById("dd53button")
                              .classList.toggle("-is-dd-active");
                            document
                              .getElementById("dd53content")
                              .classList.toggle("-is-el-visible");
                          }}
                        >
                          <span
                            className={`d-block js-dropdown-link cursor ${
                              filterRatingRange.length == 0 ? "activeMenu" : ""
                            } `}
                          >
                            All
                          </span>
                        </div>
                        {rating.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => handleFilterRatingRange(elm.range)}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                filterRatingRange.toString() ==
                                elm.range.toString()
                                  ? "activeMenu"
                                  : ""
                              } `}
                            >
                              {elm.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div
                    id="dd54button"
                    className="dropdown js-dropdown js-instructors-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      onClick={() => {
                        document
                          .getElementById("dd54button")
                          .classList.toggle("-is-dd-active");
                        document
                          .getElementById("dd54content")
                          .classList.toggle("-is-el-visible");
                      }}
                      data-el-toggle=".js-instructors-toggle"
                      data-el-toggle-active=".js-instructors-active"
                    >
                      <span className="js-dropdown-title">
                        {filterInstractors.length
                          ? filterInstractors[0]
                          : "Instructors"}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd54content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-instructors-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div
                          onClick={() => {
                            setFilterInstractors([]);
                            document
                              .getElementById("dd54button")
                              .classList.toggle("-is-dd-active");
                            document
                              .getElementById("dd54content")
                              .classList.toggle("-is-el-visible");
                          }}
                        >
                          <span
                            className={`d-block js-dropdown-link cursor ${
                              filterInstractors.length == 0 ? "activeMenu" : ""
                            } `}
                          >
                            All
                          </span>
                        </div>
                        {instractorNames.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => handleFilterInstractors(elm.title)}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                filterInstractors[0] == elm.title
                                  ? "activeMenu"
                                  : ""
                              } `}
                            >
                              {elm.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div
                    id="dd55button"
                    className="dropdown js-dropdown js-price-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      onClick={() => {
                        document
                          .getElementById("dd55button")
                          .classList.toggle("-is-dd-active");
                        document
                          .getElementById("dd55content")
                          .classList.toggle("-is-el-visible");
                      }}
                      data-el-toggle=".js-price-toggle"
                      data-el-toggle-active=".js-price-active"
                    >
                      <span className="js-dropdown-title">
                        {filterPrice != "All" ? filterPrice : "Price"}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd55content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-price-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        {prices.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => handleFilterPrice(elm.title)}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                filterPrice == elm.title ? "activeMenu" : ""
                              } `}
                            >
                              {elm.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div
                    id="dd56button"
                    className="dropdown js-dropdown js-level-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      onClick={() => {
                        document
                          .getElementById("dd56button")
                          .classList.toggle("-is-dd-active");
                        document
                          .getElementById("dd56content")
                          .classList.toggle("-is-el-visible");
                      }}
                      data-el-toggle=".js-level-toggle"
                      data-el-toggle-active=".js-level-active"
                    >
                      <span className="js-dropdown-title">
                        {filterLevels.length ? filterLevels[0] : "Level"}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd56content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-level-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div
                          onClick={() => {
                            setFilterLevels([]);
                            document
                              .getElementById("dd56button")
                              .classList.toggle("-is-dd-active");
                            document
                              .getElementById("dd56content")
                              .classList.toggle("-is-el-visible");
                          }}
                        >
                          <span
                            className={`d-block js-dropdown-link cursor ${
                              filterLevels.length == 0 ? "activeMenu" : ""
                            } `}
                          >
                            All
                          </span>
                        </div>
                        {levels.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => handleFilterLevels(elm.title)}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                filterLevels[0] == elm.title ? "activeMenu" : ""
                              } `}
                            >
                              {elm.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div
                    id="dd57button"
                    className="dropdown js-dropdown js-langunage-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      onClick={() => {
                        document
                          .getElementById("dd57button")
                          .classList.toggle("-is-dd-active");
                        document
                          .getElementById("dd57content")
                          .classList.toggle("-is-el-visible");
                      }}
                      data-el-toggle=".js-langunage-toggle"
                      data-el-toggle-active=".js-langunage-active"
                    >
                      <span className="js-dropdown-title">
                        {filterlanguange.length
                          ? filterlanguange[0]
                          : "Langunage"}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd57content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-langunage-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div
                          onClick={() => {
                            setFilterlanguange([]);
                            document
                              .getElementById("dd57button")
                              .classList.toggle("-is-dd-active");
                            document
                              .getElementById("dd57content")
                              .classList.toggle("-is-el-visible");
                          }}
                        >
                          <span
                            className={`d-block js-dropdown-link cursor ${
                              filterlanguange.length == 0 ? "activeMenu" : ""
                            } `}
                          >
                            All
                          </span>
                        </div>
                        {languages.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => handleFilterlanguange(elm.title)}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                filterlanguange[0] == elm.title
                                  ? "activeMenu"
                                  : ""
                              } `}
                            >
                              {elm.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div
                    id="dd58button"
                    className="dropdown js-dropdown js-duration-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      onClick={() => {
                        document
                          .getElementById("dd58button")
                          .classList.toggle("-is-dd-active");
                        document
                          .getElementById("dd58content")
                          .classList.toggle("-is-el-visible");
                      }}
                      data-el-toggle=".js-duration-toggle"
                      data-el-toggle-active=".js-duration-active"
                    >
                      <span className="js-dropdown-title">
                        {filterDuration.length
                          ? `${Math.round(
                              filterDuration[0] / 60,
                            )}h to ${Math.round(filterDuration[1] / 60)}h`
                          : "Duration"}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd58content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-duration-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div
                          onClick={() => {
                            setFilterDuration([]);
                            document
                              .getElementById("dd58button")
                              .classList.toggle("-is-dd-active");
                            document
                              .getElementById("dd58content")
                              .classList.toggle("-is-el-visible");
                          }}
                        >
                          <span
                            className={`d-block js-dropdown-link cursor ${
                              filterDuration.length == 0 ? "activeMenu" : ""
                            } `}
                          >
                            All
                          </span>
                        </div>
                        {duration.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => handleFilterDuration(elm.range)}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                filterDuration.toString() ==
                                elm.range.toString()
                                  ? "activeMenu"
                                  : ""
                              } `}
                            >
                              {elm.title}
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
              .slice((pageNumber - 1) * 12, pageNumber * 12)
              .map((elm, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="coursesCard -type-1 ">
                    <div className="relative">
                      <div className="coursesCard__image overflow-hidden rounded-8">
                        <Image
                          width={510}
                          height={360}
                          className="w-1/1"
                          src={elm.imageSrc}
                          alt="image"
                        />
                        <div className="coursesCard__image_overlay rounded-8"></div>
                      </div>
                      <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                        {elm.popular && (
                          <>
                            <div>
                              <div className="px-15 rounded-200 bg-purple-1">
                                <span className="text-11 lh-1 uppercase fw-500 text-white">
                                  Popular
                                </span>
                              </div>
                            </div>

                            <div>
                              <div className="px-15 rounded-200 bg-green-1">
                                <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                  Best sellers
                                </span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="h-100 pt-15">
                      <div className="d-flex items-center">
                        <div className="text-14 lh-1 text-yellow-1 mr-10">
                          {elm.rating}
                        </div>
                        <div className="d-flex x-gap-5 items-center">
                          <Star star={elm.rating} />
                        </div>
                        <div className="text-13 lh-1 ml-10">
                          ({elm.ratingCount})
                        </div>
                      </div>

                      <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                        <Link
                          className="linkCustom"
                          href={`/courses/${elm.id}`}
                        >
                          {elm.title}{" "}
                        </Link>
                      </div>

                      <div className="d-flex x-gap-10 items-center pt-10">
                        <div className="d-flex items-center">
                          <div className="mr-8">
                            <Image
                              width={16}
                              height={17}
                              src="/assets/img/coursesCards/icons/1.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="text-14 lh-1">
                            {elm.lessonCount} lesson
                          </div>
                        </div>

                        <div className="d-flex items-center">
                          <div className="mr-8">
                            <Image
                              width={16}
                              height={17}
                              src="/assets/img/coursesCards/icons/2.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="text-14 lh-1">{`${Math.floor(
                            elm.duration / 60,
                          )}h ${Math.floor(elm.duration % 60)}m`}</div>
                        </div>

                        <div className="d-flex items-center">
                          <div className="mr-8">
                            <Image
                              width={16}
                              height={17}
                              src="/assets/img/coursesCards/icons/3.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="text-14 lh-1">{elm.level}</div>
                        </div>
                      </div>

                      <div className="coursesCard-footer">
                        <div className="coursesCard-footer__author">
                          <Image
                            width={30}
                            height={30}
                            src={elm.authorImageSrc}
                            alt="image"
                          />
                          <div>{elm.authorName}</div>
                        </div>

                        <div className="coursesCard-footer__price">
                          {elm.paid ? (
                            <>
                              <div>${elm.originalPrice}</div>
                              <div>${elm.discountedPrice}</div>
                            </>
                          ) : (
                            <>
                              <div></div>
                              <div>Free</div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="row justify-center pt-90 lg:pt-50">
            <div className="col-auto">
              <PaginationTwo
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                data={sortedFilteredData}
                pageCapacity={12}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
