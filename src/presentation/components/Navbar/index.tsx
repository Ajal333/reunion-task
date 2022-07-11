import React, { useState } from "react";
import { HiMailOpen } from "react-icons/hi";
import Buttons from "../Buttons";
import { CgMenuLeft, CgClose } from "react-icons/cg";

interface Link {
  text: string;
  active: boolean;
}

const NavLinks = ({ text, active }: Link) => (
  <p
    className={`cursor-pointer w-fit mx-2  flex items-center text-sm lg:text-[16px] transition-all ease-in-out duration-300 hover:text-primary hover:bg-gray-200  px-4 rounded-[4px] py-1 ${
      active && "bg-gray-200 text-primary"
    }`}
  >
    {text}
  </p>
);

const links: Link[] = [
  {
    text: "Rent",
    active: true,
  },
  {
    text: "Buy",
    active: false,
  },
  {
    text: "Sell",
    active: false,
  },
  {
    text: "Manage Property",
    active: false,
  },
  {
    text: "Resource",
    active: false,
  },
];

const Navbar = () => {
  const [navOpened, setNavOpened] = useState<boolean>(false);

  return (
    <header className="w-full relative bg-white px-8 py-4 shadow-sm flex items-center justify-between">
      <div className="flex flex-[0.5]">
        <div className="flex items-center mr-5 py-2">
          <HiMailOpen size={24} className="text-primary pb-1" />
          <h1 className="ml-1 font-semibold text-xl">Estatery</h1>
        </div>
        {window.innerWidth >= 768 ? (
          <nav className={`flex-1 flex justify-center`}>
            {links?.map((link, key) => (
              <NavLinks key={key} {...{ ...link }} />
            ))}
          </nav>
        ) : (
          navOpened && (
            <nav
              className={`absolute left-0 w-screen  z-50 bg-white top-[50px] py-4`}
            >
              {links?.map((link, key) => (
                <NavLinks key={key} {...{ ...link }} />
              ))}
              <div className="flex flex-col px-4 w-fit">
                <Buttons
                  variant="outline"
                  classname={"mr-4 my-4"}
                  text={"Login"}
                />
                <Buttons classname={"mr-4"} text={"Sign up"} />
              </div>
            </nav>
          )
        )}
      </div>
      {window.innerWidth <= 768 ? (
        <>
          {navOpened ? (
            <CgClose
              onClick={() => setNavOpened(!navOpened)}
              size={18}
              className="cursor-pointer"
            />
          ) : (
            <CgMenuLeft
              onClick={() => setNavOpened(!navOpened)}
              size={18}
              className="cursor-pointer"
            />
          )}
        </>
      ) : (
        <div>
          <Buttons variant="outline" classname={"mr-4"} text={"Login"} />
          <Buttons classname={"mr-4"} text={"Sign up"} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
