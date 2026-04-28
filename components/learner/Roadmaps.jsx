"use client";

import React from "react";
import Link from "next/link";
import { coursesData, learningRoadmaps } from "@/data/courses";
import { useContextElement } from "@/context/Context";

export default function Roadmaps() {
  const { getCourseProgress } = useContextElement();

  return (
    <section className="page-header -type-2">
      <div className="container">
        <div className="page-header__content">
          <h1 className="page-header__title">Learning Roadmaps</h1>
          <p className="page-header__text">
            Follow ordered paths for developer, AI, data, design, marketing, and finance goals.
          </p>
        </div>

        <div className="layout-pt-md layout-pb-lg">
          <div className="row y-gap-30">
            {learningRoadmaps.map((roadmap) => {
              const courses = roadmap.courseIds
                .map((id) => coursesData.find((course) => course.id === id))
                .filter(Boolean);
              const average =
                courses.reduce((sum, course) => sum + getCourseProgress(course.id), 0) /
                Math.max(courses.length, 1);

              return (
                <div key={roadmap.id} className="col-lg-6">
                  <div className="edu-verse-roadmap">
                    <div className="d-flex justify-between items-start x-gap-20">
                      <div>
                        <h2 className="text-22 fw-500">{roadmap.title}</h2>
                        <p className="text-15 text-light-1 mt-10">{roadmap.description}</p>
                      </div>
                      <span className="edu-verse-pill">{Math.round(average)}%</span>
                    </div>

                    <div className="edu-verse-progress mt-20">
                      <div style={{ width: `${average}%` }}></div>
                    </div>

                    <div className="mt-25">
                      {courses.map((course, index) => (
                        <Link
                          key={course.id}
                          href={`/courses/${course.id}`}
                          className="edu-verse-roadmap-step linkCustom"
                        >
                          <span>{index + 1}</span>
                          <div>
                            <div className="text-15 fw-500">{course.title}</div>
                            <div className="text-13 text-light-1">
                              {course.level} · {course.weeklyPlan}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
