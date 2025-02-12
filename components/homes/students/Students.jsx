"use client";

import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import React, { useEffect, useState } from "react";
import { students } from "../../../data/students";
export default function Students() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-4">
      <div className="container">
        <div className="row y-gap-15 justify-between items-end">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Top Students</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div className="col-auto">
            <div className="col-auto">
              <a
                href="#"
                className="button -icon -outline-purple-1 text-purple-1 fw-500"
              >
                View All Students
                <span className="icon-arrow-top-right text-14 ml-10"></span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-60 lg:pt-40 js-section-slider"
          data-gap="30"
          data-pagination="js-students-slider-pagination"
          data-nav-prev="js-students-slider-prev"
          data-nav-next="js-students-slider-next"
          data-slider-cols="xl-4 lg-3 md-2"
        >
          {showSlider && (
            <Swiper
              className="overflow-visible"
              // {...setting}
              modules={[Navigation, Pagination]}
              pagination={{
                el: ".student-pagination-one",
                clickable: true,
              }}
              navigation={{
                nextEl: ".student-next-one",
                prevEl: ".student-prev-one",
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
              {students.map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-slide">
                    <div className="teamCard -type-2 bg-white">
                      <div className="teamCard__content">
                        <div className="teamCard__img">
                          <Image
                            width={90}
                            height={90}
                            src={elm.imgSrc}
                            alt="image"
                          />
                        </div>

                        <h4 className="teamCard__title text-17 lh-15 fw-500 mt-12">
                          {elm.name}
                        </h4>
                        <div className="teamCard__subtitle text-14 lh-1 mt-5">
                          {elm.title}
                        </div>

                        <div className="teamCard__socials d-flex x-gap-20 pt-12">
                          {elm.socials.map((itm, index) => (
                            <a key={index} href={itm.link}>
                              <i className={itm.icon}></i>
                            </a>
                          ))}
                        </div>

                        <div className="teamCard-tags pt-20">
                          {elm.tags.map((itm, index) => (
                            <div key={index} className="teamCard-tags__item">
                              <div className="teamCard-tags__tag">{itm}</div>
                            </div>
                          ))}
                        </div>

                        <div className="teamCard__button mt-20">
                          <a
                            href={elm.buttonLink}
                            className="button -icon -outline-purple-1 -rounded text-purple-1"
                          >
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className="row pt-60 lg:pt-40">
          <div className="col-auto">
            <div className="d-flex x-gap-15 justify-center items-center">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-students-slider-prev student-prev-one">
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination -arrows js-students-slider-pagination student-pagination-one"></div>
              </div>
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-students-slider-next student-next-one">
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
