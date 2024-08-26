"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import "../app/globals.css";

import FINAL from '/public/Images/FINAL.jpg';
import image3d1 from '/public/Images/3D2.jpg';
import Landing from '/public/Images/Landing.jpg';
import Mobile from '/public/Images/Mobile-UI.jpg';
import NavBar from '@/components/Header/NavBar';
import Footer from '@/components/Footer/Footer';
import CustomerService from '@/components/CustomerService/CustomerService';

const annimations = () => {
  return (
    <div className='bg-black h-auto'>
        <NavBar />
        
        <div className='py-40 lg:hidden'>
          <h4 className="text-center text-5xl pb-10 font-bold">
                <span className='text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500'>
                 3D Animation
                </span>
          </h4> 

            
          <div className='grid grid-cols-1 mx-4 text-white py-20'>

            <div className="">
              <Image className="img1 rounded-[5px] object-cover" src={image3d1} alt="image3d1" />
            </div>

            <div className="right">
                  <h1 className='text-3xl text-white mt-5 pb-5 lg:mt-0'>3D office work space
                  </h1>
                  <h2></h2>
                  <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-red-700 rounded-[20px] text-sm p-1'>Redshift</p>
                  </div>
            </div>

          </div>


          <div className='grid grid-cols-1 py-10 px-4 text-white'>

            <div className="">   
                <Image className="img1 rounded-[5px] object-fill" src={Mobile} alt="Mobile-UI" />
            </div>

            <div className="right">
                  <h1 className='text-3xl mt-5 pb-5'>Product Design & Advertising
                  </h1>
                  <h2></h2>
                  <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-red-700 rounded-[20px] text-sm p-1'>Redshift</p>
                  </div>
            </div>
          </div>



          <div className='grid grid-cols-1 mx-4 text-white py-20'>

            <div className="">
                  
                  <Image className="img1 rounded-[5px] object-fill" src={Landing} alt="Landing" />

            </div>

            <div className="right">
                  <h1 className='text-3xl text-white mt-5 pb-5'>3d UI Design
                  </h1>
                  <h2></h2>
                  <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-purple-500 rounded-[20px] text-sm p-1'>V-Ray</p>
                  </div>
            </div>
            
          </div>


          <div className='grid grid-cols-1 mx-4 text-white py-20'>

            <div className="">  
                  <Image className="img1 rounded-[5px] object-fill" src={FINAL} alt="FINAL" />
            </div>

            <div className="right">
                  <h1 className='text-3xl text-white mt-5 pb-5'>Web Landing Page 3d Model

                  </h1>
                  <h2></h2>
                  <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-4'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-red-700 rounded-[20px] text-sm p-1'>Redshift</p>
                  </div>
            </div>
          </div> 

        </div>





      {/* ------------------------     WEB VIEW    ---------------------------- */}




        <div className='py-40 xl:h-[340vh] h-[270vh] hidden lg:block'>
          <h4 className="text-center text-5xl pb-10 font-bold">
                <span className='text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500'>
                 3D Animation
                </span>
          </h4> 

            
          <div className='absolute grid grid-cols-2 my-10 px-5 left-5 max-w-[1000px] text-white py-20 '>

            <div className="left max-w-[90%]">
                  
                  <Image className="img1 rounded-[5px] object-fill" src={image3d1} alt="image3d1" />

            </div>

            <div className="right">
                  <h1 className='text-3xl text-white pb-5'>3D office work space
                  </h1>
                  <h2></h2>
                  <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-8'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-red-700 rounded-[20px] text-sm p-1'>Redshift</p>
                  </div>
            </div>

          </div>


          <div className='absolute grid grid-cols-1 lg:grid-cols-2 px-5 lg:right-0 max-w-[1000px] gap-10 text-white xl:mt-[38%] lg:mt-[50%] py-10 '>

            <div className="right">
                  <h1 className='text-3xl text-white pb-5'>Product Design & Advertising
                  </h1>
                  <h2></h2>
                  <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-8'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-red-700 rounded-[20px] text-sm p-1'>Redshift</p>
                  </div>
            </div>

            
            <div className="left max-w-[90%]">
                  
                  <Image className="img1 h-64 rounded-[5px] object-cover" src={Mobile} alt="Mobile-UI" />

            </div>

          </div>



          <div className='absolute grid grid-cols-1 my-10 lg:grid-cols-2 px-5 lg:left-5 max-w-[1000px] text-white xl:mt-[68%]  lg:mt-[90%] py-20 '>

            <div className="left max-w-[90%]">
                  
                  <Image className="img1 h-64 rounded-[5px] object-fill" src={Landing} alt="Landing" />

            </div>

            <div className="right">
                  <h1 className='text-3xl text-white mt-5 pb-5 lg:mt-0'>3d UI Design
                  </h1>
                  <h2></h2>
                  <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-8'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-purple-500 rounded-[20px] text-sm p-1'>V-Ray</p>
                  </div>
            </div>
            
          </div>


          <div className='absolute grid grid-cols-1 lg:grid-cols-2 px-5 lg:right-0 max-w-[1000px] gap-10 text-white xl:mt-[104%] lg:mt-[144%] py-10 '>

            <div className="right">
                  <h1 className='text-3xl text-white pb-5'>Web Landing Page 3d Model

                  </h1>
                  <h2></h2>
                  <p className='text-zinc-300'>Designer Yugantha Polhengoda continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win column is his work with Italian manufacturer Chateau d’Ax.</p>
                  <p className='text-zinc-300'>In stock. <a href="">Buy Extended Warranty</a></p>
                  
                  <div className='grid grid-cols-2 w-60 text-center gap-3 mt-8'>
                    <p className='bg-blue-500  rounded-[20px] text-sm p-1'>Cinema 4D</p>
                    <p className='bg-red-700 rounded-[20px] text-sm p-1'>Redshift</p>
                  </div>
            </div>

            <div className="left max-w-[90%]">
                  
                  <Image className="img1 h-64 rounded-[5px] object-fill" src={FINAL} alt="FINAL" />

            </div>
          </div> 

        </div>

        <Footer />
        <CustomerService />
      </div>
  )
}

export default annimations
