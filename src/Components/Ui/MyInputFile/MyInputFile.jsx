import React, { forwardRef } from 'react'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   root: {
      border: "1px solid rgba(0, 0, 0, 0.3) !important",
      borderRadius: "4px !important",
      width: "100%",
      marginBottom: "10px !important"
   },
   active: {
      border: "1px solid #d32f2f !important"
   }
}));

const MyInputFile = forwardRef(({ children, textImg, ...props }, ref) => {
   const styles = useStyles();
   const addClasses = [styles.root];

  if(textImg.error && !textImg.nameImg)
    addClasses.push(styles.active);

   return (
      <>
         <IconButton className={addClasses.join(' ')} color="primary" aria-label="upload picture" component="label">
            <input {...props} ref={ref} hidden accept="image/png, image/jpeg, image/gif, image/ico" type="file" />
            <PhotoCamera />
            {children}
         </IconButton>
         {textImg.nameImg ?
            <p>{textImg.nameImg}
            <svg style={{paddingLeft: '5px'}} width="24" height="15" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.62706 14.2013L1.93746 8.60403L0 10.4966L7.62706 18L24 1.89262L22.0762 0L7.62706 14.2013Z" fill="#49C607"></path>
            </svg></p>
            :
            <p style={{color: '#d32f2f'}}>{textImg.error}
            {textImg.error&&<svg style={{position: 'relative', top: '3px', left: '5px'}}width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM12 2.66667C14.0667 2.66667 16 3.4 17.6 4.53333L4.53333 17.6C3.4 16 2.66667 14.0667 2.66667 12C2.66667 6.86667 6.86667 2.66667 12 2.66667ZM12 21.3333C9.93333 21.3333 8 20.6 6.4 19.4667L19.4667 6.4C20.6 8 21.3333 9.93333 21.3333 12C21.3333 17.1333 17.1333 21.3333 12 21.3333Z" fill="#EB2828" ></path>
            </svg>}</p>
         }
      </>
   )
}
)


export default MyInputFile
