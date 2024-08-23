import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 sm:bg-transparent bg-white  z-50 grid place-items-center py-[14px]">
      <div className="container xl:w-[615px] bg-white rounded-[10px] p-3 sm:shadow-sm border-1 sm:border-[#E5E7EB] flex flex-row justify-between text-[#374151]">
        <div className="flex flex-row items-center gap-[40px]">
          <div className="Logo">
            <Image src="/logo.png" alt="logo" width={32} height={32}/>
          </div>
          <ul className="NavLinks hidden sm:flex flex-row items-center gap-8">
            <li className="leading-[24px] font-medium text-[16px] cursor-pointer">
              <Link href="#Feature">Features</Link>
            </li>
            <li className="leading-[24px] font-medium text-[16px] cursor-pointer">
              Resources
            </li>
            <li className="leading-[24px] font-medium text-[16px] cursor-pointer">
              Enterprise
            </li>
            <li className="leading-[24px] font-medium text-[16px] cursor-pointer">
              <Link href="#Pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="flex sm:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#4B5563"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="Registration hidden sm:flex flex-row items-center gap-8 ">
          <Link
            className="leading-[20px] font-medium text-[14px] bg-[#0072DE] text-white py-2 px-[14px] rounded-lg"
            href="/Login"
          >
            Try for free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
