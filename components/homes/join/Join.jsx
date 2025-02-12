import React from "react";
import Link from "next/link";
export default function Join() {
  return (
    <section className="layout-pt-md layout-pb-md bg-purple-1">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-xl-4 col-lg-5">
            <h2 className="text-30 lh-15 text-white">
              Join more than
              <span className="text-green-1">8 million learners</span> worldwide
            </h2>
          </div>

          <div className="col-auto">
            <Link href="#" className="button -md -green-1 text-dark-1">
              Start Learning For Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
