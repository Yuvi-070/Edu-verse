"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { events, categories } from "@/data/events";
import Pagination from "../common/Pagination";
import Link from "next/link";
export default function EventsOne() {
  const [pageItems, setPageItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  useEffect(() => {
    if (currentCategory == "All Categories") {
      setPageItems(events);
    } else {
      let filtered = events.filter((elm) => elm.category == currentCategory);
      setPageItems(filtered);
    }
  }, [currentCategory]);

  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Event</h1>
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
          <div className="tabs -pills js-tabs">
            <div className="tabs__controls d-flex flex-wrap y-gap-20 justify-center x-gap-10 js-tabs-controls">
              {categories.map((elm, i) => (
                <div key={i} onClick={() => setCurrentCategory(elm)}>
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button ${
                      currentCategory == elm ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    {elm}
                  </button>
                </div>
              ))}
            </div>

            <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30 pt-30">
                  {pageItems.map((elm, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                      <div className="eventCard -type-1">
                        <div className="eventCard__img">
                          <Image
                            width={510}
                            height={360}
                            src={elm.imgSrc}
                            alt="image"
                          />
                        </div>

                        <div className="eventCard__bg bg-white">
                          <div className="eventCard__content y-gap-10">
                            <div className="eventCard__inner">
                              <h4 className="eventCard__title text-17 fw-500">
                                <Link
                                  className="linkCustom"
                                  href={`/events/${elm.id}`}
                                >
                                  {elm.desc}
                                </Link>
                              </h4>
                              <div className="d-flex x-gap-15 pt-10">
                                <div className="d-flex items-center">
                                  <div className="icon-calendar-2 text-16 mr-8"></div>
                                  <div className="text-14">{elm.date}</div>
                                </div>
                                <div className="d-flex items-center">
                                  <div className="icon-location text-16 mr-8"></div>
                                  <div className="text-14">{elm.location}</div>
                                </div>
                              </div>
                            </div>

                            <div className="eventCard__button">
                              <Link
                                href={`/events/${elm.id}`}
                                className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                              >
                                Buy
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row justify-center pt-60 lg:pt-40">
                  <div className="col-auto">
                    <Pagination />
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
