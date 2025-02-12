"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartToggle from "../component/CartToggle";
import { HeaderExplore } from "../component/header-explore";
import Menu from "../component/Menu";
import MobileMenu from "../component/MobileMenu";
import { useState } from "react";
import SearchToggle from "../component/SearchToggle";
export default function HeaderFour() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  return (
    <header className="header -type-4 -shadow bg-white border-bottom-light js-header">
      <div className="header__container py-10">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="header-left d-flex items-center">
              <div className="header__logo pr-30 xl:pr-20 md:pr-0">
                <Link href="/">
                  <Image
                    width={140}
                    height={50}
                    src="/assets/img/general/logo-dark.svg"
                    alt="logo"
                  />
                </Link>
              </div>

              <HeaderExplore allClasses="header__explore px-30 xl:px-20 -before-border -after-border xl:d-none" />

              <Menu
                headerPosition="pl-30 xl:pl-20"
                allClasses="menu__nav text-dark-1 -is-active"
              />
              <MobileMenu
                setActiveMobileMenu={setActiveMobileMenu}
                activeMobileMenu={activeMobileMenu}
              />
            </div>
          </div>

          <div className="col-auto">
            <div className="header-right d-flex items-center">
              <div className="header-right__icons text-white d-flex items-center">
                <SearchToggle
                  color={"text-dark-1"}
                  allClasses={"pr-20 sm:pr-15"}
                />

                <CartToggle allClasses="d-flex items-center text-dark-1" />

                <div className="d-none xl:d-block -before-border pl-20 sm:pl-15">
                  <button
                    onClick={() => setActiveMobileMenu(true)}
                    className="text-dark-1 items-center"
                    data-el-toggle=".js-mobile-menu-toggle"
                  >
                    <i className="text-11 icon icon-mobile-menu"></i>
                  </button>
                </div>
              </div>

              <div className="header-right__buttons d-flex items-center lg:d-none">
                <a
                  href="#"
                  className="button -underline text-dark-1 -before-border py-3 pl-30 xl:pl-20"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="button h-50 px-25 -purple-3 -rounded text-purple-1 ml-20"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
