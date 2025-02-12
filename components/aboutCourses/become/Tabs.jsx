"use client";

import React, { useState, useEffect } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="row justify-center">
      <div className="col-xl-8 col-lg-9 col-md-11">
        <div className="tabs -active-purple-2 js-tabs">
          <div className="tabs__controls d-flex js-tabs-controls">
            <button
              onClick={() => setActiveTab(1)}
              className={`tabs__button js-tabs-button ${
                activeTab == 1 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-1"
              type="button"
            >
              Become an Instructor
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`tabs__button js-tabs-button ml-30 ${
                activeTab == 2 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-2"
              type="button"
            >
              Instructor Rules
            </button>
            <button
              onClick={() => setActiveTab(3)}
              className={`tabs__button js-tabs-button ml-30 ${
                activeTab == 3 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-3"
              type="button"
            >
              Start with Courses
            </button>
          </div>

          <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
            <div
              className={`tabs__pane -tab-item-1 ${
                activeTab == 1 ? "is-active" : ""
              } `}
            >
              <p className="text-light-1">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
                <br />
                <br />
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
            </div>
            <div
              className={`tabs__pane -tab-item-2 ${
                activeTab == 2 ? "is-active" : ""
              } `}
            >
              <p className="text-light-1">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
            <div
              className={`tabs__pane -tab-item-3 ${
                activeTab == 3 ? "is-active" : ""
              } `}
            >
              <p className="text-light-1">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
