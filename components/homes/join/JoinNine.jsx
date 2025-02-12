"use client";
import Image from "next/image";
import React from "react";

export default function JoinNine() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="layout-pt-lg layout-pb-lg section-bg">
      <div className="section-bg__item">
        <Image
          width={1200}
          height={1200}
          style={{ width: "100%" }}
          className="img-full rounded-16"
          src="/assets/img/home-9/cta/bg.png"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-5 col-lg-6 col-md-11">
            <div className="sectionTitle -light">
              <h2 className="sectionTitle__title ">
                Subscribe our Newsletter &
              </h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-30 justify-center">
          <div className="col-lg-6">
            <form className="form-single-field -help" onSubmit={handleSubmit}>
              <input required type="text" placeholder="Your Email..." />
              <button className="button -purple-1 text-white" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
