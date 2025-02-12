import React from "react";
import Image from "next/image";
import { blogs } from "../../../data/blog";
import { events } from "@/data/events";
import Link from "next/link";
export default function News() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-lg-6">
            <div
              className="sectionTitle "
              data-aos="fade-left"
              data-aos-duration={600}
            >
              <h2 className="sectionTitle__title ">Resources & News</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div
            className="col-auto"
            data-aos="fade-left"
            data-aos-duration={700}
          >
            <Link
              href="/blog-list-1"
              className="button -icon -purple-3 text-purple-1"
            >
              Browse Blog
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </Link>
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          {blogs.slice(0, 2).map((elm, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6"
              data-aos="fade-left"
              data-aos-duration={(i + 1) * 400}
            >
              <div className="blogCard -type-1">
                <div className="blogCard__image">
                  <Image
                    width={550}
                    height={450}
                    style={{ width: "100%" }}
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
            <div
              className="row y-gap-30"
              data-aos="fade-left"
              data-aos-duration={700}
            >
              {events.slice(0, 3).map((elm, i) => (
                <div key={i} className="col-lg-12 col-md-6">
                  <div className="blogCard -type-2">
                    <div className="blogCard__image">
                      <Image
                        width={160}
                        height={130}
                        style={{ height: "120px", width: "140px" }}
                        src={elm.imgSrc}
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content">
                      <div className="blogCard__category">{elm.category}</div>
                      <h4 className="blogCard__title">
                        {" "}
                        <Link className="linkCustom" href={`/events/${elm.id}`}>
                          {elm.title}
                        </Link>
                      </h4>
                      <div className="blogCard__date">{elm.date}</div>
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
