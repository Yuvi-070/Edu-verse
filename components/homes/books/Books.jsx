"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { books } from "@/data/books";

import "swiper/css/pagination";
import { useEffect, useState } from "react";
import BooksCard from "@/components/common/BooksCard";

export default function Books() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Latest Books</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div
            className="col-auto"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <a href="#" className="button -icon -purple-3 text-purple-1">
              All Courses
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>

        <div className="pt-60 lg:pt-40">
          <div
            className="overflow-hidden js-section-slider"
            data-loop
            data-gap="30"
            data-pagination
            data-slider-cols="xl-6 lg-6 md-4 sm-3 base-2"
          >
            {showSlider && (
              <Swiper
                // {...setting}

                modules={[Navigation, Pagination]}
                pagination={{
                  el: ".books-pagination",
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".books-next",
                  prevEl: ".books-prev",
                }}
                spaceBetween={30}
                slidesPerView={2}
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
                    slidesPerView: 6,
                  },
                }}
                loop={true}
              >
                {books.map((item, i) => (
                  <SwiperSlide key={i}>
                    <BooksCard data={item} />
                  </SwiperSlide>
                  // 140,90
                ))}
              </Swiper>
            )}

            <div className="d-flex x-gap-15 items-center justify-center pt-60 lg:pt-40">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-prev books-prev">
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination -arrows js-pagination books-pagination pagination-white-dot-dark"></div>
              </div>
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-next books-next">
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
