import React from "react";
import { schoolAchievement } from "../../../data/achievements";
export default function AchievementsTwo() {
  return (
    <section className="layout-pt-md layout-pb-md bg-beige-1">
      <div className="container">
        <div className="row y-gap-30">
          {schoolAchievement.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div
                className="counter -type-1"
                data-aos="fade-left"
                data-aos-duration={(i + 1) * 400}
              >
                <div className="counter__number text-dark-1">{elm.title}</div>
                <div className="counter__title text-light-1">{elm.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
