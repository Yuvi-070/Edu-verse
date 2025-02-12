import React from "react";
import Link from "next/link";
export default function Buttons() {
  return (
    <>
      <div className="row y-gap-30 pt-50">
        <div className="col-12">
          <div className="text-18 lh-1 text-dark-1 fw-500">Buttons</div>
        </div>

        <div className="col-auto">
          <div className="row x-gap-10 y-gap-10">
            <div className="col-auto">
              <button className="button -md -purple-1 text-white">
                Button 1
              </button>
            </div>
            <div className="col-auto">
              <button className="button -md -outline-purple-1 text-purple-1">
                Button 1 Hover
              </button>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div className="row x-gap-10 y-gap-10">
            <div className="col-auto">
              <button className="button -md -green-1 text-dark-1">
                Button 2
              </button>
            </div>
            <div className="col-auto">
              <button className="button -md -outline-green-1 text-green-1">
                Button 2 Hover
              </button>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div className="row x-gap-10 y-gap-10">
            <div className="col-auto">
              <button className="button -md -dark-1 text-white">
                Button 3
              </button>
            </div>
            <div className="col-auto">
              <button className="button -md -outline-dark-1 text-dark-1">
                Button 3 Hover
              </button>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div className="row x-gap-10 y-gap-10</Link>">
            <div className="col-auto">
              <button className="button -md -purple-3 text-purple-1">
                Button 4
              </button>
            </div>
            <div className="col-auto">
              <button className="button -md -purple-1 text-white">
                Button 4 Hover
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row y-gap pt-30">
        <div className="col-auto">
          <Link
            href="/instructors-list-1"
            className="button -icon -purple-3 text-purple-1"
          >
            View All Instructors
            <i className="icon-arrow-top-right text-13 ml-10"></i>
          </Link>
        </div>
        <div className="col-auto">
          <Link
            href="/instructors-list-1"
            className="button -icon -purple-1 text-white"
          >
            View All Instructors
            <i className="icon-arrow-top-right text-13 ml-10"></i>
          </Link>
        </div>
        <div className="col-auto">
          <Link
            href="/instructors-list-1"
            className="button -icon -outline-purple-1 text-purple-1"
          >
            View All Instructors
            <i className="icon-arrow-top-right text-13 ml-10"></i>
          </Link>
        </div>
        <div className="col-auto">
          <Link
            href="/instructors-list-1"
            className="button -icon -purple-1 text-white"
          >
            View All Instructors
            <i className="icon-arrow-top-right text-13 ml-10"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
