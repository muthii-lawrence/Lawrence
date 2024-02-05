import React from "react";

const Form = () => {
  return (
    <div>
      <section className="flex items-center justify-center px-4 py-2">
        <div className="lg:w-1/3 md:w-1/2 bg-green-300 flex flex-col mx-auto w-full md:py-8 mt-8 md:mt-0 border border-black px-12 hover hover:bg-green-400 py-4 mb-6">
          <h2 className="text-gray-900 text-[20px] font-serif mb-4 font-bold flex items-center justify-center">
            Get In Touch
          </h2>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="fd5ea484-38d0-4665-b325-0421d096a38b"
            />

            <div className="relative mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Names"
                required
                className="w-full bg-white border outline-none border-gray-600 font-serif text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                id="name"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-white border outline-none border-gray-600 font-serif outline-1 text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative font-serif mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full bg-white border border-gray-600 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white font-serif bg-blue-700 border-0 py-2 px-6 w-full mx-auto focus:outline-none hover:bg-blue-900 shadow-lg hover:shadow-blue-700 font-bold text-xl">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
