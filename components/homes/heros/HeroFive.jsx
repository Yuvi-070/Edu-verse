import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function HeroFive() {
  return (
    <section className="masthead -type-4">
      <div className="container">
        <div className="row y-gap-50 justify-center items-center">
          <div
            className="col-xl-5 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="masthead__content">
              <h1 className="masthead__title">
                Master the Skills to Drive your{" "}
                <span className="text-purple-1 underline">Career</span>
              </h1>
              <p className="masthead__text pt-15">
                Free online courses from the world’s leading experts.
                <br className="md:d-none" />
                Join 17 million learners today
              </p>
              <div className="masthead__button row x-gap-20 y-gap-20 pt-30">
                <div className="col-auto">
                  <Link
                    href="/signup"
                    className="button -md -purple-1 -rounded text-white"
                  >
                    Join For Free
                  </Link>
                </div>
                <div className="col-auto">
                  <Link
                    href="/courses-list-1"
                    className="button -md -outline-dark-1 -rounded text-dark-1"
                  >
                    Find Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-6 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="750"
          >
            <div className="masthead__image">
              <Image
                width={700}
                height={410}
                src="/assets/img/home-5/masthead/bg.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
