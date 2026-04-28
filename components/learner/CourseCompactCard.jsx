"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";

export default function CourseCompactCard({ course, action = "Open course" }) {
  const { getCourseProgress, toggleBookmark, isBookmarked } = useContextElement();
  const progress = getCourseProgress(course.id);
  const saved = isBookmarked(course.id);

  return (
    <div className="edu-verse-course-compact">
      <Link href={`/courses/${course.id}`} className="edu-verse-course-compact__media">
        <Image width={420} height={260} src={course.imageSrc} alt={course.title} />
      </Link>
      <div className="edu-verse-course-compact__body">
        <div className="d-flex justify-between items-start x-gap-10">
          <div>
            <div className="d-flex x-gap-8 y-gap-8 flex-wrap mb-10">
              <span className="edu-verse-pill">{course.category}</span>
              <span className="edu-verse-pill -muted">{course.language}</span>
            </div>
            <h3 className="text-17 fw-500 lh-14">
              <Link href={`/courses/${course.id}`} className="linkCustom">
                {course.title}
              </Link>
            </h3>
          </div>
          <button
            type="button"
            onClick={() => toggleBookmark(course.id)}
            className={`edu-verse-icon-button ${saved ? "is-active" : ""}`}
            aria-label={saved ? "Remove saved course" : "Save course"}
          >
            <i className="icon-bookmark text-14"></i>
          </button>
        </div>

        <p className="text-14 text-light-1 mt-10">{course.shortDesc}</p>

        <div className="edu-verse-progress mt-15">
          <div style={{ width: `${progress}%` }}></div>
        </div>
        <div className="d-flex justify-between items-center mt-10">
          <span className="text-13 text-light-1">{progress}% complete</span>
          <Link href={`/courses/${course.id}`} className="text-13 fw-500 text-purple-1">
            {action}
          </Link>
        </div>
      </div>
    </div>
  );
}
