"use client";

import { reviews } from "@/data/aboutcourses";
import React from "react";

export default function Reviews() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-60 lg:mt-40">
      <div className="blogPost -comments">
        <div className="blogPost__content">
          <h2 className="text-20 fw-500">Reviews</h2>

          <ul className="comments__list mt-30">
            {reviews.slice(0, 2).map((elm, i) => (
              <li className="comments__item">
                <div className="comments__item-inner md:direction-column">
                  <div className="comments__img mr-20">
                    <div
                      className="bg-image rounded-full js-lazy"
                      style={{ backgroundImage: `url(${elm.avatarSrc})` }}
                    ></div>
                  </div>

                  <div className="comments__body md:mt-15">
                    <div className="comments__header">
                      <h4 className="text-17 fw-500 lh-15">
                        {elm.name}
                        <span className="text-13 text-light-1 fw-400">
                          {elm.date}
                        </span>
                      </h4>

                      <div className="stars"></div>
                    </div>

                    <h5 className="text-15 fw-500 mt-15">{elm.title}</h5>
                    <div className="comments__text mt-10">
                      <p>{elm.comment}</p>
                    </div>

                    <div className="comments__helpful mt-20">
                      <span className="text-13 text-purple-1">
                        Was this review helpful?
                      </span>
                      <button className="button text-13 -sm -purple-1 text-white">
                        Yes
                      </button>
                      <button className="button text-13 -sm -light-7 text-purple-1">
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="respondForm pt-30">
        <h3 className="text-20 fw-500">Write a Review</h3>

        <div className="mt-30">
          <h4 className="text-16 fw-500">What is it like to Course?</h4>
          <div className="d-flex x-gap-10 pt-10">
            <div className="icon-star text-14 text-yellow-1"></div>
            <div className="icon-star text-14 text-yellow-1"></div>
            <div className="icon-star text-14 text-yellow-1"></div>
            <div className="icon-star text-14 text-yellow-1"></div>
            <div className="icon-star text-14 text-yellow-1"></div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="contact-form respondForm__form row y-gap-30 pt-30"
        >
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Review Title
            </label>
            <input
              type="text"
              required
              name="title"
              placeholder="Great Courses"
            />
          </div>
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Review Content
            </label>
            <textarea name="comment" placeholder="Message" rows="8"></textarea>
          </div>
          <div className="col-12">
            <button
              type="submit"
              name="submit"
              id="submit"
              className="button -md -purple-1 text-white"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
