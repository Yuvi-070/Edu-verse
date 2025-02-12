import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function GetAppFive() {
  return (
    <section className="layout-pt-lg layout-pb-lg ">
      <div className="container">
        <div className="row y-gap-20 items-center">
          <div
            className="col-xl-7 col-lg-7"
            data-aos="fade-up"
            data-aos-duration={300}
          >
            <div className="app-image">
              <Image
                width={550}
                height={430}
                src="/assets/img/home-5/apps/img.png"
                alt="image"
              />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="app-content">
              <h2 className="app-content__title" data-aos="fade-up">
                Learn From
                <br /> <span>Anywhere</span>
              </h2>
              <p className="app-content__text" data-aos="fade-up">
                Take classes on the go with the educrat app. Stream or download
                to watch on the plane, the subway, or wherever you learn best.
              </p>
              <div className="app-content__buttons">
                <Link data-aos="fade-up" data-aos-duration={400} href="#">
                  <Image
                    width={210}
                    height={60}
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/1.svg"
                    alt="button"
                  />
                </Link>
                <Link data-aos="fade-up" data-aos-duration={400} href="#">
                  <Image
                    width={190}
                    height={60}
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/2.svg"
                    alt="button"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
