"use client";

import { letters, alphabetItems } from "@/data/dictionary";

import React, { useState, useEffect } from "react";
import PageLinksTwo from "../common/PageLinksTwo";
import Link from "next/link";
import FooterNine from "../layout/footers/FooterNine";

export default function Dictionary() {
  const [currentLetter, setCurrentLetter] = useState("A");
  const [dictionaryItem, setDictionaryItem] = useState([]);
  useEffect(() => {
    const filtered = alphabetItems.filter((elm) => elm.key == currentLetter);
    setDictionaryItem(filtered);
  }, [currentLetter]);

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Digital Literacy</h1>

            <PageLinksTwo />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Page Head</h2>
              </div>

              <div className="py-30 px-30">
                <div className="row y-gap-15 justify-between items-center mb-30">
                  <div className="col-auto">Search</div>

                  <div className="col-auto">
                    <a href="#" className="button -md -purple-1 text-white">
                      Add a New Entry
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-auto">
                    <div className="text-18 lh-1 fw-500 text-dark-1 mb-20">
                      First name
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
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
                  </div>
                </div>

                {dictionaryItem.map((elm, i) => (
                  <div
                    key={i}
                    className="border-light overflow-hidden rounded-8 mt-30"
                  >
                    <div className="py-20 px-30 bg-light-7 -dark-bg-dark-2">
                      <div className="d-flex justify-between">
                        <h4 className="text-24 lh-1 fw-700 text-purple-1">
                          {elm.key}
                        </h4>
                      </div>
                    </div>

                    <div className="px-30 py-25">
                      <div className="row y-gap-20 items-center justify-between">
                        <div className="col-auto">
                          <div className="text-dark-1 text-17 fw-500">
                            {elm.title}
                          </div>
                          <div className="mt-8">{elm.description}</div>
                        </div>

                        <div className="col-auto">
                          <div className="d-flex x-gap-30">
                            <a href="#" className="icon-bin"></a>
                            <a href="#" className="icon-bin"></a>
                            <a href="#" className="icon-bin"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="d-flex justify-between flex-wrap y-gap-20 items-center mt-40">
                  <a
                    href="#"
                    className="button -icon -purple-3 h-50 text-purple-1"
                  >
                    Forum Netiquette
                    <i className="icon-arrow-top-right text-13 ml-10"></i>
                  </a>

                  <div
                    id="dd4button"
                    onClick={() => {
                      document
                        .getElementById("dd4button")
                        .classList.toggle("-is-dd-active");
                      document
                        .getElementById("dd4content")
                        .classList.toggle("-is-el-visible");
                    }}
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 "
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">Jump to...</span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd4content"
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
