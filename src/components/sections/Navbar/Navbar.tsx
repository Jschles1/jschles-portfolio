import Link from "next/link";
import { NavbarLink } from "@/lib/interfaces";
import NavbarLinkItem from "./NavbarLinkItem";

const navbarData: NavbarLink[] = [
  {
    id: 1,
    title: "Skills",
    to: "/",
  },
  {
    id: 2,
    title: "Professional Experience",
    to: "/professional-experience",
  },
  {
    id: 3,
    title: "Personal Projects",
    to: "/portfolio",
  },
  {
    id: 4,
    title: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
      <ul className="flex flex-wrap">
        {navbarData.map((el, id) => (
          <NavbarLinkItem el={el} key={id} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
