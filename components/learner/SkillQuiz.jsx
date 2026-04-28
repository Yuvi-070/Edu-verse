"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { coursesData, learningRoadmaps } from "@/data/courses";
import { useContextElement } from "@/context/Context";
import CourseCompactCard from "./CourseCompactCard";

const goals = [
  { label: "Become a developer", category: "Programming", roadmapId: "developer" },
  { label: "Learn AI", category: "Programming", roadmapId: "ai" },
  { label: "Grow a brand", category: "Marketing", roadmapId: "marketer" },
  { label: "Design products", category: "Design", roadmapId: "designer" },
  { label: "Analyze data", category: "Programming", roadmapId: "data" },
  { label: "Manage money", category: "Marketing", roadmapId: "business" },
];

export default function SkillQuiz() {
  const { learningProfile, setLearningProfile } = useContextElement();
  const [selected, setSelected] = useState(learningProfile?.roadmapId || "developer");
  const [pace, setPace] = useState(learningProfile?.pace || "30 minutes daily");

  const currentGoal = goals.find((goal) => goal.roadmapId === selected) || goals[0];
  const roadmap = learningRoadmaps.find((item) => item.id === currentGoal.roadmapId);
  const matches = useMemo(() => {
    const ids = roadmap?.courseIds || [];
    return ids.map((id) => coursesData.find((course) => course.id === id)).filter(Boolean);
  }, [roadmap]);

  const saveProfile = () => {
    setLearningProfile({
      ...currentGoal,
      pace,
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <section className="page-header -type-2">
      <div className="container">
        <div className="page-header__content">
          <h1 className="page-header__title">Skill Quiz</h1>
          <p className="page-header__text">
            Pick a goal and pace. EduVerse will personalize recommendations on this device.
          </p>
        </div>

        <div className="layout-pt-md layout-pb-lg">
          <div className="row y-gap-30">
            <div className="col-lg-4">
              <div className="edu-verse-hub-panel">
                <h2 className="text-20 fw-500 mb-20">1. Choose your goal</h2>
                <div className="d-flex flex-column y-gap-10">
                  {goals.map((goal) => (
                    <button
                      key={goal.roadmapId}
                      type="button"
                      onClick={() => setSelected(goal.roadmapId)}
                      className={`edu-verse-choice ${selected === goal.roadmapId ? "is-active" : ""}`}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>

                <h2 className="text-20 fw-500 mt-30 mb-15">2. Set your pace</h2>
                <select
                  value={pace}
                  onChange={(event) => setPace(event.target.value)}
                  className="edu-verse-select"
                >
                  <option>15 minutes daily</option>
                  <option>30 minutes daily</option>
                  <option>1 hour daily</option>
                  <option>Weekend deep work</option>
                </select>

                <button
                  type="button"
                  onClick={saveProfile}
                  className="button -md -purple-1 text-white w-100 mt-25"
                >
                  Save recommendation
                </button>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="d-flex justify-between items-center mb-20">
                <div>
                  <h2 className="text-24 fw-500">{roadmap?.title}</h2>
                  <p className="text-15 text-light-1 mt-5">{roadmap?.description}</p>
                </div>
                <Link href="/roadmaps" className="text-purple-1 fw-500">
                  View all roadmaps
                </Link>
              </div>
              <div className="row y-gap-25">
                {matches.map((course) => (
                  <div key={course.id} className="col-md-6">
                    <CourseCompactCard course={course} action="Start" />
                  </div>
                ))}
              </div>
              {learningProfile && (
                <div className="edu-verse-empty-state mt-30">
                  Current profile: {learningProfile.label} · {learningProfile.pace}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
