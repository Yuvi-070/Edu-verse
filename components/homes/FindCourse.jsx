import Link from "next/link";
import React from "react";

export default function FindCourse() {
  return (
    <section className="pt-80 pb-80 md:pt-60 md:pb-60 bg-purple-1">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-xl-4 col-lg-5">
            <h2 className="text-30 lh-15 text-white">
              Finding Your Right Courses
            </h2>
            <p className="text-white mt-10">
              Use the list below to bring attention to your product’s key
              differentiator.
            </p>
          </div>

          <div className="col-auto">
            <Link
              href="/courses-list-1"
              className="button -md -white text-dark-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
