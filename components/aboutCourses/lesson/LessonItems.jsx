"use client";

import ModalVideoComponent from "@/components/common/ModalVideo";
import { lessonItems } from "@/data/aboutcourses";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function LessonItems({ rightPosition }) {
  const [activeItemId, setActiveItemId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <aside
        className={`lesson-sidebar  ${
          rightPosition ? "-type-2 lg:order-2 " : "bg-light-3"
        } `}
      >
        <div className="px-30 sm:px-20">
          <form onSubmit={handleSubmit} className="lesson-sidebar-search">
            <input type="text" required placeholder="Search" />
            <button className="" type="submit">
              <i className="icon-search text-20"></i>
            </button>
          </form>

          <div className="accordion -block-2 text-left js-accordion mt-30">
            {lessonItems.map((item, index) => (
              <div
                className={`accordion__item ${
                  activeItemId == item.id ? "is-active" : ""
                } `}
                key={index}
              >
                <div
                  onClick={() =>
                    setActiveItemId((pre) => (pre == item.id ? 0 : item.id))
                  }
                  className="accordion__button py-20 px-30 bg-light-4"
                >
                  <div className="d-flex items-center">
                    <div className="accordion__icon">
                      <div className="icon" data-feather="chevron-up">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </div>
                      <div className="icon" data-feather="chevron-up">
                        <FontAwesomeIcon icon={faChevronUp} />
                      </div>
                    </div>
                    <span className="text-17 fw-500 text-dark-1">
                      {item.title}
                    </span>
                  </div>
                </div>

                <div
                  className="accordion__content"
                  style={activeItemId == item.id ? { maxHeight: "700px" } : {}}
                >
                  <div className="accordion__content__inner px-30 py-30">
                    <div className="y-gap-30">
                      {item.lessons.map((lesson, index) => (
                        <div className="" key={index}>
                          <div className="d-flex">
                            <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                              <div className="icon-play text-9"></div>
                            </div>
                            <div className="">
                              <div>{lesson.title}</div>
                              <div className="d-flex x-gap-20 items-center pt-5">
                                <span
                                  onClick={() => setIsOpen(true)}
                                  className="text-14 lh-1 text-purple-1 underline cursor"
                                >
                                  Preview
                                </span>
                                <a
                                  href="#"
                                  className="text-14 lh-1 text-purple-1 underline"
                                >
                                  {lesson.duration}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <ModalVideoComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        videoId={"LlCwHnp3kL4"}
      />
    </>
  );
}
