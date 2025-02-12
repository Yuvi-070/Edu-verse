"use client";
import gsap from "gsap";
import Link from "next/link";
import { ShapeRendering } from "../../../svg/index";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import hero_bg from "../../../public/assets/img/home-1/hero/bg.png";
import masthead_icon_1 from "../../../public/assets/img/masthead/icons/1.svg";
import masthead_icon_2 from "../../../public/assets/img/masthead/icons/2.svg";
import masthead_icon_3 from "../../../public/assets/img/masthead/icons/3.svg";
// move img and icon
import move_img_1 from "../../../public/assets/img/masthead/1.png";

import move_img_2 from "../../../public/assets/img/masthead/2.png";
import move_img_3 from "../../../public/assets/img/masthead/3.png";
import move_icon_1 from "../../../public/assets/img/masthead/1.svg";
import move_icon_2 from "../../../public/assets/img/masthead/4.png";
import move_icon_3 from "../../../public/assets/img/masthead/2.svg";

const masthead_info = [
  {
    id: 1,
    icon: masthead_icon_1,
    text: "Over 12 million students",
  },
  {
    id: 2,
    icon: masthead_icon_2,
    text: "More than 60,000 courses",
  },
  {
    id: 3,
    icon: masthead_icon_3,
    text: "Learn anything online",
  },
];

const hero_content = {
  title: "Learn New Skills Online with Top",
  text_underline: "Educators",
  info_hero: (
    <>
      Build skills with courses, certificates, and degrees online from
      <br /> world-class universities and companies.
    </>
  ),
  starts: [
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
    "icon-star text-yellow-1 text-11",
  ],
};
const { title, text_underline, info_hero, starts } = hero_content;

const HomeHero = () => {
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
    <>
      <section className="masthead -type-1 js-mouse-move-container">
        <div className="masthead__bg">
          <Image src={hero_bg} alt="image" />
        </div>

        <div className="container">
          <div className="row y-gap-30 justify-between items-end">
            <div className="col-xl-6 col-lg-6 col-sm-10">
              <div
                className="masthead__content"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h1 className="masthead__title">
                  {title}{" "}
                  <span className="text-green-1 underline">
                    {text_underline}
                  </span>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="100"
                  className="masthead__text"
                >
                  {info_hero}
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="200"
                  className="masthead__buttons row x-gap-10 y-gap-10"
                >
                  <div className="col-12 col-sm-auto">
                    <Link
                      data-barba
                      href="/signup"
                      className="button -md -purple-1 text-white"
                    >
                      Join For Free
                    </Link>
                  </div>
                  <div className="col-12 col-sm-auto">
                    <Link
                      data-barba
                      href="/courses-list-1"
                      className="button -md -outline-green-1 text-green-1"
                    >
                      Find Courses
                    </Link>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="300"
                  className="masthead-info row y-gap-15 sm:d-none"
                >
                  {masthead_info.map((item, i) => (
                    <div
                      key={i}
                      className="masthead-info__item d-flex items-center text-white"
                    >
                      <div className="masthead-info__icon mr-10">
                        <Image src={item.icon} alt="icon" />
                      </div>
                      <div className="masthead-info__title lh-1">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="col-xl-6 col-lg-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="masthead-image">
                <div className="masthead-image__el1">
                  <Image
                    className="js-mouse-move"
                    data-move="40"
                    style={{ objectFit: "cover" }}
                    src={move_img_1}
                    alt="image"
                  />
                  <div
                    data-move="30"
                    className="lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                  >
                    <div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
                      <Image src={move_icon_1} alt="icon" />
                    </div>
                    <div className="ml-20">
                      <div className="text-orange-1 text-16 fw-500 lh-1">
                        3.000 +
                      </div>
                      <div className="mt-3">Free Courses</div>
                    </div>
                  </div>
                </div>

                <div className="masthead-image__el2">
                  <Image
                    className="js-mouse-move"
                    data-move="70"
                    src={move_img_2}
                    style={{ objectFit: "cover" }}
                    alt="image"
                  />
                  <div
                    data-move="60"
                    className="lg:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                  >
                    <Image src={move_icon_2} alt="icon" />
                    <div className="ml-20">
                      <div className="text-dark-1 text-16 fw-500 lh-1">
                        Ali Tufan
                      </div>
                      <div className="mt-3">UX/UI Designer</div>
                      <div className="d-flex x-gap-5 mt-3">
                        {starts.map((start, index) => (
                          <div key={index}>
                            <div className={start}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="masthead-image__el3">
                  <Image
                    className="js-mouse-move"
                    data-move="40"
                    src={move_img_3}
                    style={{ objectFit: "cover" }}
                    alt="image"
                  />
                  <div
                    data-move="30"
                    className="shadow-4 img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                  >
                    <div className="img-el__side">
                      <div className="size-50 d-flex justify-center items-center bg-purple-1 rounded-full">
                        <Image
                          style={{ objectFit: "cover" }}
                          src={move_icon_3}
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
        </div>

        {/* animated shape start */}
        <ShapeRendering />
        {/* animated shape end */}
      </section>
    </>
  );
};

export default HomeHero;
