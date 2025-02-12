import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function JoinToday() {
  return (
    <section className="layout-pt-lg layout-pb-md bg-light-4">
      <div className="container">
        <div className="row y-gap-50 justify-between items-center">
          <div className="col-lg-7 pr-60">
            <Image
              width={645}
              height={660}
              src="/assets/img/become-ins/1.png"
              alt="image"
            />
          </div>

          <div className="col-lg-5">
            <h2 className="text-45 lh-15">
              Become an Instructor <span className="text-purple-1">Today</span>
            </h2>
            <p className="text-dark-1 mt-25">
              Use the list below to bring attention to your product’s key
              <br /> differentiator.
            </p>
            <div className="d-inline-block mt-30">
              <Link
                href="/instructor-become"
                className="button -md -dark-1 text-white"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
