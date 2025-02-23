"use client";

import React, { useEffect, useState } from "react";

import { coursesData } from "@/data/courses";
import { courseStates } from "@/data/courses";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CourceCardSeven from "@/components/homes/courseCards/CourseCardSeven";
import Link from "next/link";

export default function CoursesSeven() {
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
          <div className="row y-gap-15 justify-between items-center">
            <div className="col-lg-6">
              <div className="sectionTitle ">
                <h2 className="sectionTitle__title ">
                  Our Most Popular Courses
                </h2>

                <p className="sectionTitle__text ">
                  10,000+ unique online course list designs
                </p>
              </div>
            </div>

            <div className="col-lg-auto">
              <Link
                href="/courses-list-6"
                className="button -icon -purple-3 text-purple-1"
              >
                All Courses
                <i className="icon-arrow-top-right text-13 ml-10"></i>
              </Link>
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
                    className="overflow-hidden"
                    // {...setting}
                    modules={[Navigation, Pagination]}
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
                      <SwiperSlide
                        key={i}
                        className="swiper-slide -type-1  border-light bg-white rounded-8 "
                      >
                        <CourceCardSeven data={elm} index={i} />
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
