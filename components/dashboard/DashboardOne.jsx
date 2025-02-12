"use client";

import { resentCourses } from "@/data/courses";
import { states } from "@/data/dashboard";
import { teamMembers } from "@/data/instractors";
import { notifications } from "@/data/notifications";
import React from "react";
import FooterNine from "../layout/footers/FooterNine";
import Charts from "./Charts";
import PieChartComponent from "./PieCharts";
import Image from "next/image";
import Link from "next/link";

export default function DashboardOne() {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Dashboard</h1>
            <div className="mt-10">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
        </div>

        <div className="row y-gap-30">
          {states.map((elm, i) => (
            <div key={i} className="col-xl-3 col-md-6">
              <div className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                <div>
                  <div className="lh-1 fw-500">{elm.title}</div>
                  <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">
                    ${elm.value}
                  </div>
                  <div className="lh-1 mt-25">
                    <span className="text-purple-1">${elm.new}</span> New Sales
                  </div>
                </div>

                <i className={`text-40 ${elm.iconClass} text-purple-1`}></i>
              </div>
            </div>
          ))}
        </div>

        <div className="row y-gap-30 pt-30">
          <div className="col-xl-8 col-md-6">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Earning Statistics</h2>
                <div className="">
                  <div
                    id="ddtwobutton"
                    onClick={() => {
                      document
                        .getElementById("ddtwobutton")
                        .classList.toggle("-is-dd-active");
                      document
                        .getElementById("ddtwocontent")
                        .classList.toggle("-is-el-visible");
                    }}
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-20 py-10 text-14 lh-12"
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">This Week</span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="ddtwocontent"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
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
              <div className="py-40 px-30">
                <Charts />
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Traffic</h2>
                <div className="">
                  <div
                    id="dd3button"
                    onClick={() => {
                      document
                        .getElementById("dd3button")
                        .classList.toggle("-is-dd-active");
                      document
                        .getElementById("dd3content")
                        .classList.toggle("-is-el-visible");
                    }}
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-20 py-10 text-14 lh-12"
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">This Week</span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd3content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
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
              <div className="py-40 px-30">
                <PieChartComponent />
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-30">
          <div className="col-xl-4 col-md-6">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 fw-500">Popular Instructor</h2>
                <Link
                  href="/instructors-list-2"
                  className="text-14 text-purple-1 underline"
                >
                  View All
                </Link>
              </div>
              <div className="py-30 px-30">
                <div className="y-gap-40">
                  {teamMembers.slice(0, 5).map((elm, i) => (
                    <div
                      key={i}
                      className={`d-flex ${i != 0 ? "border-top-light" : ""} `}
                    >
                      <Image
                        width={40}
                        height={40}
                        className="size-40"
                        src={elm.image}
                        alt="avatar"
                      />
                      <div className="ml-10 w-1/1">
                        <h4 className="text-15 lh-1 fw-500">
                          <Link
                            className="linkCustom"
                            href={`/instructors/${elm.id}`}
                          >
                            {elm.name}
                          </Link>
                        </h4>
                        <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                          <div className="d-flex items-center">
                            <i className="icon-message text-15 mr-10"></i>
                            <div className="text-13 lh-1">
                              {elm.reviews} Reviews
                            </div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-online-learning text-15 mr-10"></i>
                            <div className="text-13 lh-1">
                              {elm.students} Students
                            </div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-play text-15 mr-10"></i>
                            <div className="text-13 lh-1">
                              {elm.courses} Course
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Recent Courses</h2>
                <a href="#" className="text-14 text-purple-1 underline">
                  View All
                </a>
              </div>
              <div className="py-30 px-30">
                <div className="y-gap-40">
                  {resentCourses.map((elm, i) => (
                    <div
                      key={i}
                      className={`d-flex ${i != 0 ? "border-top-light" : ""} `}
                    >
                      <div className="shrink-0">
                        <Image
                          width={90}
                          height={80}
                          src={elm.imageSrc}
                          alt="image"
                        />
                      </div>
                      <div className="ml-15">
                        <h4 className="text-15 lh-16 fw-500">{elm.title}</h4>
                        <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                          <div className="d-flex items-center">
                            <Image
                              width={16}
                              height={16}
                              className="size-16 object-cover mr-8"
                              src={elm.authorImg}
                              alt="icon"
                            />
                            <div className="text-14 lh-1">{elm.title}</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-document text-16 mr-8"></i>
                            <div className="text-14 lh-1">
                              {elm.lessonCount} lesson
                            </div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-clock-2 text-16 mr-8"></i>
                            <div className="text-14 lh-1">{`${Math.floor(
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

          <div className="col-xl-4 col-md-6">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Notifications</h2>
              </div>
              <div className="py-30 px-30">
                <div className="y-gap-40">
                  {notifications.map((elm, i) => (
                    <div
                      key={i}
                      className={`d-flex items-center ${
                        i != 0 ? "border-top-light" : ""
                      } `}
                    >
                      <div className="shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={elm.imageSrc}
                          alt="image"
                        />
                      </div>
                      <div className="ml-12">
                        <h4 className="text-15 lh-1 fw-500">{elm.heading}</h4>
                        <div className="text-13 lh-1 mt-10">
                          {elm.time} Hours Ago
                        </div>
                      </div>
                    </div>
                  ))}
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
