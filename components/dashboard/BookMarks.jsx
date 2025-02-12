import { coursesData } from "@/data/dashboard";
import React from "react";
import CourseCardTwoDash from "./DashBoardCards/CourseCardTwoDash";
import FooterNine from "../layout/footers/FooterNine";
import Pagination from "../common/Pagination";

export default function BookMarks() {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Bookmarks</h1>
            <div className="mt-10">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Bookmarked</h2>
              </div>

              <div className="py-30 px-30">
                <div className="row y-gap-30">
                  {coursesData.slice(0, 6).map((elm, i) => (
                    <CourseCardTwoDash data={elm} key={i} />
                  ))}
                </div>

                <div className="row justify-center pt-30">
                  <div className="col-auto">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterNine />
    </div>
  );
}
