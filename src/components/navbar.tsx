/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "@/styles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.flexCenter} ${styles.paddingX} bg-black md:bg-transparent fixed top-0 md:top-8 w-full z-100`}
    >
      <div className={`${styles.boxWidth}`}>
        <div className="w-full flex items-center justify-between py-4">
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={100} height={70} />
            </Link>
          </div>

          <ul className="list-none sm:flex hidden justify-end items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4">
            <Link
              href="/pricing"
              className="font-semibold text-base mr-10 cursor-pointer text-white"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="font-semibold text-base mr-10 cursor-pointer text-white"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-base cursor-pointer text-white"
            >
              Contact Us
            </Link>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center z-50">
            <img
              src={toggle ? "/close.svg" : "/menu.svg"}
              alt="menu"
              className="w-6 h-6 object-contain color-[#000] cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div
              className={`${
                toggle ? "flex" : "hidden"
              } bg-[#151414] shadow-2xl p-6 absolute top-16 right-0 my-2 w-full sidebar`}
            >
              <ul className="list-none flex flex-col gap-4 justify-end flex-1">
                <Link
                  href="/pricing"
                  className="font-normal text-base mb-2 cursor-pointer text-white"
                  onClick={() => setToggle(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="font-normal mb-2 text-base cursor-pointer text-white"
                  onClick={() => setToggle(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="font-normal mb-4 text-base cursor-pointer text-white"
                  onClick={() => setToggle(false)}
                >
                  Contact Us
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
