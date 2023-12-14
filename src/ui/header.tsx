import Link from "next/link";
import HeaderNavLink from "./header-nav-link";
import ThemeToggle from "./theme-toggle";

export interface NavigationItem {
  text: string;
  link: string;
  bypassRouter: boolean;
};

const navItems: NavigationItem[] = [
  {text: "Services", link: "/services", bypassRouter: false},
  {text: "Blog", link: "/blog", bypassRouter: false},
  {text: "About Me", link: "/pages/about-me", bypassRouter: false},
  {text: "Source", link: "https://github.com/joelj1995/joeljdotca", bypassRouter: true},
];

export default function Header() {

  return (
    <header className="header navbar navbar-expand-lg bg-light shadow-dark-mode-none shadow-sm">
      <div className="container px-3">

        <Link
          className="navbar-brand pe-3"
          href="/">
          Joel Johnston
        </Link>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navItems.map((item, index) => (
            <HeaderNavLink navItem={item} key={index} />
          ))}
        </ul>

        <ThemeToggle />

      </div>
    </header>
  )
}