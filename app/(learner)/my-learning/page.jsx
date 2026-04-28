import React from "react";
import LearnerPageShell from "@/components/learner/LearnerPageShell";
import LearningDashboard from "@/components/learner/LearningDashboard";

export const metadata = {
  title: "My Learning | EduVerse",
  description: "Resume courses, manage saved courses, and track local learning progress.",
};

export default function Page() {
  return (
    <LearnerPageShell>
      <LearningDashboard />
    </LearnerPageShell>
  );
}
