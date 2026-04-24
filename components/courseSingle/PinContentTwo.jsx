"use client";

import React, { useState, useEffect } from "react";
import { useContextElement } from "@/context/Context";
import ModalVideoComponent from "../common/ModalVideo";

export default function PinContentTwo({ pageItem }) {
  const { isAddedToCartCourses, addCourseToCart } = useContextElement();
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  const durationLabel = `${Math.floor(pageItem.duration / 60)}h ${Math.floor(
    pageItem.duration % 60,
  )}m`;

  // useEffect hook to update the screen width when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        id="js-pin-content"
        style={
          screenWidth < 991
            ? { height: "fit-content", right: "0%" }
            : { height: "100%", right: "7%" }
        }
        className="courses-single-info js-pin-content"
      >
       
        <div
          style={{ position: "sticky", top: "250px" }}
          className="bg-white shadow-2 rounded-8 border-light py-10 px-10"
        >
          <div className="courses-single-info__content scroll-bar-1 pt-30 pb-20 px-20">
            <div className="d-flex justify-between items-center mb-30">
              {pageItem.paid ? (
                <>
                  <div className="text-24 lh-1 text-dark-1 fw-500">
                    ${pageItem.discountedPrice}
                  </div>
                  <div className="lh-1 line-through">
                    ${pageItem.originalPrice}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-24 lh-1 text-dark-1 fw-500">Free</div>
                  <div></div>
                </>
              )}
            </div>

            <div className="d-flex y-gap-10 x-gap-10 flex-wrap pt-20">
              <button
                type="button"
                onClick={() => addCourseToCart(pageItem.id)}
                disabled={isAddedToCartCourses(pageItem.id)}
                className={`button -md w-100 ${
                  isAddedToCartCourses(pageItem.id)
                    ? "-outline-light text-dark-1"
                    : "-purple-1 text-white"
                }`}
              >
                {isAddedToCartCourses(pageItem.id)
                  ? "In your list"
                  : "Add to my list"}
              </button>
            </div>

            <div className="mt-25">
              <div className="d-flex justify-between py-8 ">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-video-file"></div>
                  <div className="ml-10">Lessons</div>
                </div>
                <div>{pageItem.lessonCount}</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-puzzle"></div>
                  <div className="ml-10">Quizzes</div>
                </div>
                <div>—</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-clock-2"></div>
                  <div className="ml-10">Duration</div>
                </div>
                <div>{durationLabel}</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-bar-chart-2"></div>
                  <div className="ml-10">Skill level</div>
                </div>
                <div>{pageItem.level}</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-translate"></div>
                  <div className="ml-10">Language</div>
                </div>
                <div>{pageItem.languange}</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-badge"></div>
                  <div className="ml-10">Certificate</div>
                </div>
                <div>Yes</div>
              </div>

              <div className="d-flex justify-between py-8 border-top-light">
                <div className="d-flex items-center text-dark-1">
                  <div className="icon-infinity"></div>
                  <div className="ml-10">Full lifetime access</div>
                </div>
                <div>Yes</div>
              </div>
            </div>

            <div className="d-flex justify-center pt-15">
              <a
                href="#"
                className="d-flex justify-center items-center size-40 rounded-full"
              >
                <i className="fa fa-facebook"></i>
              </a>

              <a
                href="#"
                className="d-flex justify-center items-center size-40 rounded-full"
              >
                <i className="fa fa-twitter"></i>
              </a>

              <a
                href="#"
                className="d-flex justify-center items-center size-40 rounded-full"
              >
                <i className="fa fa-instagram"></i>
              </a>

              <a
                href="#"
                className="d-flex justify-center items-center size-40 rounded-full"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ModalVideoComponent
        videoId={"LlCwHnp3kL4"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
