"use client";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { learnList, requirements } from "@/data/aboutcourses";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Overview() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="overview" className="pt-60 lg:pt-40 to-over">
      <h4 className="text-18 fw-500">Description</h4>

      <div
        className={`show-more  mt-30 js-show-more ${
          showMore ? "is-active" : ""
        } `}
      >
        <div
          className="show-more__content "
          style={showMore ? { maxHeight: "370px" } : {}}
        >
          <p className="">
          Python Course – Learn Python from scratch, covering syntax, loops, functions, and real-world applications. Ideal for beginners and aspiring developers. 🚀

Java Course – Master Java fundamentals, including OOP concepts, data structures, and algorithms. Perfect for beginners looking to build strong programming skills. 💻

C++ Course – Explore C++ programming with a focus on object-oriented programming, problem-solving, and algorithmic thinking. Great for aspiring programmers! 🔥

Data Structures Course – Understand essential data structures like arrays, linked lists, stacks, queues, trees, and graphs to improve problem-solving skills. 📊

UI/UX Design Course – Learn design principles, wireframing, prototyping, and usability testing to create user-friendly digital experiences. 🎨

Digital Marketing with AI – Discover how AI enhances SEO, content creation, ad targeting, and customer engagement for smarter marketing strategies. 📈

Blender 3D Course – Dive into 3D modeling, texturing, animation, and rendering using Blender to create stunning visuals and animations. 🎬

Generative AI Course – Learn to build AI models for generating text, images, and music using deep learning and neural networks. 🤖

Finance Course – Master financial planning, investing, budgeting, and market analysis to make informed financial decisions. 💰

MS Excel Course – Gain expertise in Excel functions, formulas, data analysis, and automation to enhance productivity and decision-making. 📊
          
          </p>
        </div>

        <button
          onClick={() => setShowMore((pre) => !pre)}
          className="show-more__button text-purple-1 fw-500 underline mt-30"
        >
          Show more
        </button>
      </div>

    </div>
  );
}
