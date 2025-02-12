"use client";

import Image from "next/image";

import React from "react";
import { helpItems } from "@/data/helpItems";
export default function HelpCenter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">How can we help you?</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    We’re on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8">
              <form className="form-single-field -help" onSubmit={handleSubmit}>
                <input
                  required
                  type="text"
                  placeholder="Enter a question, topic or keyword"
                />
                <button className="button -purple-1 text-white" type="submit">
                  <i className="icon-search text-20 mr-15"></i>
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="row y-gap-30 justify-between pt-90 lg:pt-50">
            {helpItems.map((elm, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="py-40 px-45 rounded-16 bg-light-4">
                  <div className="d-flex justify-center items-center size-70 rounded-full bg-white">
                    <Image width={30} height={30} src={elm.icon} alt="icon" />
                  </div>
                  <h4 className="text-20 lh-11 fw-500 mt-25">{elm.title}</h4>
                  <p className="mt-10">{elm.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
