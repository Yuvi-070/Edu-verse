import React from "react";
import Image from "next/image";
import { brands } from "@/data/brands";
export default function BrandsTwo() {
  return (
    <section className="layout-pt-sm layout-pb-sm bg-light-6">
      <div className="container">
        <div className="row y-gap-30 justify-between sm:justify-start items-center">
          {brands.map((elm, i) => (
            <div key={i} className="col-lg-auto col-md-2 col-sm-3 col-4">
              <div className="d-flex justify-center items-center px-4">
                <Image
                  width={140}
                  height={90}
                  style={{ objectFit: "contain" }}
                  className="w-1/1"
                  src={elm}
                  alt="clients image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
