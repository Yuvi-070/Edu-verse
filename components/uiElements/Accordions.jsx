"use client";

import React, { useState } from "react";
import { accordionItems } from "@/data/accordionItems";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Accordions() {
  const [activeFaq, setActiveFaq] = useState(0);
  return (
    <div className="col-lg-6">
      <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">Accordions</div>
      <div className="accordion -block js-accordion">
        {accordionItems.map((elm, i) => (
          <div
            onClick={() => setActiveFaq((pre) => (pre == elm.id ? 0 : elm.id))}
            key={i}
            className={`accordion__item bg-light-4  ${
              activeFaq == elm.id ? "is-active" : ""
            }`}
          >
            <div className="accordion__button">
              <div className="accordion__icon">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="icon"
                  data-feather="plus"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="icon"
                  data-feather="minus"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </div>
              </div>
              <span className="text-17 fw-500 text-dark-1">{elm.question}</span>
            </div>

            <div
              style={activeFaq == elm.id ? { maxHeight: "139px" } : {}}
              className="accordion__content"
            >
              <div className="accordion__content__inner">
                <p>{elm.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="accordion -block  js-accordion"></div>
    </div>
  );
}
