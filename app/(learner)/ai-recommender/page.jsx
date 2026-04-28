import React from "react";
import LearnerPageShell from "@/components/learner/LearnerPageShell";
import AIRecommender from "@/components/learner/AIRecommender";

export const metadata = {
  title: "AI Recommender | EduVerse",
  description: "Use Groq AI to recommend EduVerse courses and build a study plan.",
};

export default function Page() {
  return (
    <LearnerPageShell>
      <AIRecommender />
    </LearnerPageShell>
  );
}
