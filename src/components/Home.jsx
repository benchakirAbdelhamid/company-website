import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Home = () => {
  return (
    <div class="bg-white" >
      <div  class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-6xl lg:grid-cols-2 lg:px-8">
        <div >
          <h2 style={{fontSize:'60px'}} class=" mb-8 font-bold tracking-tight text-gray-800 sm:text-4xl">
            Hello
          </h2>
          <h2 style={{fontSize:'45px', lineHeight:'55px'}} class=" mt-6  tracking-tight text-gray-800 sm:text-4xl">
            We Help You To Boost <br /> Your Business
          </h2>
          <p class="mt-6 text-gray-500">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  odit aut <br />
            fugit, sed quia consequuntur magni dolores eos qui ratione
            sequinesciunt.
          </p>
          <a href="#">
            <button
              class=" btn-button mt-10 flex  items-center align-middle select-none text-center  transition-all  disabled:pointer-events-none  active:opacity-[0.85]"
              type="button"
            >
              Get Started <LiaLongArrowAltRightSolid className="ml-2" style={{fontSize:'23px'}}/>
            </button>
          </a>
        </div>
        <div  class="">
          <img
            style={{ background: "transparent",width:'100%' }}
            src="https://nody.react.themesdesign.in/static/media/hero-img.fabb5c8097ab65a47074.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            class="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
