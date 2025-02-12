import React from "react";
import Image from "next/image";
export default function LandJob() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-5 col-lg-6 col-md-9 lg:order-2">
            <h3 className="text-40 lh-1">
              Land your dream job in data science
            </h3>
            <p className="mt-25">
              From a certification in data science to personalized resume
              reviews and interview prep—we've got you covered.
            </p>
            <div className="d-inline-block mt-30">
              <a
                href="#"
                className="button -md -outline-purple-1 text-purple-1"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="col-lg-6 lg:order-1">
            <Image
              width={690}
              height={720}
              className="w-1/1"
              src="/assets/img/home-4/dreamJob/1.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
