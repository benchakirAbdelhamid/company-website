import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { MdLockOutline } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const OurServicess = () => {
  return (
    <div
      // style={{border:'2px solid red'}}
      className="py-16"
    >
      <section class="relative mx-auto isolate overflow-hidden bg-white px-6 py-8 ">
        <div className=" w-full">
          <blockquote class="text-center  ">
            <h2
              style={{ fontSize: "30px" }}
              className="font-semibold text-gray-800 mb-2"
            >
              Our Services
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
             



              <div class="group relative card-services "  >
                <div >

                <div
                  style={{
                    height: "150px",
                    width: "100%",
                  }}
                  class="  flex justify-center items-center relative  overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                >
                  <span className="parent-icon-services">
                  <TfiHeadphoneAlt style={{fontSize:'60px'}} />
                  </span>
                </div>
                <div className=" text-center">
                <h3
                    class="my-5 text-sm title-card-services"
                    style={{ fontSize: "18px", fontWeight: 600 }}
                  >
                  Awesome Support
                  </h3>
                  <p class="text-card-services mt-2 text-base leading-6">
                    Omnicos directe al desirabilite de une nov <br /> lingua
                    franca a refusa continuar payar <br /> custosi traductores.
                  </p>
                  <button
                    style={{ fontWeight: 100, fontSize: "16px" }}
                    className="my-5 mx-auto flex items-center title-card-services"
                  >
                    More{" "}
                    <LiaLongArrowAltRightSolid
                      className="ml-1"
                      style={{ fontSize: "23px" }}
                    />
                  </button>
                </div>
                </div>

              </div>

              <div class="group relative card-services "  >
                <div >

                <div
                  style={{
                    height: "150px",
                    width: "100%",
                  }}
                  class="  flex justify-center items-center relative  overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                >
                  <span className="parent-icon-services">
                  <BsCartCheckFill style={{fontSize:'60px'}} />
                  </span>
                </div>
                <div className=" text-center">
                <h3
                    class="my-5 text-sm title-card-services"
                    style={{ fontSize: "18px", fontWeight: 600 }}
                  >
                   Analytics Security
                  </h3>
                  <p class="text-card-services mt-2 text-base leading-6">
                    Omnicos directe al desirabilite de une nov <br /> lingua
                    franca a refusa continuar payar <br /> custosi traductores.
                  </p>
                  <button
                    style={{ fontWeight: 100, fontSize: "16px" }}
                    className="my-5 mx-auto flex items-center title-card-services"
                  >
                    More{" "}
                    <LiaLongArrowAltRightSolid
                      className="ml-1"
                      style={{ fontSize: "23px" }}
                    />
                  </button>
                </div>
                </div>

              </div>

              <div class="group relative card-services "  >
                <div >

                <div
                  style={{
                    height: "150px",
                    width: "100%",
                  }}
                  class="  flex justify-center items-center relative  overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                >
                  <span className="parent-icon-services">
                  <MdLockOutline style={{fontSize:'60px'}} />
                  </span>
                </div>
                <div className=" text-center">
                <h3
                    class="my-5 text-sm title-card-services"
                    style={{ fontSize: "18px", fontWeight: 600 }}
                  >
                   Data Privacy
                  </h3>
                  <p class="text-card-services mt-2 text-base leading-6">
                    Omnicos directe al desirabilite de une nov <br /> lingua
                    franca a refusa continuar payar <br /> custosi traductores.
                  </p>
                  <button
                    style={{ fontWeight: 100, fontSize: "16px" }}
                    className="my-5 mx-auto flex items-center title-card-services"
                  >
                    More{" "}
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
    </div>
  );
};

export default OurServicess;
