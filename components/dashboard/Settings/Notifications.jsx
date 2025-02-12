"use client";

import React from "react";

export default function Notifications({ activeTab }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`tabs__pane -tab-item-4 ${activeTab == 4 ? "is-active" : ""} `}
    >
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="row">
          <div className="col-12">
            <div className="text-16 fw-500 text-dark-1">
              Notifications - Choose when and how to be notified
            </div>
            <p className="text-14 lh-13 mt-5">
              Select push and email notifications you'd like to receive
            </p>
          </div>
        </div>

        <div className="pt-60">
          <div className="row y-gap-20 justify-between">
            <div className="col-auto">
              <div className="text-16 fw-500 text-dark-1">
                Choose when and how to be notified
              </div>
            </div>
          </div>

          <div className="pt-30">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">Subscriptions</div>
                <p className="text-14 lh-13 mt-5">
                  Notify me about activity from the profiles I'm subscribed to
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top-light pt-20 mt-20">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Recommended Courses
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notify me about activity from the profiles I'm subscribed to
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top-light pt-20 mt-20">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Replies to my comments
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notify me about activity from the profiles I'm subscribed to
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top-light pt-20 mt-20">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Activity on my comments
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notify me about activity from the profiles I'm subscribed to
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-60">
          <div className="row y-gap-20 justify-between">
            <div className="col-auto">
              <div className="text-16 fw-500 text-dark-1">
                Email notifications
              </div>
            </div>
          </div>

          <div className="pt-30">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Send me emails about my Cursus activity and updates I
                  requested
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notify me about activity from the profiles I'm subscribed to
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top-light pt-20 mt-20">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Promotions, course recommendations, and helpful resources from
                  Cursus.
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notify me about activity from the profiles I'm subscribed to
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top-light pt-20 mt-20">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="text-16 fw-500 text-dark-1">
                  Announcements from instructors whose course(s) I’m enrolled
                  in.
                </div>
                <p className="text-14 lh-13 mt-5">
                  Notify me about activity from the profiles I'm subscribed to
                </p>
              </div>
              <div className="col-auto">
                <div className="form-switch">
                  <div className="switch" data-switch=".js-switch-content">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-30">
          <div className="col-12">
            <button className="button -md -purple-1 text-white">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
