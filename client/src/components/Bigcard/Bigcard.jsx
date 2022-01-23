import React from 'react';
import { Link } from 'react-router-dom';

const Bigcard = () => {
    return <div>
       <div class="w-full my-8">
          <div style={{height:"500px"}} class="bg-white overflow-hidden mb-10 shadow-2xl ">
            <img
              src="https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{height:"330px",objectFit:"cover"}}
              alt="image"
              class="w-full"
            />
            <div class="p-5 sm:p-9 md:p-7 xl:p-5 text-center">
              <h3 style={{height:"80px"}} > 
              <button className="link"
                  class="
                  font-semibold
                  text-dark text-xl
                  sm:text-[22px]
                  md:text-xl
                  lg:text-[24px]
                  xl:text-[26px]
                  2xl:text-[26px]
                  mb-4
                  block
                  hover:underline underline-offset-2
                  focus:outline-none
                  "
                  >
                  This is how we going to break down to pieces in next diaphora of sunset in a grabage of two sons
                </button>
              </h3>
               {/* <p class="text-base text-body-color leading-relaxed xl:mb-1 mb-1 p-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum has Lorem Ipsum has ha
            </p> */}
                  <figcaption class="font-medium">
        <Link to="" class="text-sky-500 dark:text-sky-400 hover:underline underline-offset-2">
          gokul hans
        </Link>
      </figcaption>
            </div>
          </div>
        </div>
  </div>;
};

export default Bigcard;
