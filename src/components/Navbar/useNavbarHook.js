import React, { useState, useEffect } from "react";

export const useNavbarHook = () => {
    const [menuBar, setMenuBar] = useState(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
   
    const handleMenubar = () => {
       setMenuBar(!menuBar);
    };
    const toggleSubMenu = (index) => {
       setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    };
   
   
    const closeMenuBar = () => {
        setMenuBar(!menuBar);
    }

    useEffect(() => {
     if (menuBar) {
       document.body.style.overflow = "hidden";
    } else {
       document.body.style.overflow = "auto";
    }
     return () => {
       document.body.style.overflow = "auto";
    };
   }, [menuBar]); 


   return {
     menuBar,
     openSubMenuIndex,
     handleMenubar,
     toggleSubMenu,
     closeMenuBar,
     setOpenSubMenuIndex
   }
}