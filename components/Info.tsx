import React from "react";

interface InfoProps {
  title?: string;
  subTitle?: string;
  description?: string | string[];
  className?: string;
}

const Info: React.FC<InfoProps> = ({ title, subTitle, description, className }) => {
  return (
    <div className={`${className}`}>
      {subTitle && (
        <p className="text-[#0072DE] font-semibold text-[16px] leading-[24px]">
          {subTitle}
        </p>
      )}
      {title && (
        <h1 className="text-[#111827] font-semibold text-[36px] leading-[44px] pt-3 pb-4">
          {title}
        </h1>
      )}
      {description && Array.isArray(description) ? (
        description.map((desc, index) => (
          <p
            key={index}
            className="text-[#4B5563] text-[18px] leading-[28px] pb-4"
          >
            {desc}
          </p>
        ))
      ) : (
        <p className="text-[#4B5563] text-[18px] leading-[28px]">
          {description}
        </p>
      )}
    </div>
  );
};

export default Info;
