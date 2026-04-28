import React from "react";
import Preloader from "@/components/common/Preloader";
import Header from "@/components/layout/headers/Header";
import FooterOne from "@/components/layout/footers/FooterOne";

export default function LearnerPageShell({ children }) {
  return (
    <div className="main-content">
      <Preloader />
      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        {children}
        <FooterOne />
      </div>
    </div>
  );
}
