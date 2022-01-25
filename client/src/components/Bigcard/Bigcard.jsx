import React from 'react';

const Bigcard = () => {
  return <div>
    <div class="w-full my-5">
      <div style={{ height: "360px" }} class="bg-white overflow-hidden shadow-md ">
        <img
          src="https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ height: "240px", objectFit: "cover" }}
          alt="image"
          class="w-full"
        />
        <div class="flex flex-col  text-center">
          <h3 style={{ height: "80px" }} className=" flex justify-center px-12" >
            <button className="link"
              class="font-bold text-dark text-md font-bold sm:text-[22px] md:text-xl lg:text-[24px] xl:text-[26px]
              2xl:text-[26px] block hover:underline underline-offset-1 focus:outline-none ">
              28 Lessons I’ve Learned Over 28 Years 28 Lessons I’ve Learned Over 28 Years
            </button>
          </h3>
          <figcaption class="font-medium">
            <div class="text-sky-500 text-xs hover:underline underline-offset-1 cursor-pointer">
              Varmin Pullin
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  </div>;
};

export default Bigcard;
