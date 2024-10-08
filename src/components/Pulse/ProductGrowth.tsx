import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductGrowth = () => {
  return (
    <>
      <div className="w-full h-full pt-8">
        <div className="w-full flex flex-col justify-center items-start px-4 lg:px-16 gap-10">
          <div className="text-3xl md:text-4xl lg:text-7xl text-[#576D2C] w-full flex flex-col gap-4">
            <p>Our Growth Mantra:</p>
            <p className="text-[#B2B7BE] flex gap-2 lg:gap-6">
              The
              <span className="text-[#576D2C]">EVOLVE</span>
              Method
            </p>
          </div>
          <p className="text-lg lg:text-xl tracking-wide leading-relaxed w-full text-left">
            {`Product growth approach driving continuous improvement and success`}
          </p>
        </div>

        <div className="relative h-fit pb-20">
          <div className="absolute inset-52 top-[-80px] left-0 w-full">
            <Image
              src="/treevector.png"
              alt="tree"
              width={900}
              height={500}
              className="object-fill lg:object-contain h-[850px] lg:h-[1050px] w-fit mt-6"
            />
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[12%] mt-12">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">E</span>&nbsp;-&nbsp;Evaluate
              </p>
              <div className="text-lg lg:text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-4 gap-3 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left ">
                  Assess current product performance and market fit
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[8%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">V</span>&nbsp;-&nbsp;Validate
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  Test hypotheses about user needs and product opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[3%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">O</span>
                &nbsp;-&nbsp;Optimize
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  Refine product features and user experience based on data
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[10%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">L</span>&nbsp;-&nbsp;Learn
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 gap-3 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                Gather insights from user behavior and feedback
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[24%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">V</span>
                &nbsp;-&nbsp;Visualize&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  {`Map out the product roadmap aligned with growth goals`}
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[35%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">E</span>
                &nbsp;-&nbsp;Execute&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  {`Implement changes and new features with agility`}
                </p>
              </div>
            </div>
          </div>


        </div>

        <hr className="border-t-2 w-full" />
        <div className="py-8 w-full flex justify-center items-center px-4">
          <Link href="/contactus2" passHref>
            <div
              className="group rounded-full w-fit px-6 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer
          transition-all duration-500 ease-in-out font-bold"
            >
              Product Stagnating? Start Your EVOLVE Journey Today!
              <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C]">
                <ArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <hr className="border-t-2 w-full" />
      </div>
    </>
  );
};

export default ProductGrowth;
