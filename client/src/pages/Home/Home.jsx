import React from 'react';
import Bigcard from '../../components/Bigcard/Bigcard';
import Blogs from '../../components/Blogs/Blogs';
import './Home.css'


const Home = () => {

   return <div>
    
      <div className="container">
            <Bigcard />
         <section class="shadow-xl pb-2 pt-2 bg-[#F3F4F6] lg:mb-10">
            <div class="container">
               <div class="flex flex-wrap -mx-4 ">
                  <Blogs />
               </div>
            </div>
         </section>
      </div>

   </div>;
};

export default Home;
