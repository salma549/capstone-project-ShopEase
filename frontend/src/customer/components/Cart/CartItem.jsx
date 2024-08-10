import { IconButton ,Button } from '@mui/material'
import React from 'react'
import  RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md' >
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover'src='data:image/jpeg;base64,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
                u8lbL6Ux8Sy5ANFA7iAw+C0niGUclVKYYi5oF721VdUSzGxuDUu0DRUV5kDgS3LGQAQPgrVpFt5eV1fW5cETFHQ8PwbD8OA9EpmMcPznV3aV9EViHgZeqzZvOzIhSweoCAg//2Q=='alt=''/>
            </div>
            <div className='ml-5 space-y-1'>
              <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
              <p className='opacity-70'>Size:L,white</p>
              <p className='opacity-70 mt-2'>Seller:crishtaliyo 2fashion</p>

              <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                <p className='font-semibold'>199</p>
                <p className='opacity-50 line-through'>200</p>
                <p className='text-green-600 font-semibold'>5%off</p>

              </div>
</div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
              <div className='flex items-center space-x-2'>
                <IconButton >
                <RemoveCircleOutlineIcon />
                  </IconButton >
                    <span className='py-1 px-7 border rounded-sm'> 3 </span>
                  <IconButton sx={{color:"RGB(145 85 253)"}}>
                <AddCircleOutlineIcon />
                </IconButton>
              

              </div>
              <div> 
                <Button >remove</Button>
              </div>

            </div>
        </div>
   
  )
}

export default CartItem