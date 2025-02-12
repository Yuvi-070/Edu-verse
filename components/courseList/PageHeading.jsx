import React from "react";

export default function PageHeading() {
  return (
    <section className="page-header -type-1">
      <div className="container">
        <div className="page-header__content">
          <div className="row">
            <div className="col-auto">
              <div>
                <h1 className="page-header__title">User Interface Courses</h1>
              </div>

              <div>
                <p className="page-header__text">
                  Write an introductory description of the category.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
