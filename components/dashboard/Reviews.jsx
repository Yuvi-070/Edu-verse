import { reviews } from "@/data/reviews";
import React from "react";
import Star from "../common/Star";
import Image from "next/image";
import Link from "next/link";

export default function Reviews() {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Reviews</h1>
            <div className="mt-10">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">All Reviews</h2>
              </div>

              <div className="py-30 px-30">
                <div className="row y-gap-30">
                  {reviews.map((elm, i) => (
                    <div key={i} className="md:direction-column">
                      <div
                        className={`d-flex ${
                          i != 0 ? "border-top-light" : ""
                        }  pt-30`}
                      >
                        <div className="mr-20">
                          <Image
                            width={60}
                            height={60}
                            src={elm.avatarSrc}
                            alt="image"
                          />
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              {elm.name}
                              <span className="text-13 text-light-1 fw-400 ml-5">
                                {elm.date}
                              </span>
                            </h4>

                            <div className="d-flex x-gap-5 items-center mt-15">
                              <Star star={elm.rating} />
                            </div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">{elm.title}</h5>
                          <div className="comments__text mt-10">
                            <p>{elm.comment}</p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <button className="button text-13 -sm -light-7 -dark-button-dark-2 text-purple-1">
                              Respond
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer -dashboard py-30">
        <div className="row items-center justify-between">
          <div className="col-auto">
            <div className="text-13 lh-1">
              © 2022 Educrat. All Right Reserved.
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="d-flex items-center flex-wrap x-gap-20">
                <div>
                  <Link href="/help-center" className="text-13 lh-1">
                    Help
                  </Link>
                </div>
                <div>
                  <Link href="/terms" className="text-13 lh-1">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <a href="#" className="text-13 lh-1">
                    Cookie Notice
                  </a>
                </div>
                <div>
                  <a href="#" className="text-13 lh-1">
                    Security
                  </a>
                </div>
                <div>
                  <Link href="/terms" className="text-13 lh-1">
                    Terms of Use
                  </Link>
                </div>
              </div>

              <button className="button -md -rounded bg-light-4 text-light-1 ml-30">
                English
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
