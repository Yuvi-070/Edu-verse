import React from "react";
import { learningPathTwo } from "../../../data/learningPaths";
import Image from "next/image";
export default function LearningPath() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">
                Start your Learning Journey Today!
              </h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between pt-60 lg:pt-50">
          {learningPathTwo.map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="coursesCard -type-3 text-center">
                <div
                  className={`coursesCard__icon ${
                    elm.bgColor ? elm.bgColor : " bg-green-3"
                  }`}
                >
                  <Image width={50} height={50} src={elm.icon} alt="icon" />
                </div>

                <div className="coursesCard__content mt-30">
                  <h5 className="coursesCard__title text-18 lh-1 fw-500">
                    {elm.title}
                  </h5>
                  <p className="coursesCard__text text-14 mt-10">{elm.text} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
