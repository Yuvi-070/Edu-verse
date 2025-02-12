"use client";

import Instractor from "./Instractor";
import Reviews from "./Reviews";
import Overview from "./Overview";
import CourseContent from "./CourseContent";
import Star from "../common/Star";
import { coursesData } from "@/data/courses";
import React, { useState, useEffect } from "react";
import PinContentTwo from "./PinContentTwo";

import ModalVideoComponent from "../common/ModalVideo";
import Image from "next/image";
const menuItems = [
  { id: 1, href: "#overview", text: "Overview", isActive: true },
  { id: 2, href: "#course-content", text: "Course Content", isActive: false },
  { id: 3, href: "#instructors", text: "Instructors", isActive: false },
  { id: 4, href: "#reviews", text: "Reviews", isActive: false },
];

export default function CourseDetailsFive({ id }) {
  const [pageItem, setPageItem] = useState(coursesData[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setPageItem(coursesData.filter((elm) => elm.id == id)[0] || coursesData[0]);
  }, []);
  return (
    <>
      <div className="js-pin-container relative">
        <section className="page-header -type-5">
          <div className="page-header__bg">
            <div
              className="bg-image js-lazy"
              data-bg="img/event-single/bg.png"
            ></div>
          </div>

          <div className="container">
            <div className="page-header__content pt-60">
              <div className="row y-gap-30 relative">
                <div className="col-xl-7 col-lg-8">
                  <div className="d-flex x-gap-15 y-gap-10 pb-20">
                    <div>
                      <div className="badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400">
                        BEST SELLER
                      </div>
                    </div>
                    <div>
                      <div className="badge px-15 py-8 text-11 bg-orange-1 text-white fw-400">
                        NEW
                      </div>
                    </div>
                    <div>
                      <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400">
                        POPULAR
                      </div>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-30 lh-14 pr-60 lg:pr-0">
                      {pageItem.title}
                    </h1>
                  </div>

                  <p className="col-xl-9 mt-20">
                    Use XD to get a job in UI Design, User Interface, User
                    Experience design, UX design & Web Design
                  </p>

                  <div className="d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20">
                    <div className="d-flex items-center text-light-1">
                      <div className="text-14 lh-1 text-yellow-1 mr-10">
                        {pageItem.rating}
                      </div>
                      <div className="d-flex x-gap-10 items-center">
                        <Star star={pageItem.rating} />
                      </div>
                      <div className="text-14 lh-1 ml-10">
                        ({pageItem.ratingCount})
                      </div>
                    </div>

                    <div className="d-flex items-center text-light-1">
                      <div className="icon icon-person-3 text-13"></div>
                      <div className="text-14 ml-8">
                        853 enrolled on this course
                      </div>
                    </div>

                    <div className="d-flex items-center text-light-1">
                      <div className="icon icon-wall-clock text-13"></div>
                      <div className="text-14 ml-8">Last updated 11/2021</div>
                    </div>
                  </div>

                  <div className="d-flex items-center pt-20">
                    <div
                      className="bg-image size-30 rounded-full js-lazy"
                      style={{
                        backgroundImage: `url(${pageItem.authorImageSrc})`,
                      }}
                    ></div>
                    <div className="text-14 lh-1 ml-10">
                      {pageItem.authorName}
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="relative pt-40">
                    <Image
                      width={690}
                      height={342}
                      className="w-1/1"
                      src={pageItem.imageSrc}
                      alt="image"
                    />
                    <div className="absolute-full-center d-flex justify-center items-center">
                      <div
                        onClick={() => setIsOpen(true)}
                        className="d-flex justify-center items-center size-60 rounded-full bg-white js-gallery cursor"
                        data-gallery="gallery1"
                      >
                        <div className="icon-play text-18"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PinContentTwo pageItem={pageItem} />

        <section className="pt-30 layout-pb-md">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="pt-25 pb-30 px-30 bg-white shadow-2 rounded-8 border-light">
                  <div className="tabs -active-purple-2 js-tabs pt-0">
                    <div className="tabs__controls d-flex js-tabs-controls">
                      {menuItems.map((elm, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveTab(elm.id)}
                          className={`tabs__button js-tabs-button js-update-pin-scene ${
                            i != 0 ? "ml-30" : ""
                          } ${activeTab == elm.id ? "is-active" : ""} `}
                          type="button"
                        >
                          {elm.text}
                        </button>
                      ))}
                    </div>

                    <div className="tabs__content   js-tabs-content">
                      <div
                        className={`tabs__pane -tab-item-1 ${
                          activeTab == 1 ? "is-active" : ""
                        } `}
                      >
                        <Overview />
                      </div>

                      <div
                        className={`tabs__pane -tab-item-2 ${
                          activeTab == 2 ? "is-active" : ""
                        } `}
                      >
                        <CourseContent />
                      </div>

                      <div
                        className={`tabs__pane -tab-item-3 ${
                          activeTab == 3 ? "is-active" : ""
                        } `}
                      >
                        <Instractor />
                      </div>

                      <div
                        className={`tabs__pane -tab-item-4 ${
                          activeTab == 4 ? "is-active" : ""
                        } `}
                      >
                        <Reviews />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ModalVideoComponent
        videoId={"LlCwHnp3kL4"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
