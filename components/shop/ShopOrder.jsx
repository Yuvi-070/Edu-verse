"use client";

import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useContextElement } from "@/context/Context";
export default function ShopOrder() {
  const { cartProducts } = useContextElement();
  const [totalPrice, setTotalPrice] = useState(0);
  const [shiping, setShiping] = useState(0);
  useEffect(() => {
    const sum = cartProducts.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    const sumQuantity = cartProducts.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);
    setShiping(sumQuantity * 10);
    setTotalPrice(sum);
  }, [cartProducts]);
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Shop Order</h1>
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
          <div className="row no-gutters justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="shopCompleted-header">
                <div className="icon">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <h2 className="title">Your order is completed!</h2>
                <div className="subtitle">
                  Thank you. Your order has been received.
                </div>
              </div>

              <div className="shopCompleted-info">
                <div className="row no-gutters y-gap-32">
                  <div className="col-md-3 col-sm-6">
                    <div className="shopCompleted-info__item">
                      <div className="subtitle">Order Number</div>
                      <div className="title text-purple-1 mt-5">13119</div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
                    <div className="shopCompleted-info__item">
                      <div className="subtitle">Date</div>
                      <div className="title text-purple-1 mt-5">27/07/2021</div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
                    <div className="shopCompleted-info__item">
                      <div className="subtitle">Total</div>
                      <div className="title text-purple-1 mt-5">$40.10</div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
                    <div className="shopCompleted-info__item">
                      <div className="subtitle">Payment Method</div>
                      <div className="title text-purple-1 mt-5">
                        Direct Bank Transfer
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shopCompleted-footer bg-light-4 border-light rounded-8">
                <div className="shopCompleted-footer__wrap">
                  <h5 className="title">Order details</h5>

                  <div className="item">
                    <span className="fw-500">Product</span>
                    <span className="fw-500">Subtotal</span>
                  </div>
                  {cartProducts.map((elm, i) => (
                    <div
                      key={i}
                      className={`item  ${i != 0 ? "-border-none" : ""} `}
                    >
                      <span className="">
                        {elm.name} x {elm.quantity}
                      </span>
                      <span className="">
                        ${(elm.price * elm.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}

                  <div className="item -border-none">
                    <span className="fw-500">Subtotal</span>
                    <span className="fw-500">${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="item">
                    <span className="fw-500">Shipping</span>
                    <span className="fw-500">${shiping.toFixed(2)}</span>
                  </div>

                  <div className="item">
                    <span className="fw-500">Total</span>
                    <span className="fw-500">
                      ${(totalPrice + shiping).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
