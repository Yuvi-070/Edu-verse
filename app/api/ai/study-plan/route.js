import { NextResponse } from "next/server";
import { coursesData } from "@/data/courses";
import { askGroqJson } from "@/lib/groq";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const goal = String(body.goal || "").slice(0, 500);
  const time = String(body.time || "30 minutes daily");
  const courseIds = Array.isArray(body.courseIds) ? body.courseIds.map(Number) : [];
  const selectedCourses = coursesData
    .filter((course) => courseIds.includes(course.id))
    .map((course) => ({
      id: course.id,
      title: course.title,
      duration: course.duration,
      level: course.level,
      weeklyPlan: course.weeklyPlan,
      skills: course.skills,
    }));

  const fallback = {
    title: "7-day study plan",
    schedule: [
      { day: "Day 1", task: "Choose one course and watch the first section.", output: "Write 3 notes." },
      { day: "Day 2", task: "Review the core skills and make flashcards.", output: "Create 5 flashcards." },
      { day: "Day 3", task: "Practice one small example.", output: "Save a screenshot or notes." },
      { day: "Day 4", task: "Continue the next lesson section.", output: "Update progress to 50%." },
      { day: "Day 5", task: "Ask doubts and revise weak topics.", output: "Write a correction list." },
      { day: "Day 6", task: "Build a mini project or checklist.", output: "Finish one deliverable." },
      { day: "Day 7", task: "Review and mark the course complete.", output: "Plan the next course." },
    ],
  };

  const result = await askGroqJson({
    fallback,
    system:
      "You create realistic study schedules for EduVerse learners. Return JSON with title and schedule. schedule must be an array of 5 to 7 objects with day, task, output. Use only supplied courses and respect available time.",
    user: JSON.stringify({ goal, availableTime: time, courses: selectedCourses }),
  });

  return NextResponse.json(result);
}
