import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import {navMenuData} from './Navbar.constants';
import { useNavbarHook } from "./useNavbarHook";

const Navbar = ({ onGetQuoteClick }) => {
  const {closeMenuBar,handleMenubar,menuBar,openSubMenuIndex,toggleSubMenu} = useNavbarHook()
  return (
    <nav className="w-full fixed sm:top-0 bg-white py-3 md:flex items-center justify-between px-5 z-9999 shadow-md absolute">
      {/* Logo */}
      <span className="max-w-[200px] inline-block">
        <NavLink to="Home" title="Grand Ortus - Home">
          <img src="/assets/logo.svg" alt="logo" />
        </NavLink>
      </span>

      {/* Mobile Menu Icon */}
      <span
        className="md:hidden absolute right-8 top-6 cursor-pointer"
        onClick={handleMenubar}
      >
        <i
          className={`fa-solid ${
            menuBar ? "fa-xmark" : "fa-bars"
          } transition-all duration-500 ease-in`}
        ></i>
      </span>

      {/* Navigation Menu */}
      <ul
        className={`absolute  ${menuBar ? 'h-dvh overflow-y-auto' : ''}   bg-white left-0 w-full md:flex md:static transition-all duration-500 ease-in justify-center ${
          menuBar ? "block" : "hidden"
        }`}
      >
        <div className="md:flex hidden">
        {navMenuData.map((menu, index) => (
          <li
            onClick={() => toggleSubMenu(index)}
            key={index}
            className="relative group text-lg text-[18px] px-4 py-2"
          >
            <span className="flex items-center gap-2 hover:bg-sky-700 duration-150 ease-in-out hover:text-white text-[#575757] p-[8px] rounded-[10px]">
              <NavLink to={menu.url || "#"}>{menu.label}</NavLink>
              {menu.subNavBar && (
                <i className="fa-solid fa-chevron-down text-xs mt-[2px]"></i>
              )}
            </span>

            {/* Submenu */}

            {menu.subNavBar && (
              <ul
                className={`${
                  openSubMenuIndex === index ? "" : ""
                }  hidden absolute left-0 top-full group-hover:block bg-white rounded-md py-2 ${
                  menu.isCustomNavbar ? "w-full flex" : "w-60"
                }`}
              >
                {menu.isCustomNavbar ? (
                  <div className="flex md:w-[754px] left-[-200px] top-0 absolute p-4 bg-white shadow-md rounded-md">
                    {menu.subNavBar.map((submenuCategory, subIndex) => (
                      <div key={subIndex} className="px-2">
                        <h3 className="font-bold text-gray-700">
                          {submenuCategory.title}
                        </h3>
                        <ul className="mt-2">
                          {submenuCategory.submenu.map((submenuItem, i) => (
                            <li
                              key={i}
                              className="px-1 py-1 text-lg text-[18px] text-[#575757] hover:bg-[#0090d2] hover:text-white"
                            >
                              <NavLink to={submenuItem.url}>
                                {submenuItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  menu.subNavBar.map((subMenu, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative dropitem px-4 py-1 hover:bg-[#0090d2] hover:text-white text-[#575757] group"
                    >
                      <span className="flex items-center justify-between">
                        <NavLink to={subMenu.url}>{subMenu.label}</NavLink>
                        {subMenu.dropdown && (
                          <i className="fa-solid fa-chevron-right text-xs ml-2"></i>
                        )}
                      </span>

                      {/* Nested Dropdown */}
                      {subMenu.dropdown && (
                        <ul
                          className={`absolute left-full top-[-8px] hidden showme bg-white shadow-md rounded-md w-70 py-2`}
                        >
                          {subMenu.dropdown.map((dropItem, i) => (
                            <li
                              key={i}
                              className="px-2 py-1 hover:bg-[#0090d2] hover:text-white text-[#575757]"
                            >
                              <NavLink to={dropItem.url}>
                                {dropItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))
                )}
              </ul>
            )}
          </li>
        ))}
        </div>
        <MobileNavbar closeMenuBar={closeMenuBar} />
      </ul>

      {/* Call to Action Button */}
      <button
        className="lg:block hidden bg-[#0090d2] text-white font-[Poppins] py-2 px-6 text-nowrap rounded hover:bg-[#87d9ff] cursor-pointer duration-500"
        onClick={onGetQuoteClick}
      >
        Get a quote
      </button>
    </nav>
  );
};

export default Navbar;
