import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const MyLoading = ({...props}) => {
  return (
   <div style={{margin: '0 auto', width: "fit-content"}}>
      <CircularProgress {...props}/>
   </div>
  )
}

export default MyLoading
