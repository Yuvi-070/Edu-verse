import React from "react";
import { blogs } from "@/data/blog";
import Image from "next/image";
import { events } from "../../../data/events";
import Link from "next/link";
export default function BlogsFive() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration={800}
          >
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">News & Events</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div
            className="col-auto"
            data-aos="fade-left"
            data-aos-duration={800}
          >
            <Link
              href="/blog-list-3"
              className="button -icon -purple-3 text-purple-1"
            >
              Browse Blog
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </Link>
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          {blogs.slice(0, 2).map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div
                className="blogCard -type-1"
                data-aos="fade-left"
                data-aos-duration={(i + 1) * 600}
              >
                <div className="blogCard__image">
                  <Image
                    width={520}
                    height={420}
                    src={elm.imageSrc}
                    alt="image"
                  />
                </div>
                <div className="blogCard__content">
                  <div className="blogCard__category">{elm.category}</div>
                  <h4 className="blogCard__title">
                    <Link className="linkCustom" href={`/blogs/${elm.id}`}>
                      {elm.title}
                    </Link>
                  </h4>
                  <div className="blogCard__date">{elm.date}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-4">
            <div className="row y-gap-30">
              {events.slice(0, 4).map((elm, i) => (
                <div key={i} className="col-lg-12 col-md-6">
                  <div
                    className="eventCard -type-4"
                    data-aos="fade-left"
                    data-aos-duration={(i + 1) * 400}
                  >
                    <div className="eventCard__date bg-light-7 mr-20">
                      <span className="text-30 lh-1 fw-700">
                        {elm.date.split(" ")[0]}
                      </span>
                      <span className="text-18 lh-1 fw-500 uppercase mt-10">
                        {elm.date.split(" ")[1].split(",")[0]}
                      </span>
                    </div>
                    <div className="eventCard__content">
                      <div className="text-13 lh-1 fw-500 uppercase text-purple-1">
                        {elm.category}
                      </div>
                      <h4 className="text-17 lh-15 fw-500 mt-10">
                        {" "}
                        <Link className="linkCustom" href={`/events/${elm.id}`}>
                          {elm.desc}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
