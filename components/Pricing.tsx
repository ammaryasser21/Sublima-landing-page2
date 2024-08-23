import React from "react";
import Info from "./Info";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "Basic",
    subtitle: "Essential features made affordable",
    price: 19,
  },
  {
    title: "Advanced",
    subtitle: "Advanced Insights for growth",
    price: 79,
    badge: "Most popular",
  },
  {
    title: "Enterprise",
    subtitle: "Tailored analytics for large enterprises",
    price: 199,
  },
];

const CheckItem = ({ text }: { text: string }) => (
  <div className="item flex items-center gap-3">
    <Image src="/correct.svg" width={24} height={24} alt="correct" />
    <p className="text-[#4B5563] text-[16px] leading-6">{text}</p>
  </div>
);

const features = [
  "1 user account",
  "Basic analytics",
  "Limited customer support",
  "Access to core features",
];

const PricingCard = ({
  title,
  subtitle,
  price,
  badge,
}: {
  title: string;
  subtitle: string;
  price: number;
  badge?: string;
}) => (
  <div className="pricing-card rounded-[24px] flex flex-col border-[#E5E7EB] border-t-[#0072DE] border-t-4  p-8 gap-8 w-full shadow-lg lg:w-[384px]">
    <div className="flex flex-col gap-2">
      <h1 className="text-[#111827] text-[24px] leading-8 font-semibold flex items-center gap-2">
        {title}{" "}
        {badge && (
          <span className="border-[#B3DAFF] bg-[#F0F8FF] border rounded-md px-[10px] py-[2px] text-[#005AAD] font-medium text-[14px] leading-[20px] ">
            {badge}
          </span>
        )}
      </h1>
      <p className="text-[#4B5563] text-[16px] leading-6">{subtitle}</p>
    </div>

    <div className="price text-[#4B5563] text-[16px] leading-6 flex items-end gap-[6px]">
      <span className="text-[48px] leading-[60px] font-semibold text-[#111827]">
        ${price}
      </span>
      /month
    </div>
    <div className="list flex flex-col gap-4">
      {features.map((feature) => (
        <CheckItem key={feature} text={feature} />
      ))}
    </div>
    <Link
      href="#hero"
      className={`rounded-[8px]  ${
        badge
          ? "bg-[#0072DE] text-white"
          : "text-[#374151] border-[#E5E7EB] border"
      }  text-[16px] leading-6 font-medium w-full text-center py-[10px]`}
    >
      Get started
    </Link>
  </div>
);

const Pricing = () => {
  return (
    <section
      className="flex flex-col gap-16 justify-center items-center py-[96px] sm:hidden"
      id="Pricing"
    >
      <Info
        subTitle="Pricing"
        title="Scalable plans for any team size"
        description="Unlock the power of scalability with our plans tailored to accommodate teams of any size, providing the flexibility you need to grow and succeed"
              className="lg:w-[768px] text-center"
      />
      <div className="bg-[#F9FAFB] p-1 flex items-center gap-2 rounded-[24px] cursor-pointer mt-8">
        <div className="py-2 px-[14px] rounded-[24px] bg-white shadow-sm font-medium text-[14px] leading-[20px]">
          Monthly
        </div>
        <div className="py-2 px-[14px] text-[#6B7280] font-medium text-[14px] leading-[20px]">
          Annually
        </div>
      </div>
      <div className="pricing pt-16 flex flex-row flex-wrap justify-center items-stretch gap-8">
        {cards.map((card) => (
          <PricingCard
            key={card.title}
            title={card.title}
            subtitle={card.subtitle}
            price={card.price}
            badge={card.badge}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
