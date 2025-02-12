import React from "react";
import { features } from "../../../data/learningPaths";
import Image from "next/image";
import Star from "@/components/common/Star";
export default function LearningPathSeven() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-5 col-lg-6 order-2 order-lg-1">
            <h2
              className="text-45 lg:text-40 md:text-30 text-dark-1"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              How it <span className="text-purple-1">Works</span>
            </h2>
            <p
              className="text-dark-1 mt-20"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
              nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.
            </p>

            <div className="row y-gap-30 pt-60 lg:pt-40">
              {features.map((elm, i) => (
                <div key={i} className="col-12">
                  <div
                    className="featureIcon -type-1"
                    data-aos="fade-up"
                    data-aos-duration={(i + 1) * 250}
                  >
                    <div className="featureIcon__icon bg-light-7">
                      <Image
                        width={34}
                        height={34}
                        src={elm.iconSrc}
                        alt="icon"
                      />
                    </div>
                    <div className="featureIcon__content ml-30 md:ml-20">
                      <h4 className="text-17 fw-500">{elm.title}</h4>
                      <p className="mt-5">
                        {elm.description.split(" ").slice(0, 7).join(" ")}
                        <br className="lg:d-none" />
                        {elm.description.split(" ").slice(7, -1).join(" ")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="composition -type-5">
              <div className="-el-1">
                <Image
                  width={550}
                  height={550}
                  src="/assets/img/home-7/about/1.png"
                  alt="image"
                />
              </div>

              <div className="-el-2">
                <Image
                  width={330}
                  height={330}
                  src="/assets/img/home-7/about/2.png"
                  alt="image"
                />
              </div>

              <div className="-el-3">
                <div className="sm:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 shadow-6">
                  <div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
                    <Image
                      width={24}
                      height={24}
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
              </div>

              <div className="-el-4">
                <div className="img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 shadow-6">
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

              <div className="-el-5">
                <div className="sm:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 shadow-6">
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
                      <Star star={5} textSize={"text-11"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
