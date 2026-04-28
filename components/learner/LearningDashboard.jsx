"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { coursesData } from "@/data/courses";
import { useContextElement } from "@/context/Context";
import CourseCompactCard from "./CourseCompactCard";

const coursesByIds = (ids) =>
  ids
    .map((id) => coursesData.find((course) => Number(course.id) === Number(id)))
    .filter(Boolean);

export default function LearningDashboard({ mode = "all" }) {
  const { bookmarkIds, recentCourseIds, courseProgress, learningProfile } =
    useContextElement();

  const savedCourses = useMemo(() => coursesByIds(bookmarkIds), [bookmarkIds]);
  const recentCourses = useMemo(() => coursesByIds(recentCourseIds), [recentCourseIds]);
  const activeCourses = useMemo(
    () =>
      coursesData.filter((course) => {
        const progress = Number(courseProgress[course.id] || 0);
        return progress > 0 && progress < 100;
      }),
    [courseProgress],
  );
  const completedCourses = useMemo(
    () => coursesData.filter((course) => Number(courseProgress[course.id] || 0) >= 100),
    [courseProgress],
  );
  const recommendedCourses = useMemo(() => {
    if (!learningProfile?.category) {
      return coursesData.filter((course) => course.state === "Featured").slice(0, 4);
    }
    return coursesData
      .filter(
        (course) =>
          course.category === learningProfile.category ||
          course.roadmapId === learningProfile.roadmapId,
      )
      .slice(0, 4);
  }, [learningProfile]);

  const sections =
    mode === "saved"
      ? [{ title: "Saved Courses", courses: savedCourses, empty: "No saved courses yet." }]
      : [
          {
            title: "Continue Learning",
            courses: activeCourses.length ? activeCourses : recentCourses,
            empty: "Open a course or move its progress slider to start your learning history.",
          },
          { title: "Saved Courses", courses: savedCourses, empty: "Save courses to build your shortlist." },
          { title: "Completed", courses: completedCourses, empty: "Completed courses will appear here." },
          {
            title: learningProfile ? "Recommended From Your Quiz" : "Recommended Next",
            courses: recommendedCourses,
            empty: "Take the quiz to unlock better recommendations.",
          },
        ];

  return (
    <section className="page-header -type-2">
      <div className="container">
        <div className="page-header__content">
          <div className="row y-gap-30 justify-between items-end">
            <div className="col-lg-8">
              <h1 className="page-header__title">
                {mode === "saved" ? "Saved Courses" : "My Learning"}
              </h1>
              <p className="page-header__text">
                Resume courses, track progress, and keep your learning plan in one place.
              </p>
            </div>
            <div className="col-auto">
              <Link href="/quiz" className="button -md -purple-1 text-white">
                Find my path
              </Link>
            </div>
          </div>
        </div>

        <div className="layout-pt-md layout-pb-lg">
          <div className="row y-gap-30">
            {sections.map((section) => (
              <div key={section.title} className="col-12">
                <div className="d-flex justify-between items-center mb-20">
                  <h2 className="text-22 fw-500">{section.title}</h2>
                  <span className="text-14 text-light-1">{section.courses.length} courses</span>
                </div>
                {section.courses.length ? (
                  <div className="row y-gap-25">
                    {section.courses.map((course) => (
                      <div key={course.id} className="col-lg-6">
                        <CourseCompactCard course={course} action="Resume" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="edu-verse-empty-state">
                    <p>{section.empty}</p>
                    <Link href="/courses-list-5" className="text-purple-1 fw-500">
                      Browse courses
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
