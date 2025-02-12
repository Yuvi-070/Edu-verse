"use client";
import React from "react";

import FooterNine from "@/components/layout/footers/FooterNine";
import EventKeys from "./EventKeys";
import MonthlyCalender from "./MonthlyViewCalender";
import PageLinksTwo from "@/components/common/PageLinksTwo";
import EventCalendar from "./EventCalendar";
export default function Calender() {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Calendar</h1>
            <PageLinksTwo />
          </div>
        </div>

        <div className="row">
          <div className="col-xl-9 col-lg-9  md:mb-20">
            <div className="col-12">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                <div className="d-flex items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">Calendar</h2>
                </div>

                <div className="py-40 md:py-20 sm-py-10 px-30 md:px-20 sm:px-10">
                  <div className="row y-gap-15 justify-between">
                    <div className="col-auto">
                      <div className="d-flex">
                        <div className="">
                          <div
                            id="dd23button"
                            onClick={() => {
                              document
                                .getElementById("dd23button")
                                .classList.toggle("-is-dd-active");
                              document
                                .getElementById("dd23content")
                                .classList.toggle("-is-el-visible");
                            }}
                            className="dropdown js-dropdown js-category-active"
                          >
                            <div
                              className="dropdown__button d-flex items-center text-14 h-50 rounded-8 px-15 py-10 "
                              data-el-toggle=".js-category-toggle"
                              data-el-toggle-active=".js-category-active"
                            >
                              <span className="js-dropdown-title">Monthly</span>
                              <i className="icon text-9 ml-40 icon-chevron-down"></i>
                            </div>

                            <div
                              id="dd23content"
                              className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
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
                                    Lifestyle
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

                        <div className="ml-20">
                          <div
                            id="dd24button"
                            onClick={() => {
                              document
                                .getElementById("dd24button")
                                .classList.toggle("-is-dd-active");
                              document
                                .getElementById("dd24content")
                                .classList.toggle("-is-el-visible");
                            }}
                            className="dropdown js-dropdown js-category-active"
                          >
                            <div
                              className="dropdown__button d-flex items-center text-14 h-50 rounded-8 px-15 py-10 "
                              data-el-toggle=".js-category-toggle"
                              data-el-toggle-active=".js-category-active"
                            >
                              <span className="js-dropdown-title">
                                All Courses
                              </span>
                              <i className="icon text-9 ml-40 icon-chevron-down"></i>
                            </div>

                            <div
                              id="dd24content"
                              className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
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
                                    Lifestyle
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

                    <div className="col-auto">
                      <button className="button -md -narrow -purple-1 text-white">
                        <i className="icon-calendar-2 mr-10"></i>
                        New Event
                      </button>
                    </div>
                  </div>

                  {/* <div className="row justify-between pt-30">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <button className="button -single-icon -dark-7 -dark-button-dark-2 size-45 rounded-8 text-dark-1">
                          <i className="icon-chevron-left text-11"></i>
                        </button>
                        <div className="ml-10 text-15 fw-500 lh-1">
                          November 2022
                        </div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="text-24 text-dark-1 fw-500">
                        December 2022
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <div className="mr-10 text-15 fw-500 lh-1">
                          January 2023
                        </div>
                        <button className="button -single-icon -dark-7 -dark-button-dark-2 size-45 rounded-8 text-dark-1">
                          <i className="icon-chevron-right text-11"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row ml-0 mr-0 pt-20"></div> */}

                  <div className="overflow-scroll scroll-bar-1 mt-20">
                    <EventCalendar />
                  </div>

                  <div className="row x-gap-20 y-gap-10 justify-center pt-30">
                    <div className="col-auto">
                      <a
                        href="#"
                        className="button -icon -purple-3 text-light-1"
                      >
                        Export Calender
                        <i className="icon-arrow-top-right text-13 ml-10"></i>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a
                        href="#"
                        className="button -icon -purple-3 text-light-1"
                      >
                        Manage Subscriptions
                        <i className="icon-arrow-top-right text-13 ml-10"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3">
            <div className="row y-gap-30">
              <EventKeys />

              <div className="col-12">
                <div className="pt-20 pb-30 px-10 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                  <h5 className="text-17 fw-500 mb-30">Monthly view</h5>

                  <MonthlyCalender />
                  <br />
                  <MonthlyCalender style={{ marginTop: "20px" }} />
                  <br />
                  <MonthlyCalender style={{ marginTop: "20px" }} />
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
