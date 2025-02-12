"use client";

import React, { useState } from "react";

export default function Tabs() {
  const [currentTabOne, setCurrentTabOne] = useState(1);
  const [currentTabTwo, setCurrentTabTwo] = useState(1);
  return (
    <div className="col-lg-5">
      <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">Tabs</div>
      <div className="tabs -pills js-tabs">
        <div className="tabs__controls d-flex x-gap-10 js-tabs-controls">
          <div onClick={() => setCurrentTabOne(1)}>
            <button
              className={`tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button ${
                currentTabOne == 1 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-1"
              type="button"
            >
              All Categories
            </button>
          </div>

          <div onClick={() => setCurrentTabOne(2)}>
            <button
              className={`tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button ${
                currentTabOne == 2 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-2"
              type="button"
            >
              Animation
            </button>
          </div>

          <div onClick={() => setCurrentTabOne(3)}>
            <button
              className={`tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button ${
                currentTabOne == 3 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-3"
              type="button"
            >
              Design
            </button>
          </div>

          <div onClick={() => setCurrentTabOne(4)}>
            <button
              className={`tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button ${
                currentTabOne == 4 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-4"
              type="button"
            >
              Illustration
            </button>
          </div>
        </div>

        <div className="tabs__content mt-20 js-tabs-content">
          <div
            className={`tabs__pane -tab-item-1 ${
              currentTabOne == 1 ? "is-active" : ""
            } `}
          >
            <p>
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris
              pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel
              fames interdum urna lobortis sagittis sed pretium. Morbi sed arcu
              proin quis tortor non risus.
            </p>
            <p className="mt-20">
              Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
              faucibus.
            </p>
          </div>

          <div
            className={`tabs__pane -tab-item-2 ${
              currentTabOne == 2 ? "is-active" : ""
            } `}
          >
            <p>
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris
              pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel
              fames interdum urna lobortis sagittis sed pretium. Morbi sed arcu
              proin quis tortor non risus.
            </p>
            <p className="mt-20">
              Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
              faucibus.
            </p>
          </div>

          <div
            className={`tabs__pane -tab-item-3 ${
              currentTabOne == 3 ? "is-active" : ""
            } `}
          >
            <p>
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris
              pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel
              fames interdum urna lobortis sagittis sed pretium. Morbi sed arcu
              proin quis tortor non risus.
            </p>
            <p className="mt-20">
              Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
              faucibus.
            </p>
          </div>

          <div
            className={`tabs__pane -tab-item-4 ${
              currentTabOne == 4 ? "is-active" : ""
            } `}
          >
            <p>
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris
              pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel
              fames interdum urna lobortis sagittis sed pretium. Morbi sed arcu
              proin quis tortor non risus.
            </p>
            <p className="mt-20">
              Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
              faucibus.
            </p>
          </div>
        </div>
      </div>

      <div className="tabs -active-purple-2 mt-30 js-tabs">
        <div className="tabs__controls d-flex items-center js-tabs-controls">
          <div onClick={() => setCurrentTabTwo(1)}>
            <button
              className={`text-light-1 lh-12 tabs__button mr-30 js-tabs-button  ${
                currentTabTwo == 1 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-1"
              type="button"
            >
              items 1
            </button>
          </div>

          <div onClick={() => setCurrentTabTwo(2)}>
            <button
              className={`text-light-1 lh-12 tabs__button mr-30 js-tabs-button  ${
                currentTabTwo == 2 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-2"
              type="button"
            >
              items 2
            </button>
          </div>

          <div onClick={() => setCurrentTabTwo(3)}>
            <button
              className={`text-light-1 lh-12 tabs__button mr-30 js-tabs-button  ${
                currentTabTwo == 3 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-3"
              type="button"
            >
              items 3
            </button>
          </div>
        </div>

        <div className="tabs__content mt-20 js-tabs-content">
          <div
            className={`tabs__pane -tab-item-1 ${
              currentTabTwo == 1 ? "is-active" : ""
            } `}
          >
            <p>
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris
              pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel
              fames interdum urna lobortis sagittis sed pretium. Morbi sed arcu
              proin quis tortor non risus.
            </p>
            <p className="mt-20">
              Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
              faucibus.
            </p>
          </div>

          <div
            className={`tabs__pane -tab-item-2 ${
              currentTabTwo == 2 ? "is-active" : ""
            } `}
          >
            <p>
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris
              pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel
              fames interdum urna lobortis sagittis sed pretium. Morbi sed arcu
              proin quis tortor non risus.
            </p>
            <p className="mt-20">
              Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
              faucibus.
            </p>
          </div>

          <div
            className={`tabs__pane -tab-item-3 ${
              currentTabTwo == 3 ? "is-active" : ""
            } `}
          >
            <p>
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris
              pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel
              fames interdum urna lobortis sagittis sed pretium. Morbi sed arcu
              proin quis tortor non risus.
            </p>
            <p className="mt-20">
              Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
              faucibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
