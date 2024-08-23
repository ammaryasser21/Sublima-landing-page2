import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="Hero-section flex items-center flex-col bg-[#F0F8FF] bg-[url('/bg.png')] bg-center rounded-3xl xl:w-[1300px] xl:h-[1103px] pt-16 pb-16 overflow-hidden">
      <div className="badge bg-[#FFFFFF] rounded-[16px] size-fit border-[#E5E7EB] border-[1px] flex items-center gap-1 p-1 pr-[10px]  ">
        <div className="bg-[#F9FAFB] rounded-[16px] border-[#E5E7EB] border-[1px] text-[#374151] font-medium text-[14px] leading-[20px] py-[2px] px-[14px]">
          ✨ v2.1
        </div>
        <span className="text-[#374151] font-medium text-[14px] leading-[20px]">
          Sublima UI v2.0 is out now!
        </span>
      </div>
      <h1 className="mt-8 text-[#111827] text-4xl sm:text-[60px] sm:leading-[72px] font-semibold xl:w-[768px] text-center">
        Discover a{" "}
        <span className="relative">
          new world
          <Image
            src="/heroLine.png"
            alt=""
            width={278.21}
            height={2.48}
            className="absolute left-0"
          />
        </span>{" "}
        of possibilities
      </h1>
      <p className="mt-[24px] sm:w-[590px] text-[18px] text-[#4B5563] leading-[28px] text-center">
        Empower your project with our comprehensive wireframe kits designed to
        meet the needs of any platform
      </p>
      <div className="buttons pt-8 flex sm:w-fit w-full sm:flex-row flex-col gap-6 items-center justify-center text-center px-4">
        <Link
          className="bg-[#0072DE] text-white sm:w-fit w-full rounded-[8px] leading-[24px] font-medium text-[16px] px-[20px] py-[12px] flex flex-row items-center justify-center text-center mx-4 gap-2"
          href="/signUp"
        >
          Launch app
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1666 5.83301L5.83325 14.1663M14.1666 5.83301H5.83325M14.1666 5.83301V14.1663"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className="img pt-[67px] relative px-4">
        <Image
          src="/hero.png"
          alt=""
          width={358}
          height={720.05}
          className="border-8px rounded-6 sm:w-full w-[256px]"
        />
        <div className="border-8px  rounded-6 top-[26%] sm:left-[73%] left-[50%] translate-y-[-50%] absolute cursor-pointer  flex items-center bg-white shadow-lg  gap-4 p-[6px] rounded-full  sm:w-[280px] w-[174px]">
         <div className="img grid place-items-center rounded-full  bg-[#DBEEFF] p-[10px]"> <Image
            src="/time.svg"
            alt=""
            width={28}
            height={28}
            className="border-8px rounded-6 sm:w-full w-[20px]"
          /></div>
          <span className="text-[#111827] font-semibold sm:text-base text-sm">Real time data</span>
         
        </div>
        <div className="border-8px rounded-6   top-[61%] sm:left-[-39%] left-[-10%]  translate-y-[-50%] absolute cursor-pointer flex items-center bg-white shadow-lg gap-4  p-[6px] rounded-full sm:w-[280px] w-[204px]">
          <div className="img  grid place-items-center  rounded-full bg-[#DBEEFF]  p-[10px]"><Image
            src="/analytics.svg"
            alt=""
            width={28}
            height={28}
            className="border-8px rounded-6 sm:w-full w-[20px]"
          /></div>
          <span className="text-[#111827] font-semibold sm:text-base text-sm">Advanced analytic</span>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
