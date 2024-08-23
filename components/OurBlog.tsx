import React from "react";
import Info from "./Info";
import Image from "next/image";
import Link from "next/link";

const cards = [
    {
        title: "Effective product marketing techniques for small businesses",
        subtitle: "Explore cost-effective marketing strategies to promote your product b...",
        job: "George  Dean",
        mainImage:"/blog1.png",
        subImage:"/test2.png"
      },
      {
        title: "Unlocking the secrets of effective time management",
        subtitle: "Learn valuable techniques and strategies to manage your time effec...",
        job: "Breanna Butler",
        mainImage:"/blog2.png",
        subImage:"/test1.png"
      },
      {
        title: "Launching your product business: From idea to market success",
        subtitle: "Learn the essential steps to turn your product idea into a thriving business.",
        job: "Robert Nguyen",
        mainImage:"/blog3.png",
        subImage:"/test3.png"
      },

];


const BlogCard = ({
  title,
  subtitle,
  job,
  mainImage,
  subImage
}: {
  title: string;
  subtitle: string;
  job: string;
  mainImage:string;
  subImage:string;
}) => (
  <div className="pricing-card rounded-[24px] flex flex-col border-[#E5E7EB] border pb-8 gap-8 w-full lg:w-[384px]">
    <Image src={mainImage} alt={title} width={600} height={200}/>
    <div className="content px-8 flex flex-col">
        <p className="border border-[#E5E7EB] rounded-full w-fit p-1 flex items-center gap-3 pr-[10px] text-sm font-semibold text-[#374151]"><span  className="border py-[2px] px-[10px] bg-[#F9FAFB]   border-[#E5E7EB] rounded-full">Badge</span>10 min read</p>
        <h1 className="text-lg font-semibold pt-3 pb-2">{title}</h1>
        <p className="text-base text-[#4B5563] ">{subtitle}</p>
    </div>
    <div className="job px-8 flex items-center gap-4">
    <Image src={subImage} alt="job" width={40} height={40}/> <p  className="text-base font-semibold ">{job}</p>
    </div>

    
  </div>
);

const OurBlog = () => {
  return (
    <section
      className="flex flex-col gap-16 justify-center items-center py-[96px] sm:hidden"
      id="Our blog"
    >
      <Info
        subTitle="Our blog"
        title="Latest blog posts"
        description="Stay ahead of the curve with our latest blog releases"
                className="lg:w-[768px] text-center"
      />

      <div className="pt-16 flex flex-row flex-wrap justify-center items-stretch gap-8">
        {cards.map((card) => (
          <BlogCard
            key={card.title}
            title={card.title}
            subtitle={card.subtitle}
            job={card.job}
            mainImage={card.mainImage}
            subImage={card.subImage}
          />
        ))}
      </div>
      <Link href="/" className="w-full py-[10px] text-center rounded-lg bg-[#0072DE] text-white">View all posts</Link>
    </section>
  );
};

export default OurBlog;
