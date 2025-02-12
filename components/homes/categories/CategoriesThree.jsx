import React from "react";
import { topCategoriesTwo } from "../../../data/topCategories";
import Image from "next/image";
import Link from "next/link";
export default function CategoriesTwo() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Top Categories</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div className="col-auto">
            <a href="#" className="button -icon -purple-3 text-purple-1">
              All Categories
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>

        <div className="row y-gap-50 pt-60 lg:pt-50">
          {topCategoriesTwo.map((elm, i) => (
            <Link
              href={`/courses-list-${elm.id > 8 ? 1 : elm.id}`}
              key={i}
              className="col-xl-3 col-lg-4 col-sm-6 linkCustomTwo"
            >
              <div className="categoryCard -type-2">
                <div className="categoryCard__image mr-20">
                  <Image
                    width={80}
                    height={80}
                    src={elm.imageSrc}
                    alt="image"
                  />
                </div>

                <div className="categoryCard__content">
                  <h4 className="categoryCard__title text-17 fw-500">
                    {elm.title}
                  </h4>
                  <div className="categoryCard__text text-13 lh-1 mt-5">
                    {elm.text}
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
