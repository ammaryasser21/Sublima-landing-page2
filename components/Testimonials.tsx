import React from "react";
import Info from "./Info";
import Image from "next/image";

const Testimonials = () => {
  const test = [
    { img: "/test1.png", title: "Breanna Butler", job: "Project Manager" },
    { img: "/test2.png", title: "George  Dean", job: "Marketing Manager" },
    { img: "/test3.png", title: "Robert Nguyen", job: "Product Manager" },
  ];

  const stars = Array(5).fill("/star.svg");
  return (
    <section
      className="flex flex-col gap-16 justify-center items-center py-[96px]"
      id="Testimonials"
    >
      <Info
        title="Real stories, real results"
        description="Explore the genuine feedback and testimonials from our satisfied users"
        className="sm:w-[768px] text-center"
      />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 xl:w-[1216px] place-items-center ">
        {test.map((el) => (
          <div key={el.title} className="p-8 flex flex-col gap-12 sm:w-[384px] rounded-2xl border border-[#E5E7EB]">
            <div className="star flex flex-row items-center gap-1">
              {stars.map((star, index) => (
                <Image
                  key={index}
                  src={star}
                  alt="starIcon"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <p className="text-[#111827] text-2xl font-medium">
              The intuitive interface and powerful features make this product a
              joy to use. Highly recommended!
            </p>
            <div className="test flex flex-col gap-4">
              <Image src={el.img} alt={el.title} width={48} height={48} />

              <div className="desc flex flex-col gap-[2px]">
                <p className="text-[#111827] text-base font-medium">{el.title}</p>
                <p className="text-[#4B5563] text-sm">{el.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons flex justify-center items-center gap-4">
      <Image src="/leftIcon.svg" alt="leftIcon" width={36} height={36} className=" p-2 grid place-items-center rounded-full  border border-[#E5E7EB] cursor-pointer"/>
        <Image src="/rightIcon.svg" alt="rightIcon" width={36} height={36} className=" p-2 grid place-items-center rounded-full  border border-[#E5E7EB] cursor-pointer"/>
      </div>
    </section>
  );
};

export default Testimonials;
