import React from 'react';
import Bigcard from '../../components/Bigcard/Bigcard';
import Blogs from '../../components/Blogs/Blogs';
import './Home.css'


const Home = () => {
   let edit =false
   localStorage.setItem('edit',edit)

   return <>
            <Bigcard />
         <section class="pb-2 rounded lg:my-4 lg:mb-10 bg-white">
               <div class="flex flex-wrap  p-2">
                  <Blogs />
            </div>
         </section>
      </>
};

export default Home;
