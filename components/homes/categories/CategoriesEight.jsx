import Image from "next/image";

import React from "react";
import { topCatagoriesEight } from "../../../data/topCategories";
import Link from "next/link";
export default function CategoriesEight() {
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Top Categories</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>

        <div className="row x-gap-40 y-gap-40 justify-between lg:justify-center pt-60 lg:pt-40">
          {topCatagoriesEight.map((elm, i) => (
            <Link
              href={`/courses-list-${elm.id > 8 ? 1 : elm.id}`}
              key={i}
              className="col-lg-auto col-sm-4 col-6 linkCustomTwo"
            >
              <div className="text-center">
                <div className="d-flex justify-center items-center rounded-8 size-90 mx-auto bg-orange-2">
                  <Image width={40} height={40} src={elm.icon} alt="icon" />
                </div>
                <h5 className="text-17 lh-15 fw-500 mt-20">
                  {elm.title.split(" ").slice(0, -1)}
                  <br />
                  {elm.title.split(" ").slice(-1)[0]}
                </h5>
                <p className="text-13 lh-1 mt-10">{elm.courses}+ Courses</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
