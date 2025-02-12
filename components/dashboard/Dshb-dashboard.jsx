"use client";

import React from "react";
import FooterNine from "../layout/footers/FooterNine";

import PieChartComponent from "./PieCharts";
import { activeUsers, coursesData, states, timeline } from "@/data/dashboard";

import { resentCourses, tags } from "@/data/courses";
import CourseCardTwo from "./DashBoardCards/CourseCardTwo";

import Image from "next/image";
import PageLinksTwo from "../common/PageLinksTwo";
import Charts from "./Charts";
import CalendarTwo from "./calendar/CalenderTwo";

export default function DshbDashboard() {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Dashboard</h1>

            <PageLinksTwo />
          </div>
        </div>

        <div className="row y-gap-50">
          <div className="col-xl-9 col-lg-12">
            <div className="row y-gap-30">
              {states.slice(0, 3).map((elm, i) => (
                <div key={i} className="col-xl-4 col-md-6">
                  <div className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <div>
                      <div className="lh-1 fw-500">{elm.title}</div>
                      <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">
                        ${elm.value}
                      </div>
                      <div className="lh-1 mt-25">
                        <span className="text-purple-1">${elm.new}</span> New
                        Sales
                      </div>
                    </div>

                    <i className={`text-40 ${elm.iconClass} text-purple-1`}></i>
                  </div>
                </div>
              ))}
            </div>

            <div className="row y-gap-30 pt-30">
              <div className="col-md-6">
                <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                  <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                    <h2 className="text-17 lh-1 fw-500">Your Profile Views</h2>
                    <div className="">
                      <div className="text-14">This Week</div>
                    </div>
                  </div>
                  <div className="py-40 px-30">
                    <Charts />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                  <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                    <h2 className="text-17 lh-1 fw-500">Traffic</h2>
                    <div className="">
                      <div className="">This Week</div>
                    </div>
                  </div>
                  <div className="py-40 px-30">
                    <PieChartComponent />
                  </div>
                </div>
              </div>
            </div>

            <div className="row y-gap-30 pt-30">
              <div className="col-12">
                <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                  <div className="d-flex items-center py-20 px-30 border-bottom-light">
                    <h2 className="text-17 lh-1 fw-500">Course overview</h2>
                  </div>

                  <div className="py-30 px-30">
                    <div className="row y-gap-20 justify-between mb-20">
                      <div className="col-auto">
                        <div
                          id="dd5button"
                          onClick={() => {
                            document
                              .getElementById("dd5button")
                              .classList.toggle("-is-dd-active");
                            document
                              .getElementById("dd5content")
                              .classList.toggle("-is-el-visible");
                          }}
                          className="dropdown js-dropdown js-past-active"
                        >
                          <div
                            className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                            data-el-toggle=".js-past-toggle"
                            data-el-toggle-active=".js-past-active"
                          >
                            <span className="js-dropdown-title">Past</span>
                            <i className="icon text-9 ml-40 icon-chevron-down"></i>
                          </div>

                          <div
                            id="dd5content"
                            className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-past-toggle"
                          >
                            <div className="text-14 y-gap-15 js-dropdown-list">
                              <div>
                                <a
                                  href="#"
                                  className="d-block js-dropdown-link"
                                >
                                  Past
                                </a>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  className="d-block js-dropdown-link"
                                >
                                  Past
                                </a>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  className="d-block js-dropdown-link"
                                >
                                  Past
                                </a>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  className="d-block js-dropdown-link"
                                >
                                  Past
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="row x-gap-20 y-gap-20">
                          <div className="col-auto">
                            <div
                              id="dd6button"
                              onClick={() => {
                                document
                                  .getElementById("dd6button")
                                  .classList.toggle("-is-dd-active");
                                document
                                  .getElementById("dd6content")
                                  .classList.toggle("-is-el-visible");
                              }}
                              className="dropdown js-dropdown js-course-name-active"
                            >
                              <div
                                className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                                data-el-toggle=".js-course-name-toggle"
                                data-el-toggle-active=".js-course-name-active"
                              >
                                <span className="js-dropdown-title">
                                  Course Name
                                </span>
                                <i className="icon text-9 ml-40 icon-chevron-down"></i>
                              </div>

                              <div
                                id="dd6content"
                                className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-course-name-toggle"
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
                          <div className="col-auto">
                            <div
                              id="dd7button"
                              onClick={() => {
                                document
                                  .getElementById("dd7button")
                                  .classList.toggle("-is-dd-active");
                                document
                                  .getElementById("dd7content")
                                  .classList.toggle("-is-el-visible");
                              }}
                              className="dropdown js-dropdown js-show-2-active"
                            >
                              <div
                                className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                                data-el-toggle=".js-show-2-toggle"
                                data-el-toggle-active=".js-show-2-active"
                              >
                                <span className="js-dropdown-title">
                                  Show 8
                                </span>
                                <i className="icon text-9 ml-40 icon-chevron-down"></i>
                              </div>

                              <div
                                id="dd7content"
                                className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-show-2-toggle"
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
                          <div className="col-auto">
                            <div
                              id="dd8button"
                              onClick={() => {
                                document
                                  .getElementById("dd8button")
                                  .classList.toggle("-is-dd-active");
                                document
                                  .getElementById("dd8content")
                                  .classList.toggle("-is-el-visible");
                              }}
                              className="dropdown js-dropdown js-cart-2-active"
                            >
                              <div
                                className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                                data-el-toggle=".js-cart-2-toggle"
                                data-el-toggle-active=".js-cart-2-active"
                              >
                                <span className="js-dropdown-title">Cart</span>
                                <i className="icon text-9 ml-40 icon-chevron-down"></i>
                              </div>

                              <div
                                id="dd8content"
                                className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-cart-2-toggle"
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

                    <div className="row y-gap-30">
                      {coursesData.map((elm, i) => (
                        <CourseCardTwo data={elm} key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row y-gap-30 pt-30">
              <div className="col-md-6">
                <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                  <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                    <h2 className="text-17 lh-1 fw-500">Recent Courses</h2>
                    <a href="#" className="text-14 text-purple-1 underline">
                      View All
                    </a>
                  </div>
                  <div className="py-30 px-30">
                    <div className="y-gap-40">
                      {resentCourses.slice(0, 4).map((elm, i) => (
                        <div key={i} className="d-flex border-top-light">
                          <div className="shrink-0">
                            <Image
                              width={90}
                              height={80}
                              src={elm.imageSrc}
                              alt="image"
                            />
                          </div>
                          <div className="ml-15">
                            <h4 className="text-15 lh-16 fw-500">
                              {elm.title}
                            </h4>
                            <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">
                                  {elm.authorName}
                                </div>
                              </div>
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">
                                  {elm.lessonCount} lesson
                                </div>
                              </div>
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">{`${Math.floor(
                                  elm.duration / 60,
                                )}h ${Math.floor(elm.duration % 60)}m`}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                  <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                    <h2 className="text-17 lh-1 fw-500">Timeline</h2>
                  </div>
                  <div className="py-30 px-30">
                    <div className="d-flex justify-between flex-wrap y-gap-15 pb-30">
                      <div>
                        <div
                          className="dropdown"
                          data-el-toggle=".js-clock-toggle"
                        >
                          <div className="d-flex items-center text-14">
                            <span className="icon-clock-2 text-16 js-dropdown-title"></span>
                            <i className="icon text-9 ml-15 icon-chevron-down"></i>
                          </div>

                          <div className="toggle-element -dropdown js-clock-toggle">
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

                      <div>
                        <div
                          className="dropdown"
                          data-el-toggle=".js-filter-toggle"
                        >
                          <div className="d-flex items-center text-14">
                            <span className="icon-list-sort text-16 js-dropdown-title"></span>
                            <i className="icon text-9 ml-15 icon-chevron-down"></i>
                          </div>

                          <div className="toggle-element -dropdown js-filter-toggle">
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

                    <div className="y-gap-40 pb-20">
                      {timeline.map((elm, i) => (
                        <div key={i} className="border-bottom-light">
                          <div className="d-flex items-center">
                            <Image
                              width={40}
                              height={40}
                              src={elm.image}
                              alt="image"
                            />
                            <h5 className="text-15 lh-11 fw-500 ml-10">
                              {elm.date}
                            </h5>
                          </div>

                          <div className="d-flex justify-between w-1/1 mt-20">
                            <div className="w-1/1">
                              <div className="text-14 lh-11 text-dark-1 fw-500">
                                {elm.title}
                              </div>
                              <a
                                href="#"
                                className="d-block text-14 lh-11 text-orange-1 underline mt-10"
                              >
                                Your Road to Better Photography
                              </a>
                              <a
                                href="#"
                                className="d-block text-14 lh-11 text-purple-1 underline fw-500 mt-10"
                              >
                                Add submission
                              </a>
                            </div>

                            <div className="text-14 lh-11">{elm.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="d-inline-block mt-20">
                      <div
                        id="dd9button"
                        onClick={() => {
                          document
                            .getElementById("dd9button")
                            .classList.toggle("-is-dd-active");
                          document
                            .getElementById("dd9content")
                            .classList.toggle("-is-el-visible");
                        }}
                        className="dropdown js-dropdown js-show-active"
                      >
                        <div
                          className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 text-14 lh-12"
                          data-el-toggle=".js-show-toggle"
                          data-el-toggle-active=".js-show-active"
                        >
                          <span className="js-dropdown-title">Show 12</span>
                          <i className="icon text-9 ml-40 icon-chevron-down"></i>
                        </div>

                        <div
                          id="dd9content"
                          className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-show-toggle"
                        >
                          <div className="text-14 y-gap-15 js-dropdown-list">
                            <div>
                              <a href="#" className="d-block js-dropdown-link">
                                Animation
                              </a>
                            </div>

                            <div>
                              <a href="#" className="d-block js-dropdown-link">
                                Design
                              </a>
                            </div>

                            <div>
                              <a href="#" className="d-block js-dropdown-link">
                                Illustration
                              </a>
                            </div>

                            <div>
                              <a href="#" className="d-block js-dropdown-link">
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
            </div>
          </div>

          <div className="col-xl-3 col-lg-12">
            <div className="row y-gap-30">
              <div className="col-12">
                <div className="d-flex items-center flex-column text-center py-40 px-40 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                  <Image
                    width={60}
                    height={60}
                    src="/assets/img/dashboard/demo/1.png"
                    alt="image"
                  />
                  <div className="text-17 fw-500 text-dark-1 mt-20">
                    Student Demo
                  </div>
                  <div className="text-14 lh-1 mt-5">
                    studentdemo1@example.com
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                  <h5 className="text-17 fw-500 mb-20">Latest Badges</h5>

                  <div className="">
                    <div className="d-flex">
                      <div className="shrink-0">
                        <Image
                          width={50}
                          height={50}
                          src="/assets/img/dashboard/badges/1.png"
                          alt="badge"
                        />
                      </div>

                      <div className="ml-20">
                        <h6 className="text-17 fw-500">Level 5</h6>
                        <div className="text-14 mt-5">
                          Cum sociis natoque penatibus et magnis.
                        </div>
                      </div>
                    </div>

                    <div className="d-flex x-gap-30 item-center pt-20">
                      <Image
                        width={30}
                        height={30}
                        src="/assets/img/dashboard/badges/2.png"
                        alt="badge"
                      />
                      <Image
                        width={30}
                        height={30}
                        src="/assets/img/dashboard/badges/3.png"
                        alt="badge"
                      />
                      <Image
                        width={30}
                        height={30}
                        src="/assets/img/dashboard/badges/4.png"
                        alt="badge"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                  <h5 className="text-17 fw-500">Online Users</h5>
                  <div className="text-14 mt-8">
                    2 online user (last 12 minutes)
                  </div>

                  <div className="mt-30">
                    <div className="row y-gap-10">
                      {activeUsers.map((elm, i) => (
                        <div key={i} className="col-12">
                          <div className="d-flex items-center">
                            <div className="shrink-0">
                              <Image
                                width={30}
                                height={30}
                                src={elm.image}
                                alt="badge"
                              />
                            </div>
                            <div className="ml-10">
                              <h6 className="text-14 lh-11 fw-500">
                                {elm.name}
                              </h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                  <h5 className="text-17 fw-500 mb-30">Tags</h5>
                  <div className="d-flex flex-wrap x-gap-10 y-gap-10">
                    {tags.map((elm, i) => (
                      <div key={i}>
                        <div className="d-flex justify-center items-center px-15 py-8 rounded-200 bg-light-3">
                          <a
                            href={elm.href}
                            className="text-11 lh-10 fw-500 text-dark-1"
                          >
                            {elm.name}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-12">
                <CalendarTwo />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterNine />
    </div>
  );
}
