import React from "react";
import { events } from "@/data/events";
import Image from "next/image";
import Link from "next/link";
export default function EventsSeven() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-6">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Upcoming Events</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div className="col-auto">
            <Link
              href="/event-list-2"
              className="button -icon -purple-3 -rounded text-purple-1"
            >
              Browse Events
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </Link>
          </div>
        </div>

        <div className="row y-gap-30 pt-60">
          {events.slice(2, 6).map((elm, i) => (
            <div
              key={i}
              className="col-lg-3 col-md-6"
              data-aos="fade-left"
              data-aos-duration={(i + 1) * 450}
            >
              <div className="blogCard -type-1 rounded-8 border-light shadow-1 overflow-hidden">
                <div className="blogCard__image ratio ratio-3:2">
                  <Image
                    width={510}
                    height={340}
                    className="img-ratio"
                    src={elm.imgSrc}
                    alt="image"
                  />
                </div>
                <div className="px-30 py-30 bg-white">
                  <div
                    style={{ cursor: "pointer" }}
                    className="d-flex items-center text-14 lh-1 text-light-1 mb-15"
                  >
                    <div className="icon-calendar-2"></div>
                    <div className="ml-8">{elm.date}</div>
                  </div>
                  <h4 className="text-17 lh-15 fw-500">
                    {" "}
                    <Link className="linkCustom" href={`/events/${elm.id}`}>
                      {elm.desc}
                    </Link>
                  </h4>
                  <div
                    style={{ cursor: "pointer" }}
                    className="d-flex items-center text-14 lh-1 text-light-1 mt-15"
                  >
                    <div className="icon-location"></div>
                    <div className="ml-8">{elm.location}</div>
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
