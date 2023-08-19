import { Button, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import LockIcon from '@mui/icons-material/Lock';
import React from 'react'
interface IProps{
    title:string , buttonText:string, 
    onUnLock: () => void
}
function NoProductCard({
    title , buttonText, onUnLock
}:IProps) {
  return (
 <Box  height={600}  display={'flex'} flexDirection={'row'} alignContent={'center'} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>
<Box p={5}  bgcolor={"#fff"} display={'flex'} flexDirection={'column'} alignContent={'center'} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>
<CardContent >

<Box   display={'flex'} flexDirection={'column'} alignContent={'center'} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>
  
<LockIcon color={'primary'} style={{
    height:80, 
    width:80,
    
}}/>
<Typography mb={2} variant='h2'>
    {title}
</Typography>
<Button variant='contained' onClick={onUnLock}>
{buttonText}
</Button>
</Box>
              </CardContent>
</Box>
 </Box>
  )
}

export default NoProductCard