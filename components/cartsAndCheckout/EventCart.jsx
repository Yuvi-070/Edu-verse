"use client";

import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { useContextElement } from "@/context/Context";
import Link from "next/link";

export default function EventCart() {
  const { cartEvents, setCartEvents } = useContextElement();
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleIncrease = (index) => {
    const item = cartEvents[index];

    item.quantity += 1;
    const updated = [...cartEvents];
    updated[index] == item;

    setCartEvents(updated);
  };
  const handleDecrease = (index) => {
    const item = cartEvents[index];

    if (item.quantity > 1) {
      item.quantity -= 1;
      const updated = [...cartEvents];
      updated[index] == item;

      setCartEvents(updated);
    }
  };

  const handleRemoveCart = (index) => {
    const item = cartEvents[index];

    setCartEvents((pre) => [...pre.filter((elm) => elm !== item)]);
  };
  useEffect(() => {
    const sum = cartEvents.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    setTotalPrice(sum);
  }, [cartEvents]);

  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Event Cart</h1>
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
          <div className="row justify-end">
            <div className="col-12">
              <div className="px-30 pr-60 py-25 rounded-8 bg-light-6 md:d-none">
                <div className="row justify-between">
                  <div className="col-md-4">
                    <div className="fw-500 text-purple-1">Product</div>
                  </div>
                  <div className="col-md-2">
                    <div className="fw-500 text-purple-1">Price</div>
                  </div>
                  <div className="col-md-2">
                    <div className="fw-500 text-purple-1">Quantity</div>
                  </div>
                  <div className="col-md-2">
                    <div className="fw-500 text-purple-1">Subtotal</div>
                  </div>
                  <div className="col-md-1">
                    <div className="d-flex justify-end">
                      <div className="fw-500 text-purple-1">Remove</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-30 pr-60 md:px-0">
                {cartEvents.map((elm, i) => (
                  <div
                    key={i}
                    className="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light"
                  >
                    <div className="col-md-4">
                      <div className="d-flex items-center">
                        <div className="">
                          <div
                            className="size-100 bg-image rounded-8 js-lazy"
                            style={{ backgroundImage: `url(${elm.imgSrc})` }}
                          ></div>
                        </div>
                        <div className="fw-500 text-dark-1 ml-30">
                        <Link
                          className="linkCustom"
                          href={`/events/${elm.id}`}
                        >
                          {elm.title}{" "}
                        </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-2 md:mt-15">
                      <div className="">
                        <div className="shopCart-products__title d-none md:d-block mb-10">
                          Price
                        </div>
                        <p>${elm.price}</p>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="">
                        <div className="shopCart-products__title d-none md:d-block mb-10">
                          Quantity
                        </div>

                        <div className="input-counter md:mt-20 js-input-counter">
                          <input
                            required
                            className="input-counter__counter"
                            type="number"
                            placeholder="value..."
                            value={elm.quantity}
                          />

                          <div className="input-counter__controls">
                            <button
                              className="input-counter__up js-down"
                              onClick={() => handleDecrease(i)}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>

                            <button
                              className="input-counter__down js-up"
                              onClick={() => handleIncrease(i)}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-1">
                      <div className="">
                        <div className="shopCart-products__title d-none md:d-block mb-10">
                          Subtotal
                        </div>

                        <p>${(elm.quantity * elm.price).toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="col-md-1">
                      <div
                        className="md:d-none d-flex justify-end"
                        onClick={() => handleRemoveCart(i)}
                      >
                        <FontAwesomeIcon icon={faX} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="shopCart-footer px-16 mt-30">
                {cartEvents.length > 0 ? (
                  <div className="row justify-between y-gap-30">
                    <div className="col-xl-5">
                      <form className="" onSubmit={handleSubmit}>
                        <div className="d-flex justify-between border-dark">
                          <input
                            required
                            className="rounded-8 px-25 py-20"
                            type="text"
                            placeholder="Coupon Code"
                          />
                          <button className="text-black fw-500" type="submit">
                            Apply coupon
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="col-auto">
                      <div className="shopCart-footer__item">
                        <button className="button -md -purple-3 text-purple-1">
                          Update cart
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row justify-center pt-60 lg:pt-40">
                    <div className="col-auto">
                      <Link
                        href="/event-list-1"
                        className="button -md -outline-purple-1 text-purple-1"
                      >
                        Buy Events
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-xl-4 col-lg-5 layout-pt-lg">
              <div className="py-30 bg-light-4 rounded-8 border-light">
                <h5 className="px-30 text-20 fw-500">Cart Totals</h5>

                <div className="d-flex justify-between px-30 item mt-25">
                  <div className="py-15 fw-500 text-dark-1">Subtotal</div>
                  <div className="py-15 fw-500 text-dark-1">
                    ${totalPrice.toFixed(2)}
                  </div>
                </div>

                <div className="d-flex justify-between px-30 item border-top-dark">
                  <div className="pt-15 fw-500 text-dark-1">Total</div>
                  <div className="pt-15 fw-500 text-dark-1">
                    ${totalPrice.toFixed(2)}
                  </div>
                </div>
              </div>

              <Link
                href="/event-checkout"
                className="button -md -purple-1 text-white col-12 mt-30"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
