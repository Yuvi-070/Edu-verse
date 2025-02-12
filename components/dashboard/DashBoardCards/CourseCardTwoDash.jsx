"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CourseCardTwoDash({ data }) {
  const [rating, setRating] = useState([]);
  useEffect(() => {
    for (let i = Math.floor(data.rating); i >= 1; i--) {
      setRating((pre) => [...pre, "star"]);
    }
  }, []);

  return (
    <div className="col-xl-6">
      <a
        href="#"
        className="relative d-block rounded-8 px-10 py-10 border-light"
      >
        <div className="row x-gap-20 y-gap-20 items-center">
          <div className="col-md-auto">
            <div className="shrink-0">
              <Image
                width={550}
                height={420}
                className="w-1/1"
                src={data.imageSrc}
                alt="image"
              />
            </div>
          </div>

          <div className="col-md">
            <div className="absolute-bookmark -dark-bg-dark-2 shadow-5">
              <i className="icon-bookmark"></i>
            </div>

            <div className="d-flex items-center">
              <div className="text-14 lh-1 fw-500 text-yellow-1 mr-10">4.5</div>
              <div className="d-flex x-gap-5 items-center">
                {rating.map((itm, i) => (
                  <div key={i} className="icon-star text-9 text-yellow-1"></div>
                ))}
              </div>
              <div className="text-13 lh-1 fw-500 ml-10">
                ({data.ratingCount}))
              </div>
            </div>

            <h3 className="text-17 lh-16 fw-500 mt-10 pr-40 xl:pr-0">
              {data.title}
            </h3>

            <div className="d-flex x-gap-20 y-gap-5 items-center flex-wrap pt-10">
              <div className="d-flex items-center">
                <div className="mr-10">
                  <Image
                    width={16}
                    height={17}
                    src="/assets/img/coursesCards/icons/1.svg"
                    alt="icon"
                  />
                </div>
                <div className="text-14 lh-1">{data.lessonCount} lesson</div>
              </div>

              <div className="d-flex items-center">
                <div className="mr-10">
                  <Image
                    width={16}
                    height={17}
                    src="/assets/img/coursesCards/icons/2.svg"
                    alt="icon"
                  />
                </div>
                <div className="text-14 lh-1">{`${Math.floor(
                  data.duration / 60,
                )}h ${Math.floor(data.duration % 60)}m`}</div>
              </div>

              <div className="d-flex items-center">
                <div className="mr-10">
                  <Image
                    width={16}
                    height={17}
                    src="/assets/img/coursesCards/icons/3.svg"
                    alt="icon"
                  />
                </div>
                <div className="text-14 lh-1">{data.level}</div>
              </div>
            </div>

            <div className="d-flex y-gap-10 justify-between items-center flex-wrap border-top-light pt-10 mt-10">
              <div className="d-flex items-center">
                <Image
                  width={30}
                  height={30}
                  src={data.authorImageSrc}
                  alt="image"
                />
                <div className="text-14 lh-1 ml-10">{data.authorName}</div>
              </div>

              <div className="d-flex items-center">
                {data.paid ? (
                  <>
                    <div className="line-through lh-1 fw-500 mr-10">
                      ${data.originalPrice}
                    </div>
                    <div className="text-18 lh-1 fw-500 text-dark-1">
                      ${data.discountedPrice}
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div className="text-18 lh-1 fw-500 text-dark-1">Free</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
