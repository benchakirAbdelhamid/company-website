import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";


const LatestNews = () => {
  return (
    <div className="py-16">
      <section class=" relative mx-auto isolate overflow-hidden bg-white px-6 py-8 ">
        <div className=" w-full">
          <blockquote class="text-center  ">
            <h2
              style={{ fontSize: "30px" }}
              className="font-semibold text-gray-800 mb-2"
            >
              Latest News
            </h2>
            <p className="text-gray-600  leading-7">
              Ut enim ad minima veniam quis nostrum exercitationem ullam
              corporis suscipit <br /> laboriosam nisi commodi consequatur.
            </p>
          </blockquote>
        </div>
      </section>

      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6  lg:max-w-6xl lg:grid-cols-2 lg:px-8">
        <div class="">
          <img loading="lazy"
            style={{ background: "transparent", width: "100%" }}
            src="https://nody.react.themesdesign.in/static/media/img-1.ed94dc1931e773c53386.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            class="rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <div className="flex py-3">
            <img loading="lazy"
              className="w-[150px] mr-4 rounded-md"
              src="https://nody.react.themesdesign.in/static/media/img-2.7d377318c1e78f44b756.jpg"
              alt=""
            />
            <section className="pt-2">
              <h4 className=" font-bold text-gray-800 ">
                The Big Event Conference
              </h4>
              <p style={{ fontSize: "15px" }} className="mb-2 mt-1 text-gray-500">
                At vero eos et accusamus et iusto dignissimos.
              </p>
              <div className=" text-gray-500 flex" style={{ fontSize: "15px" }}>
                <span className="flex items-center gap-1">
                  {" "}
                  <CiCalendar style={{fontSize:'20px'}} /> 07 Jan 2020{" "}
                </span>
                <span className="flex items-center gap-1 ml-3">
                    <IoTimeOutline style={{fontSize:'20px'}}/>
                     15 min ago</span>
              </div>
            </section>
          </div>



           <div className="flex py-3">
            <img loading="lazy"
              className="w-[150px] mr-4 rounded-md"
              src="https://nody.react.themesdesign.in/static/media/img-3.4df458614cd4cd7cfe2f.jpg"
              alt=""
            />
            <section className="pt-2">
              <h4 className=" font-bold text-gray-800 ">
                The Big Event Conference
              </h4>
              <p style={{ fontSize: "15px" }} className="mb-2 mt-1 text-gray-500">
                At vero eos et accusamus et iusto dignissimos.
              </p>
              <div className=" text-gray-500 flex" style={{ fontSize: "15px" }}>
                <span className="flex items-center gap-1">
                  {" "}
                  <CiCalendar style={{fontSize:'20px'}} /> 07 Jan 2020{" "}
                </span>
                <span className="flex items-center gap-1 ml-3">
                    <IoTimeOutline style={{fontSize:'20px'}}/>
                     15 min ago</span>
              </div>
            </section>
          </div>

           <div className="flex py-3">
            <img loading="lazy"
              className="w-[150px] mr-4 rounded-md"
              src="https://nody.react.themesdesign.in/static/media/img-4.5a10b39b48656279dc69.jpg"
              alt=""
            />
            <section className="pt-2">
              <h4 className=" font-bold text-gray-800 ">
                The Big Event Conference
              </h4>
              <p style={{ fontSize: "15px" }} className="mb-2 mt-1 text-gray-500">
                At vero eos et accusamus et iusto dignissimos.
              </p>
              <div className=" text-gray-500 flex" style={{ fontSize: "15px" }}>
                <span className="flex items-center gap-1">
                  {" "}
                  <CiCalendar style={{fontSize:'20px'}} /> 07 Jan 2020{" "}
                </span>
                <span className="flex items-center gap-1 ml-3">
                    <IoTimeOutline style={{fontSize:'20px'}}/>
                     15 min ago</span>
              </div>
            </section>
          </div>




        </div>
      </div>
    </div>
  );
};

export default LatestNews;
