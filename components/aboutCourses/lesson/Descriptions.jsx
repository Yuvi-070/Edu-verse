import { learnList, requirements, lessonItems } from "@/data/aboutcourses";
import React from "react";

export default function Descriptions() {
  return (
    <div className="mt-60 lg:mt-40">
      <h4 className="text-18 fw-500">Description</h4>
      <p className="mt-30">
        Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut
        nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In
        libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed
        consequat justo non mauris pretium at tempor justo sodales. Quisque
        tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur.
        <br />
        <br />
        This course is aimed at people interested in UI/UX Design. We’ll start
        from the very beginning and work all the way through, step by step. If
        you already have some UI/UX Design experience but want to get up to
        speed using Adobe XD then this course is perfect for you too!
        <br />
        <br />
        First, we will go over the differences between UX and UI Design. We will
        look at what our brief for this real-world project is, then we will
        learn about low-fidelity wireframes and how to make use of existing UI
        design kits.
      </p>
      <button className="text-purple-1 fw-500 underline mt-30">
        Show more
      </button>

      <div className="mt-60">
        <h4 className="text-20 mb-30">What you'll learn</h4>
        <div className="row x-gap-100 justfiy-between">
          <div className="col-md-6">
            <div className="y-gap-20">
              {learnList.slice(0, 6).map((elm, i) => (
                <div key={i} className="d-flex items-center">
                  <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                    <i className="icon-check text-6"></i>
                  </div>
                  <p>{elm}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <div className="y-gap-20">
              {learnList.slice(6).map((elm, i) => (
                <div key={i} className="d-flex items-center">
                  <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                    <i className="icon-check text-6"></i>
                  </div>
                  <p>{elm}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-60">
        <h4 className="text-20">Requirements</h4>
        <ul className="ul-list y-gap-15 pt-30">
          {requirements.map((elm, i) => (
            <li key={i}>{elm}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
