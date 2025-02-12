import React from "react";
import { counters } from "@/data/count";
export default function Statictis() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-7">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">We are Proud</h2>

              <p className="sectionTitle__text ">
                Certificate courses are instructed by highly educated and
                qualified instructors who hold doctoral and master’s level
                degrees.
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-60 lg:pt-40">
          {counters.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div
                className="counter -type-1"
                data-aos="fade-left"
                data-aos-duration={(i + 1) * 350}
              >
                <div className="counter__number text-purple-1">
                  {elm.number}
                </div>
                <div className="counter__title text-light-1">{elm.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
