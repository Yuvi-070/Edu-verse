import Faq from "@/components/common/Faq";

import Preloader from "@/components/common/Preloader";
import ContactOne from "@/components/contacts/ContactOne";
import FooterOne from "@/components/layout/footers/FooterOne";

import HeaderFive from "@/components/layout/headers/HeaderFive";
import React from "react";

export const metadata = {
  title:
    "Contact-1 || Educrat - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
};

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader />

      <HeaderFive />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <div className="main-content  ">
          <div className="content-wrapper js-content-wrapper overflow-hidden">
            <section className="layout-pt-md layout-pb-md"></section>
            <iframe
              id="gmap_canvas"
              src="https://www.google.com/maps/embed/v1/place?q=Pune,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              width="100%"
              height={700}
              frameBorder={0}
            />
          </div>
        </div>
        <ContactOne />
        <Faq />

        <FooterOne />
      </div>
    </div>
  );
}
