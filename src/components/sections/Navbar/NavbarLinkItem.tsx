"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarLink } from "@/lib/interfaces";
import { cn } from "@/lib/util";

const NavbarLinkItem = (props: { el: NavbarLink }) => {
  const pathname = usePathname();
  const { title, to } = props.el;
  const isActive = to === pathname;

  return (
    <li className="m-3 lg:mx-5">
      <Link
        href={to}
        className={cn(
          "text-medium hover:text-blue-600 text-gray-800",
          isActive && "text-blue-600"
        )}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavbarLinkItem;
