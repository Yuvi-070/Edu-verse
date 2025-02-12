import Image from "next/image";

import React from "react";
import { events } from "@/data/events";
import Link from "next/link";
export default function EventsEight() {
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Upcoming Events</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-60 lg:pt-40">
          {events.slice(0, 6).map((elm, i) => (
            <div key={i} className="col-lg-6">
              <div
                className="py-10 pl-10 pr-20 border-light bg-white rounded-8 shadow-1 -button-hover-1"
                data-aos="fade-up"
                data-aos-duration={(i + 1) * 350}
              >
                <div className="row y-gap-20 items-center">
                  <div className="col-auto">
                    <div className="size-120">
                      <Image
                        width={120}
                        height={120}
                        className="img-full rounded-8"
                        src={elm.imgSrc}
                        alt="icon"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="row y-gap-20 items-center">
                      <div className="col">
                        <h4 className="text-17 lh-15 fw-500">
                          {" "}
                          <Link
                            className="linkCustom"
                            href={`/events/${elm.id}`}
                          >
                            {elm.desc}
                          </Link>
                        </h4>
                        <div className="d-flex x-gap-15 items-center pt-10">
                          <div className="d-flex items-center text-light-1">
                            <div className="icon-calendar-2 text-16"></div>
                            <div className="text-14 lh-1 ml-8">{elm.date}</div>
                          </div>
                          <div className="d-flex items-center text-light-1">
                            <div className="icon-location text-16"></div>
                            <div className="text-14 lh-1 ml-8">
                              {elm.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="-button-hover-1__button">
                          <Link
                            href={`/events/${elm.id}`}
                            className="button -icon -orange-1 text-white"
                          >
                            Buy
                            <i className="icon-arrow-top-right text-13 ml-10"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
