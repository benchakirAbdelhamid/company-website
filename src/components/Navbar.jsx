import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";

import brand from '../images/brand.png'

const links = [
  { id: 1, name: "Home", href: "#" },
  { id: 2, name: "About Us", href: "#" },
  { id: 3, name: "Services", href: "#" },
  { id: 4, name: "Features", href: "#" },
  { id: 5, name: "Project", href: "#" },
  { id: 6, name: "Clients", href: "#" },
  { id: 7, name: "Contact Us", href: "#" },
];

function NavList() {
  return (
    <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links?.map((link) => (
        <Typography
          key={link.id}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium text-blue-gray-400"
        >
          <a
            href={link.href}
            className="flex items-center hover:text-blue-700 transition-colors"
          >
            {link.name}
          </a>
        </Typography>
      ))}
      <LuFacebook style={{fontSize:'18px'}} className="icons-navbar cursor-pointer hover:text-blue-700 transition-colors" />
      <FiTwitter style={{fontSize:'18px'}}  className="icons-navbar cursor-pointer hover:text-blue-700 transition-colors"/>
      <SlSocialInstagram style={{fontSize:'18px'}} className="icons-navbar cursor-pointer hover:text-blue-700 transition-colors"/>
      <FiLinkedin style={{fontSize:'18px'}} className="icons-navbar cursor-pointer hover:text-blue-700 transition-colors"/>

    </ul>
  );
}

const NavbarMenu = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className=" navbar mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-600">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-1 cursor-pointer py-1.5"
        >
          <img src={brand} alt="brand" style={{width:'110px'}} />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
