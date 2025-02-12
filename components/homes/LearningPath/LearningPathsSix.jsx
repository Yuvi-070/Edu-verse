import React from "react";
import { learningfeatures } from "../../../data/learningPaths";
import Image from "next/image";
export default function LearningPathsSix() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-5 col-lg-6 col-md-9 lg:order-2">
            <h3 className="text-45 md:text-30 lh-12">
              <span className="text-purple-1">Learn</span> new skills when
              <br className="lg:d-none" /> and where you like.
            </h3>
            <p className="mt-20">
              Use the list below to bring attention to your product’s key
              <br className="lg:d-none" /> differentiator.
            </p>
            <div className="d-inline-block mt-30">
              <a href="#" className="button -md -dark-1 text-white">
                Join Free
              </a>
            </div>
          </div>

          <div className="col-lg-6 lg:order-1">
            <div className="composition -type-3">
              <div className="-el-1">
                <div className="bg-dark-1 py-50 px-30 rounded-8">
                  <div className="y-gap-20 pt-25">
                    {learningfeatures.map((elm, i) => (
                      <div key={i} className="d-flex items-center">
                        <div className="d-flex items-center justify-center size-25 rounded-full bg-purple-1 mr-15">
                          <i className="fa fa-check text-white"></i>
                        </div>
                        <div className="fw-500 text-white">{elm.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-el-2">
                <Image
                  width={580}
                  height={670}
                  style={{ width: "100%", height: "100%" }}
                  className="w-1/1"
                  src="/assets/img/home-6/learn/1.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
