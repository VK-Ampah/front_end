import React from "react";
import { useLocation, Link } from "react-router-dom";

const headerLinks = [
  { route: "/", label: "Home" },
  { route: "/search", label: "Search" },
  { route: "/profiles", label: "Profiles" },
];

const NavItems = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive ? "text-primary-500" : ""
            } flex-center p-medium-16 whitespace-nowrap text-white`}
          >
            <Link to={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
