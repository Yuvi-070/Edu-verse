"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { coursesData } from "@/data/courses";
import { useContextElement } from "@/context/Context";

const byIds = (ids) =>
  ids
    .map((id) => coursesData.find((course) => Number(course.id) === Number(id)))
    .filter(Boolean);

const CourseMiniCard = ({ course, action }) => (
  <Link
    href={`/courses/${course.id}`}
    className="edu-verse-mini-course linkCustom d-flex items-center"
  >
    <div className="edu-verse-mini-course__image">
      <Image width={96} height={72} src={course.imageSrc} alt={course.title} />
    </div>
    <div className="ml-15">
      <div className="text-15 fw-500 text-dark-1 lh-14">{course.title}</div>
      <div className="text-13 text-light-1 mt-5">
        {course.authorName} · {Math.floor(course.duration / 60)}h{" "}
        {course.duration % 60}m
      </div>
      <div className="text-13 text-purple-1 fw-500 mt-5">{action}</div>
    </div>
  </Link>
);

export default function LearnerHub() {
  const { bookmarkIds, recentCourseIds } = useContextElement();

  const savedCourses = useMemo(() => byIds(bookmarkIds).slice(0, 3), [bookmarkIds]);
  const recentCourses = useMemo(
    () => byIds(recentCourseIds).slice(0, 3),
    [recentCourseIds],
  );
  const recommendedCourses = useMemo(
    () =>
      coursesData
        .filter((course) => course.state === "Featured" || course.state === "Trending")
        .slice(0, 3),
    [],
  );

  const hasPersonalCourses = savedCourses.length > 0 || recentCourses.length > 0;

  return (
    <section className="layout-pt-md layout-pb-md edu-verse-hub">
      <div className="container">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-lg-7">
            <div className="sectionTitle">
              <h2 className="sectionTitle__title">Pick up where you left off</h2>
              <p className="sectionTitle__text">
                Saved courses and recently opened lessons stay on this device, so
                learners can resume quickly without an account setup step.
              </p>
            </div>
          </div>
          <div className="col-auto">
            <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
              <Link href="/quiz" className="button -sm -purple-1 text-white">
                Find my path
              </Link>
              <Link href="/ai-recommender" className="button -sm -outline-green-1 text-green-1">
                AI plan
              </Link>
              <Link href="/courses-list-5" className="button -sm -outline-purple-1 text-purple-1">
                Browse catalog
              </Link>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-35">
          <div className="col-lg-4">
            <div className="edu-verse-hub-panel">
              <div className="d-flex justify-between items-center mb-20">
                <h3 className="text-18 fw-500">Saved</h3>
                <span className="text-13 text-light-1">{savedCourses.length}</span>
              </div>
              <div className="y-gap-15 d-flex flex-column">
                {savedCourses.length > 0 ? (
                  savedCourses.map((course) => (
                    <CourseMiniCard key={course.id} course={course} action="Open saved course" />
                  ))
                ) : (
                  <p className="text-14 text-light-1">
                    Save a course from any course page to build your shortlist.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="edu-verse-hub-panel">
              <div className="d-flex justify-between items-center mb-20">
                <h3 className="text-18 fw-500">Recent</h3>
                <span className="text-13 text-light-1">{recentCourses.length}</span>
              </div>
              <div className="y-gap-15 d-flex flex-column">
                {recentCourses.length > 0 ? (
                  recentCourses.map((course) => (
                    <CourseMiniCard key={course.id} course={course} action="Resume lesson" />
                  ))
                ) : (
                  <p className="text-14 text-light-1">
                    Open any course once and it will appear here for quick resume.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="edu-verse-hub-panel edu-verse-hub-panel--accent">
              <h3 className="text-18 fw-500 mb-20">
                {hasPersonalCourses ? "Recommended next" : "Start with these"}
              </h3>
              <div className="y-gap-15 d-flex flex-column">
                {recommendedCourses.map((course) => (
                  <CourseMiniCard key={course.id} course={course} action={course.category} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
