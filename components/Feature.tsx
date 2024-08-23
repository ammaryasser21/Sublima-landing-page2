import React from "react";
import Info from "./Info";
import Image from "next/image";

const Feature = () => {
  return (
    <section
      className="Feature hidden  sm:flex flex-col gap-16 justify-center items-center py-[96px]"
      id="Feature"
    >
      <Info
        subTitle="Features"
        title="Everything you need for scalability"
        description="Maximize success with our flexible product features. Customize, stay compatible across platforms, and receive reliable support for optimized performance."
        className=" lg:w-[768px] text-center "
      />
      <div className="grid xl:grid-cols-2  grid-cols-1 gap-6 xl:w-[1216px] justify-center items-stretch">
        <div className="bg-[#F9FAFB] rounded-[10px] p-8 pr-0 flex flex-col gap-6 border-[1px] border-[#E5E7EB]">
          <div className="content pr-8">
            <h3 className="text-[#111827] text-[20px] leading-[30px] font-semibold">Real time data</h3>
            <p className="text-[#4B5563] text-[18px] leading-[28px]">Leverage real-time insights for well-informed decisions. Track key metrics based on data-driven analysis.</p>
          </div>
          <div className="images overflow-hidden flex items-center gap-6">
          <Image src="/f1.png" alt="" width={220} height={246}/>
          <Image src="/f2.png" alt="" width={320} height={246}/>
          </div>
        </div>
        <div className="bg-[#F9FAFB] rounded-[10px] p-8 pr-0 flex flex-col gap-6 border-[1px] border-[#E5E7EB]">
          <div className="content pr-8">
            <h3 className="text-[#111827] text-[20px] leading-[30px] font-semibold">Data visualization</h3>
            <p className="text-[#4B5563] text-[18px] leading-[28px]">Simplify data visualization. Choose intuitive charts and interactive graphs for.</p>
          </div>
          <div className="images pr-8">
            <Image src="/f3.png" alt="" width={528} height={246}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
