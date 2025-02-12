"use client";

import { grades, partcipents } from "@/data/dashboard";
import { letters, alphabetItems } from "@/data/dictionary";

import React, { useState, useEffect } from "react";
import FooterNine from "../layout/footers/FooterNine";
import Image from "next/image";
import PageLinksTwo from "../common/PageLinksTwo";

export default function Participants() {
  const [currentLetter, setCurrentLetter] = useState("A");
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Participants</h1>

            <PageLinksTwo />
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Page Head</h2>
              </div>

              <div className="py-30 px-30">
                <div className="border-light rounded-8">
                  <div className="d-flex items-center py-25 px-30">
                    <div className="text-dark-1 mr-15">Match</div>

                    <div
                      id="dd16button"
                      onClick={() => {
                        document
                          .getElementById("dd16button")
                          .classList.toggle("-is-dd-active");
                        document
                          .getElementById("dd16content")
                          .classList.toggle("-is-el-visible");
                      }}
                      className="dropdown js-dropdown js-category-active"
                    >
                      <div
                        className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 "
                        data-el-toggle=".js-category-toggle"
                        data-el-toggle-active=".js-category-active"
                      >
                        <span className="js-dropdown-title">Any</span>
                        <i className="icon text-9 ml-40 icon-chevron-down"></i>
                      </div>

                      <div
                        id="dd16content"
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

                    <div className="text-dark-1 ml-15">of the following:</div>
                  </div>

                  <div className="px-30 py-30 border-top-light">
                    <div className="bg-light-4 rounded-8 py-10 md:py-20 px-30">
                      <div className="row y-gap-20 justify-between items-center">
                        <div className="col-md-auto">
                          <div className="row x-gap-20 y-gap-10 items-center">
                            <div className="col-auto">
                              <div className="text-dark-1">Match</div>
                            </div>
                            <div className="col-md-auto">
                              <div
                                id="dd17button"
                                onClick={() => {
                                  document
                                    .getElementById("dd17button")
                                    .classList.toggle("-is-dd-active");
                                  document
                                    .getElementById("dd17content")
                                    .classList.toggle("-is-el-visible");
                                }}
                                className="dropdown js-dropdown js-category-active"
                              >
                                <div
                                  className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-10 h-50 "
                                  data-el-toggle=".js-category-toggle"
                                  data-el-toggle-active=".js-category-active"
                                >
                                  <span className="js-dropdown-title">Any</span>
                                  <i className="icon text-9 ml-40 icon-chevron-down"></i>
                                </div>

                                <div
                                  id="dd17content"
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
                                        Business
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div
                                id="dd18button"
                                onClick={() => {
                                  document
                                    .getElementById("dd18button")
                                    .classList.toggle("-is-dd-active");
                                  document
                                    .getElementById("dd18content")
                                    .classList.toggle("-is-el-visible");
                                }}
                                className="dropdown js-dropdown js-category-active"
                              >
                                <div
                                  className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-10 h-50 "
                                  data-el-toggle=".js-category-toggle"
                                  data-el-toggle-active=".js-category-active"
                                >
                                  <span className="js-dropdown-title">Any</span>
                                  <i className="icon text-9 ml-40 icon-chevron-down"></i>
                                </div>

                                <div
                                  id="dd18content"
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
                          <a href="#" data-feather="x"></a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-light-4 rounded-8 py-10 md:py-20 px-30 mt-10">
                      <div className="row y-gap-20 justify-between items-center">
                        <div className="col-md-auto">
                          <div className="row x-gap-20 y-gap-10 items-center">
                            <div className="col-auto">
                              <div className="text-dark-1">Match</div>
                            </div>
                            <div className="col-md-auto">
                              <div
                                id="dd19button"
                                onClick={() => {
                                  document
                                    .getElementById("dd19button")
                                    .classList.toggle("-is-dd-active");
                                  document
                                    .getElementById("dd19content")
                                    .classList.toggle("-is-el-visible");
                                }}
                                className="dropdown js-dropdown js-category-active"
                              >
                                <div
                                  className="dropdown__button d-flex items-center text-14 bg-white border-light -dark-bg-dark-1 rounded-8 px-10 h-50 "
                                  data-el-toggle=".js-category-toggle"
                                  data-el-toggle-active=".js-category-active"
                                >
                                  <span className="js-dropdown-title">Any</span>
                                  <i className="icon text-9 ml-40 icon-chevron-down"></i>
                                </div>

                                <div
                                  id="dd19content"
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
                                        Business
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div
                                id="dd20button"
                                onClick={() => {
                                  document
                                    .getElementById("dd20button")
                                    .classList.toggle("-is-dd-active");
                                  document
                                    .getElementById("dd20content")
                                    .classList.toggle("-is-el-visible");
                                }}
                                className="dropdown js-dropdown js-category-active"
                              >
                                <div
                                  className="dropdown__button d-flex items-center text-14 bg-white border-light -dark-bg-dark-1 rounded-8 px-10 h-50 "
                                  data-el-toggle=".js-category-toggle"
                                  data-el-toggle-active=".js-category-active"
                                >
                                  <span className="js-dropdown-title">Any</span>
                                  <i className="icon text-9 ml-40 icon-chevron-down"></i>
                                </div>

                                <div
                                  id="dd20content"
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
                          <a href="#" data-feather="x"></a>
                        </div>
                      </div>
                    </div>

                    <div className="row y-gap-20 justify-between items-center pt-30">
                      <div className="col-auto">
                        <a href="#" className="text-purple-1 fw-500 underline">
                          + Add condition
                        </a>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex x-gap-20 y-gap-20 flex-wrap">
                          <div>
                            <button className="button h-50 px-25 -dark-1 -dark-button-white text-white">
                              Apply Filters
                            </button>
                          </div>
                          <div>
                            <button className="button h-50 px-25 -outline-dark-1 text-dark-1">
                              Cancel Filters
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-18 fw-500 text-dark-1 lh-12 mt-30">
                  First name
                </div>
                <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-20">
                  <div>
                    <div className="py-8 pr-5 d-flex justify-center items-center">
                      All
                    </div>
                  </div>

                  {letters.map((elm, i) => (
                    <div
                      style={{ cursor: "pointer" }}
                      key={i}
                      onClick={() => setCurrentLetter(elm)}
                    >
                      <div
                        className={`size-35 d-flex justify-center items-center border-light rounded-4 ${
                          currentLetter == elm
                            ? "bg-dark-1 -dark-bg-dark-2 text-white"
                            : ""
                        } `}
                      >
                        {elm}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-40">
                  <div className="px-30 py-20 bg-light-7 -dark-bg-dark-2 rounded-8">
                    <div className="row x-gap-10">
                      <div className="col-lg-5">
                        <div className="text-purple-1">
                          First name / Surname
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="text-purple-1">Roles</div>
                      </div>
                      <div className="col-lg-2">
                        <div className="text-purple-1">Groups</div>
                      </div>
                      <div className="col-lg-3">
                        <div className="text-purple-1">
                          Last access to course
                        </div>
                      </div>
                    </div>
                  </div>

                  {partcipents.map((elm, i) => (
                    <div key={i} className="px-30 border-bottom-light">
                      <div className="row x-gap-10 items-center py-15">
                        <div className="col-lg-5">
                          <div className="d-flex items-center">
                            <Image
                              width={40}
                              height={40}
                              src={elm.imgSrc}
                              alt="image"
                              className="size-40 fit-cover"
                            />
                            <div className="ml-10">
                              <div className="text-dark-1 lh-12 fw-500">
                                {elm.name}
                              </div>
                              <div className="text-14 lh-12 mt-5">
                                {elm.date}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-2">{elm.role}</div>
                        <div className="col-lg-2">{elm.team}</div>
                        <div className="col-lg-3">{elm.duration}</div>
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
