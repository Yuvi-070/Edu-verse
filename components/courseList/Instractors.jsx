"use client";

import { populerTags, teamMembersFull } from "@/data/instractors";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Instractors() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <>
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <h2 className="text-24 lh-12">Popular Instructors</h2>
            </div>

            <div className="col-auto">
              <div className="d-flex justify-center x-gap-15 items-center">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-events-slider-prev instractor-left">
                    <i className="icon icon-arrow-left"></i>
                  </button>
                </div>
                <div className="col-auto">
                  <div className="pagination -arrows js-events-slider-pagination instractor-pagination"></div>
                </div>
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-events-slider-next instractor-right">
                    <i className="icon icon-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden pt-50 lg:pt-40 js-section-slider">
            {showSlider && (
              <Swiper
                // {...setting}
                modules={[Navigation, Pagination]}
                pagination={{
                  el: ".instractor-pagination",
                }}
                navigation={{
                  nextEl: ".instractor-right",
                  prevEl: ".instractor-left",
                }}
                // loop={true}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  // when window width is >= 576px
                  450: {
                    slidesPerView: 3,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 4,
                  },
                  1200: {
                    // when window width is >= 992px
                    slidesPerView: 5,
                  },
                }}
              >
                {teamMembersFull.map((elm, i) => (
                  <SwiperSlide key={i}>
                    <div className="swiper-slide">
                      <div className="teamCard -type-1 -teamCard-hover">
                        <div className="teamCard__image size-180 mx-auto">
                          <Image
                            width={180}
                            height={180}
                            className="fit-cover size-180 rounded-full"
                            src={elm.imageSrc}
                            alt="image"
                          />
                          <div className="teamCard__socials rounded-full">
                            <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                              {elm.socialProfile.map((itm, index) => (
                                <a key={index} href={itm.url}>
                                  <i className={`${itm.icon} text-white`}></i>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="teamCard__content text-center">
                          <div className="d-flex items-center justify-center">
                            <div className="icon-star text-yellow-1 text-9 mr-5"></div>
                            <div className="text-14 text-yellow-1">
                              {elm.rating}
                            </div>
                          </div>

                          <h4 className="teamCard__title mt-10">
                            <Link
                              className="linkCustom"
                              href={`/instructors/${elm.id}`}
                            >
                              {elm.name}
                            </Link>
                          </h4>
                          <p className="teamCard__text">{elm.role}</p>

                          <div className="d-flex x-gap-15 justify-center pt-10">
                            <div className="d-flex items-center">
                              <Image
                                width={16}
                                height={16}
                                className="mr-8"
                                src="/assets/img/team/icons/1.svg"
                                alt="icon"
                              />
                              <div className="text-13 lh-12">
                                {elm.studentCount} Students
                              </div>
                            </div>

                            <div className="d-flex items-center">
                              <Image
                                width={12}
                                height={12}
                                className="mr-8"
                                src="/assets/img/team/icons/2.svg"
                                alt="icon"
                              />
                              <div className="text-13 lh-12">
                                {elm.courseCount} Course
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <h2 className="text-24 lh-12">Popular Instructors</h2>
            </div>
          </div>

          <div className="row x-gap-20 y-gap-20 pt-30">
            {populerTags.map((elm, i) => (
              <div key={i} className="col-auto">
                <button className="button h-60 px-35 -purple-3 text-purple-1">
                  {elm.text}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
