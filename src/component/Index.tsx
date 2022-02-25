import React from "react";

function Index() {
  return (
    <div className="grid bg-[#050414] h-screen">
      <div className="m-auto grid w-screen">
        <form className="grid m-auto md:w-[35%] w-[80%] grid-flow-row gap-10">
          <input
            className=" m-auto w-full outline-none placeholder:text-center py-3 px-2 rounded-lg text-[#A5A3AE] bg-[#EAEAED] bg-opacity-20 border-[#A5A3AE] border-[1px]"
            type="email"
            placeholder="Silakan Masukan email"
          />
          <input
            className=" m-auto w-full outline-none placeholder:text-center py-3 px-2 rounded-lg text-[#A5A3AE] bg-[#EAEAED] bg-opacity-20 border-[#A5A3AE] border-[1px]"
            type="password"
            placeholder="Silakan Masukan password"
          />
          <button
            className=" grid grid-flow-col py-3 px-2 rounded-lg m-auto w-1/4 text-[#A5A3AE] bg-[#EAEAED] bg-opacity-20 border-[#A5A3AE] border-[1px]"
            type="submit"
          >
            <p>Masuk</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Index;
