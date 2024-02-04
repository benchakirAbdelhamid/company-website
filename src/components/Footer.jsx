import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      class="parent-footer relative w-full  text-white"
    >
        
        <img className="background-img-footer" src="data:image/png;base64,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" alt="" />
      
      
      <div class="w-full px-8 mx-auto max-w-7xl">
        <div class="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
          <div class="block font-sans  antialiased  leading-snug tracking-normal text-inherit">
            <img
              className="w-[120px] mb-8"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAy4AAADICAMAAAA5mEWbAAAAe1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8uZL9FAAAAKHRSTlMAAS8FoMPxvRCw+yZy988KX7cg6eORqUTcNchqTVY9eoGJmNYUGmPAMXX29QAAGA5JREFUeNrtnduiorgShhNxgQqKoOIBdHmW93/CfTG9p2d1W0lVUuFk6nam1RXykb+OEcKbN2/tWpCfludNkS126zCc1bMwXO8WWbE5L0954JfHm7dfoIyWl2w3q2Gb7bLLc+Sh8fbhdq8uX/MaZ/OvS3X3S+btMy3dbm411W6bbeqXztunHStlNq/NbJ6V/pDx9kGsPKNZbWOzyBPj7SNMVlM7Vn4RM62kX0xvw7bHeV1z2fr88Avqbbi2H89qTpsVe7+o3gaqwqKa3yKvybwNEZZF7cYWHhhvA7PtoXZnh61fYG/DsVFWu7Vo5BfZ2zDsfq3d29UnYrwNwWkpw7oJm5fehfHWd4u/6qbsEHfmr56qf2nC+23qL3v5TdgXC87zujmbnYN+4DKPPS7e/j5aFnWztoh7gUv9JT0u3v70WuZ109YRD0aHC68c87gMISCW1W1Ydu8DLqxyzOPSf9uv63Zsve8BLqxyzOPSe3vO67ZsVvYAF0455nHpudcSXOs2bRx0HxdGOeZx6bdNXnW7dph0HhdGOeZx6fXZkt/qtm2ddx4XPjnmcem1k7+q27f5qfO4sMkxj0uPbWtWI7b+Gp+TZbWP8/s9kMH9nsf7apmcx1+GIbZl13Fhk2Mel/5aRQ+JTZMq/umcyx8bKcirZErn5dJ1XLjkmMelt37LkdqNX+hnIEkhpLyXBZWXV9pxXJjkmMelr0akJSsfQqAlyaMkFgqs427jwiTHPC49PVsqCi2rC303xxeSJxPuu40LjxzzuPTUyyfQcijNciOTktL2H+bdxoVFjnlcenm27PFe/tQ8zivlieD332SncWGRYx6XPlqMzrdMR8Jul4zw+/G727hwyDGPSw/tvsP69xxjW07YGX+ze7dxYZBjHpf+WYp0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"
              alt=""
            />
            <p className="mb-6 text-gray-500 ">
              Cras ultricies mi eu turpis sit hendrerit fringilla <br />{" "}
              vestibulum ante ipsum primis in faucibus <br /> ultrices posuere
              cubilia.
            </p>
            <span className="flex items-center gap-2 text-gray-400">
              {" "}
              <FaInstagram style={{ fontSize: "24px" }} />
              Join Us In Instagram
            </span>
          </div>
          <div class="grid justify-between grid-cols-3 gap-4">
            <ul>
              <p class="block mb-3 font-sans text-lg font-bold antialiased  leading-normal ">
                Customer
              </p>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Strategy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Releases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Mission
                </a>
              </li>
            </ul>
            <ul>
              <p class="block mb-3 font-sans text-lg font-bold antialiased  leading-normal ">
                Product
              </p>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Tranding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Features
                </a>
              </li>
            </ul>
            <ul>
              <p class="block mb-3 font-sans text-lg font-bold antialiased  leading-normal ">
                Learn More
              </p>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Customer Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-1.5 text-sm font-normal leading-relaxed  antialiased transition-colors text-gray-400"
                >
                  Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center w-full py-4 mt-12 0 md:flex-row md:justify-between">
          <p class="block mb-4 font-sans text-sm antialiased font-normal leading-normal text-center  md:mb-0">
            © 2024 <a href="#">Nody. Develop By Themesdesign</a>
          </p>
          <div class="flex gap-4 sm:justify-center">
            <a
              href="#"
              class="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="#"
              class="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
