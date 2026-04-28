import React from "react";
import LearnerPageShell from "@/components/learner/LearnerPageShell";
import Roadmaps from "@/components/learner/Roadmaps";

export const metadata = {
  title: "Learning Roadmaps | EduVerse",
  description: "Curated learning paths for developer, AI, design, data, marketing, and finance goals.",
};

export default function Page() {
  return (
    <LearnerPageShell>
      <Roadmaps />
    </LearnerPageShell>
  );
}
