import React from "react";
import Info from "./Info";
import f1 from "@/public/f1.svg";
import f2 from "@/public/f2.svg";
import f3 from "@/public/f3.svg";
import Image from "next/image";
const cards = [
  {
    svg: f1,
    title: "Real time data",
    describe:
      "Leverage real-time insights for well-informed decisions. Track key metrics based on data-driven analysis.",
  },
  {
    svg: f2,
    title: "Data visualization",
    describe:
      "Simplify data visualization. Choose intuitive charts and interactive graphs for clear presentation.",
  },
  {
    svg: f3,
    title: "Advanced analytic",
    describe:
      "Advanced analytics for deeper insights. Discover patterns and hidden insights through data segmentation",
  },
];
const mobileFeature = () => {
  return (
    <section
      className="Feature  flex flex-col gap-12 justify-center items-center py-[96px] sm:hidden"
      id="Feature"
    >
      <Info
        subTitle="Features"
        title="Everything you need for scalability"
        description="Maximize success with our flexible product features. Customize, stay compatible across platforms, and receive reliable support for optimized performance."
              className="sm:w-[768px]"
      />
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 xl:w-[1216px] justify-center items-stretch">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-6 lg:w-[384px]"
          >

              <Image src={card.svg} width={24} height={24} alt="" />
            
            <div className="content flex flex-col gap-2">
              <p className="text-[#111827] font-semibold text-[20px] leading-[30px]">
                {card.title}
              </p>
              <p className="text-[#4B5563] text-[16px] leading-6">
                {card.describe}
              </p>
            </div>

          </div>
        ))}
      </div>
      <div className="w-full grid place-items-center">
      <Image src="/mobileFeature.png" alt="feature" width={600} height={228} />

      </div>
    </section>
  );
};

export default mobileFeature;
