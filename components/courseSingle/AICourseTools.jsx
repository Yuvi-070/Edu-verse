"use client";

import React, { useState } from "react";
import { useContextElement } from "@/context/Context";

export default function AICourseTools({ course }) {
  const { getCourseNote } = useContextElement();
  const [activeTab, setActiveTab] = useState("doubt");
  const [question, setQuestion] = useState("");
  const [doubt, setDoubt] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [flipped, setFlipped] = useState({});

  const notes = getCourseNote(course.id);

  const askDoubt = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("/api/ai/doubt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course, notes, question }),
      });
      setDoubt(await response.json());
    } finally {
      setLoading(false);
    }
  };

  const generateFlashcards = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/ai/flashcards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course, notes }),
      });
      const payload = await response.json();
      setCards(payload?.data?.cards || []);
      setDoubt(payload?.warning ? { warning: payload.warning } : null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edu-verse-detail-panel mt-30">
      <div className="d-flex justify-between items-center y-gap-10 flex-wrap">
        <div>
          <h3 className="text-22 fw-500">AI learning tools</h3>
          <p className="text-14 text-light-1 mt-5">
            Ask course doubts or generate revision flashcards from this course and your notes.
          </p>
        </div>
        <div className="edu-verse-segmented">
          <button
            type="button"
            onClick={() => setActiveTab("doubt")}
            className={activeTab === "doubt" ? "is-active" : ""}
          >
            Doubt solver
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("flashcards")}
            className={activeTab === "flashcards" ? "is-active" : ""}
          >
            Flashcards
          </button>
        </div>
      </div>

      {activeTab === "doubt" && (
        <div className="mt-25">
          <textarea
            className="edu-verse-notes"
            rows={4}
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Ask a doubt about this course..."
          />
          <button
            type="button"
            onClick={askDoubt}
            disabled={loading || !question.trim()}
            className="button -md -purple-1 text-white mt-15"
          >
            {loading ? "Thinking..." : "Ask doubt"}
          </button>

          {doubt?.warning && <div className="edu-verse-ai-warning mt-20">{doubt.warning}</div>}
          {doubt?.data && (
            <div className="edu-verse-ai-answer mt-20">
              <p>{doubt.data.answer}</p>
              <div className="mt-15">
                {(doubt.data.steps || []).map((step) => (
                  <div key={step} className="d-flex items-start mb-10">
                    <i className="icon-check text-green-1 mr-10 mt-5"></i>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              {doubt.data.practice && (
                <div className="edu-verse-empty-state mt-15">{doubt.data.practice}</div>
              )}
            </div>
          )}
        </div>
      )}

      {activeTab === "flashcards" && (
        <div className="mt-25">
          <button
            type="button"
            onClick={generateFlashcards}
            disabled={loading}
            className="button -md -purple-1 text-white"
          >
            {loading ? "Generating..." : "Generate flashcards"}
          </button>
          {doubt?.warning && <div className="edu-verse-ai-warning mt-20">{doubt.warning}</div>}
          <div className="row y-gap-20 mt-10">
            {cards.map((card, index) => (
              <div key={`${card.front}-${index}`} className="col-md-6">
                <button
                  type="button"
                  onClick={() => setFlipped((prev) => ({ ...prev, [index]: !prev[index] }))}
                  className="edu-verse-flashcard"
                >
                  <span className="text-12 text-purple-1 fw-500">
                    {flipped[index] ? "Answer" : "Question"}
                  </span>
                  <strong>{flipped[index] ? card.back : card.front}</strong>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
