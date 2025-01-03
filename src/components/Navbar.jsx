import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";
import { BsList } from "react-icons/bs";
import { Sidebar, Logo, Cart_Button } from "../components";
import { useProductsContext } from "../context/products_context";

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useProductsContext();
  const [state, set] = useState(false);
  return (
    <>
      <nav className="md: bg-zinc-300 py-4 xl:py-8">
        <div className="container mx-auto flex h-full flex-row items-center justify-center space-y-2 px-5 gap-[10rem]">
          {/* Logo */}
          <Logo className=" text-3xl " />
          {/* Menu items */}
          <div className="hidden space-x-10 text-sm uppercase md:flex">
            {navLinks.map((menu) => {
              const { id, title, url } = menu;
              return (
                <Link key={id} to={url}>
                  {" "}
                  {title}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex ">
            <Cart_Button />
          </div>

          {/* <section className=" flex w-full items-center justify-between pt-5 pb-2 md:hidden">
            <button
              type="button"
              aria-label="Open Sidebar"
              onClick={()=>set((x)=>!x)}
              className=" border border-black p-1 hover:border-primary hover:bg-primary hover:text-white "
            >
              <BsList className="h-6 w-6" />
            </button>
          </section> */}

          {/* <section className=" flex w-full items-center justify-between pt-5 pb-2 md:hidden  ">
            <button
              type="button"
              aria-label="Open Sidebar"
              onClick={openSidebar}
              className=" border border-black p-1 hover:border-primary hover:bg-primary hover:text-white "
            >
              <BsList className="h-6 w-6" />
            </button>
            <Cart_Button />
          </section>
           */}
        </div>
      </nav>
      {isSidebarOpen ? <Sidebar /> : null}
    </>
  );
};

export default Navbar;
