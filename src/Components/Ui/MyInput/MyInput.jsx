import React, { forwardRef } from 'react'
import  TextField  from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block "
  }
}));

export const MyInput = forwardRef((props, ref) => {
  const  styles = useStyles();
  return (
    <TextField
      className={styles.root}
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
})

