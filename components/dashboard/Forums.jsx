"use client";

import React from "react";
import FooterNine from "../layout/footers/FooterNine";
import { reviews } from "@/data/reviews";
import Star from "../common/Star";
import { courseDiscussion } from "@/data/dashboard";
import Image from "next/image";
import PageLinksTwo from "../common/PageLinksTwo";

export default function Forums() {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Forums</h1>

            <PageLinksTwo />
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Page Head</h2>
              </div>

              <div className="py-30 px-30">
                <h4 className="text-24 lh-12 fw-500">Course discussion</h4>
                <div className="mt-15">
                  In this space we'll discuss aspects of the films and of
                  psychology in cinema in general. Feel free to raise issues
                  which you think might help you with later assignments and
                  group projects. This is a hive mind area! You can rate others
                  and view ratings.
                </div>
                <button className="button h-50 px-30 -purple-1 text-white mt-30">
                  Add a New Discussion Topic
                </button>

                <div className="mt-40">
                  <div className="px-30 py-20 bg-light-7 rounded-8">
                    <div className="row x-gap-10">
                      <div className="col-lg-4">
                        <div className="text-purple-1">Discussion</div>
                      </div>
                      <div className="col-lg-3">
                        <div className="text-purple-1">Started by</div>
                      </div>
                      <div className="col-lg-3">
                        <div className="text-purple-1">Last post</div>
                      </div>
                      <div className="col-lg-1">
                        <div className="text-purple-1">Replies</div>
                      </div>
                      <div className="col-lg-1">
                        <div className="text-purple-1">Subscribe</div>
                      </div>
                    </div>
                  </div>

                  {courseDiscussion.map((elm, i) => (
                    <div key={i} className="px-30 border-bottom-light">
                      <div className="row x-gap-10 items-center py-25">
                        <div className="col-lg-4">
                          <div className="text-purple-1">{elm.title}</div>
                        </div>

                        <div className="col-lg-3">
                          <div className="d-flex items-center">
                            <Image
                              width={40}
                              height={40}
                              src={elm.author1Img}
                              alt="image"
                              className="size-40 fit-cover"
                            />
                            <div className="ml-10">
                              <div className="text-dark-1 lh-12 fw-500">
                                {elm.author1}
                              </div>
                              <div className="text-14 lh-12 mt-5">
                                {elm.date1}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3">
                          <div className="d-flex items-center">
                            <Image
                              width={40}
                              height={40}
                              src={elm.author2Img}
                              alt="image"
                              className="size-40 fit-cover"
                            />
                            <div className="ml-10">
                              <div className="text-dark-1 lh-12 fw-500">
                                {elm.author2}
                              </div>
                              <div className="text-14 lh-12 mt-5">
                                {elm.date2}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-1">{elm.count}</div>

                        <div className="col-lg-1">
                          <div className="d-flex items-center">
                            <div className="form-switch pr-10">
                              <div
                                className="switch"
                                data-switch=".js-switch-content"
                              >
                                <input type="checkbox" />
                                <span className="switch__slider"></span>
                              </div>
                            </div>
                            <div className="icon-bin"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-between flex-wrap y-gap-20 items-center mt-50">
                  <a
                    href="#"
                    className="button -icon -purple-3 h-50 text-purple-1"
                  >
                    Forum Netiquette
                    <i className="icon-arrow-top-right text-13 ml-10"></i>
                  </a>

                  <div
                    id="dd10button"
                    onClick={() => {
                      document
                        .getElementById("dd10button")
                        .classList.toggle("-is-dd-active");
                      document
                        .getElementById("dd10content")
                        .classList.toggle("-is-el-visible");
                    }}
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 bg-white border-light rounded-8 px-20 py-10 "
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">Jump to...</span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd10content"
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

          <div className="col-12">
            <div className="rounded-16 bg-white shadow-4 h-100">
              <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">
                  Course discussion The attraction of Mental Illness
                </h2>

                <div
                  id="dd11button"
                  onClick={() => {
                    document
                      .getElementById("dd11button")
                      .classList.toggle("-is-dd-active");
                    document
                      .getElementById("dd11content")
                      .classList.toggle("-is-el-visible");
                  }}
                  className="dropdown js-dropdown js-category-active"
                >
                  <div
                    className="dropdown__button d-flex items-center text-14 bg-transparent "
                    data-el-toggle=".js-category-toggle"
                    data-el-toggle-active=".js-category-active"
                  >
                    <span className="js-dropdown-title">Settings</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div
                    id="dd11content"
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

              <div className="py-30 px-30">
                <div className="d-flex items-center justify-between">
                  Search
                  <div
                    id="dd12button"
                    onClick={() => {
                      document
                        .getElementById("dd12button")
                        .classList.toggle("-is-dd-active");
                      document
                        .getElementById("dd12content")
                        .classList.toggle("-is-el-visible");
                    }}
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 bg-light-3 rounded-8 px-20 py-10 "
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">
                        Display Replies In Threaded From
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd12content"
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

                <div className="row y-gap-30 pt-30">
                  {reviews.map((elm, i) => (
                    <div key={i} className="md:direction-column">
                      <div
                        className={`d-flex ${
                          i != 0 ? "border-top-light pt-30" : ""
                        } `}
                      >
                        <div className="mr-20">
                          <Image
                            width={50}
                            height={50}
                            src={elm.avatarSrc}
                            alt="image"
                          />
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              {elm.name}
                              <span className="text-13 text-light-1 fw-400 ml-5">
                                {elm.date}
                              </span>
                            </h4>

                            <div className="d-flex x-gap-5 items-center mt-10">
                              <Star star={elm.rating} />
                            </div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">{elm.title}</h5>
                          <div className="comments__text mt-10">
                            <p>{elm.comment}</p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <button className="button text-13 px-15 py-10 -light-7 text-purple-1">
                              Respond
                            </button>
                          </div>
                        </div>

                        <div className="ml-20">
                          <a href="#" className="icon-flag"></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-between flex-wrap y-gap-20 items-center mt-50">
                  <a
                    href="#"
                    className="button -icon -purple-3 h-50 text-purple-1"
                  >
                    Forum Netiquette
                    <i className="icon-arrow-top-right text-13 ml-10"></i>
                  </a>

                  <div
                    id="dd13button"
                    onClick={() => {
                      document
                        .getElementById("dd13button")
                        .classList.toggle("-is-dd-active");
                      document
                        .getElementById("dd13content")
                        .classList.toggle("-is-el-visible");
                    }}
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 bg-white border-light rounded-8 px-20 py-10 "
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">Jump to...</span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd13content"
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
