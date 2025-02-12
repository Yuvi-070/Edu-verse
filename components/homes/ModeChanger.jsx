"use client";
import React, { useEffect, useState } from "react";

export default function ModeChanger({ whiteMode }) {
  useEffect(() => {
    const handleDarkmode = () => {
      if (document) {
        if (whiteMode) {
          document
            .getElementsByTagName("html")[0]
            .classList.remove("-dark-mode");
        } else {
          document.getElementsByTagName("html")[0].classList.add("-dark-mode");
        }
      }
    };

    handleDarkmode();
    return ()=> {
      document.getElementsByTagName("html")[0]
            .classList.remove("-dark-mode");
  }
  }, []);

  return <></>;
}
