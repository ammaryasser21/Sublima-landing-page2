import React from "react";
import Info from "./Info";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      className="Contact  py-[96px]  grid place-items-center"
      id="Contact"
    >
      <div className="grid sm:grid-cols-2 grid-cols-1 justify-center items-center bg-[#F9FAFB] rounded-[32px]">
      <div className="left flex flex-col xl:w-[544px] sm:pl-12 sm:text-start text-center">
        <Info
          title="Subscribe to our newsletter for insider access!"
          description="Join our community and never miss out on exciting opportunities."
          className="pb-8 sm:text-start text-center"
        />
        <div className="email flex flex-row flex-wrap gap-4 items-center sm:justify-start justify-center">
          <div className="border border-[#] px-[14px] py-3 flex flex-row items-center gap-2 rounded-[10px] bg-white w-full sm:w-fit">
            <Image src="/email.svg" alt="" width={20} height={20} />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="outline-none text-base"
            />
          </div>
          <Link href="mailto:ammaryasserqwertyu@gmail.com" type="tel" className="px-[20px] py-3 text-white bg-[#0072DE] rounded-[8px] text-base font-medium w-full sm:w-fit">
            Subscribe
          </Link>

        </div>
        <p className="pt-2 text-[#6B7280] text-sm ">We care about your data. Read our <span className="underline">privacy policy</span>.</p>

      </div>
      <div className=" justify-center items-end h-[372px] sm:flex hidden">
      <Image src="/contact.png" alt="" width={301} height={515}/>
      </div>

      </div>
      
    </section>
  );
};

export default Contact;
