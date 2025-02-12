"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { topCategories } from "../../../data/topCategories";

import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CategoriesNine() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container ">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Top Categories</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex x-gap-15 items-center justify-center">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-cat-slider-prev arrow-left-categories-nine">
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination -arrows js-cat-slider-pag pagination-categories-nine pagination-white-dot-dark"></div>
              </div>
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-cat-slider-next arrow-right-categories-nine">
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden pt-50 js-section-slider">
          {showSlider && (
            <Swiper
              // {...setting}

              modules={[Navigation, Pagination]}
              pagination={{
                el: ".pagination-categories-nine",
                clickable: true,
              }}
              navigation={{
                nextEl: ".arrow-right-categories-nine",
                prevEl: ".arrow-left-categories-nine",
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                // when window width is >= 576px
                450: {
                  slidesPerView: 2,
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
              {topCategories.map((item, i) => (
                <SwiperSlide key={i}>
                  <Link
                    href={`/courses-list-${item.id > 8 ? 1 : item.id}`}
                    className="featureCard -type-1 -featureCard-hover-3 linkCustomTwo"
                    data-aos="fade-left"
                    data-aos-duration={(i + 1) * 250}
                  >
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <Image
                          width={45}
                          height={45}
                          src={item.iconSrc}
                          alt="icon"
                        />
                      </div>
                      <div className="featureCard__title">
                        {item.title.split(" ")[0]} <br />
                        {item.title.split(" ")[1] && item.title.split(" ")[1]}
                      </div>
                      <div className="featureCard__text">{item.text}</div>
                    </div>
                  </Link>
                </SwiperSlide>
                // 140,90
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
