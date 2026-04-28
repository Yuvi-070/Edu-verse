import React from "react";
import LearnerPageShell from "@/components/learner/LearnerPageShell";
import CourseCompare from "@/components/learner/CourseCompare";

export const metadata = {
  title: "Compare Courses | EduVerse",
  description: "Compare EduVerse courses by duration, level, language, rating, and outcomes.",
};

export default function Page() {
  return (
    <LearnerPageShell>
      <CourseCompare />
    </LearnerPageShell>
  );
}
