import React from "react";
import MonthlyCalender from "./MonthlyViewCalender";

const CalendarTwo = () => {
  return (
    <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
      <div
        className="d-flex x-gap-10 y-gap-10 justify-center items-center pb-5"
        style={{ flexDirection: "column" }}
      >
        <h5 className="text-17 fw-500 mb-30">Calendar</h5>
        <MonthlyCalender />
      </div>
    </div>
  );
};

export default CalendarTwo;
