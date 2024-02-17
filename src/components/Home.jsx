import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import img1 from "../images/img1.jpg";

const Home = () => {
  return (
    <div className="parent-home">
      <img  loading="lazy"
        className="background-img-home"
        src="data:image/png;base64,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"
        alt=""
      />

      <div
        // style={{'marginTop':'100px' }}
        class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
      >
        <div style={{'marginTop':'100px' }}>
          <h2
            style={{ fontSize: "60px" }}
            class=" mb-8 font-bold tracking-tight text-gray-800 sm:text-4xl"
          >
            Hello
          </h2>
          <h2
            style={{ fontSize: "45px", lineHeight: "55px" }}
            class=" mt-6  tracking-tight text-gray-800 sm:text-4xl"
          >
            We Help You To Boost <br /> Your Business
          </h2>
          <p class="mt-6 text-gray-500">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut{" "}
            <br />
            fugit, sed quia consequuntur magni dolores eos qui ratione
            sequinesciunt.
          </p>
          <a href="#">
            <button
              class=" btn-button mt-10 flex  items-center align-middle select-none text-center  transition-all  disabled:pointer-events-none  active:opacity-[0.85]"
              type="button"
            >
              Get Started{" "}
              <LiaLongArrowAltRightSolid
                className="ml-2"
                style={{ fontSize: "23px" }}
              />
            </button>
          </a>
        </div>
        <div >
          <img loading="lazy"
            style={{ background: "transparent", width: "100%" }}
            src={img1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            class= " lg:mt-40 rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
