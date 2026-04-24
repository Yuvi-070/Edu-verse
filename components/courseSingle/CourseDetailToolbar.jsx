"use client";

import React, { useState } from "react";
import { useContextElement } from "@/context/Context";

export default function CourseDetailToolbar({ courseId, meta }) {
  const { isBookmarked, toggleBookmark } = useContextElement();
  const [copied, setCopied] = useState(false);
  const id = Number(courseId);
  const bookmarked = isBookmarked(id);

  const copyLink = async () => {
    const url =
      typeof window !== "undefined"
        ? `${window.location.origin}/courses/${courseId}`
        : "";
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="d-flex flex-wrap y-gap-10 x-gap-10 pt-20">
      <button
        type="button"
        onClick={() => toggleBookmark(id)}
        className={`button -sm rounded-200 ${
          bookmarked ? "-purple-1 text-white" : "-outline-light text-dark-1"
        }`}
        aria-pressed={bookmarked}
      >
        {bookmarked ? "Saved" : "Save course"}
      </button>
      <button
        type="button"
        onClick={copyLink}
        className="button -sm -outline-light text-dark-1 rounded-200"
      >
        {copied ? "Link copied" : "Copy link"}
      </button>
      {meta ? (
        <span className="text-13 text-light-1 d-flex items-center">{meta}</span>
      ) : null}
    </div>
  );
}
