export interface NavigationItem {
  text: string;
  link: string;
  bypassRouter: boolean;
};


export const navItems: NavigationItem[] = [
  // { text: "Skills", link: "/skills", bypassRouter: false },
  // { text: "Services", link: "/services", bypassRouter: false },
  { text: "Blog", link: "/blog", bypassRouter: false },
  { text: "About Me", link: "/pages/about-me", bypassRouter: false },
  { text: "Source", link: "https://github.com/joelj1995/joeljca-nextjs-rewrite", bypassRouter: true },
];