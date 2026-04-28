"use client";

import React from "react";
import { useContextElement } from "@/context/Context";

export default function CourseProgressNotes({ course }) {
  const {
    getCourseProgress,
    setCourseProgressValue,
    markCourseComplete,
    getCourseNote,
    saveCourseNote,
  } = useContextElement();
  const progress = getCourseProgress(course.id);
  const note = getCourseNote(course.id);

  return (
    <div className="edu-verse-detail-panel mt-30">
      <div className="d-flex justify-between items-center mb-15">
        <h3 className="text-20 fw-500">Your progress</h3>
        <span className="edu-verse-pill">{progress}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="5"
        value={progress}
        onChange={(event) => setCourseProgressValue(course.id, event.target.value)}
        className="edu-verse-range"
      />
      <div className="d-flex x-gap-10 y-gap-10 flex-wrap mt-15">
        {[25, 50, 75].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setCourseProgressValue(course.id, value)}
            className="button -sm -outline-light text-dark-1"
          >
            {value}%
          </button>
        ))}
        <button
          type="button"
          onClick={() => markCourseComplete(course.id)}
          className="button -sm -purple-1 text-white"
        >
          Mark complete
        </button>
      </div>

      <h3 className="text-20 fw-500 mt-30 mb-15">Course notes</h3>
      <textarea
        value={note}
        onChange={(event) => saveCourseNote(course.id, event.target.value)}
        className="edu-verse-notes"
        rows={5}
        placeholder="Write reminders, questions, timestamps, or project ideas..."
      />
    </div>
  );
}
