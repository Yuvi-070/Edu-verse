import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">About Us</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    We’re on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between items-center">
            <div className="col-lg-6 pr-50 sm:pr-15">
              <div className="composition -type-8">
                <div className="-el-1">
                  <Image
                    width={300}
                    height={400}
                    src="/assets/img/about-1/1.png"
                    alt="image"
                  />
                </div>
                <div className="-el-2">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/img/about-1/2.png"
                    alt="image"
                  />
                </div>
                <div className="-el-3">
                  <Image
                    width={255}
                    height={250}
                    src="/assets/img/about-1/3.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <h2 className="text-30 lh-16">
                Welcome to Educrat Enhance your skills with best Online courses
              </h2>
              <p className="text-dark-1 mt-30">
                You can start and finish one of these popular courses in under a
                day – for free! Check out the list below.. Take the course for
                free
              </p>
              <p className="pr-50 lg:pr-0 mt-25">
                Neque convallis a cras semper auctor. Libero id faucibus nisl
                tincidunt egetnvallis a cras semper auctonvallis a cras semper
                aucto. Neque convallis a cras semper auctor. Liberoe convallis a
                cras semper atincidunt egetnval
              </p>
              <div className="d-inline-block">
                <Link
                  href="/signup"
                  className="button -md -purple-1 text-white mt-30"
                >
                  Start Learning For Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
