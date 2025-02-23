"use client";

import Image from "next/image";

import React from "react";
import { events, learnList, eventContent } from "@/data/events";
import Socials from "../common/Socials";
import { instractorsNine } from "@/data/instractors";
import Star from "../common/Star";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
export default function EventDetails({ id }) {
  const {         addEventToCart,
    isAddedToCartEvents } = useContextElement();
  const data = events.filter((elm) => elm.id == id)[0] || events[0];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="page-header -type-2">
        <div className="page-header__bg">
          <div
            className="bg-image js-lazy"
            style={{ backgroundImage: `url(${data.imgSrc})` }}
            data-bg=""
          ></div>
        </div>

        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                <div className="page-header__info d-flex items-center">
                  <div className="d-flex items-center text-white mr-15">
                    <div className="icon icon-calendar-2"></div>
                    <div className="text-14 ml-8">{data.date}</div>
                  </div>

                  <div className="d-flex items-center text-white mr-15">
                    <div className="icon icon-location"></div>
                    <div className="text-14 ml-8">{data.location}</div>
                  </div>
                </div>

                <div>
                  <h1 className="page-header__title text-white mt-20">
                    {data.desc}
                  </h1>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-50 layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50">
            <div className="col-xl-8 col-lg-8 lg:order-2">
              <h4 className="text-20">About The Expert Lecture</h4> 
              <p className="text-light-1 mt-30">
              This expert lecture brings together top neuroscientists, psychologists, and health professionals to explore the science behind 
              brain health. Discover cutting-edge research on memory, focus, neuroplasticity, and mental well-being. Learn practical techniques for enhancing 
              cognitive function, reducing stress, and maintaining a healthy brain throughout life. Perfect for anyone interested in mental performance, wellness, and longevity
              </p>
        

              <div className="mt-60">
                <h4 className="text-20 mb-30">Our Speakers</h4>
                <div className="row y-gap-30">
                  {instractorsNine.slice(0, 4).map((elm, i) => (
                    <div className="col-lg-3 col-md-6">
                      <div className="text-center">
                        <Image
                          width={180}
                          height={180}
                          src={elm.image}
                          alt="image"
                        />
                        <h5 className="text-17 fw-500 mt-20">
                          <Link
                            className="linkCustom"
                            href={`/instructors/${elm.id}`}
                          >
                            {elm.name}
                          </Link>
                        </h5>
                        <p className="">{elm.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="blogPost -comments mt-60">
                <div className="blogPost__content">
                  <h2 className="text-20 fw-500">Reviews</h2>

                  <ul className="comments__list mt-30">
                    <li className="comments__item">
                      <div className="comments__item-inner md:direction-column">
                        <div className="comments__img mr-20">
                          <div
                            className="bg-image rounded-full js-lazy"
                            style={{
                              backgroundImage: "url(/assets/img/avatars/1.png)",
                            }}
                            data-bg="/assets/img/avatars/1.png"
                          ></div>
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              Omkar Mede .
                              <span className="text-13 text-light-1 fw-400">
                               2 houre ago
                              </span>
                            </h4>

                            <div className="stars"></div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">
                            The Best Speaker
                          </h5>
                          <div className="comments__text mt-10">
                            <p>
                            The expert lecture on brain health provided valuable insights into maintaining cognitive function and overall mental well-being. 
                            The session was well-structured, covering essential aspects such as nutrition, exercise, and mental well-being in an easy-to-understand manner.
                            </p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <span className="text-13 text-purple-1">
                              Was this review helpful?
                            </span>
                            <button className="button text-13 -sm -purple-1 text-white">
                              Yes
                            </button>
                            <button className="button text-13 -sm -light-7 text-purple-1">
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="comments__item">
                      <div className="comments__item-inner md:direction-column">
                        <div className="comments__img mr-20">
                          <div
                            className="bg-image rounded-full js-lazy"
                            style={{
                              backgroundImage: "url(/assets/img/avatars/1.png)",
                            }}
                            data-bg="/assets/img/avatars/1.png"
                          ></div>
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              Yuvraj Tale .
                              <span className="text-13 text-light-1 fw-400">
                                3 houre ago
                              </span>
                            </h4>

                            <div className="stars"></div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">
                            The best LMS Design
                          </h5>
                          <div className="comments__text mt-10">
                            <p>
                            The discussion on brain-boosting foods, physical activity benefits, 
                            and stress management techniques was particularly informative. The speaker effectively explained complex concepts in simple terms,
                             making the lecture engaging and accessible to all audiences.
                            </p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <span className="text-13 text-purple-1">
                              Was this review helpful?
                            </span>
                            <button className="button text-13 -sm -purple-1 text-white">
                              Yes
                            </button>
                            <button className="button text-13 -sm -light-7 text-purple-1">
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="respondForm mt-60">
                <h3 className="text-20 fw-500">Write a Review</h3>

                <div className="mt-30">
                  <h4 className="text-16 fw-500">What is it like to Course?</h4>
                  <div className="d-flex x-gap-10 pt-10">
                    <Star textSize={"text-14"} star={5} />
                  </div>
                </div>

                <form
                  className="contact-form respondForm__form row y-gap-30 pt-30"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Review Title
                    </label>
                    <input
                      required
                      type="text"
                      name="title"
                      placeholder="Great Courses"
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Review Content
                    </label>
                    <textarea
                      required
                      name="comment"
                      placeholder="Message"
                      rows="8"
                    ></textarea>
                  </div>
                  <Link href={"/login"} className="col-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="button -md -purple-1 text-white"
                    >
                      Submit Review
                    </button>
                  </Link>
                </form>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 lg:order-1">
              <div className="event-info bg-white rounded-8 px-30 py-30 border-light shadow-1">
             

                <div
                 onClick={() => addEventToCart(data.id)}
                  className="button -md col-12 -purple-1 text-white mt-30 cursor"
                >
                <button>Watch Now</button>
                </div>

                <div className="d-flex justify-center pt-25">
                  <Socials
                    componentsClass={
                      "d-flex justify-center items-center size-50 rounded-full"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
