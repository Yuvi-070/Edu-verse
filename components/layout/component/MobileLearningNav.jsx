"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContextElement } from "@/context/Context";

const items = [
  { href: "/", label: "Home", icon: "icon-home" },
  { href: "/courses-list-5", label: "Search", icon: "icon-search" },
  { href: "/saved", label: "Saved", icon: "icon-bookmark" },
  { href: "/ai-recommender", label: "AI", icon: "icon-star" },
];

export default function MobileLearningNav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useContextElement();

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        className="edu-verse-theme-toggle"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <i className={theme === "dark" ? "icon-sun" : "icon-moon"}></i>
      </button>
      <nav className="edu-verse-mobile-nav" aria-label="Mobile learning navigation">
        {items.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "is-active" : ""}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
