"use client";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import CourceCardFour from "@/components/homes/courseCards/CourseCardFour";
import { coursesData } from "@/data/courses";
import Link from "next/link";

export default function CoursesFour() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-3">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Our Most Popular Courses</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative pt-60 lg:pt-50 js-section-slider"
          data-aos="fade-left"
          data-aos-offset="80"
          data-aos-duration={800}
        >
          {showSlider && (
            <Swiper
              className="overflow-visible"
              // {...setting}
              modules={[Navigation, Pagination]}
              pagination={{
                el: ".event-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".course-slider-four-next",
                prevEl: ".course-slider-four-prev",
              }}
              // loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                // when window width is >= 576px
                450: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  // when window width is >= 992px
                  slidesPerView: 3,
                },
              }}
            >
              {coursesData.slice(0, 6).map((elm, i) => (
                <SwiperSlide key={i}>
                  <CourceCardFour key={i} index={i} data={elm} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button className="course-slider-four-prev section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
            <i className="icon icon-arrow-left text-24"></i>
          </button>

          <button className="course-slider-four-next section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
            <i className="icon icon-arrow-right text-24"></i>
          </button>
        </div>

        <div className="row justify-center pt-60 lg:pt-50">
          <div className="col-auto">
            <Link
              href="/courses-list-2"
              className="button -icon -purple-1 text-white"
            >
              Browse All Courses
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
