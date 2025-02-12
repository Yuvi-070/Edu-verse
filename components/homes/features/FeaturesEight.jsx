import Image from "next/image";

import React from "react";
import { featuresEight } from "../../../data/features";
export default function FeaturesEight() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-6 col-lg-7">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">What is Educrat?</h2>

              <p className="sectionTitle__text ">
                Learn the data skills you need online at your own pace—from
                non-coding essentials to data science and machine learning.
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between items-center pt-60 lg:pt-40">
          <div className="col-lg-6" data-aos="fade-up" data-aos-duration={350}>
            <Image
              width={690}
              height={765}
              className="w-1/1"
              src="/assets/img/home-8/what/1.png"
              alt="image"
            />
          </div>

          <div className="col-xl-5 col-lg-6 col-md-9">
            <div className="d-flex flex-column y-gap-30">
              {featuresEight.map((elm, i) => (
                <div
                  key={i}
                  className="d-flex"
                  data-aos="fade-up"
                  data-aos-duration={(i + 1) * 250}
                >
                  <div className="d-flex justify-center items-center size-70 bg-orange-5 rounded-full">
                    <Image width={34} height={34} src={elm.icon} alt="icon" />
                  </div>
                  <div className="ml-20">
                    <h5 className="text-18 lh-11 text-dark-1 fw-500">
                      {elm.title}
                    </h5>
                    <p className="text-dark-1 mt-5">{elm.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="d-inline-block mt-30"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <a href="#" className="button -md -orange-1 text-white">
                Start Learning For Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
