"use client";
import React from "react";
import FooterNine from "../layout/footers/FooterNine";
import Link from "next/link";
import PageLinksTwo from "../common/PageLinksTwo";

export default function Assignment() {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Assignment</h1>

            <PageLinksTwo />
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-xl-10">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Page Head</h2>
              </div>

              <div className="py-30 px-30">
                <div>
                  <h4 className="text-18 lh-1 fw-500">
                    Assignment 1 (Text or Audio)
                  </h4>
                  <div className="col-xl-6">
                    <p className="mt-15">
                      Keep it short! Type or Record your answer! Record with the
                      audio or video buttons above! From your readings, define
                      Digital Literacy in no more than 15 words. Can you master
                      the art of being succinct?
                    </p>
                  </div>
                </div>

                <div className="mt-60">
                  <h4 className="text-18 lh-1 fw-500">Grading summary</h4>
                </div>

                <div className="mt-30">
                  <div className="rounded-8 px-25 py-25 bg-light-4">
                    <div className="row">
                      <div className="col-3">
                        <div className="text-dark-1">Hidden from students</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className="col-auto"
                      >
                        No
                      </div>
                    </div>
                  </div>

                  <div className="rounded-8 px-25 py-25 ">
                    <div className="row">
                      <div className="col-3">
                        <div className="text-dark-1">Participants</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className="col-auto"
                      >
                        10
                      </div>
                    </div>
                  </div>

                  <div className="rounded-8 px-25 py-25 bg-light-4">
                    <div className="row">
                      <div className="col-3">
                        <div className="text-dark-1">Submitted</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className="col-auto"
                      >
                        2
                      </div>
                    </div>
                  </div>

                  <div className="rounded-8 px-25 py-25 ">
                    <div className="row">
                      <div className="col-3">
                        <div className="text-dark-1">Needs grading</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className="col-auto "
                      >
                        1
                      </div>
                    </div>
                  </div>

                  <div className="rounded-8 px-25 py-25 bg-light-4">
                    <div className="row">
                      <div className="col-3">
                        <div className="text-dark-1">Due date</div>
                      </div>
                      <div className="col-auto">
                        Thursday, 26 December 2019, 1:00 AM
                      </div>
                    </div>
                  </div>

                  <div className="rounded-8 px-25 py-25 ">
                    <div className="row">
                      <div className="col-3">
                        <div className="text-dark-1">Time remaining</div>
                      </div>
                      <div className="col-auto">Assignment is due</div>
                    </div>
                  </div>
                </div>

                <div className="d-flex x-gap-30 flex-wrap y-gap-10 justify-center items-center mt-30">
                  <div>
                    <a href="#" className="button -icon -light-3 h-50">
                      View All Submissions
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="button -icon -light-3 h-50">
                      Grade
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                </div>

                <div className="d-flex flex-wrap y-gap-10 justify-between items-center mt-40">
                  <a
                    href="#"
                    className="button -icon -purple-3 h-50 text-purple-1"
                  >
                    Forum Netiquette
                    <i className="icon-arrow-top-right text-13 ml-10"></i>
                  </a>

                  <div
                    onClick={() => {
                      document
                        .getElementById("ddonebutton")
                        .classList.toggle("-is-dd-active");
                      document
                        .getElementById("ddonecontent")
                        .classList.toggle("-is-el-visible");
                    }}
                    id="ddonebutton"
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-20 py-10 "
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">Jump to...</span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="ddonecontent"
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

                  <a
                    href="#"
                    className="button -icon -purple-3 h-50 text-purple-1"
                  >
                    Share Examples Of Digital
                    <i className="icon-arrow-top-right text-13 ml-10"></i>
                  </a>
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
