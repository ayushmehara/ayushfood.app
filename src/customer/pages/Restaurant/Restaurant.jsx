import { Card, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
const categories=[
    "Thali",
"Starters",
"Indian Main Course",
"Rice and Biryani",
"Breads",
"Accompaniments", 
"Dessert", 
];
const foodType=["Vegetarian Only","Non-Vegetarian Only","Both"];
const Restaurant = () => {
    const [selectedCategory,setSelectedCategory]=useState();
    const [selectedFoodType,setSelectedFoodType]=useState();

    const handleFoodTypeChange=()=>{
        console.log("selected Food type",selectedFoodType)

    }
    const handleCategoryChange=()=>{

        console.log("selected category",selectedCategory)
    }
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>
                {`Home/india/Alpha Restaurant/2/Order online`}
            </h3>
            <div>
                <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_640.jpg"
                 alt="" />
            </div>
            <div>
                <h1 className='text-4xl py-1 font-semibold'>
                    {`Alpha Restaurant`}
                </h1>
                <p className='text-gray-500'>
                Discover the enchanting world of flavors at Spice Haven, where every dish is a symphony of spices and tradition. Indulge in a culinary journey through Delhi's rich heritage, where each bite tells a story of spice and delight.
                </p>
                <p className='py-3 text-orange-300'>
                Open now 10:30am - 12midnight (Today)
                </p>
            </div>
        </section>
        <Divider/>

        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%]'>
                <Card className='p-5 space-y-5 lg:sticky top-28'>
                    <div>
                        <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                            Category
                        </Typography>
                        <FormControl component={"fieldset"}>
                            <RadioGroup name='category' value={selectedCategory} onChange=
                            {handleCategoryChange}>
                                {categories.map((item,index)=><FormControlLabel
                                key={index}
                                value={item}
                                control={<Radio/>}
                                label={item}
                                sx={{color:'gray'}}
                                />)}

                            </RadioGroup>

                        </FormControl>
                    </div>
                    <Divider/>
                    <div>
                        <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                            Food Type
                        </Typography>
                        <FormControl component={"fieldset"}>
                            <RadioGroup name="foodType" value={selectedFoodType} onChange=
                            {handleFoodTypeChange}>
                                {foodType.map((item,index)=><FormControlLabel
                                key={index}
                                value={item}
                                control={<Radio/>}
                                label={item}
                                sx={{color:'gray'}}
                                />)}

                            </RadioGroup>

                        </FormControl>
                    </div>

                </Card>

            </div>


        </section>

    </div>
  )
}

export default Restaurant