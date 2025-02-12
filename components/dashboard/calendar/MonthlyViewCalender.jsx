"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
const tileDisabled = ({ date, view }) => {
  if (view === "year") {
    return false; // Disable year navigation
  }
  return false; // Enable other navigation
};

const navigationLabel = ({ date, label }) => <span>{label}</span>;
export default function MonthlyCalender() {
  const [value, onChange] = useState([
    new Date(),
    new Date(2023, 6, 16), // Set initial selected dates here
    new Date(2023, 7, 20),
    new Date(2023, 8, 25),
  ]);

  return (
    <div style={{ width: "100%" }}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
