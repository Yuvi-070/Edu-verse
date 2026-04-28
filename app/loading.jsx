import React from "react";

export default function Loading() {
  return (
    <div className="edu-verse-skeleton-page">
      <div className="container">
        <div className="edu-verse-skeleton -hero"></div>
        <div className="row y-gap-25 mt-30">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="col-lg-3 col-md-6">
              <div className="edu-verse-skeleton -card"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
