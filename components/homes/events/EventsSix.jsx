"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { events } from "@/data/events";
import Link from "next/link";

export default function EventsSix() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-4">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Upcoming Events</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div className="col-auto">
            <Link
              href="/event-list-2"
              className="button -icon -purple-3 text-purple-1 -rounded"
            >
              Browse Event
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </Link>
          </div>
        </div>

        <div className="pt-60 lg:pt-40">
          <div className="overflow-hidden js-section-slider">
            {showSlider && (
              <Swiper
                className="overflow-visible"
                // {...setting}
                modules={[Navigation, Pagination]}
                pagination={{
                  el: ".event-six-pagination",
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".icon-arrow-right-event-six",
                  prevEl: ".icon-arrow-left-event-six",
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop
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
                {events.slice(0, 6).map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="swiper-slide">
                      <div
                        className="bg-white rounded-8 shadow-1 px-20 py-20"
                        data-aos="fade-left"
                        data-aos-duration={(i + 1) * 400}
                      >
                        <div className="d-flex items-center">
                          <div className="size-60 d-flex flex-column justify-center items-center rounded-8 bg-dark-1 text-center mr-20">
                            <div className="text-17 lh-15 text-white fw-500">
                              {elm.date.split(" ")[0]}
                            </div>
                            <div className="lh-1 text-white fw-500">
                              {elm.date
                                .split(" ")[1]
                                .split(",")[0]
                                .toUpperCase()}
                            </div>
                          </div>
                          <Link
                            className="linkCustom"
                            href={`/events/${elm.id}`}
                          >
                            {elm.title}
                          </Link>
                        </div>

                        <div className="d-flex items-center mt-20">
                          <div className="icon-location text-14 mr-10"></div>
                          <div className="text-14 lh-1">{elm.location}</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-prev icon-arrow-left-event-six">
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination -arrows js-pagination event-six-pagination"></div>
              </div>
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-next icon-arrow-right-event-six">
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
