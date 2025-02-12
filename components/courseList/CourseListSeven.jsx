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
import PaginationTwo from "../common/PaginationTwo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";

export default function CourseListSeven() {
  const [filterOpen, setFilterOpen] = useState(false);
  const { isAddedToCartCourses, addCourseToCart } = useContextElement();

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
      const filtered = filterCategories.filter((elm) => elm != item);
      setFilterCategories([...filtered]);
    } else {
      setFilterCategories((pre) => [...pre, item]);
    }
  };
  const handleFilterRatingRange = (item) => {
    setFilterRatingRange(item);
  };
  const handleFilterInstractors = (item) => {
    if (filterInstractors.includes(item)) {
      const filtered = filterInstractors.filter((elm) => elm != item);
      setFilterInstractors([...filtered]);
    } else {
      setFilterInstractors((pre) => [...pre, item]);
    }
  };
  const handleFilterPrice = (item) => {
    setFilterPrice(item);
  };
  const handleFilterLevels = (item) => {
    if (filterLevels.includes(item)) {
      const filtered = filterLevels.filter((elm) => elm != item);
      setFilterLevels([...filtered]);
    } else {
      setFilterLevels((pre) => [...pre, item]);
    }
  };
  const handleFilterlanguange = (item) => {
    if (filterlanguange.includes(item)) {
      const filtered = filterlanguange.filter((elm) => elm != item);
      setFilterlanguange([...filtered]);
    } else {
      setFilterlanguange((pre) => [...pre, item]);
    }
  };
  const handleFilterDuration = (item) => {
    setFilterDuration(item);
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

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="accordion js-accordion">
            <div
              className={`accordion__item ${filterOpen ? "is-active" : ""} `}
            >
              <div className="row y-gap-20 items-center justify-between pb-30">
                <div className="col-auto">
                  <div className="text-14 lh-12">
                    Showing{" "}
                    <span className="text-dark-1 fw-500">
                      {" "}
                      {filteredData.length}
                    </span>{" "}
                    total results
                  </div>
                </div>

                <div className="col-auto">
                  <div className="row x-gap-20 y-gap-20">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <div className="text-14 lh-12 fw-500 text-dark-1 mr-20">
                          Sort by:
                        </div>

                        <div
                          id="dd59button"
                          className="dropdown js-dropdown js-category-active"
                        >
                          <div
                            className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                            onClick={() => {
                              document
                                .getElementById("dd59button")
                                .classList.toggle("-is-dd-active");
                              document
                                .getElementById("dd59content")
                                .classList.toggle("-is-el-visible");
                            }}
                            data-el-toggle=".js-category-toggle"
                            data-el-toggle-active=".js-category-active"
                          >
                            <span className="js-dropdown-title">
                              {currentSortingOption}
                            </span>
                            <i className="icon text-9 ml-40 icon-chevron-down"></i>
                          </div>

                          <div
                            id="dd59content"
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
                                      .getElementById("dd59button")
                                      .classList.toggle("-is-dd-active");
                                    document
                                      .getElementById("dd59content")
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

                    <div className="col-auto">
                      <div
                        className="accordion__button w-unset"
                        onClick={() => setFilterOpen((pre) => !pre)}
                      >
                        <button className="button h-50 px-30 -light-7 text-purple-1">
                          <i className="icon-filter mr-10"></i>
                          Filter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="accordion__content"
                style={filterOpen ? { maxHeight: "1800px" } : {}}
              >
                <div className="sidebar -courses px-30 py-30 rounded-8 bg-light-3 mb-50">
                  <div className="row x-gap-60 y-gap-40">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="sidebar__item">
                        <h5 className="sidebar__title">Category</h5>
                        <div className="sidebar-checkbox">
                          <div
                            className="sidebar-checkbox__item"
                            onClick={() => setFilterCategories([])}
                          >
                            <div className="form-checkbox">
                              <input
                                type="checkbox"
                                checked={filterCategories.length ? false : true}
                              />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                              </div>
                            </div>

                            <div className="sidebar-checkbox__title">All</div>
                            <div className="sidebar-checkbox__count"></div>
                          </div>
                          {categories.map((item, index) => (
                            <div
                              className="sidebar-checkbox__item cursor"
                              key={index}
                              onClick={() => handleFilterCategories(item.title)}
                            >
                              <div className="form-checkbox">
                                <input
                                  type="checkbox"
                                  checked={
                                    filterCategories.includes(item.title)
                                      ? true
                                      : false
                                  }
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                {item.title}
                              </div>
                              <div className="sidebar-checkbox__count">
                                (
                                {
                                  coursesData.filter(
                                    (itm) => itm.category == item.title,
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

                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="sidebar__item">
                        <h5 className="sidebar__title">Ratings</h5>
                        <div className="sidebar-checkbox">
                          <div
                            className="sidebar-checkbox__item"
                            onClick={() => setFilterRatingRange([])}
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
                              <div className="d-flex x-gap-5 pr-10"></div>
                              All
                            </div>
                            <div className="sidebar-checkbox__count"></div>
                          </div>
                          {rating.map((item, index) => (
                            <div
                              className="sidebar-checkbox__item cursor"
                              key={index}
                              onClick={() =>
                                handleFilterRatingRange(item.range)
                              }
                            >
                              <div className="form-radio mr-10">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    checked={
                                      filterRatingRange.join(" ").trim() ==
                                      item.range.join(" ").trim()
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
                                  <Star star={item.star} textSize={"text-11"} />
                                </div>
                                {item.text}
                              </div>
                              <div className="sidebar-checkbox__count">
                                (
                                {
                                  coursesData.filter(
                                    (itm) =>
                                      itm.rating >= item.range[0] &&
                                      itm.rating <= item.range[1],
                                  ).length
                                }
                                )
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="sidebar__item">
                        <h5 className="sidebar__title">Instructors</h5>
                        <div className="sidebar-checkbox">
                          <div
                            className="sidebar-checkbox__item"
                            onClick={() => setFilterInstractors([])}
                          >
                            <div className="form-checkbox">
                              <input
                                type="checkbox"
                                checked={
                                  filterInstractors.length ? false : true
                                }
                              />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                              </div>
                            </div>

                            <div className="sidebar-checkbox__title">All</div>
                            <div className="sidebar-checkbox__count"></div>
                          </div>
                          {instractorNames.map((item, index) => (
                            <div
                              className="sidebar-checkbox__item cursor"
                              key={index}
                              onClick={() =>
                                handleFilterInstractors(item.title)
                              }
                            >
                              <div className="form-checkbox">
                                <input
                                  type="checkbox"
                                  checked={
                                    filterInstractors.includes(item.title)
                                      ? true
                                      : false
                                  }
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                {item.title}
                              </div>
                              <div className="sidebar-checkbox__count">
                                (
                                {
                                  coursesData.filter(
                                    (itm) => itm.authorName == item.title,
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

                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="sidebar__item">
                        <h5 className="sidebar__title">Price</h5>
                        <div className="sidebar-checkbox">
                          {prices.map((item, index) => (
                            <div
                              className="sidebar-checkbox__item cursor"
                              key={index}
                              onClick={() => handleFilterPrice(item.title)}
                            >
                              <div className="form-radio mr-10">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    checked={
                                      filterPrice == item.title ? "checked" : ""
                                    }
                                  />
                                  <div className="radio__mark">
                                    <div className="radio__icon"></div>
                                  </div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                {item.title}
                              </div>
                              <div className="sidebar-checkbox__count">
                                (
                                {item.title == "Free" &&
                                  coursesData.filter((itm) => !itm.paid).length}
                                {item.title == "Paid" &&
                                  coursesData.filter((itm) => itm.paid).length}
                                {item.title == "All" && coursesData.length})
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="sidebar__item">
                        <h5 className="sidebar__title">Level</h5>
                        <div className="sidebar-checkbox">
                          <div
                            className="sidebar-checkbox__item cursor"
                            onClick={() => setFilterLevels([])}
                          >
                            <div className="form-checkbox">
                              <input
                                type="checkbox"
                                checked={filterLevels.length < 1 ? true : false}
                              />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                              </div>
                            </div>

                            <div className="sidebar-checkbox__title">All</div>
                            <div className="sidebar-checkbox__count"></div>
                          </div>
                          {levels.map((item, index) => (
                            <div
                              className="sidebar-checkbox__item cursor"
                              key={index}
                              onClick={() => handleFilterLevels(item.title)}
                            >
                              <div className="form-checkbox">
                                <input
                                  type="checkbox"
                                  checked={
                                    filterLevels.includes(item.title)
                                      ? true
                                      : false
                                  }
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                {item.title}
                              </div>
                              <div className="sidebar-checkbox__count">
                                (
                                {
                                  coursesData.filter(
                                    (itm) => itm.level == item.title,
                                  ).length
                                }
                                )
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="sidebar__item">
                        <h5 className="sidebar__title">Languange</h5>
                        <div className="sidebar-checkbox">
                          <div
                            className="sidebar-checkbox__item"
                            onClick={() => setFilterlanguange([])}
                          >
                            <div className="form-checkbox">
                              <input
                                type="checkbox"
                                checked={filterlanguange.length ? false : true}
                              />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                              </div>
                            </div>

                            <div className="sidebar-checkbox__title">All</div>
                            <div className="sidebar-checkbox__count"></div>
                          </div>
                          {languages.map((item, index) => (
                            <div
                              className="sidebar-checkbox__item cursor"
                              key={index}
                              onClick={() => handleFilterlanguange(item.title)}
                            >
                              <div className="form-checkbox">
                                <input
                                  type="checkbox"
                                  checked={
                                    filterlanguange.includes(item.title)
                                      ? true
                                      : false
                                  }
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                {item.title}
                              </div>
                              <div className="sidebar-checkbox__count">
                                (
                                {
                                  coursesData.filter(
                                    (itm) => itm.languange == item.title,
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

                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="sidebar__item">
                        <h5 className="sidebar__title">Duration</h5>
                        <div className="sidebar-checkbox">
                          <div
                            className="sidebar-checkbox__item cursor"
                            onClick={() => setFilterDuration([])}
                          >
                            <div className="form-checkbox">
                              <input
                                type="checkbox"
                                checked={filterDuration.length ? false : true}
                              />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                              </div>
                            </div>
                            <div className="sidebar-checkbox__title">All</div>
                            <div className="sidebar-checkbox__count"></div>
                          </div>
                          {duration.map((item, index) => (
                            <div
                              className="sidebar-checkbox__item cursor"
                              key={index}
                              onClick={() => handleFilterDuration(item.range)}
                            >
                              <div className="form-checkbox">
                                <input
                                  type="checkbox"
                                  checked={
                                    filterDuration.toString() ==
                                    item.range.toString()
                                      ? true
                                      : false
                                  }
                                />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                {item.title}
                              </div>
                              <div className="sidebar-checkbox__count">
                                (
                                {
                                  coursesData.filter(
                                    (itm) =>
                                      itm.duration >= item.range[0] &&
                                      itm.duration <= item.range[1],
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

          <div className="row y-gap-60">
            {sortedFilteredData
              .slice((pageNumber - 1) * 7, pageNumber * 7)
              .map((elm, i) => (
                <div key={i} className="col-12 border-bottom-light">
                  <div className="coursesCard -type-1 row y-gap-20 flex-row items-center">
                    <div className="col-xl-3 col-lg-4">
                      <div className="coursesCard__image rounded-8 relative">
                        <Image
                          width={510}
                          height={360}
                          className="w-1/1 rounded-8"
                          src={elm.imageSrc}
                          alt="image"
                        />
                        <div className="coursesCard__image_overlay rounded-8"></div>
                      </div>
                    </div>

                    <div className="col">
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

                      <div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
                        <Link
                          className="linkCustom"
                          href={`/courses/${elm.id}`}
                        >
                          {elm.title}
                        </Link>
                      </div>
                      <div className="mt-8">{elm.desc}</div>

                      <div className="row x-gap-10 y-gap-10 items-center pt-10">
                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <Image
                              width={30}
                              height={30}
                              src={elm.authorImageSrc}
                              alt="image"
                            />
                            <div className="ml-10">{elm.authorName}</div>
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <Image
                              width={16}
                              height={17}
                              className="mr-8"
                              src="/assets/img/coursesCards/icons/1.svg"
                              alt="icon"
                            />
                            <div className="text-14 lh-1">
                              {elm.lessonCount} lesson
                            </div>
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <Image
                              width={16}
                              height={17}
                              className="mr-8"
                              src="/assets/img/coursesCards/icons/2.svg"
                              alt="icon"
                            />
                            <div className="text-14 lh-1">{`${Math.floor(
                              elm.duration / 60,
                            )}h ${Math.floor(elm.duration % 60)}m`}</div>
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <Image
                              width={16}
                              height={17}
                              className="mr-8"
                              src="/assets/img/coursesCards/icons/3.svg"
                              alt="icon"
                            />
                            <div className="text-14 lh-1">{elm.level}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-auto md:d-none">
                      <div className="line -vertical -h-120 bg-light-5 ml-60 lg:ml-20 md:ml-0"></div>
                    </div>

                    <div className="col-md-auto">
                      <div className="text-right md:text-left">
                        {elm.paid ? (
                          <>
                            <div className="text-15 lh-1 fw-500 line-through">
                              ${elm.originalPrice}
                            </div>
                            <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">
                              ${elm.discountedPrice}
                            </div>
                          </>
                        ) : (
                          <>
                            <div></div>
                            <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">
                              Free
                            </div>
                          </>
                        )}
                      </div>
                      <div className="row x-gap-20 y-gap-20 items-center pt-25">
                        <div className="col-auto">
                          <button
                            className="button h-50 px-30 -purple-3 text-purple-1"
                            onClick={() => addCourseToCart(elm.id)}
                          >
                            {isAddedToCartCourses(elm.id)
                              ? "Already Added"
                              : "Add To Cart"}
                          </button>
                        </div>
                        <div className="col-auto">
                          <button className="button size-50 rounded-full -purple-3 text-light-1">
                            <div
                              className="size-20  "
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <FontAwesomeIcon
                                style={{ fontSize: "20px" }}
                                icon={faHeart}
                              />
                            </div>
                          </button>
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
                pageCapacity={7}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
