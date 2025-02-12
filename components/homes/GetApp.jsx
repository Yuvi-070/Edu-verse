import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function GetApp() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-3">
      <div className="container">
        <div className="row y-gap-20 items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="app-image">
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
              <h2 className="app-content__title">
                Learn From
                <br /> <span>Anywhere</span>
              </h2>
              <p className="app-content__text">
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
                  />
                </Link>
                <Link href="#">
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
