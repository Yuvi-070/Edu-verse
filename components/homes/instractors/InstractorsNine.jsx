import Image from "next/image";
import React from "react";
import { instractorsNine } from "../../../data/instractors";
import Link from "next/link";
export default function InstractorsNine() {
  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Live Streams</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div
            className="col-auto "
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <a href="#" className="button -icon -purple-3 text-purple-1">
              See All
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>

        <div className="row y-gap-30 pt-60 lg:pt-40">
          {instractorsNine.map((elm, i) => (
            <div key={i} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <Link
                href={`/instructors/${elm.id}`}
                className="d-flex flex-column items-center linkCustom"
              >
                <div>
                  <Image width={180} height={180} src={elm.image} alt="image" />
                </div>
                <h5 className="text-17 fw-500 mt-20">{elm.role}</h5>
                <a href="#" className="text-light-1 mt-5">
                  {elm.email}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
