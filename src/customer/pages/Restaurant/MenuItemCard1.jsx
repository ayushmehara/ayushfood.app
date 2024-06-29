import { Button, Card } from '@mui/material';
import React from 'react';

const MenuItemCard1 = ({item}) => {
    const handleAddItemToCart=()=>{
        console.log("handle add item to cart")
    }
  return (
    <Card className='p-5 lg:flex items-center justify-between box'>
        <div className='lg:flex item-center ig:space-x-5'>
            <img className='w-[7rem] h-[7rem] object-cover'
             src="" alt="" />

            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>
                    {`Pizza`}
                </p>
                <p>${399}</p>
                <p className='text-gray-400'>
                    {`Rice,Sabar,Papad`}
                </p>

            </div>
            <div>
                <Button onClick={handleAddItemToCart}>
                    Add To Cart
                </Button>
            </div>

        </div>

    </Card>
  )
}

export default MenuItemCard1