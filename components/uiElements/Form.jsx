"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { options } from "@/data/ddOptions";
export default function Form() {
  const [ddOpen, setDdOpen] = useState(false);
  const [ddElements, setDdElements] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleselectedElm = (elm) => {
    if (ddElements.includes(elm)) {
      const filtered = ddElements.filter((el) => el != elm);
      setDdElements(filtered);
    } else {
      setDdElements((pre) => [...pre, elm]);
    }
  };
  return (
    <div className="row x-gap-60 y-gap-30 mt-50">
      <div className="col-12">
        <div className="text-18 lh-1 text-dark-1 fw-500">Form</div>
      </div>

      <div className="col-lg-6">
        <form onSubmit={handleSubmit} className="contact-form">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Input</label>

          <div className="">
            <input required type="text" placeholder="Text..." />
          </div>
        </form>

        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10 mt-30">
          Select boxes
        </label>

        <div className="select js-select js-liveSearch" data-select-value="">
          <button className="select__button js-button">
            <span className="js-button-title">Default</span>
            <i className="select__icon" data-feather="chevron-down"></i>
          </button>

          <div className="select__dropdown js-dropdown">
            <input
              required
              type="text"
              placeholder="Search"
              className="select__search js-search"
            />
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
          Multiple Select Boxes, Hover
        </label>

        <div className="select js-multiple-select" data-select-value="">
          <button
            onClick={() => setDdOpen((pre) => !pre)}
            className="select__button js-button"
          >
            <span className="js-button-title">
              {ddElements.length > 0 ? ddElements.join(", ") : "Default"}
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>

          <div
            className={`select__dropdown js-dropdown   ${
              ddOpen ? "-is-visible" : ""
            }`}
          >
            <div className="select__options js-options">
              {options.map((elm, i) => (
                <div
                  onClick={() => handleselectedElm(elm.label)}
                  className={`select__options__button js-target-title -is-choosen  ${
                    ddElements.includes(elm.label) ? "-is-choosen" : ""
                  }`}
                  data-value={elm.label}
                  key={i}
                >
                  <div className="form-checkbox pointer-events-none">
                    <input
                      required
                      checked={ddElements.includes(elm.label) ? true : false}
                      type="checkbox"
                    />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check"></div>
                    </div>
                  </div>

                  <span className="ml-10">{elm.label}</span>
                </div>
              ))}
            </div>

            <select
              className="select__select js-select-tag"
              name="name2"
              multiple="multiple"
            >
              <option value="banking">Banking</option>
              <option value="digital & creative">Digital & Creative</option>
              <option value="retail">Retail</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
            </select>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Textarea
            </label>

            <textarea required placeholder="Description..." rows="7"></textarea>
          </div>
        </form>
      </div>

      <div className="col-lg-6">
        <div className="row">
          <div className="col-md-4">
            <div className="text-16 lh-12 text-dark-1 fw-500 mb-30">
              Radiobox
            </div>
            <div className="row y-gap-15">
              <div className="col-12">
                <div className="form-radio d-flex items-center ">
                  <div className="radio">
                    <input type="radio" />
                    <div className="radio__mark">
                      <div className="radio__icon"></div>
                    </div>
                  </div>
                  <div className="lh-1 text-14 text-dark-1 ml-12">items</div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-radio d-flex items-center ">
                  <div className="radio">
                    <input type="radio" />
                    <div className="radio__mark">
                      <div className="radio__icon"></div>
                    </div>
                  </div>
                  <div className="lh-1 text-14 text-dark-1 ml-12">items</div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-radio d-flex items-center ">
                  <div className="radio">
                    <input type="radio" />
                    <div className="radio__mark">
                      <div className="radio__icon"></div>
                    </div>
                  </div>
                  <div className="lh-1 text-14 text-dark-1 ml-12">items</div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-radio d-flex items-center ">
                  <div className="radio">
                    <input type="radio" />
                    <div className="radio__mark">
                      <div className="radio__icon"></div>
                    </div>
                  </div>
                  <div className="lh-1 text-14 text-dark-1 ml-12">items</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-16 lh-12 text-dark-1 fw-500 mb-30">
              Checkbox
            </div>

            <div className="d-flex items-center">
              <div className="form-checkbox">
                <input type="checkbox" />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check"></div>
                </div>
              </div>
              <div className="text-14 lh-12 text-dark-1 ml-15">Items</div>
            </div>

            <div className="d-flex items-center mt-15">
              <div className="form-checkbox">
                <input type="checkbox" />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check"></div>
                </div>
              </div>
              <div className="text-14 lh-12 text-dark-1 ml-15">Items</div>
            </div>

            <div className="d-flex items-center mt-15">
              <div className="form-checkbox">
                <input type="checkbox" />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check"></div>
                </div>
              </div>
              <div className="text-14 lh-12 text-dark-1 ml-15">Items</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-16 lh-12 text-dark-1 fw-500 mb-30">Switch</div>
            <div className="form-switch d-flex items-center">
              <div className="switch">
                <input type="checkbox" />
                <span className="switch__slider"></span>
              </div>
              <div className="text-13 lh-1 text-dark-1 ml-10">Items</div>
            </div>

            <div className="form-switch d-flex items-center mt-20">
              <div className="switch">
                <input type="checkbox" defaultChecked />
                <span className="switch__slider"></span>
              </div>
              <div className="text-13 lh-1 text-dark-1 ml-10">Items</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
