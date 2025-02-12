"use client";

import React, { useState, useEffect } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsTwoFour } from "../../../data/tesimonials";
import TestimonialCard from "@/components/common/TestimonialCard";
export default function TestimonialsFour() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="layout-pt-lg layout-pb-lg bg-dark-5">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title text-white">
                People Say About Educrat
              </h2>

              <p className="sectionTitle__text text-white">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>

        <div className="pt-60 lg:pt-50 js-section-slider">
          {showSlider && (
            <Swiper
              className="overflow-visible"
              // {...setting}
              modules={[Navigation, Pagination]}
              pagination={{
                el: ".pagination-testimonial",
                clickable: true,
              }}
              navigation={{
                nextEl: ".icon-arrow-right-testimonial",
                prevEl: ".icon-arrow-left-testimonial",
              }}
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
                  slidesPerView: 2,
                },
              }}
            >
              {testimonialsTwoFour.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <TestimonialCard data={elm} index={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
            <div className="col-auto">
              <button className="d-flex items-center text-24 arrow-left-hover js-prev icon-arrow-left-testimonial">
                <i className="icon text-white icon-arrow-left"></i>
              </button>
            </div>
            <div className="col-auto">
              <div className="pagination -arrows js-pagination pagination-testimonial"></div>
            </div>
            <div className="col-auto">
              <button className="d-flex items-center text-24 arrow-right-hover js-next icon-arrow-right-testimonial">
                <i className="icon text-white icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
