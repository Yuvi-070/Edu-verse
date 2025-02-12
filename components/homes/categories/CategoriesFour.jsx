import React from "react";
import { topCatagoriesFour } from "../../../data/topCategories";
import Link from "next/link";
export default function CategoriesFour() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Top Categories</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-60 lg:pt-50">
          {topCatagoriesFour.map((elm, i) => (
            <Link
              href={`/courses-list-${elm.id > 8 ? 1 : elm.id}`}
              key={i}
              className="col-xl-3 col-lg-4 col-md-6 linkCustomTwo"
            >
              <div className="categoryCard -type-3">
                <div className="categoryCard__icon bg-light-3 mr-20">
                  <i className={elm.iconClass}></i>
                </div>
                <div className="categoryCard__content">
                  <h4 className="categoryCard__title text-17 fw-500">
                    {elm.title}
                  </h4>
                  <div className="categoryCard__text text-13 lh-1 mt-5">
                    {elm.courses}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
