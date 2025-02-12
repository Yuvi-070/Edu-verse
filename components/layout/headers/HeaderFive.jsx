"use client";

import React, { useState } from "react";
import CartToggle from "../component/CartToggle";
import { HeaderExplore } from "../component/header-explore";
import Menu from "../component/Menu";
import MobileMenu from "../component/MobileMenu";
import Image from "next/image";
import Link from "next/link";

export default function HeaderFive() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header
      data-add-bg=""
      className="header -type-4 -shadow bg-white js-header"
    >
      <div className="header__container border-bottom-light py-10">
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

              <HeaderExplore
                allClasses={
                  "header__explore px-30 xl:px-20 -before-border -after-border xl:d-none"
                }
              />
              <Menu
                headerPosition={"pl-30 xl:pl-20"}
                allClasses={"menu__nav text-dark-1 -is-active"}
              />
              <MobileMenu
                activeMobileMenu={activeMobileMenu}
                setActiveMobileMenu={setActiveMobileMenu}
              />
            </div>
          </div>

          <div className="col-auto">
            <div className="header-right d-flex items-center">
              <div className="header-right__icons text-white d-flex items-center">
                <div className="header-search-field">
                  <form onSubmit={handleSubmit}>
                    <div className="header-search-field__group">
                      <input
                        required
                        type="text"
                        placeholder="What do you want to learn?"
                      />
                      <button type="submit">
                        <i className="icon icon-search"></i>
                      </button>
                    </div>
                  </form>
                </div>

                <CartToggle
                  allClasses={"d-flex items-center text-dark-1"}
                  parentClassess={"relative -after-border pl-20 sm:pl-15"}
                />

                <div className="d-none xl:d-block pl-20 sm:pl-15">
                  <button
                    onClick={() => setActiveMobileMenu(true)}
                    className="text-dark-1 items-center"
                    data-el-toggle=".js-mobile-menu-toggle"
                  >
                    <i className="text-11 icon icon-mobile-menu"></i>
                  </button>
                </div>
              </div>

              <div className="header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none">
                <Link href="/login" className="button -underline text-purple-1">
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="button h-50 px-30 -purple-1 -rounded text-white ml-20"
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
