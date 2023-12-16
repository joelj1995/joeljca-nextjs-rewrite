"use client";
import Link from "next/link";
import HeaderNavLink from "./header-nav-link";
import ThemeToggle from "./theme-toggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/services/nav";

const lightHeaderClasses = "header navbar navbar-expand-lg bg-light shadow-sm shadow-dark-mode-none";
const darkHeaderClasses = "header navbar navbar-expand-lg bg-dark navbar-dark position-absolute navbar-sticky";

export default function Header({ forceDarkMode = false }: { forceDarkMode: boolean}) {

  const [showMenu, setShowMenu] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setShowMenu(false);
  }, [pathName]);

  return (
    <header className={forceDarkMode ? darkHeaderClasses : lightHeaderClasses}>
      <div className="container px-3">

        <Link
          className="navbar-brand pe-3"
          href="/">
          Joel Johnston
        </Link>

        <div
          id="navbar"
          className={`offcanvas offcanvas-end bg-dark ${showMenu ? 'show' : ''}`}>

          <div className="offcanvas-header border-bottom border-light">
            <h5 className="offcanvas-title text-white">Menu</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={() => setShowMenu(false)}>
            </button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((item, index) => (
                <HeaderNavLink navItem={item} key={index} />
              ))}
            </ul>
          </div>

        </div>

        <ThemeToggle />

        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setShowMenu(true)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas-backdrop fade show"
          style={{ display: showMenu ? 'block' : 'none' }}
          onClick={() => setShowMenu(false)}>
        </div>

      </div>
    </header>
  )
}