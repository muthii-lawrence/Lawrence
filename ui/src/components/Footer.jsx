import React from "react";

import {
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center bg-neutral-900 hover:bg-neutral-800 text-center text-white">
          <div className="container px-6 pt-2">
            <div className="mb-1 flex justify-center">
              <a
                href="https://github.com/muthii-lawrence/"
                className="m-4 h-9 w-9 rounded-full border-2 border-white text-white hover:scale-125"
              >
                <FaGithub className="mx-auto h-full w-4" fill="currentColor" />
              </a>

              <a
                href="/"
                className="m-4 h-9 w-9 rounded-full border-2 border-white text-white hover:scale-125"
              >
                <FaXTwitter
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                />
              </a>
              <a
                href="/"
                className="m-4 h-9 w-9 rounded-full border-2 border-white text-white hover:scale-125"
              >
                <FaInstagram
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                />
              </a>
              <a
                href="/"
                className="m-4 h-9 w-9 rounded-full border-2 border-white text-white hover:scale-125"
              >
                <FaLinkedinIn
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                />
              </a>
              <a
                href="/"
                className="m-4 h-9 w-9 rounded-full border-2 border-white text-white hover:scale-125"
              >
                <FaWhatsapp
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
