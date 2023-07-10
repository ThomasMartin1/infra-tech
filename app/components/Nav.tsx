"use client";

import Link from "next/link";
import { useState } from "react";

interface Page {
  href: string;
  title: string;
}

const pages: Page[] = [
  { href: "/about", title: "About" },
  { href: "/team", title: "Our Team" },
  { href: "/projects", title: "Projects" },
  { href: "/services", title: "Services" },
  { href: "/careers", title: "Careers" },
];

export default function Nav() {
  const [state, setState] = useState("");

  return (
    <>
      <header className="flex sticky top-0 w-full justify-center">
        <nav className="m-4 p-3 w-full max-w-4xl">
          <div className="flex items-center w-full">
            <a href="/">
              <span className="sr-only">Logo</span>
              <img src="LogoHDMobile.png" alt="logo" className="h-14"></img>
            </a>
            <ul className="hidden sm:flex ml-auto gap-7">
              {pages.map(function (page) {
                return (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="uppercase font-[700] text-lg text-gray-700 hover:text-[#0F3367]
                    "
                    >
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="sm:hidden relative ml-auto">
              <button
                className="menu-toggle flex"
                aria-controls="menu"
                data-state={state}
                onClick={() => {
                  if (state == "") {
                    setState("true");
                  } else if (state == "true") {
                    setState("false");
                  } else {
                    setState("true");
                  }
                }}
              >
                <svg stroke="#4b5563" viewBox="0 0 100 100" width="40">
                  <line
                    className="line top"
                    x1="25"
                    y1="29.5"
                    x2="75"
                    y2="29.5"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="50"
                    strokeDashoffset="0"
                  ></line>
                  <line
                    className="line mid"
                    x1="25"
                    y1="50"
                    x2="75"
                    y2="50"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="50"
                    strokeDashoffset="0"
                  ></line>
                  <line
                    className="line bot"
                    x1="25"
                    y1="70.5"
                    x2="75"
                    y2="70.5"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="50"
                    strokeDashoffset="0"
                  ></line>
                </svg>
                <span className="sr-only">Open menu</span>
              </button>
            </div>
          </div>
          <div
            className={state === "true" ? "h-[172px] sm:hidden" : "h-0"}
            id="menu"
          >
            <ul className="text-center">
              {pages.map(function (page) {
                return (
                  <li key={page.href} className="my-2">
                    <Link
                      href={page.href}
                      onClick={() => {
                        if (state == "true") {
                          setState("false");
                        } else {
                          setState("true");
                        }
                      }}
                    >
                      <span
                        className={
                          "uppercase font-[700] text-lg text-gray-700 hover:text-[#0F3367] link-text " +
                          (state === "true" ? "link-text-show" : "hidden")
                        }
                      >
                        {page.title}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );

  function hide() {
    setTimeout(() => {
      const text = document.getElementsByClassName("link-text");
      for (let i = 0; i < text.length; i++) {
        text[i].className = text[i].className + " hidden";
      }
    }, 0);
    setHide();
  }

  function setHide() {
    setTimeout(() => {
      const text = document.getElementsByClassName("link-text");
      for (let i = 0; i < text.length; i++) {
        text[i].className = text[i].className.substring(
          0,
          text[i].className.length - 7
        );
      }
    }, 10);
  }
}
