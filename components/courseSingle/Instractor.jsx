import Image from "next/image";
import React from "react";

export default function Instractor() {
  return (
    <div id="instructors" className="pt-60 lg:pt-40">
      <h2 className="text-20 fw-500">Instructor</h2>

      <div className="mt-30">
        <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
          <div className="size-120">
            <Image
              width={100}
              height={100}
              className="object-cover"
              src="/assets/img/misc/verified/1.png"
              alt="image"
            />
          </div>

          <div className="">
            <h5 className="text-17 lh-14 fw-500">Youtube India</h5>
            <p className="mt-5">The Indian version of YouTube</p>

           
          </div>
        </div>

        <div className="mt-30">
          <p>
          The Indian version of YouTube is one of the largest and most diverse digital platforms, 
          featuring content in multiple languages across various genres like entertainment, education,
           tech, vlogs, and news. With a massive user base, it has empowered creators, businesses, and educators to reach millions.
            The platform plays a significant role in digital marketing, influencer culture, and online learning in India
          </p>
        </div>
      </div>
    </div>
  );
}
