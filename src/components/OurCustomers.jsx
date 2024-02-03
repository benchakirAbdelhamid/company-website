import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const OurCustomers = () => {
  return (
    <div className="py-16">
      <section class=" mb-12 relative mx-auto isolate overflow-hidden bg-white px-6 py-8 ">
        <div className=" w-full">
          <blockquote class="text-center  ">
            <h2
              style={{ fontSize: "30px" }}
              className="font-semibold text-gray-800 mb-2"
            >
              What Our Customers Say
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
        <div class="mx-auto  max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl   lg:max-w-none ">
            <div  className="parent-swiper">
              <Swiper
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <div class="  mt -6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                  <SwiperSlide>
                    <div class="group relative  ">
                      <div>
                        <div style={{boxShadow:'0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(0, 0, 0, 0.1)'}} className=" text-center rounded-md mb-6 pb-6">
                          <div
                            style={{
                              height: "80px",
                              width: "100%",
                            }}
                            class="  flex justify-center items-center relative  overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                          >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAAzFBMVEVHcEw5Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt58fkcmAAAARHRSTlMAwKu92tei0rSlxdDNyJu3qNXLucO7nq6w3bII4JOZ9+LmcO795PPqJ6n63houn3l0oANADI4rZGyBIn1JhjITXGlTN9Cvsv0AAAHcSURBVDjLVdTrdoIwDADggAooDlE3dGOg4hS34UAV0V28vv87LWmLtPlnz3fSJA0CAOyOxyWLXQIiksVuweOb/d4FrUdNqz31Ox2rWazpaH0OjdWX5zmOE4YRsu9W76GFrEbMekkJZc2mYRilChLI221F3QBuuusSWwl1gUdbVReAQi/VF1M59EzTllUEsB/o+rukAuh1uXoQ5RMayspD1G6oitCLqgKw6w1klUIUWagGQmGTAZjPQonCMkTY5JCSCYXoU1WEsEmLXcmbDKH7iqpeKUJPqgqhMR6/csULSwGyWqWosBDqk5miEKWaqhywJ6pCtNdU5cBfzNS9/B+AHRsYe0k2Cg9OmqoQQVG9N41iBeAf+jTGmhgYIfgNXGzdM/iVBts7H2Od5KywA1RH/sYi1YQqtiapA8iRUS4ZrTVq8k9BZ2rSlTPZNAo1055WX860nFGTFwUF1GQoH7BRbGSz1GgUaXVwjeN4MutuJXPS2cB+y99+NJ2Skus+DtmGWVs+utwx51OMeCa+4SRLfxyxrmc6WHx8jEaj+ZxYIZI41e547KPevN1VUN7Ur5er3+G5N2+lyu/lWOV7D8T9iJiyr1XNGt8KOy2bPZmoxu+FL78ZjtV0I/6/A/++PUl8bnVS3QAAAABJRU5ErkJggg==" alt="" />
                          </div>
                          <p class=" text-gray-500  text-base leading-6  ">
                            Omnicos directe al desirabilite de une nov <br />{" "}
                            lingua franca a refusa continuar payar <br />{" "}
                            custosi traductores.
                          </p>
                        </div>
                        <div className=" text-center">
                          <img
                            src="https://nody.react.themesdesign.in/static/media/img-3.f88a6e593f97c01f1118.jpg"
                            alt="avatar"
                            class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                          />

                          <h3
                            class="mt-4 text-sm title-card-services"
                            style={{ fontSize: "18px", fontWeight: 600 }}
                          >
                            Joshua Vargas
                          </h3>
                          <h5
                            class="mt-2 text-sm text-gray-600 "
                            style={{ fontSize: "14px" }}
                          >
                            Web Developer, USA
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="group relative  ">
                      <div>
                        <div style={{boxShadow:'0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(0, 0, 0, 0.1)'}} className=" text-center rounded-md mb-6 pb-6">
                          <div
                            style={{
                              height: "80px",
                              width: "100%",
                            }}
                            class="  flex justify-center items-center relative  overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                          >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAAzFBMVEVHcEw5Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt58fkcmAAAARHRSTlMAwKu92tei0rSlxdDNyJu3qNXLucO7nq6w3bII4JOZ9+LmcO795PPqJ6n63houn3l0oANADI4rZGyBIn1JhjITXGlTN9Cvsv0AAAHcSURBVDjLVdTrdoIwDADggAooDlE3dGOg4hS34UAV0V28vv87LWmLtPlnz3fSJA0CAOyOxyWLXQIiksVuweOb/d4FrUdNqz31Ox2rWazpaH0OjdWX5zmOE4YRsu9W76GFrEbMekkJZc2mYRilChLI221F3QBuuusSWwl1gUdbVReAQi/VF1M59EzTllUEsB/o+rukAuh1uXoQ5RMayspD1G6oitCLqgKw6w1klUIUWagGQmGTAZjPQonCMkTY5JCSCYXoU1WEsEmLXcmbDKH7iqpeKUJPqgqhMR6/csULSwGyWqWosBDqk5miEKWaqhywJ6pCtNdU5cBfzNS9/B+AHRsYe0k2Cg9OmqoQQVG9N41iBeAf+jTGmhgYIfgNXGzdM/iVBts7H2Od5KywA1RH/sYi1YQqtiapA8iRUS4ZrTVq8k9BZ2rSlTPZNAo1055WX860nFGTFwUF1GQoH7BRbGSz1GgUaXVwjeN4MutuJXPS2cB+y99+NJ2Skus+DtmGWVs+utwx51OMeCa+4SRLfxyxrmc6WHx8jEaj+ZxYIZI41e547KPevN1VUN7Ur5er3+G5N2+lyu/lWOV7D8T9iJiyr1XNGt8KOy2bPZmoxu+FL78ZjtV0I/6/A/++PUl8bnVS3QAAAABJRU5ErkJggg==" alt="" />
                          </div>
                          <p class=" text-gray-500  text-base leading-6  ">
                            Omnicos directe al desirabilite de une nov <br />{" "}
                            lingua franca a refusa continuar payar <br />{" "}
                            custosi traductores.
                          </p>
                        </div>
                        <div className=" text-center">
                          <img
                            src="https://nody.react.themesdesign.in/static/media/img-3.f88a6e593f97c01f1118.jpg"
                            alt="avatar"
                            class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                          />

                          <h3
                            class="mt-4 text-sm title-card-services"
                            style={{ fontSize: "18px", fontWeight: 600 }}
                          >
                            Joshua Vargas
                          </h3>
                          <h5
                            class="mt-2 text-sm text-gray-600 "
                            style={{ fontSize: "14px" }}
                          >
                            Web Developer, USA
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="group relative  ">
                      <div>
                        <div style={{boxShadow:'0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(0, 0, 0, 0.1)'}} className=" text-center rounded-md mb-6 pb-6">
                          <div
                            style={{
                              height: "80px",
                              width: "100%",
                            }}
                            class="  flex justify-center items-center relative  overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                          >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAAzFBMVEVHcEw5Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt58fkcmAAAARHRSTlMAwKu92tei0rSlxdDNyJu3qNXLucO7nq6w3bII4JOZ9+LmcO795PPqJ6n63houn3l0oANADI4rZGyBIn1JhjITXGlTN9Cvsv0AAAHcSURBVDjLVdTrdoIwDADggAooDlE3dGOg4hS34UAV0V28vv87LWmLtPlnz3fSJA0CAOyOxyWLXQIiksVuweOb/d4FrUdNqz31Ox2rWazpaH0OjdWX5zmOE4YRsu9W76GFrEbMekkJZc2mYRilChLI221F3QBuuusSWwl1gUdbVReAQi/VF1M59EzTllUEsB/o+rukAuh1uXoQ5RMayspD1G6oitCLqgKw6w1klUIUWagGQmGTAZjPQonCMkTY5JCSCYXoU1WEsEmLXcmbDKH7iqpeKUJPqgqhMR6/csULSwGyWqWosBDqk5miEKWaqhywJ6pCtNdU5cBfzNS9/B+AHRsYe0k2Cg9OmqoQQVG9N41iBeAf+jTGmhgYIfgNXGzdM/iVBts7H2Od5KywA1RH/sYi1YQqtiapA8iRUS4ZrTVq8k9BZ2rSlTPZNAo1055WX860nFGTFwUF1GQoH7BRbGSz1GgUaXVwjeN4MutuJXPS2cB+y99+NJ2Skus+DtmGWVs+utwx51OMeCa+4SRLfxyxrmc6WHx8jEaj+ZxYIZI41e547KPevN1VUN7Ur5er3+G5N2+lyu/lWOV7D8T9iJiyr1XNGt8KOy2bPZmoxu+FL78ZjtV0I/6/A/++PUl8bnVS3QAAAABJRU5ErkJggg==" alt="" />
                          </div>
                          <p class=" text-gray-500  text-base leading-6  ">
                            Omnicos directe al desirabilite de une nov <br />{" "}
                            lingua franca a refusa continuar payar <br />{" "}
                            custosi traductores.
                          </p>
                        </div>
                        <div className=" text-center">
                          <img
                            src="https://nody.react.themesdesign.in/static/media/img-3.f88a6e593f97c01f1118.jpg"
                            alt="avatar"
                            class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                          />

                          <h3
                            class="mt-4 text-sm title-card-services"
                            style={{ fontSize: "18px", fontWeight: 600 }}
                          >
                            Joshua Vargas
                          </h3>
                          <h5
                            class="mt-2 text-sm text-gray-600 "
                            style={{ fontSize: "14px" }}
                          >
                            Web Developer, USA
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="group relative  ">
                      <div>
                        <div style={{boxShadow:'0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(0, 0, 0, 0.1)'}} className=" text-center rounded-md mb-6 pb-6">
                          <div
                            style={{
                              height: "80px",
                              width: "100%",
                            }}
                            class="  flex justify-center items-center relative  overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                          >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAAzFBMVEVHcEw5Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt58fkcmAAAARHRSTlMAwKu92tei0rSlxdDNyJu3qNXLucO7nq6w3bII4JOZ9+LmcO795PPqJ6n63houn3l0oANADI4rZGyBIn1JhjITXGlTN9Cvsv0AAAHcSURBVDjLVdTrdoIwDADggAooDlE3dGOg4hS34UAV0V28vv87LWmLtPlnz3fSJA0CAOyOxyWLXQIiksVuweOb/d4FrUdNqz31Ox2rWazpaH0OjdWX5zmOE4YRsu9W76GFrEbMekkJZc2mYRilChLI221F3QBuuusSWwl1gUdbVReAQi/VF1M59EzTllUEsB/o+rukAuh1uXoQ5RMayspD1G6oitCLqgKw6w1klUIUWagGQmGTAZjPQonCMkTY5JCSCYXoU1WEsEmLXcmbDKH7iqpeKUJPqgqhMR6/csULSwGyWqWosBDqk5miEKWaqhywJ6pCtNdU5cBfzNS9/B+AHRsYe0k2Cg9OmqoQQVG9N41iBeAf+jTGmhgYIfgNXGzdM/iVBts7H2Od5KywA1RH/sYi1YQqtiapA8iRUS4ZrTVq8k9BZ2rSlTPZNAo1055WX860nFGTFwUF1GQoH7BRbGSz1GgUaXVwjeN4MutuJXPS2cB+y99+NJ2Skus+DtmGWVs+utwx51OMeCa+4SRLfxyxrmc6WHx8jEaj+ZxYIZI41e547KPevN1VUN7Ur5er3+G5N2+lyu/lWOV7D8T9iJiyr1XNGt8KOy2bPZmoxu+FL78ZjtV0I/6/A/++PUl8bnVS3QAAAABJRU5ErkJggg==" alt="" />
                          </div>
                          <p class=" text-gray-500  text-base leading-6  ">
                            Omnicos directe al desirabilite de une nov <br />{" "}
                            lingua franca a refusa continuar payar <br />{" "}
                            custosi traductores.
                          </p>
                        </div>
                        <div className=" text-center">
                          <img
                            src="https://nody.react.themesdesign.in/static/media/img-3.f88a6e593f97c01f1118.jpg"
                            alt="avatar"
                            class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                          />

                          <h3
                            class="mt-4 text-sm title-card-services"
                            style={{ fontSize: "18px", fontWeight: 600 }}
                          >
                            Joshua Vargas
                          </h3>
                          <h5
                            class="mt-2 text-sm text-gray-600 "
                            style={{ fontSize: "14px" }}
                          >
                            Web Developer, USA
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="group relative  ">
                      <div>
                        <div style={{boxShadow:'0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(0, 0, 0, 0.1)'}} className=" text-center rounded-md mb-6 pb-6">
                          <div
                            style={{
                              height: "80px",
                              width: "100%",
                            }}
                            class="  flex justify-center items-center relative  overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                          >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAAzFBMVEVHcEw5Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt58fkcmAAAARHRSTlMAwKu92tei0rSlxdDNyJu3qNXLucO7nq6w3bII4JOZ9+LmcO795PPqJ6n63houn3l0oANADI4rZGyBIn1JhjITXGlTN9Cvsv0AAAHcSURBVDjLVdTrdoIwDADggAooDlE3dGOg4hS34UAV0V28vv87LWmLtPlnz3fSJA0CAOyOxyWLXQIiksVuweOb/d4FrUdNqz31Ox2rWazpaH0OjdWX5zmOE4YRsu9W76GFrEbMekkJZc2mYRilChLI221F3QBuuusSWwl1gUdbVReAQi/VF1M59EzTllUEsB/o+rukAuh1uXoQ5RMayspD1G6oitCLqgKw6w1klUIUWagGQmGTAZjPQonCMkTY5JCSCYXoU1WEsEmLXcmbDKH7iqpeKUJPqgqhMR6/csULSwGyWqWosBDqk5miEKWaqhywJ6pCtNdU5cBfzNS9/B+AHRsYe0k2Cg9OmqoQQVG9N41iBeAf+jTGmhgYIfgNXGzdM/iVBts7H2Od5KywA1RH/sYi1YQqtiapA8iRUS4ZrTVq8k9BZ2rSlTPZNAo1055WX860nFGTFwUF1GQoH7BRbGSz1GgUaXVwjeN4MutuJXPS2cB+y99+NJ2Skus+DtmGWVs+utwx51OMeCa+4SRLfxyxrmc6WHx8jEaj+ZxYIZI41e547KPevN1VUN7Ur5er3+G5N2+lyu/lWOV7D8T9iJiyr1XNGt8KOy2bPZmoxu+FL78ZjtV0I/6/A/++PUl8bnVS3QAAAABJRU5ErkJggg==" alt="" />
                          </div>
                          <p class=" text-gray-500  text-base leading-6  ">
                            Omnicos directe al desirabilite de une nov <br />{" "}
                            lingua franca a refusa continuar payar <br />{" "}
                            custosi traductores.
                          </p>
                        </div>
                        <div className=" text-center">
                          <img
                            src="https://nody.react.themesdesign.in/static/media/img-3.f88a6e593f97c01f1118.jpg"
                            alt="avatar"
                            class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                          />

                          <h3
                            class="mt-4 text-sm title-card-services"
                            style={{ fontSize: "18px", fontWeight: 600 }}
                          >
                            Joshua Vargas
                          </h3>
                          <h5
                            class="mt-2 text-sm text-gray-600 "
                            style={{ fontSize: "14px" }}
                          >
                            Web Developer, USA
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                 
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default OurCustomers;
