import React, { useState } from "react";
import Navbar from "./Navbar";
const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  
  return (
    // <header className="fixed top-0 right-0 w-full h-20 flex items-center z-40
    // bg-gradient-to-b from-zinc-900 to-zinc-900/0 text-white">
    //   <div className="max-w-screen-2xl w-full mx-auto px-4
    //   flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
    //   <div className="relative md:justify-self-center">
    //     <button className="menu-btn md:hidden" onClick={
    //         () => setNavOpen((prev) => !prev)
    //     }>
    //       <span className="material-symbols-rounded">
    //         {/* <i class="fa-solid fa-bars"></i> */}
    //         {navOpen ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
    //         </span>
    //     </button>
    //     <Navbar navOpen={navOpen}/> 
    //   </div>
    //   <a href="#contact" className="max-md:hidden btn btn-primary text-white
    //    md:justify-self-end">
    //    Contact Me
    //   </a>
    //   </div>
    // </header>
    <header className="fixed top-0 right-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 text-white">
    <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-end md:px-6">
      <div className="relative parent">
        <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
          <span>
            {navOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </span>
        </button>
        <Navbar navOpen={navOpen}/> 
      </div>
      
      <a 
  href="#contact" 
  className="max-md:hidden inline-flex items-center justify-center px-6 py-2 
  rounded-full bg-gray-700 text-white font-medium shadow-md 
  transition-all duration-300 whitespace-nowrap 
  hover:bg-gray-600 hover:shadow-lg active:bg-gray-500 active:scale-95 ml-4"
>
  Contact Me !
</a>


    </div>
  </header>
  );
};

export default Header;
