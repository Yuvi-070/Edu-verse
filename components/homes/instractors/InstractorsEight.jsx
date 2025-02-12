"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { instractorsEight } from "@/data/instractors";
import Link from "next/link";
export default function InstractorsEight() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-50">
          <div className="col-xl-3 col-lg-4 col-md-8">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">
                Learn from the best instructors
              </h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliquam id dolor.
              </p>
            </div>

            <div className="d-inline-block">
              <Link
                href="/instructors-list-1"
                className="button -icon -red-2 text-orange-1 mt-30"
              >
                View All Instructors
                <i className="icon-arrow-top-right text-13 ml-10"></i>
              </Link>
            </div>
          </div>

          <div className="offset-xl-1 col-lg-8">
            <div className="overflow-hidden js-section-slider">
              {showSlider && (
                <Swiper
                  // {...setting}

                  modules={[Navigation, Pagination]}
                  pagination={{
                    el: ".pagination-instractors-eight",
                    clickable: true,
                  }}
                  navigation={{
                    nextEl: ".category-six-right",
                    prevEl: ".category-six-left",
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    // when window width is >= 576px
                    450: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    600: {
                      slidesPerView: 2,
                    },
                    900: {
                      slidesPerView: 3,
                    },
                    1200: {
                      // when window width is >= 992px
                      slidesPerView: 3,
                    },
                  }}
                  loop={true}
                >
                  {instractorsEight.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <div className="swiper-slide">
                        <div className="d-flex flex-column items-center">
                          <div>
                            <Image
                              width={180}
                              height={180}
                              src={elm.image}
                              alt="image"
                            />
                          </div>
                          <div className="d-flex items-center mt-20">
                            <div className="icon-star text-9 text-yellow-1 mr-5"></div>
                            <div className="text-yellow-1">{elm.rating}</div>
                          </div>
                          <h5 className="text-17 fw-500 mt-10">
                            <Link
                              className="linkCustom"
                              href={`/instructors/${elm.id}`}
                            >
                              {elm.name}
                            </Link>
                          </h5>
                          <p className="mt-5">{elm.role}</p>

                          <div className="d-flex x-gap-15 items-center pt-5">
                            <div className="d-flex items-center">
                              <div className="mr-10">
                                <Image
                                  width={16}
                                  height={16}
                                  src="/assets/img/team/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div className="text-13 lh-1">
                                {elm.students} Students
                              </div>
                            </div>

                            <div className="d-flex items-center">
                              <div className="mr-10">
                                <Image
                                  width={12}
                                  height={12}
                                  src="/assets/img/team/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div className="text-13 lh-1">
                                {elm.courses} Course
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    // 140,90
                  ))}
                </Swiper>
              )}

              <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
                <div className="col-auto">
                  <div className="pagination -arrows js-pagination pagination-instractors-eight"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
