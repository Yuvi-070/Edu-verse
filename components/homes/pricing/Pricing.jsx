"use client";

import React, { useState } from "react";
import { pricingData } from "../../../data/pricing";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsYearly(event.target.checked);
  };
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-3">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Simple Pricing</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>

            <div className="d-flex justify-center items-center pt-60 lg:pt-30">
              <div className="text-14 text-dark-1">Monthly</div>
              <div className="form-switch px-20">
                <div className="switch" data-switch=".js-switch-content">
                  <input
                    checked={isYearly}
                    onChange={handleCheckboxChange}
                    type="checkbox"
                  />
                  <span className="switch__slider"></span>
                </div>
              </div>
              <div className="text-14 text-dark-1">
                Annually <span className="text-purple-1">Save 30%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between pt-60 lg:pt-50">
          <div className="col-lg-4 col-md-6">
            <div
              className="priceCard -type-1 rounded-16 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={500}
            >
              <div className="priceCard__header py-40 pl-50 bg-dark-2">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  {pricingData[0].type}
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                  {pricingData[0].price ? pricingData[0].price : "Free"}
                </div>
                <div className="priceCard__period text-white mt-5">
                  {pricingData[0].period}
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white">
                <div className="priceCard__text">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="priceCard__list mt-30">
                  {pricingData[0].features.map((elm, i) => (
                    <div key={i}>
                      <span
                        className=" pr-8 text-purple-1"
                        style={{
                          
                          fontSize: "12px",
                          fontWeight: "300",
                        }}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={faCheck} />

                      </span>
                      {elm}
                    </div>
                  ))}
                </div>

                <div className="priceCard__button mt-30">
                  <Link
                    className="button -md -purple-3 text-purple-1"
                    href="/courses-list-1"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="priceCard -type-1 rounded-16 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <div className="priceCard__header py-40 pl-50 bg-purple-1">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  {pricingData[1].type}
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                  $
                  {isYearly
                    ? (pricingData[1].price * 12 * 0.7).toFixed(2)
                    : pricingData[1].price}
                </div>
                <div className="priceCard__period text-white mt-5">
                  {isYearly ? "per year" : pricingData[1].period}
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-purple-1">
                <div className="priceCard__text text-white">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="priceCard__list mt-30">
                  {pricingData[1].features.map((elm, i) => (
                    <div key={i} className="text-white">
                     <span
                        className=" pr-8  text-white"
                        style={{
                          
                          fontSize: "12px",
                          fontWeight: "300",
                        }}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={faCheck} />

                      </span>
                      {elm}
                    </div>
                  ))}
                </div>

                <div className="priceCard__button mt-30">
                  <Link
                    className="button -md -white text-purple-1"
                    href="/courses-list-1"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="priceCard -type-1 rounded-16 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={1500}
            >
              <div className="priceCard__header py-40 pl-50 bg-dark-2">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  {pricingData[2].type}
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                  $
                  {isYearly
                    ? (pricingData[2].price * 12 * 0.7).toFixed(2)
                    : pricingData[2].price}
                </div>
                <div className="priceCard__period text-white mt-5">
                  {isYearly ? "per year" : pricingData[2].period}
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white">
                <div className="priceCard__text">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="priceCard__list mt-30">
                  {pricingData[2].features.map((elm, i) => (
                    <div key={i}>
                     <span
                        className="pr-8  text-purple-1"
                        style={{
                          
                          fontSize: "12px",
                          fontWeight: "300",
                        }}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={faCheck} />

                      </span>
                      {elm}
                    </div>
                  ))}
                </div>

                <div className="priceCard__button mt-30">
                  <Link
                    className="button -md -purple-3 text-purple-1"
                    href="/courses-list-1"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
