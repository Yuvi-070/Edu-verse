"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { coursesData } from "@/data/courses";

export default function CourseCompare() {
  const [selectedIds, setSelectedIds] = useState([2, 8, 10]);
  const selectedCourses = useMemo(
    () => selectedIds.map((id) => coursesData.find((course) => course.id === Number(id))).filter(Boolean),
    [selectedIds],
  );

  const updateSelected = (index, id) => {
    setSelectedIds((prev) => prev.map((value, i) => (i === index ? Number(id) : value)));
  };

  return (
    <section className="page-header -type-2">
      <div className="container">
        <div className="page-header__content">
          <h1 className="page-header__title">Compare Courses</h1>
          <p className="page-header__text">
            Compare duration, level, language, rating, and outcomes before choosing your next course.
          </p>
        </div>

        <div className="layout-pt-md layout-pb-lg">
          <div className="row y-gap-20 mb-30">
            {[0, 1, 2].map((slot) => (
              <div key={slot} className="col-md-4">
                <select
                  className="edu-verse-select"
                  value={selectedIds[slot]}
                  onChange={(event) => updateSelected(slot, event.target.value)}
                >
                  {coursesData.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="edu-verse-compare">
            <div className="edu-verse-compare__row -head">
              <div>Course</div>
              {selectedCourses.map((course) => (
                <div key={course.id}>{course.title}</div>
              ))}
            </div>
            {[
              ["Educator", "authorName"],
              ["Category", "category"],
              ["Level", "level"],
              ["Language", "language"],
              ["Duration", (course) => `${Math.floor(course.duration / 60)}h ${course.duration % 60}m`],
              ["Rating", (course) => `${course.rating} (${course.ratingCount})`],
              ["Weekly plan", "weeklyPlan"],
            ].map(([label, accessor]) => (
              <div key={label} className="edu-verse-compare__row">
                <div>{label}</div>
                {selectedCourses.map((course) => (
                  <div key={course.id}>
                    {typeof accessor === "function" ? accessor(course) : course[accessor]}
                  </div>
                ))}
              </div>
            ))}
            <div className="edu-verse-compare__row">
              <div>Best outcomes</div>
              {selectedCourses.map((course) => (
                <div key={course.id}>
                  {(course.outcomes || []).slice(0, 2).map((outcome) => (
                    <p key={outcome} className="mb-5">{outcome}</p>
                  ))}
                  <Link href={`/courses/${course.id}`} className="text-purple-1 fw-500">
                    Open course
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
