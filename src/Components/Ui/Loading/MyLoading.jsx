import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const MyLoading = ({...props}) => {
  return (
   <div style={{display: 'flex', justifyContent: 'center'}}>
      <CircularProgress {...props}/>
   </div>
  )
}

export default MyLoading
