import React, { forwardRef } from 'react'
import TextField from '@mui/material/TextField';

const MyTextarea = forwardRef((props, ref) => {
   return (
      <TextField
         multiline
         maxRows={3}
         fullWidth
         margin="normal"
         inputRef={ref}
         {...props}
      />
   );
})

export default MyTextarea
