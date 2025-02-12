"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import { learningPath } from "../../../data/learningPaths";
export default function LearningSolutions() {
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
    <section className="layout-pt-lg layout-pb-lg js-mouse-move-container">
      <div className="container">
        <div className="row y-gap-30 items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <h2 className="text-45 lg:text-40 md:text-30 text-dark-1">
              Online learning solutions
              <br className="xl:d-none" /> that meet your needs.
            </h2>
            <p className="text-dark-1 mt-20">
              Use the list below to bring attention to your product’s key
              <br className="lg:d-none" /> differentiator.
            </p>

            <div className="row y-gap-30 pt-60 lg:pt-40">
              {learningPath.map((elm, i) => (
                <div key={i} className="col-12">
                  <div className="featureIcon -type-1">
                    <div
                      className={`featureIcon__icon ${
                        elm.iconBg && elm.iconBg
                      }`}
                    >
                      <Image
                        width={40}
                        height={40}
                        src={elm.iconSrc && elm.iconSrc}
                        alt="icon"
                      />
                    </div>

                    <div className="featureIcon__content ml-30 md:ml-20">
                      <h4 className="text-17 fw-500">{elm.title}</h4>
                      <p className="mt-5">
                        {elm.description.split(" ").slice(0, 5).join(" ")}
                        <br className="lg:d-none" />
                        {elm.description.split(" ").slice(5, -1).join(" ")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="elements-image">
              <div className="elements-image__img1">
                <Image
                  width={520}
                  height={600}
                  className="js-mouse-move"
                  data-move="40"
                  src="/assets/img/home-2/learning/1.png"
                  alt="image"
                />
              </div>

              <div className="elements-image__img2">
                <Image
                  width={290}
                  height={330}
                  className="js-mouse-move"
                  data-move="70"
                  src="/assets/img/home-2/learning/2.png"
                  alt="image"
                />
              </div>

              <div
                data-move="60"
                className="elements-image__el1 lg:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
              >
                <Image
                  width={70}
                  height={70}
                  src="/assets/img/masthead/4.png"
                  alt="icon"
                />
                <div className="ml-20">
                  <div className="text-dark-1 text-16 fw-500 lh-1">
                    Ali Tufan
                  </div>
                  <div className="mt-3">UX/UI Designer</div>
                  <div className="d-flex x-gap-5 mt-3">
                    <div>
                      <div className="icon-star text-yellow-1 text-11"></div>
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11"></div>
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11"></div>
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11"></div>
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-move="30"
                className="elements-image__el2 lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
              >
                <div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
                  <Image
                    width={24}
                    height={23}
                    src="/assets/img/masthead/1.svg"
                    alt="icon"
                  />
                </div>
                <div className="ml-20">
                  <div className="text-orange-1 text-16 fw-500 lh-1">
                    3.000 +
                  </div>
                  <div className="mt-3">Free Courses</div>
                </div>
              </div>

              <div
                data-move="30"
                className="elements-image__el3 sm:d-none shadow-4 img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
              >
                <div className="img-el__side">
                  <div className="size-50 d-flex justify-center items-center bg-purple-1 rounded-full">
                    <Image
                      width={20}
                      height={27}
                      src="/assets/img/masthead/2.svg"
                      alt="icon"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="text-purple-1 text-16 fw-500 lh-1">
                    Congrats!
                  </div>
                  <div className="mt-3">Your Admission Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
