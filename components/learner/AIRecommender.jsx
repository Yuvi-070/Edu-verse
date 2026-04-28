"use client";

import React, { useState } from "react";
import Link from "next/link";
import { coursesData } from "@/data/courses";

const getCourse = (id) => coursesData.find((course) => course.id === Number(id));

export default function AIRecommender() {
  const [form, setForm] = useState({
    goal: "I want to become job-ready in programming",
    level: "Beginner",
    time: "30 minutes daily",
    language: "Any",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [plan, setPlan] = useState(null);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const generate = async () => {
    setLoading(true);
    setResult(null);
    setPlan(null);
    try {
      const recResponse = await fetch("/api/ai/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const recPayload = await recResponse.json();
      setResult(recPayload);

      const courseIds = recPayload?.data?.recommendations?.map((item) => item.courseId) || [];
      const planResponse = await fetch("/api/ai/study-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal: form.goal, time: form.time, courseIds }),
      });
      const planPayload = await planResponse.json();
      setPlan(planPayload);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-header -type-2">
      <div className="container">
        <div className="page-header__content">
          <h1 className="page-header__title">AI Course Recommender</h1>
          <p className="page-header__text">
            Tell Groq your goal and EduVerse will recommend local courses plus a practical study plan.
          </p>
        </div>

        <div className="layout-pt-md layout-pb-lg">
          <div className="row y-gap-30">
            <div className="col-lg-4">
              <div className="edu-verse-hub-panel">
                <label className="text-15 fw-500 mb-10 d-block">Learning goal</label>
                <textarea
                  className="edu-verse-notes"
                  rows={5}
                  value={form.goal}
                  onChange={(event) => update("goal", event.target.value)}
                />

                <label className="text-15 fw-500 mt-20 mb-10 d-block">Current level</label>
                <select
                  className="edu-verse-select"
                  value={form.level}
                  onChange={(event) => update("level", event.target.value)}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>

                <label className="text-15 fw-500 mt-20 mb-10 d-block">Available time</label>
                <select
                  className="edu-verse-select"
                  value={form.time}
                  onChange={(event) => update("time", event.target.value)}
                >
                  <option>15 minutes daily</option>
                  <option>30 minutes daily</option>
                  <option>1 hour daily</option>
                  <option>Weekend deep work</option>
                </select>

                <label className="text-15 fw-500 mt-20 mb-10 d-block">Language preference</label>
                <select
                  className="edu-verse-select"
                  value={form.language}
                  onChange={(event) => update("language", event.target.value)}
                >
                  <option>Any</option>
                  <option>Hindi</option>
                  <option>English</option>
                </select>

                <button
                  type="button"
                  onClick={generate}
                  disabled={loading}
                  className="button -md -purple-1 text-white w-100 mt-25"
                >
                  {loading ? "Generating..." : "Generate recommendations"}
                </button>
              </div>
            </div>

            <div className="col-lg-8">
              {result?.warning && <div className="edu-verse-ai-warning mb-20">{result.warning}</div>}

              {result?.data ? (
                <div className="edu-verse-hub-panel">
                  <h2 className="text-24 fw-500">Recommended courses</h2>
                  <p className="text-15 text-light-1 mt-10">{result.data.summary}</p>
                  <div className="row y-gap-20 mt-20">
                    {(result.data.recommendations || []).map((item) => {
                      const course = getCourse(item.courseId);
                      if (!course) return null;
                      return (
                        <div key={item.courseId} className="col-md-4">
                          <div className="edu-verse-ai-card">
                            <span className="edu-verse-pill">{course.category}</span>
                            <h3 className="text-17 fw-500 mt-15">{course.title}</h3>
                            <p className="text-14 text-light-1 mt-10">{item.reason}</p>
                            <p className="text-13 mt-10">{item.firstStep}</p>
                            <Link href={`/courses/${course.id}`} className="text-purple-1 fw-500 mt-10 d-inline-block">
                              Open course
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="edu-verse-empty-state">
                  Fill the form and generate a recommendation.
                </div>
              )}

              {plan?.data && (
                <div className="edu-verse-hub-panel mt-30">
                  <h2 className="text-24 fw-500">{plan.data.title || "Study plan"}</h2>
                  {plan.warning && <div className="edu-verse-ai-warning mt-15">{plan.warning}</div>}
                  <div className="mt-20">
                    {(plan.data.schedule || []).map((item) => (
                      <div key={item.day} className="edu-verse-roadmap-step">
                        <span>{String(item.day).replace("Day ", "")}</span>
                        <div>
                          <div className="text-15 fw-500">{item.day}: {item.task}</div>
                          <div className="text-13 text-light-1">{item.output}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
