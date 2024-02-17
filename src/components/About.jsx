import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { GiPerspectiveDiceFive } from "react-icons/gi";
import { FiAirplay } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";


const About = () => {
  return (
    <div
    //  style={{border:'2px solid red'}}
      className="py-16">

    
      <section class="relative mx-auto isolate overflow-hidden bg-white px-6 py-8 ">
        <div className=" w-full">
          <blockquote class="text-center  ">
            <h2
              style={{ fontSize: "30px" }}
              className="font-semibold text-gray-800 mb-2"
            >
              About Us
            </h2>
            <p className="text-gray-600  leading-7">
              Ut enim ad minima veniam quis nostrum exercitationem ullam
              corporis suscipit <br /> laboriosam nisi commodi consequatur.
            </p>
          </blockquote>
        </div>
      </section>
      {/* ============== */}
      <div>
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl   lg:max-w-none ">
            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              
              <div class="group relative">
                <div className="leading-9">
                  <h3
                    style={{
                      fontSize: "33px",
                      lineHeight: "40px",
                    }}
                    class="mt-6 text-sm  text-gray-800"
                  >
                    Productive & Customizable For <span style={{
                      fontWeight: 600,
                    }}>Developers </span> 
                  </h3>
                  <p class=" mt-6 text-base  text-gray-500 leading-6">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil atque corrupti molestiae.
                  </p>
                  <span className="mt-2 flex items-center ">
                    <GiPerspectiveDiceFive
                    className=" text-blue-800 mr-1"
                      style={{ fontSize: "23px" }}
                    />
                    <p style={{fontSize:'18px'}} className="text-gray-500  ">
                    Marketing program activities
                    </p>
                  </span>
                  <span className="mt-2 flex items-center ">
                    <FiAirplay
                     className=" text-blue-800 mr-1"
                      style={{ fontSize: "23px" }}
                    />
                    <p style={{fontSize:'18px'}} className="text-gray-500">
                     Customization product
                    </p>
                  </span>
                  <span className="mt-2 flex items-center ">
                    <FiCodepen
                    className=" text-blue-800 mr-1"
                      style={{ fontSize: "23px" }}
                    />
                    <p style={{fontSize:'18px'}} className="text-gray-500">
                      At vero eos accusamus iusto
                    </p>
                  </span>
                  <button style={{fontWeight:100 , fontSize:'18px'}} className="mt-2 flex items-center text-blue-800">
                  More Information
                    <LiaLongArrowAltRightSolid
                      className="ml-1"
                      style={{ fontSize: "23px" }}
                    />
                  </button>
                </div>
              </div>

              <div class="group relative">
                <div
                  style={{
                    height: "260px",
                    width: "100%",
                    background: "#3956de12",
                  }}
                  class="  flex justify-center items-center relative  overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                >
                  <img loading="lazy"
                    src="https://nody.react.themesdesign.in/static/media/img-1.d714345bde869c00defa.png"
                    alt="Collection of four insulated travel bottles on wooden shelf."
                    class="h-[75%] w-[75%] object-cover object-center rounded-md "
                  />
                </div>
                <div className="leading-9">
                  <h3 class="mt-6 text-sm text-gray-500">DEVELOPMENT</h3>
                  <p
                    style={{ fontSize: "20px", fontWeight: 600 }}
                    class=" mt-2 text-base  text-gray-900"
                  >
                    Product Development
                  </p>
                  <p class=" mt-2 text-base  text-gray-500 leading-6">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia consequuntur magni.
                  </p>
                  <button style={{fontWeight:100 , fontSize:'16px'}} className="mt-2 flex items-center text-blue-800">
                    Red More{" "}
                    <LiaLongArrowAltRightSolid
                      className="ml-1"
                      style={{ fontSize: "23px" }}
                    />
                  </button>
                </div>
              </div>

              <div class="group relative">
                <div
                  style={{
                    height: "260px",
                    width: "100%",
                    background: "#1097bd12",
                  }}
                  class="  flex justify-center items-center relative  overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                >
                  <img loading="lazy"
                    src="https://nody.react.themesdesign.in/static/media/img-2.e8740135d7a449055730.png"
                    alt="Collection of four insulated travel bottles on wooden shelf."
                    class="h-[75%] w-[75%] object-cover object-center rounded-md "
                  />
                </div>
                <div className="leading-9">
                  <h3 class="mt-6 text-sm text-gray-500">MARKETING</h3>
                  <p
                    style={{ fontSize: "20px", fontWeight: 600 }}
                    class=" mt-2 text-base  text-gray-900"
                  >
                    Marketing Product
                  </p>
                  <p class=" mt-2 text-base  text-gray-500 leading-6">
                    Temporibus autem quibusdam a officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae.
                  </p>
                  <button style={{fontWeight:100 , fontSize:'16px'}} className="mt-2 flex items-center text-blue-800">
                    Red More{" "}
                    <LiaLongArrowAltRightSolid
                      className="ml-1"
                      style={{ fontSize: "23px" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default About;
