"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: "fas fa-home" },
    { name: "About", href: "/about", icon: "fas fa-user" },
    { name: "Projects", href: "/projects", icon: "fas fa-code" },
    { name: "Contact", href: "/contact", icon: "fas fa-envelope" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 md:px-[10%] py-5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] sticky top-0 z-50">
      <div className="font-extrabold text-2xl text-blue-600">CodeCrizzz</div>

      <input
        type="checkbox"
        id="menu-toggle"
        className="hidden"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      
      <label
        htmlFor="menu-toggle"
        className="block md:hidden z-[2001] cursor-pointer text-2xl text-blue-600 transition-transform duration-400 peer-checked:rotate-90 peer-checked:fixed peer-checked:right-[10%]"
      >
        <i className="fas fa-bars"></i>
      </label>

      <ul
        className={`flex gap-[30px] list-none md:flex-row flex-col md:static fixed top-0 md:h-auto h-screen md:w-auto w-[65%] md:bg-transparent bg-white/98 backdrop-blur-md md:p-0 pt-20 px-8 transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] z-[2000] md:shadow-none shadow-[-5px_0_20px_rgba(0,0,0,0.1)] ${
          isOpen ? "right-0" : "-right-full md:right-auto"
        }`}
      >
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name} className="w-full md:w-auto">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 md:text-gray-600 text-slate-800 font-semibold md:text-base text-lg md:p-1 p-3 md:bg-transparent bg-slate-100 rounded-lg md:rounded-none relative transition-all duration-300 md:hover:bg-transparent hover:bg-blue-600 hover:text-white md:hover:text-blue-600 md:hover:translate-x-0 hover:translate-x-[5px] group ${
                  isActive ? "md:text-blue-600 bg-blue-600 text-white md:bg-transparent" : ""
                }`}
              >
                <i className={`${link.icon} w-5 text-center md:hidden block`}></i>
                {link.name}
                <span
                  className={`hidden md:block absolute w-full h-[2px] bottom-0 left-0 bg-blue-600 origin-bottom-right transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"
                  }`}
                ></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
