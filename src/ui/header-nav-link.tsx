import Link from "next/link";
import { NavigationItem } from "@/lib/services/nav";

export default function HeaderNavLink({ navItem }: { navItem: NavigationItem }) {
  return (
    <li className="nav-item">
      <Link
        className="nav-link"
        target={navItem.bypassRouter ? "_blank" : ""}
        href={navItem.link}>
        {navItem.text}
      </Link>
    </li>
  )
}