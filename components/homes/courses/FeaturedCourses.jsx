import React from "react";
import { coursesData } from "@/data/courses";
import FeaturedCourseCard from "@/components/homes/courseCards/FeaturedCourseCard";
import Link from "next/link";
export default function FeaturedCourses() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-dark-5">
      <div className="container">
        <div
          className="row y-gap-50 justify-between items-center"
          data-aos="fade-right"
          data-aos-offset="80"
          data-aos-duration={900}
        >
          <div className="col-xl-3 col-lg-4">
            <div className="sectionTitle -light">
              <h2 className="sectionTitle__title ">Featured Courses</h2>

              <p className="sectionTitle__text ">
                Hand-picked Instructor and expertly crafted courses, designed
                for the modern students and entrepreneur.
              </p>
            </div>

            <div className="d-inline-block mt-60 lg:mt-25">
              <Link
                href="/courses-list-2"
                className="button -icon -purple-1 text-white"
              >
                Browse All Courses
                <i className="icon-arrow-top-right text-13 ml-10"></i>
              </Link>
            </div>
          </div>

          {coursesData.slice(0, 2).map((elm, i) => (
            <FeaturedCourseCard key={i} data={elm} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
