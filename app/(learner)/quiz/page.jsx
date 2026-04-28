import React from "react";
import LearnerPageShell from "@/components/learner/LearnerPageShell";
import SkillQuiz from "@/components/learner/SkillQuiz";

export const metadata = {
  title: "Skill Quiz | EduVerse",
  description: "Get a lightweight local course recommendation based on your learning goal.",
};

export default function Page() {
  return (
    <LearnerPageShell>
      <SkillQuiz />
    </LearnerPageShell>
  );
}
