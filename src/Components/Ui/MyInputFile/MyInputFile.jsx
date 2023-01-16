import React, { forwardRef } from 'react'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { makeStyles } from '@material-ui/core'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { InsertDriveFile } from '@mui/icons-material';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
   root: {
      border: "1px solid rgba(0, 0, 0, 0.3) !important",
      borderRadius: "4px !important",
      width: "100%",
      marginBottom: "10px !important"

   }
}));

const MyInputFile = forwardRef(({ children, ...props }, ref) => {
   const styles = useStyles();
   return (
      <IconButton className={styles.root} color="primary" aria-label="upload picture" component="label">
         <input {...props} ref={ref} hidden accept="image/png, image/jpeg, image/gif, image/ico" type="file" />
         <PhotoCamera />
         {children}
         {/* {file.map(f =>
            <p>{f.name}</p>
         )
         } */}
      </IconButton>
   )
}
)

export default MyInputFile
