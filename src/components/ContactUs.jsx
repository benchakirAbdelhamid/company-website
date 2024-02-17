import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { IoChatbubbleOutline } from "react-icons/io5";


const ContactUs = () => {
  return (
    <div className="py-16">
      <section class=" relative mx-auto isolate overflow-hidden bg-white px-6  ">
        <div className=" w-full">
          <blockquote class="text-center  ">
            <h2
              style={{ fontSize: "30px" }}
              className="font-semibold text-gray-800 mb-2"
            >
              Contact Us
            </h2>
            <p className="text-gray-600  leading-7">
              Ut enim ad minima veniam quis nostrum exercitationem ullam
              corporis suscipit <br /> laboriosam nisi commodi consequatur.
            </p>
          </blockquote>
        </div>
      </section>

      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:max-w-6xl lg:grid-cols-2 lg:px-8">
        <div 
        // class="flex justify-center" 
        // style={{border:'1px solid red'}}
        >
          <img loading="lazy"
            style={{ background: "transparent", width: "80%" }}
            src="https://nody.react.themesdesign.in/static/media/contact-img.d79dd481a5afbe1ed64a.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            class="rounded-lg bg-gray-100 mx-auto "
          />
          <div className="text-center "  >
            <h3 style={{fontSize:'24px'}} class=" font-bold  text-gray-800  mt-4">Are You Facing Any Problem..?</h3>
            <p style={{fontSize:'15px'}} className=" text-gray-500 mt-2" >It va esser tam simplic quam Occidental in fact it va esser Occidental <br /> angles quam un skeptic cambridge es.</p>
            <button className="my-5 button-chart gap-2 mx-auto flex items-center" >
              <IoChatbubbleOutline style={{fontSize:'24px'}} />
              Start Live Chat</button>
            <span className="text-gray-700" >Or you can contact at</span>
            <div className=" text-sm mt-4 flex justify-around ">
              <span className="  bg-gray-300 text-gray-500 py-1 px-3 rounded-md " > <span className="text-gray-700">Email:</span>  exemplehamid@gmail.com</span>
              <span className="  bg-gray-300 text-gray-500 py-1 px-3 rounded-md "> <span className="text-gray-700">Phone:</span> (212) 7233 764 934</span>
            </div>
          </div>
        </div>

        <div>
          <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
              class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
              aria-hidden="true"
            >
              <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
            </div>
            <div class=" max-w-2xl ">
              <h2 
              class=" font-bold tracking-tight text-gray-800 text-2xl">
              Get in Touch
              </h2>
            </div>
            <form
              class="mx-auto mt-6 max-w-xl"
            >
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    for="first-name"
                    class="block text-sm  leading-6 text-gray-800"
                  >
                    Name
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class=" inputes block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="last-name"
                    class="block text-sm  leading-6 text-gray-800"
                  >
                    Email address
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class=" inputes block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="company"
                    class="block text-sm  leading-6 text-gray-800"
                  >
                    Subject
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autocomplete="organization"
                      class=" inputes block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="company"
                    class="block text-sm  leading-6 text-gray-800"
                  >
                    Message
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autocomplete="organization"
                      class=" inputes block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <a href="#">
                <button
                  class=" btn-button mt-4 flex  items-center align-middle select-none text-center  transition-all  disabled:pointer-events-none  active:opacity-[0.85]"
                  type="button"
                >
                  Send Message
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
