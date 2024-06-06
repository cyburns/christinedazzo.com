"use client";

import React, { useState } from "react";
import ThemeSwitch from "./theme-switch";
import Link from "next/link";
import {
  GitHub,
  LinkedIn,
  Language,
  Groups,
  Assignment,
} from "@mui/icons-material";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

const Header = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header
      id="header"
      className={
        isMobileMenuOpen
          ? "active border-opacity-20 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          : " border-opacity-20 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      }
    >
      <div className="container m-10">
        <nav className="nav text-black dark:text-white ">
          <ul className="nav-list nav-list-larger">
            {links.map((link, index) => (
              <li
                className="flex items-center justify-center w-[62vw] sm:w-[95vw]"
                key={link.hash}
              >
                <Link
                  key={index}
                  href={link.hash}
                  onClick={() => {
                    toggleMobileMenu(false);
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className="nav-link hover:text-gray-700 dark:hover:text-gray-400 "
                >
                  {link.name}
                  <div className="bg-gray-900 dark:bg-gray-200 w-96 h-[2px] rounded-xl bg-opacity-30 dark:bg-opacity-30 flex items-center justify-center" />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="nav-list nav-list-mobile flex">
            <li className="left nav-item">
              <a href="/" className="nav-link nav-link-cb"></a>
            </li>
            <li className="right nav-item">
              <div
                className="mobile-menu"
                onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
              >
                <span className="line line-top bg-gray-500 dark:bg-gray-300"></span>
                <span className="line line-bottom bg-gray-500 dark:bg-gray-300"></span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
