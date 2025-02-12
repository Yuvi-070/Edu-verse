import Image from "next/image";

import React from "react";
import { tags, blogs } from "@/data/blog";
import Link from "next/link";
export default function BlogsTwo() {
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Latest News</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    We’re on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row y-gap-30">
                {blogs.map((elm, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <div className="blogCard -type-1">
                      <div className="blogCard__image">
                        <Image
                          width={510}
                          height={435}
                          className="w-1/1 rounded-8"
                          src={elm.imageSrc}
                          alt="image"
                        />
                      </div>
                      <div className="blogCard__content mt-20">
                        <div className="blogCard__category">
                          {elm.category.toUpperCase()}
                        </div>
                        <h4 className="blogCard__title text-18 lh-15 fw-500 mt-5">
                          <Link
                            className="linkCustom"
                            href={`/blogs/${elm.id}`}
                          >
                            {elm.title}
                          </Link>
                        </h4>
                        <div className="blogCard__date mt-5">{elm.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row justify-center pt-60 lg:pt-40">
                <div className="col-auto">
                  <div className="pagination -buttons">
                    <button className="pagination__button -prev">
                      <i className="icon icon-chevron-left"></i>
                    </button>

                    <div className="pagination__count">
                      <a href="#">1</a>
                      <a className="-count-is-active" href="#">
                        2
                      </a>
                      <a href="#">3</a>
                      <span>...</span>
                      <a href="#">67</a>
                    </div>

                    <button className="pagination__button -next">
                      <i className="icon icon-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="sidebar -blog">
                <div className="sidebar__item">
                  <h5 className="sidebar__title">Categories</h5>

                  <div className="sidebar-content -list">
                    <a className="text-dark-1" href="#">
                      College
                    </a>

                    <a className="text-dark-1" href="#">
                      Gym
                    </a>

                    <a className="text-dark-1" href="#">
                      High School
                    </a>

                    <a className="text-dark-1" href="#">
                      Primary
                    </a>

                    <a className="text-dark-1" href="#">
                      School
                    </a>

                    <a className="text-dark-1" href="#">
                      University
                    </a>
                  </div>
                </div>

                <div className="sidebar__item">
                  <h5 className="sidebar__title">Recent Posts</h5>

                  <div className="sidebar-content -recent y-gap-20">
                    {blogs.slice(0, 3).map((elm, i) => (
                      <div
                        key={i}
                        className="sidebar-recent d-flex items-center"
                      >
                        <div className="sidebar-recent__image mr-15">
                          <Image
                            width={65}
                            height={65}
                            src={elm.imageSrc}
                            alt="image"
                          />
                        </div>

                        <div className="sidebar-recent__content">
                          <h5 className="text-15 lh-15 fw-500">
                            <Link
                              className="linkCustom"
                              href={`/blogs/${elm.id}`}
                            >
                              {elm.title}
                            </Link>
                          </h5>
                          <div className="text-13 lh-1 mt-5">{elm.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar__item">
                  <h5 className="sidebar__title">Tags</h5>

                  <div className="sidebar-content -tags">
                    {tags.map((elm, i) => (
                      <div key={i} className="sidebar-tag">
                        <a
                          className="text-11 fw-500 text-dark-1"
                          href={elm.href}
                        >
                          {elm.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
