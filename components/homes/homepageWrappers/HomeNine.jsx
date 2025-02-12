"use client";
import React, { useState, useEffect } from "react";
import HeaderNine from "@/components/layout/headers/HeaderNine";
import Sidebar from "../Sidebar";

import FooterNine from "@/components/layout/footers/FooterNine";
import HeroNine from "../heros/HeroNine";
import CategoriesNine from "../categories/CategoriesNine";
import CoursesFive from "../courses/CoursesFive";
import StepsOne from "../../common/StepsOne";
import Instructors from "../../common/Instructors";
import Books from "../books/Books";
import InstractorsNine from "../instractors/InstractorsNine";
import Testimonials from "../testimonials/Testimonials";
import JoinNine from "../join/JoinNine";
import Brands from "../../common/Brands";

import Messages from "@/components/layout/component/Messages";
import Preloader from "@/components/common/Preloader";
export default function HomeNine() {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 990) {
      setIsSidebarClosed(true);
    }
    const handleResize = () => {
      if (window.innerWidth < 990) {
        setIsSidebarClosed(true);
      }
    };

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="main-content homeModeChange ">
        <Preloader />
        <HeaderNine
          setMessageOpen={setMessageOpen}
          setIsSidebarClosed={setIsSidebarClosed}
        />
        <div className="content-wrapper js-content-wrapper">
          <div
            className={`dashboard -home-9 px-0 js-dashboard-home-9 ${
              isSidebarClosed ? "-is-sidebar-hidden" : ""
            } `}
          >
            <div className="dashboard__sidebar -base scroll-bar-1 border-right-light lg:px-30">
              <Sidebar />
            </div>
            <div className="dashboard__main mt-0 ">
              <div className="dashboard__content pt-0 px-15 pb-0">
                <HeroNine />
                <CategoriesNine />
                <CoursesFive
                  tabBtnStyle={
                    "tabs__button px-20 py-8 rounded-200 -dark-text-white js-tabs-button "
                  }
                />
                <StepsOne />
                <Instructors />
                <Books />
                <InstractorsNine />
                <Testimonials backgroundComponent={"whiteBg"} />
                <JoinNine />
                <Brands />
              </div>

              <FooterNine />
            </div>
          </div>
        </div>
      </div>
      <Messages messageOpen={messageOpen} setMessageOpen={setMessageOpen} />
    </>
  );
}
