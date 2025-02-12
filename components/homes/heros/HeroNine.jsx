"use client";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const categoriesOne = ["Category 1", "Category 2", "Category 3"];
const categoriesTwo = ["Category 1", "Category 2", "Category 3"];
export default function HeroNine() {
  const router = useRouter();
  const [categoryOne, setCategoryOne] = useState("");
  const [categoryTwo, setCategoryTwo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const parallaxIt = () => {
      const target = document.querySelectorAll(".js-mouse-move-container");

      target.forEach((container) => {
        const targets = container.querySelectorAll(".js-mouse-move");

        targets.forEach((el) => {
          const movement = el.getAttribute("data-move");

          document.addEventListener("mousemove", (e) => {
            const relX = e.pageX - container.offsetLeft;
            const relY = e.pageY - container.offsetTop;

            gsap.to(el, {
              x:
                ((relX - container.offsetWidth / 2) / container.offsetWidth) *
                Number(movement),
              y:
                ((relY - container.offsetHeight / 2) / container.offsetHeight) *
                Number(movement),
              duration: 0.2,
            });
          });
        });
      });
    };

    parallaxIt();
  }, []);
  return (
    <section className="masthead -type-7 js-mouse-move-container">
      <div className="masthead__bg bg-purple-1 rounded-16">
        <Image
          width={1300}
          height={1200}
          style={{ width: "100%" }}
          src="/assets/img/home-9/hero/bg.png"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div
            className="col-xl-7 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="masthead__content">
              <h1 className="masthead__title text-white is-in-view">
                Find a perfect Online Course
              </h1>
              <p className="masthead__text text-16 lh-2 text-white pt-10 is-in-view">
                You can access 7900+ different courses from 600
                <br className="lg:d-none" /> professional trainers for free
              </p>

              <div>
                <div className="masthead-form bg-white rounded-16 mt-30 px-10 py-10">
                  <form
                    onSubmit={handleSubmit}
                    className=" d-flex x-gap-30 y-gap-10 items-center flex-wrap"
                  >
                    <div className="masthead-form__item">
                      <div className="d-flex items-center">
                        <i className="icon-search mr-10 ml-15"></i>
                        <input
                          style={{ outline: "none" }}
                          required
                          type="text"
                          placeholder="Your Search"
                        />
                      </div>
                    </div>

                    <div className="masthead-form__item">
                      <div className="dropdown js-dropdown w-1/1 bg-white">
                        <div className="d-flex items-center justify-between text-dark-1 -dark-text-dark-1">
                          <div className="d-flex items-center">
                            <i className="icon-basket mr-10"></i>
                            <span className="js-dropdown-title">
                              {categoryOne ? categoryOne : "Category"}
                            </span>
                          </div>
                          <i className="icon text-9 icon-chevron-down ml-10"></i>
                        </div>

                        <div className="dropdown__item shadow-1">
                          <div className="y-gap-15 js-dropdown-list">
                            {categoriesOne.map((elm, i) => (
                              <div key={i}>
                                <span
                                  onClick={() =>
                                    setCategoryOne((pre) =>
                                      pre == elm ? "" : elm,
                                    )
                                  }
                                  className={`d-block js-dropdown-link cursor ${
                                    categoryOne == elm ? "activeMenu" : ""
                                  } `}
                                >
                                  {elm}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="masthead-form__item">
                      <div className="dropdown js-dropdown w-1/1 bg-white">
                        <div className="d-flex items-center justify-between text-dark-1 -dark-text-dark-1">
                          <div className="d-flex items-center">
                            <i className="icon-basket mr-10"></i>
                            <span className="js-dropdown-title">
                              {categoryTwo ? categoryTwo : "Category"}
                            </span>
                          </div>
                          <i className="icon text-9 icon-chevron-down ml-10"></i>
                        </div>

                        <div className="dropdown__item shadow-1">
                          <div className="y-gap-15 js-dropdown-list">
                            {categoriesTwo.map((elm, i) => (
                              <div key={i}>
                                <span
                                  onClick={() =>
                                    setCategoryTwo((pre) =>
                                      pre == elm ? "" : elm,
                                    )
                                  }
                                  className={`d-block js-dropdown-link cursor ${
                                    categoryTwo == elm ? "activeMenu" : ""
                                  } `}
                                >
                                  {elm}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="masthead-form__button">
                      <button
                        onClick={() => router.push("/courses-list-2")}
                        className="button -dark-1 text-white -dark-button-dark-1"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div>
                <div className="text-white mt-20 is-in-view">
                  Trending Search: Development, Business, Design, Merketing
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-5 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="750"
          >
            <div className="masthead-image">
              <div className="masthead-image__img1">
                <Image
                  width={690}
                  height={685}
                  data-move="20"
                  className="js-mouse-move"
                  src="/assets/img/home-9/hero/1.png"
                  alt="image"
                />
              </div>

              <div className="-el-1">
                <Image
                  width={108}
                  height={108}
                  className="js-mouse-move"
                  data-move="40"
                  src="/assets/img/home-9/hero/2.png"
                  alt="icon"
                />
              </div>
              <div className="-el-2">
                <Image
                  width={108}
                  height={108}
                  className="js-mouse-move"
                  data-move="40"
                  src="/assets/img/home-9/hero/3.png"
                  alt="icon"
                />
              </div>
              <div className="-el-3">
                <Image
                  width={108}
                  height={108}
                  className="js-mouse-move"
                  data-move="40"
                  src="/assets/img/home-9/hero/4.png"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
