import React from "react";
import Info from "./Info";
import Image from "next/image";

const Feature2 = () => {
  return (
    <>
      <section
        className="Feature hidden sm:flex flex-row flex-wrap justify-center items-center py-[96px]  gap-[107px]"
        id="Feature2"
      >

        <div className="sm:w-[592px] rounded-3xl bg-[#F9FAFB] grid place-items-center  pt-12">
            <Image src="/features.png" alt="" width={358} height={720}/>
        </div>
        <Info
          subTitle="Features"
          title="Productivity hacks for enhanced efficiency"
          description={[
            "From effective time management techniques to utilizing productivity tools, these hacks empower you to work smarter, not harder. ",
            "Discover the secrets to staying focused, setting clear priorities, and achieving more in less time.",
          ]}
          className="lg:w-[517px] text-left "
        />
      </section>
      <section
        className="Feature  hidden sm:flex flex-row justify-center items-center py-[96px] flex-wrap gap-[107px]"
        id="Feature2-2"
      >
        <Info
          subTitle="Features"
          title="Productivity hacks for enhanced efficiency"
          description={[
            "From effective time management techniques to utilizing productivity tools, these hacks empower you to work smarter, not harder. ",
            "Discover the secrets to staying focused, setting clear priorities, and achieving more in less time.",
          ]}
          className="lg:w-[517px] text-left "
        />
                <div className="sm:w-[592px] rounded-3xl bg-[#F9FAFB] grid place-items-center  pt-12">
            <Image src="/features.png" alt="" width={358} height={720}/>
        </div>
        </section>
    </>
  );
};

export default Feature2;
