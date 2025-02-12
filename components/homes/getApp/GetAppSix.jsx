import React from "react";
import Image from "next/image";
export default function GetAppSix() {
  return (
    <section className="section-bg pt-80 pb-80 lg:pt-60 lg:pb-60 mb-80">
      <div className="section-bg__item bg-light-7"></div>
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-5 col-lg-6 col-md-10">
            <div className="pl-60 lg:pl-0">
              <h2 className="text-30 lh-12">Download the App</h2>
              <p className="mt-30">
                New features. New appearance. No risk
                <br className="lg:d-none" /> and credit card required.
              </p>
              <div className="app-content__buttons mt-30">
                <a href="#">
                  <Image
                    width={210}
                    height={60}
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/1.svg"
                    alt="button"
                  />
                </a>
                <a href="#">
                  <Image
                    width={210}
                    height={60}
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/2.svg"
                    alt="button"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <Image
              width={625}
              height={338}
              style={{ height: "100%", width: "100%" }}
              src="/assets/img/home-6/app/1.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
