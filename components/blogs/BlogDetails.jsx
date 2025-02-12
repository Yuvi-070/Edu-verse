"use client";

import React from "react";
import { blogs, tags } from "@/data/blog";
import Image from "next/image";
export default function BlogDetails({ id }) {
  const data = blogs.filter((elm) => elm.id == id)[0] || blogs[0];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <div className="text-14 text-purple-1 uppercase fw-500 mb-8">
                    {data.category.toUpperCase()}
                  </div>

                  <h1 className="page-header__title lh-14">
                    {data.title.split(" ").slice(0, 4).join(" ")}
                    <br />
                    {data.title.split(" ").slice(4, -1).join(" ")}
                  </h1>

                  <p className="page-header__text">{data.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md">
        <div className="container">
          <div
            className="ratio ratio-16:9 rounded-8 bg-image js-lazy"
            style={{ backgroundImage: `url(${data.imageSrc})` }}
            data-bg="img/blog/blog-single/images.png"
          ></div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="blogSection">
            <div className="blogCard">
              <div className="row justify-center">
                <div className="col-xl-8 col-lg-9 col-md-11">
                  <div className="blogCard__content">
                    <h4 className="text-18 fw-500">
                      What makes a good brand book?
                    </h4>
                    <p className="mt-30">
                      Sed viverra ipsum nunc aliquet bibendum enim facilisis
                      gravida. Diam phasellus vestibulum lorem sed risus
                      ultricies. Magna sit amet purus gravida quis blandit. Arcu
                      cursus vitae congue mauris. Nunc mattis enim ut tellus
                      elementum sagittis vitae et leo. Semper risus in hendrerit
                      gravida rutrum quisque non. At urna condimentum mattis
                      pellentesque id nibh tortor. A erat nam at lectus urna
                      duis convallis convallis tellus. Sit amet mauris commodo
                      quis imperdiet massa. Vitae congue eu consequat ac felis.
                    </p>

                    <ul className="ul-list y-gap-10 mt-30">
                      <li>
                        Sed viverra ipsum nunc aliquet bibendum enim facilisis
                        gravida.
                      </li>
                      <li>
                        At urna condimentum mattis pellentesque id nibh. Laoreet
                        non curabitur
                      </li>
                      <li>Magna etiam tempor orci eu lobortis elementum.</li>
                      <li>
                        Bibendum est ultricies integer quis. Semper eget duis at
                        tellus.
                      </li>
                    </ul>

                    {/* <!-- <div className="py-25 pl-90 lg:pl-80 md:px-32 border-left-2-accent text-center mt-30 lg:mt-40">
                  <div className="">
                    <i className="icon icon-quote"></i>
                  </div>

                  <div className="text-dark-1 fw-500 italic text-2xl lh-17">
                    “Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris.“
                  </div>
                </div> --> */}

                    <p className="mt-30">
                      Donec purus posuere nullam lacus aliquam egestas arcu. A
                      egestas a, tellus massa, ornare vulputate. Erat enim eget
                      laoreet ullamcorper lectus aliquet nullam tempus id.
                      Dignissim convallis quam aliquam rhoncus, lectus nullam
                      viverra. Bibendum dignissim tortor, phasellus pellentesque
                      commodo, turpis vel eu. Donec consectetur ipsum nibh
                      lobortis elementum mus velit tincidunt elementum.
                      Ridiculus eu convallis eu mattis iaculis et, in dolor. Sem
                      libero, tortor suspendisse et, purus euismod posuere sit.
                      Risus dui ut viverra venenatis ipsum tincidunt non, proin.
                      Euismod pharetra sit ac nisi. Erat lacus, amet quisque
                      urna faucibus. Rhoncus praesent faucibus rhoncus nec
                      adipiscing tristique sed facilisis velit.
                      <br />
                      <br />
                      Neque nulla porta ut urna rutrum. Aliquam cursus arcu
                      tincidunt mus dictum sit euismod cum id. Dictum integer
                      ultricies arcu fermentum fermentum sem consectetur.
                      Consectetur eleifend aenean eu neque euismod amet
                      parturient turpis vitae. Faucibus ipsum felis et duis
                      fames.
                    </p>
                  </div>

                  <div className="row y-gap-30 pt-30">
                    <div className="col-sm-6">
                      <Image
                        width={530}
                        height={450}
                        src="/assets/img/blog/blog-single/1.png"
                        alt="image"
                        className="w-1/1 initial-img rounded-8"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Image
                        width={530}
                        height={450}
                        src="/assets/img/blog/blog-single/2.png"
                        alt="image"
                        className="w-1/1 initial-img rounded-8"
                      />
                    </div>
                  </div>

                  <div className="blogCard__content pt-30">
                    <p>
                      Donec purus posuere nullam lacus aliquam egestas arcu. A
                      egestas a, tellus massa, ornare vulputate. Erat enim eget
                      laoreet ullamcorper lectus aliquet nullam tempus id.
                      Dignissim convallis quam aliquam rhoncus, lectus nullam
                      viverra. Bibendum dignissim tortor, phasellus pellentesque
                      commodo, turpis vel eu. Donec consectetur ipsum nibh
                      lobortis elementum mus velit tincidunt elementum.
                      Ridiculus eu convallis eu mattis iaculis et, in dolor. Sem
                      libero, tortor suspendisse et, purus euismod posuere sit.
                      Risus dui ut viverra venenatis ipsum tincidunt non, proin.
                      Euismod pharetra sit ac nisi. Erat lacus, amet quisque
                      urna faucibus. Rhoncus praesent faucibus rhoncus nec
                      adipiscing tristique sed facilisis velit.
                      <br />
                      <br />
                      Neque nulla porta ut urna rutrum. Aliquam cursus arcu
                      tincidunt mus dictum sit euismod cum id. Dictum integer
                      ultricies arcu fermentum fermentum sem consectetur.
                      Consectetur eleifend aenean eu neque euismod amet
                      parturient turpis vitae. Faucibus ipsum felis et duis
                      fames.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-center pt-30">
              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="row y-gap-20 justify-between items-center">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="lh-1 text-dark-1 fw-500 mr-30">Share</div>

                      <div className="d-flex x-gap-15">
                        <a href="#">Fb</a>
                        <a href="#">Tw</a>
                        <a href="#">In</a>
                        <a href="#">Ln</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="row x-gap-10 y-gap-10">
                      {tags.slice(0, 4).map((elm, i) => (
                        <div className="col-auto">
                          <a
                            href={elm.href}
                            className="badge -sm -light-3 text-11 text-dark-1"
                          >
                            {elm.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-center pt-30">
              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="d-flex border-bottom-light border-top-light py-30">
                  <div className="">
                    <div
                      className="bg-image size-70 rounded-full js-lazy"
                      data-bg="img/blog/blog-single/author.png"
                    ></div>
                  </div>

                  <div className="ml-30 md:ml-20">
                    <h4 className="text-17 lh-15 fw-500">Brooklyn Simmons</h4>
                    <div className="mt-5">Medical Assistant</div>
                    <p className="mt-25">
                      Etiam vitae leo et diam pellentesque porta. Sed eleifend
                      ultricies risus, vel rutrum erat commodo ut. Praesent
                      finibus congue euismod. Nullam scelerisque massa vel augue
                      placerat, a tempor sem egestas. Curabitur placerat finibus
                      lacus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-center">
              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="border-bottom-light py-30">
                  <div className="row x-gap-50 justify-between items-center">
                    <div className="col-md-4 col-6">
                      <a
                        href="blog-single"
                        className="related-nav__item -prev decoration-none"
                      >
                        <div className="related-nav__arrow">
                          <i
                            className="icon size-20 pt-5"
                            data-feather="arrow-left"
                          ></i>
                        </div>
                        <div className="related-nav__content">
                          <div className="text-17 text-dark-1 fw-500">Prev</div>
                          <p className="text-dark-1 mt-8">
                            5 awesome steps to get rid of stress and routine
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="col-auto lg:d-none">
                      <div className="related-nav__icon row">
                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-6 d-flex justify-end">
                      <a
                        href="blog-single"
                        className="related-nav__item -next text-right decoration-none"
                      >
                        <div className="related-nav__content">
                          <div className="text-17 text-dark-1 fw-500">Next</div>
                          <p className="text-dark-1 mt-8">
                            Happy clients leave positive feedback less often
                          </p>
                        </div>
                        <div className="related-nav__arrow">
                          <i
                            className="icon size-20 pt-5"
                            data-feather="arrow-right"
                          ></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-center pt-30">
              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="blogPost -comments">
                  <div className="blogPost__content">
                    <h2 className="text-20 fw-500">Reviews</h2>

                    <ul className="comments__list mt-30">
                      <li className="comments__item">
                        <div className="comments__item-inner md:direction-column">
                          <div className="comments__img mr-20">
                            <div
                              className="bg-image rounded-full js-lazy"
                              style={{
                                backgroundImage:
                                  "url(/assets/img/avatars/1.png)",
                              }}
                            ></div>
                          </div>

                          <div className="comments__body md:mt-15">
                            <div className="comments__header">
                              <h4 className="text-17 fw-500 lh-15">
                                Ali Tufan
                                <span className="text-13 text-light-1 fw-400">
                                  3 Days ago
                                </span>
                              </h4>

                              <div className="stars"></div>
                            </div>

                            <h5 className="text-15 fw-500 mt-15">
                              The best LMS Design
                            </h5>
                            <div className="comments__text mt-10">
                              <p>
                                This course is a very applicable. Professor Ng
                                explains precisely each algorithm and even tries
                                to give an intuition for mathematical and
                                statistic concepts behind each algorithm. Thank
                                you very much.
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
                                backgroundImage:
                                  "url(/assets/img/avatars/1.png)",
                              }}
                            ></div>
                          </div>

                          <div className="comments__body md:mt-15">
                            <div className="comments__header">
                              <h4 className="text-17 fw-500 lh-15">
                                Ali Tufan
                                <span className="text-13 text-light-1 fw-400">
                                  3 Days ago
                                </span>
                              </h4>

                              <div className="stars"></div>
                            </div>

                            <h5 className="text-15 fw-500 mt-15">
                              The best LMS Design
                            </h5>
                            <div className="comments__text mt-10">
                              <p>
                                This course is a very applicable. Professor Ng
                                explains precisely each algorithm and even tries
                                to give an intuition for mathematical and
                                statistic concepts behind each algorithm. Thank
                                you very much.
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

                <div className="respondForm pt-30">
                  <h3 className="text-20 fw-500">Write a Review</h3>

                  <div className="mt-30">
                    <h4 className="text-16 fw-500">
                      What is it like to Course?
                    </h4>
                    <div className="d-flex x-gap-10 pt-10">
                      <div className="icon-star text-14 text-yellow-1"></div>
                      <div className="icon-star text-14 text-yellow-1"></div>
                      <div className="icon-star text-14 text-yellow-1"></div>
                      <div className="icon-star text-14 text-yellow-1"></div>
                      <div className="icon-star text-14 text-yellow-1"></div>
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
                    <div className="col-12">
                      <button
                        type="submit"
                        name="submit"
                        id="submit"
                        className="button -md -purple-1 text-white"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
