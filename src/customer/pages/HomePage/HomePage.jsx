import React from 'react'
import "./HomePage.css"
import MultipleitemCarosal from './MultipleitemCarosal'
import { restaurants } from '../../../Data/Restorent'
import RestorentCard from './RestorentCard'

const HomePage = () => {
  return (
    <div>
      
      <section className='-z-50 banner relative flex flex-col justify-center item'>

<div className='w-[50vw] z-10 text-center'>

<p className='text-2xl lg:text-7xl font-bold z-10 py-5'>Alpha Food</p>

<p className='z-10 text-grey-300 texts-xl lg:text-4xl'>Taste the Convenience: Food, Fast and Delivered 
     </p>
   </div>
   <div className="cover absolute top-0 left-0 right-0">
    </div>

<div className="fadout"></div>
   
    </section>
    <section className="p-10 lg:py-10 lg:px-20">

        <div className="">
            <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">Top Meal</p>

        </div>
        <MultipleitemCarosal/>

    </section>

<section className="px-5 lg:px-20">
    <div>
        <h1 className="text-2xl font-semibold text-gray-400 py-3">
        Order From Our Handpicked Favorites
        </h1>
        <div className="flex flex-wrap items-center justify-around">

            {restaurants.map((item,index)=><RestorentCard item={item} index={index}/>)}

        </div>
    </div>

</section>

    </div>
  )
}

export default HomePage