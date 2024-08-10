import { Avatar, Grid, Rating } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
      <Grid conatiner spacing={2} gap={3}>
        <Grid item xs={1}></Grid>
        <Box>
            <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
        </Box>
      </Grid>

      <Grid item xs={9}>
     <div className='space-y-2'>
        <div>
            <p className='font-semibold text-lg'>Sonu</p>
            <p className='opacity-70'>
                April 5,2024
            </p>
        </div>
     </div>
     <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
     <p>
       nice product.I love this Shirt
     </p>
      </Grid>
    </div>
  )
}

export default ProductReviewCard