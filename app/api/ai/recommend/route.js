import { NextResponse } from "next/server";
import { coursesData } from "@/data/courses";
import { askGroqJson } from "@/lib/groq";

const catalog = coursesData.map((course) => ({
  id: course.id,
  title: course.title,
  category: course.category,
  level: course.level,
  language: course.language,
  duration: course.duration,
  tags: course.tags,
  outcomes: course.outcomes,
  weeklyPlan: course.weeklyPlan,
}));

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const goal = String(body.goal || "").slice(0, 500);
  const level = String(body.level || "Beginner");
  const time = String(body.time || "30 minutes daily");
  const language = String(body.language || "Any");

  const fallback = {
    summary: "Start with the closest matching courses from EduVerse, then use progress tracking to stay consistent.",
    recommendations: coursesData.slice(0, 3).map((course) => ({
      courseId: course.id,
      reason: `${course.title} matches your stated learning direction.`,
      firstStep: `Open the course and complete the first ${Math.min(course.duration, 45)} minutes.`,
    })),
    weeklyPlan: ["Pick one course", "Study consistently", "Build one small project"],
  };

  const result = await askGroqJson({
    fallback,
    system:
      "You are EduVerse's course recommender. Use only the supplied catalog. Return compact JSON with keys: summary, recommendations, weeklyPlan. recommendations must be an array of objects with courseId, reason, firstStep. Recommend 3 courses max.",
    user: JSON.stringify({ learner: { goal, level, time, language }, catalog }),
  });

  const validIds = new Set(coursesData.map((course) => course.id));
  const normalized = {
    ...result.data,
    recommendations: (result.data.recommendations || fallback.recommendations)
      .filter((item) => validIds.has(Number(item.courseId)))
      .slice(0, 3),
  };

  return NextResponse.json({ ...result, data: normalized });
}
