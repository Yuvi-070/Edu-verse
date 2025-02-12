import React from "react";
import { brands } from "../../../data/brands";
import Image from "next/image";
export default function BrandsSix() {
  return (
    <>
      <section className="pt-45 pb-15 bg-dark-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col text-center">
              <p className="text-lg text-white">Trusted by the world’s best</p>
            </div>
          </div>

          <div className="row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50">
            {brands.map((logo, i) => (
              <div key={i} className="col-lg-auto col-md-3 col-sm-4 col-6">
                <div className="d-flex justify-center items-center px-4">
                  <Image
                    className="w-1/1"
                    src={logo && logo}
                    alt="clients image"
                    width={140}
                    height={90}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="svg-shape">
        <svg
          width="1925"
          height="261"
          viewBox="0 0 1925 261"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
            fill="#1A064F"
          />
        </svg>
      </div>
    </>
  );
}
