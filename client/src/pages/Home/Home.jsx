import React from 'react';
import Bigcard from '../../components/Bigcard/Bigcard';
import Blogs from '../../components/Blogs/Blogs';
import './Home.css'


const Home = () => {
   let edit =false
   localStorage.setItem('edit',edit)

   return <div>
    
      <div className="container">
            <Bigcard />
         <section class="pb-2 rounded lg:my-4 lg:mb-10">
            <div class="">
               <div class="flex flex-wrap -mx-4 ">
                  <Blogs />
               </div>
            </div>
         </section>
      </div>
   </div>;
};

export default Home;
