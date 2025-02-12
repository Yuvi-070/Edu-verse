import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function GetApp() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-3">
      <div className="container">
        <div className="row y-gap-20 items-center">
          <div className="col-xl-7 col-lg-7">
            <div
              className="app-image"
              data-aos="fade-up"
              data-aos-duration={400}
            >
              <Image
                width={700}
                height={500}
                style={{ height: "100%", width: "100%" }}
                src="/assets/img/app/1.png"
                alt="image"
              />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="app-content">
              <h2
                className="app-content__title"
                data-aos="fade-up"
                data-aos-duration={500}
              >
                Learn From
                <br /> <span>Anywhere</span>
              </h2>
              <p
                className="app-content__text"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                Take classes on the go with the educrat app. Stream or download
                to watch on the plane, the subway, or wherever you learn best.
              </p>
              <div className="app-content__buttons">
                <Link href="#">
                  <Image
                    width={210}
                    height={60}
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/1.svg"
                    alt="button"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  />
                </Link>
                <Link href="#">
                  <Image
                    width={190}
                    height={60}
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/2.svg"
                    alt="button"
                    data-aos="fade-up"
                    data-aos-duration={600}
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
