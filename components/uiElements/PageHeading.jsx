import React from "react";

export default function PageHeading() {
  return (
    <section className="page-header -type-1">
      <div className="container">
        <div className="page-header__content">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div>
                <h1 className="page-header__title">UI Elements</h1>
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
  );
}
