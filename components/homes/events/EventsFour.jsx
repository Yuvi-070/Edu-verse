"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { events } from "@/data/events";
import Link from "next/link";
export default function EventsFour() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="layout-pt-lg layout-pb-lg border-top-light">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Upcoming Events</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
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
                el: ".event-four-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".icon-arrow-right-event-four",
                prevEl: ".icon-arrow-left-event-four",
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
                  slidesPerView: 3,
                },
              }}
            >
              {events.slice(0, 6).map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="swiper-slide">
                    <div className="eventCard -type-3 bg-light-4 rounded-8">
                      <div className="eventCard__date">
                        <span className="text-45 lh-1 fw-700 text-dark-1">
                          {elm.date.split(" ")[0]}
                        </span>
                        <span className="text-18 lh-1 fw-500 ml-15">
                          {elm.date.split(" ")[1].split(",")[0].toUpperCase()}
                        </span>
                      </div>

                      <h4 className="eventCard__title text-24 lh-15 fw-500">
                        <Link className="linkCustom" href={`/events/${elm.id}`}>
                          {elm.desc}
                        </Link>
                      </h4>

                      <div className="eventCard__button">
                        <Link
                          href={`/events/${elm.id}`}
                          className="button -icon -purple-1 text-white"
                        >
                          Buy Ticket
                          <i className="icon-arrow-top-right text-13 ml-10"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
            <div className="col-auto">
              <button className="d-flex items-center text-24 arrow-left-hover js-prev icon-arrow-left-event-four">
                <i className="icon icon-arrow-left"></i>
              </button>
            </div>
            <div className="col-auto">
              <div className="pagination -arrows js-pagination event-four-pagination"></div>
            </div>
            <div className="col-auto">
              <button className="d-flex items-center text-24 arrow-right-hover js-next icon-arrow-right-event-four">
                <i className="icon icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
