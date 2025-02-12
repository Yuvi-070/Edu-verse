"use client";

import React, { useEffect, useState } from "react";

import CourceCard from "../courseCards/CourseCardFive";
import { coursesData } from "@/data/courses";
import { courseStates } from "@/data/courses";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CoursesFive({ tabBtnStyle }) {
  const [showSlider, setShowSlider] = useState(false);
  const [currentCourseState, setCurrentCourseState] = useState("All");
  const [pageItem, setPageItem] = useState([]);
  useEffect(() => {
    if (currentCourseState == "All") {
      setPageItem(coursesData);
    } else {
      const filtered = coursesData.filter(
        (elm) => elm.state == currentCourseState,
      );
      setPageItem(filtered);
    }
  }, [currentCourseState]);

  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="tabs -pills js-tabs">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle ">
                <h2 className="sectionTitle__title ">
                  Explore Featured Courses
                </h2>

                <p className="sectionTitle__text ">
                  10,000+ unique online course list designs
                </p>
              </div>
            </div>

            <div className="col-auto">
              <div className="tabs__controls d-flex justify-center x-gap-10 js-tabs-controls">
                {courseStates.map((elm, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setCurrentCourseState(elm)}
                      className={`${
                        tabBtnStyle
                          ? tabBtnStyle
                          : "tabs__button px-20 py-8 rounded-200 js-tabs-button"
                      }  ${currentCourseState == elm ? "is-active" : ""} `}
                      data-tab-target=".-tab-item-1"
                      type="button"
                    >
                      {elm}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tabs__content pt-60 lg:pt-50 js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-active">
              <div
                className=" js-section-slider"
                data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
                data-aos="fade-left"
                data-aos-offset="80"
                data-aos-duration={800}
              >
                {showSlider && (
                  <Swiper
                    // {...setting}
                    modules={[Navigation, Pagination]}
                    className="overflow-hidden"
                    navigation={{
                      nextEl: ".course-five-right",
                      prevEl: ".course-five-left",
                    }}
                    // loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                      // when window width is >= 576px
                      450: {
                        slidesPerView: 2,
                      },
                      // when window width is >= 768px
                      768: {
                        slidesPerView: 3,
                      },
                      1200: {
                        // when window width is >= 992px
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {pageItem.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <CourceCard data={elm} index={i} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                <button className="course-five-left section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
                  <i className="icon icon-arrow-left text-24"></i>
                </button>

                <button className="course-five-right section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
                  <i className="icon icon-arrow-right text-24"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
