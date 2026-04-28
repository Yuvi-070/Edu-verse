import { NextResponse } from "next/server";
import { askGroqJson } from "@/lib/groq";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const question = String(body.question || "").slice(0, 800);
  const notes = String(body.notes || "").slice(0, 1200);
  const course = body.course || {};

  const fallback = {
    answer:
      "I could not reach the AI service right now. Re-read the course outcome, watch the relevant section again, and write a small example in your own words.",
    steps: ["Identify the exact concept", "Review one lesson section", "Try one small practice example"],
    practice: "Write a 3-line explanation of the concept and compare it with the course notes.",
  };

  const result = await askGroqJson({
    fallback,
    temperature: 0.2,
    system:
      "You are a helpful course doubt solver for EduVerse. Answer from the provided course context and learner notes. If the question requires outside details, say so briefly and give general learning guidance. Return JSON with keys: answer, steps, practice. steps must be an array of 3 short strings.",
    user: JSON.stringify({
      question,
      course: {
        title: course.title,
        category: course.category,
        level: course.level,
        tags: course.tags,
        skills: course.skills,
        outcomes: course.outcomes,
        description: course.shortDesc || course.desc,
      },
      learnerNotes: notes,
    }),
  });

  return NextResponse.json(result);
}
