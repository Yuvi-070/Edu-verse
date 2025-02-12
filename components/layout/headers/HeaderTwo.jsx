"use client";

import SearchToggle from "../component/SearchToggle";
import CartToggle from "../component/CartToggle";
import MobileMenu from "../component/MobileMenu";
import Menu from "../component/Menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Socials from "@/components/common/Socials";

export default function HeaderTwo() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`header -type-5 js-header ${
        scrollPosition > 40 ? "bg-dark-1" : ""
      } `}
    >
      <div className="d-flex items-center bg-purple-1 py-10">
        <div className="container">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div className="d-flex x-gap-40 y-gap-10 items-center">
                <div className="d-flex items-center text-white md:d-none">
                  <div className="icon-email mr-10"></div>
                  <div className="text13 lh-1">(00) 242 844 39 88</div>
                </div>
                <div className="d-flex items-center text-white">
                  <div className="icon-email mr-10"></div>
                  <div className="text13 lh-1">hello@educrat.com</div>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-30 y-gap-10">
                <div>
                  <div className="d-flex x-gap-20 items-center text-white">
                    <Socials textSize={"text-11"} />
                  </div>
                </div>

                <div className="d-flex items-center text-white text-13 sm:d-none">
                  English <i className="icon-chevron-down text-9 ml-10"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="header-left">
              <div className="header__logo ">
                <Link href="/">
                  <Image
                    width={140}
                    height={40}
                    src="/assets/img/general/logo.svg"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="header-right d-flex items-center">
              <Menu allClasses={"menu__nav text-white -is-active"} />
              <MobileMenu
                activeMobileMenu={activeMobileMenu}
                setActiveMobileMenu={setActiveMobileMenu}
              />

              <div className="header-right__icons text-white d-flex items-center ml-30">
                <SearchToggle />

                <CartToggle
                  parentClassess={"relative ml-30 xl:ml-20"}
                  allClasses={"d-flex items-center text-white"}
                />

                <div className="d-none xl:d-block ml-20">
                  <button
                    className="text-white items-center"
                    onClick={() => setActiveMobileMenu(true)}
                    data-el-toggle=".js-mobile-menu-toggle"
                  >
                    <i className="text-11 icon icon-mobile-menu"></i>
                  </button>
                </div>
              </div>

              <div className="header-right__buttons d-flex items-center ml-30 xl:ml-20 md:d-none">
                <Link href="/login" className="button -underline text-white">
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="button px-25 h-50 -white text-dark-1 -rounded ml-30 xl:ml-20"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
