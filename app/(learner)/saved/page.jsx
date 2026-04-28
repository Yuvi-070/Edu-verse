import React from "react";
import LearnerPageShell from "@/components/learner/LearnerPageShell";
import LearningDashboard from "@/components/learner/LearningDashboard";

export const metadata = {
  title: "Saved Courses | EduVerse",
  description: "Your saved EduVerse courses.",
};

export default function Page() {
  return (
    <LearnerPageShell>
      <LearningDashboard mode="saved" />
    </LearnerPageShell>
  );
}
