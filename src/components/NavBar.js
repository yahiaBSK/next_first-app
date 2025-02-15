"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./toggleTheme";
// import ThemeToggleButton from "./toggleTheme";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { link: "/", name: "Home" },
    { link: "/products", name: "Products" },
  ];

  return (
    <nav className="navBar w-full dark:bg-black bg-white border-white/25 px-4 py-6 sticky top-0 z-50">
      <div className="mainNavbarDiv flex flex-row gap-4 justify-center items-center">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Vercel logo"
            width={90}
            height={30}
            priority
          />
        </Link>

        <div className="centerItemsDiv flex flex-row justify-center items-center m-auto">
          {links.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              className={` py-2 px-4 font-bold
                ${
                  pathname === link.link
                    ? "bg-[linear-gradient(to_right,#f6d365,#fda085)] rounded-full text-black font-bold"
                    : ""
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="lastItemsDiv">
          <Link href="/">
            <Image
              className="light:invert"
              src="/vercel.svg"
              alt="Vercel logo"
              width={30}
              height={30}
              priority
            />
          </Link>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </nav>
  );
}
