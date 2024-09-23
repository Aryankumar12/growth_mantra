import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const CaseStudy = () => {
  return (
    <>
      <div className="w-full h-full bg-[#16213E] px-2 md:px-16 py-20  ">
        <div className="w-full h-full bg-white flex flex-col lg:flex-row justify-between itms-center">
          <div className="w-full flex justify-center lg:justify-start items-center px-4 lg:pe-12">
            <Image
              src="/casestudy.png"
              alt="casestudy"
              width={350}
              height={350}
            ></Image>
          </div>
          <div className="w-full lg:w-[120%] flex flex-col justify-start items-center  text-[#E74C3C] pt-6 px-6 ">
            <p
              className=" tracking-widest  text-base md:text-xl lg:text-2xl xl:text-3xl "
              style={{ lineHeight: "3rem" }}
            >
              Effective Growth Strategies can increase revenue by up to
              <span className="text-lg md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                &nbsp;33%&nbsp;
              </span>
              in the first{" "}
              <span className="text-lg md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                &nbsp;SIX&nbsp;
              </span>{" "}
              months.
            </p>
            <div className="py-4 w-full flex justify-center md:justify-start items-center">
              <div className="group rounded-full w-fit px-5 py-2 flex text-sm md:text-base lg:text-lg xl:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                Schedule a call
                <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-28 flex flex-col gap-2 pb-4">
          <p className="text-5xl lg:text-7xl text-white">Featured Case Study</p>
          <p className="text-2xl text-white py-8">
            Highlighting successful projects with links to full case studies
          </p>
        </div>
        <div className="rounded-3xl w-full bg-[#E74C3C] h-full ">
          <div className="w-full flex justify-center items-center">
            <div className="py-10 w-11/12 lg:w-10/12 xl:w-8/12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 xl:gap-6">
              <div className="w-full flex justify-center items-center">
                <p className="px-20  w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-bold transition-all hover:bg-white hover:text-[#E74C3C] text-sm md:text-base">
                  All&nbsp;Work[20]
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="px-20  w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-bold transition-all hover:bg-white hover:text-[#E74C3C] text-sm md:text-base">
                  UI/UX&nbsp;Design[10]
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="px-20  w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-bold transition-all hover:bg-white hover:text-[#E74C3C] text-sm md:text-base">
                  Digital&nbsp;Marketing[5]
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="px-20  w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-bold transition-all hover:bg-white hover:text-[#E74C3C] text-sm md:text-base">
                  Branding&nbsp;[5]
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-start items-start h-full pb-20 p-8 px-2 md:px-12  gap-8">
            <div className="w-full lg:w-1/3 h-full m-0 lg:m-4">
              <div className="h-full md:h-[450px] rounded-3xl grid grid-cols-1 content-between text-2xl ">
                <div className="w-full flex flex-col justify-start items-center  lg:px-8 text-white">
                  Explore our latest articles and case studies to stay ahead in
                  your industry.
                  <div className="py-8 w-full flex justify-center md:justify-start items-center">
                    <div className="group rounded-full w-fit px-4 py-1.5 flex text-sm md:text-base lg:text-lg xl:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                      <p>Schedule&nbsp;a&nbsp;call</p>
                      <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start lg:ml-8 items-center">
                  <div className="w-full lg:w-8/12 flex gap-x-20 justify-center lg:justify-start items-center">
                    <div className="w-20 h-20 flex justify-center items-center rounded-full bg-white">
                      <ChevronLeft size={30} />
                    </div>
                    <div className="w-20 h-20 flex justify-center items-center rounded-full bg-white">
                      <ChevronRight size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full lg:w-2/3 gap-2">
              <div className="w-1/2 h-full m-0 lg:m-4">
                <div className=" bg-white h-[450px] rounded-3xl grid grid-cols-1 content-between text-xl p-4">
                  <div className="w-full ">Ai Corporation. 2023</div>
                  <div className="w-full">Ai Wave - Ai Chatbot Mobile App</div>
                </div>
              </div>
              <div className="w-1/2 h-full m-0 lg:m-4">
                <div className=" bg-white h-[450px] rounded-3xl grid grid-cols-1 content-between text-xl p-4">
                  <div className="w-full">Ai Corporation. 2023</div>
                  <div className="w-full">Ai Wave - Ai Chatbot Mobile App</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full px-4 lg:px-28 py-16">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="w-full lg:w-1/2 bg-[#E84C3D] text-white rounded-[15px] shadow-2xl ">
            <div className="px-10 pt-12 ">
              <div className="text-xl md:text-3xl lg:text-4xl">
                Diagnose&nbsp;Your
                <br />
                Growth&nbsp;Blockers
              </div>
              <div className="py-6 text-base md:text-lg lg:text-xl  flex justify-center items-start">
                Uncover the hidden obstacles holding your startup back. Our
                expert consultants will analyze your business, identify critical
                bottlenecks, and provide a custom action plan to skyrocket your
                growth. Limited offer: Claim your complimentary strategy session
                (Valued at $400) now
              </div>
            </div>

            <div className="md:px-12 py-12 w-full flex justify-center md:justify-start items-center">
              <div className="group rounded-full w-fit px-2.5 lg:px-4 py-1.5 flex text-sm md:text-base hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                <p>Reveal&nbsp;Your&nbsp;Growth&nbsp;Potential</p>
                <div className="p-2 lg:p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-[15px] shadow-2xl ">
            <div className="px-10 pt-12 ">
              <div className="text-xl md:text-3xl lg:text-4xl text-[#E74C3C]">
                Partner&nbsp;with&nbsp;Proven
                <br />
                Growth&nbsp;Catalysts
              </div>
              <div className="py-6 text-base md:text-lg lg:text-xl  flex justify-center items-start">
                Looking for more than just advice? Our team of seasoned
                consultants doesn&apos;t just strategize - we execute. From
                refining your go-to-market strategy to optimizing your product
                for scalability, we&apos;re here to drive tangible results and
                exponential growth for your startup.
              </div>
            </div>

            <div className="md:px-12 py-12 w-full flex justify-center md:justify-start items-center">
              <div className="group rounded-full w-fit px-4 lg:px-4 py-1.5 flex text-sm md:text-base hover:bg-white hover:text-[#E74C3C] text-white bg-[#E74C3C] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                <p>Amplify&nbsp;Your&nbsp;Growth</p>
                <div className="p-2 lg:p-3 group-hover:text-white rounded-full bg-white text-black group-hover:bg-[#E74C3C]">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
