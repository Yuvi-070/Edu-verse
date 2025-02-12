import Image from "next/image";

import React from "react";
import { featureSix } from "../../../data/features";
import Link from "next/link";
export default function HeroEight() {
  return (
    <section className="masthead -type-5">
      <div className="masthead__bg" style={{ pointerEvents: "none" }}></div>

      <div className="masthead__container">
        <div className="row y-gap-50 items-center">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div className="masthead__content">
              <div className="text-17 lh-15 text-orange-1 fw-500 mb-10">
                Start learning for free
              </div>
              <h1 className="masthead__title">
                Studies can now be done online much easily
              </h1>
              <p className="mt-5">
                You can access 7900+ different courses from 600
                <br className="lg:d-none" />
                professional trainers for free
              </p>
              <div className="row items-center x-gap-20 y-gap-20 pt-20">
                <div className="col-auto">
                  <Link
                    href="/signup"
                    className="button -md -orange-1 text-white"
                  >
                    Join For Free
                  </Link>
                </div>
                <div className="col-auto">
                  <Link
                    href="/courses-list-6"
                    className="button -md -outline-light-5 text-dark-1"
                  >
                    Find Courses
                  </Link>
                </div>
              </div>

              <div className="row x-gap-20 y-gap-20 items-center pt-60 lg:pt-30">
                {featureSix.map((elm, i) => (
                  <div key={i} className="col-xl-4 col-auto">
                    <div className="text-dark-1">
                      <div className="mr-10">
                        <Image
                          width={30}
                          height={30}
                          src={elm.imageSrc}
                          alt="icon"
                        />
                      </div>
                      <div className="fw-500 lh-11 mt-10">
                        {elm.text.split(" ").slice(0, -1).join()}
                        <br /> {elm.text.split(" ").slice(-1)[0]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 " data-aos="fade-up" data-aos-delay="750">
            <div className="masthead__image">
              <Image
                width={855}
                height={655}
                src="/assets/img/home-8/hero/image.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
