import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {navMenuData } from './Navbar.constants'

const MobileNavbar = ({closeMenuBar}) => {
const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
const [openSubMenuDrodownIndex, setOpenSubMenuDrodownIndex] = useState({ parent: null, sub: null });

 const toggleSubMenu = (index) => {
  setOpenSubMenuIndex(prev => (prev === index ? null : index));
  };

const subMenuToggleSubMenu = (parentIndex, subIndex) => {
  setOpenSubMenuDrodownIndex((prev) =>
    prev.parent === parentIndex && prev.sub === subIndex
      ? { parent: null, sub: null }
      : { parent: parentIndex, sub: subIndex }
  );
 setOpenSubMenuIndex(prev => (prev === subIndex ? null : subIndex));
};

const checkSubmenu = (index, subIndex, subMenu) => {
    if(subMenu.dropdown){
      subMenuToggleSubMenu(index, subIndex)
    } else {
        closeMenuBar()
    }
}

  return (
    <div className='md:hidden block'>
       {navMenuData.map((menu, index) => (
                <li
                    onClick={() => toggleSubMenu(index)}
                    key={index}
                    className="relative text-lg text-[18px] px-0 py-2 border-b"
                >
                    <span className="flex justify-between items-center gap-2 hover:bg-sky-700 duration-150 ease-in-out hover:text-white text-[#575757] py-[8px] rounded-[10px]">
                      <NavLink to={menu.url || "#"}>{menu.label}</NavLink>
                      {menu.subNavBar && (
                        <i className="fa-solid fa-chevron-down text-xs mt-[2px]"></i>
                      )}
                    </span>     
                    {menu.subNavBar && (
                      <ul
                        className={`${
                          openSubMenuIndex === index ? "block" : "hidden absolute left-0"
                        }  reletive top-full bg-white rounded-md py-2 !px-0 ${
                          menu.isCustomNavbar ? "w-full flex" : ""
                        }`}
                      >
                        {menu.isCustomNavbar ? (
                          <div className="p-0 bg-white  rounded-md">
                            {menu.subNavBar.map((submenuCategory, subIndex) => (
                              <div key={subIndex} className="px-0">
                                <h3 className="font-bold text-gray-700">
                                  {submenuCategory.title}
                                </h3>
                                <ul className="!px-0 mt-2">
                                  {submenuCategory.submenu.map((submenuItem, i) => (
                                    <li
                                      key={i}
                                      onClick={closeMenuBar}
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
                              onClick={() => checkSubmenu(index, subIndex, subMenu) }
                              className="relative px-0 py-1 hover:bg-[#0090d2] hover:text-white text-[#575757]"
                            >
                              <span className="flex items-center justify-between">
                                <NavLink to={subMenu.url}>{subMenu.label}</NavLink>
                                {subMenu.dropdown && (
                                  <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
                                )}
                              </span>

                              {subMenu.dropdown && (
                                <ul
                                  className={`${openSubMenuDrodownIndex.parent === index && openSubMenuDrodownIndex.sub === subIndex ? 'block': 'hidden' } showme bg-white rounded-md !px-0 py-2`}
                                >
                                  {subMenu.dropdown.map((dropItem, i) => (
                                    <li
                                      key={i}
                                      className="px-0 py-1 hover:bg-[#0090d2] hover:text-white text-[#575757]"
                                      onClick={closeMenuBar}
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
  )
}

export default MobileNavbar