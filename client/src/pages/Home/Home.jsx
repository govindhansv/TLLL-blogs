import React from 'react';
import Blogs from '../../components/Blogs/Blogs';
import './Home.css'


const Home = () => {

   return <div>
      <div className="Home">
         <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
            <div class="container">
               <div class="flex flex-wrap -mx-4">
                 
         <Blogs />
               </div>
            </div>
         </section>

      </div>
   </div>;
};

export default Home;
