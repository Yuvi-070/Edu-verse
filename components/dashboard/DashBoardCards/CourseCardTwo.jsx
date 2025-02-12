"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CourseCardTwo({ data }) {
  const [rating, setRating] = useState([]);
  useEffect(() => {
    for (let i = Math.floor(data.rating); i >= 1; i--) {
      setRating((pre) => [...pre, "star"]);
    }
  }, []);
  return (
    <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
      <a href="#">
        <div>
          <Image
            width={460}
            height={325}
            className="rounded-8 w-1/1"
            src={data.imageSrc}
            alt="image"
          />
        </div>

        <div className="pt-15">
          <div className="d-flex y-gap-10 justify-between items-center">
            <div className="text-14 lh-1">{data.authorName}</div>

            <div className="d-flex items-center">
              <div className="text-14 lh-1 text-yellow-1 mr-10">
                {data.rating}
              </div>
              <div className="d-flex x-gap-5 items-center">
                {rating.map((itm, i) => (
                  <div key={i} className="icon-star text-9 text-yellow-1"></div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-16 fw-500 lh-15 mt-10">{data.title}</h3>

          <div className="progress-bar mt-10">
            <div className="progress-bar__bg bg-light-3"></div>
            <div
              className="progress-bar__bar bg-purple-1 "
              style={{ width: `${data.progress}%` }}
            ></div>
          </div>

          <div className="d-flex y-gap-10 justify-between items-center mt-10">
            <div className="text-dark-1">% {data.completed} Completed</div>
            <div>25%</div>
          </div>
        </div>
      </a>
    </div>
  );
}
