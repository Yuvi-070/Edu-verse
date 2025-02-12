"use client";
import gsap from "gsap";
import Image from "next/image";

import React, { useEffect } from "react";

export default function AuthImageMove() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const parallaxIt = () => {
      const target = document.querySelectorAll(".js-mouse-move-container");

      target.forEach((container) => {
        const targets = container.querySelectorAll(".js-mouse-move");

        targets.forEach((el) => {
          const movement = el.getAttribute("data-move");

          document.addEventListener("mousemove", (e) => {
            const relX = e.pageX - container.offsetLeft;
            const relY = e.pageY - container.offsetTop;

            gsap.to(el, {
              x:
                ((relX - container.offsetWidth / 2) / container.offsetWidth) *
                Number(movement),
              y:
                ((relY - container.offsetHeight / 2) / container.offsetHeight) *
                Number(movement),
              duration: 0.2,
            });
          });
        });
      });
    };

    parallaxIt();
  }, []);
  return (
    <div className="form-page__img bg-dark-1">
      <div className="form-page-composition">
        <div className="-bg">
          <Image
            width={1250}
            height={1000}
            style={{ width: "100%" }}
            data-move="30"
            className="js-mouse-move"
            src="/assets/img/login/bg.png"
            alt="bg"
          />
        </div>
        <div className="-el-1">
          <Image
            width={1250}
            height={1000}
            style={{ width: "100%" }}
            data-move="20"
            className="js-mouse-move"
            src="/assets/img/home-9/hero/bg.png"
            alt="image"
          />
        </div>
        <div className="-el-2">
          <Image
            width={488}
            height={485}
            data-move="40"
            className="js-mouse-move"
            src="/assets/img/home-9/hero/1.png"
            alt="icon"
          />
        </div>
        <div className="-el-3">
          <Image
            width={108}
            height={108}
            data-move="40"
            className="js-mouse-move"
            src="/assets/img/home-9/hero/2.png"
            alt="icon"
          />
        </div>
        <div className="-el-4">
          <Image
            width={108}
            height={108}
            data-move="40"
            className="js-mouse-move"
            src="/assets/img/home-9/hero/3.png"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}
