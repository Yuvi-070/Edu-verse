import { NextResponse } from "next/server";
import { askGroqJson } from "@/lib/groq";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const course = body.course || {};
  const notes = String(body.notes || "").slice(0, 1200);

  const fallback = {
    cards: (course.skills || course.tags || ["Core idea"]).slice(0, 6).map((item) => ({
      front: `What should I remember about ${item}?`,
      back: `${item} is an important part of ${course.title || "this course"}. Review the lesson and write one example in your notes.`,
    })),
  };

  const result = await askGroqJson({
    fallback,
    system:
      "You generate concise revision flashcards for learners. Return JSON with key cards, an array of 6 objects. Each object must have front and back. Keep answers short, practical, and based on supplied course context and notes only.",
    user: JSON.stringify({
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
