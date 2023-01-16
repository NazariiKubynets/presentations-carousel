import { makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    background: "grey",
    width: '100%',
    height: '40px',
    cursor: 'pointer',
    fontSize: '18px',
    border: 'none'
  }
}));

const MyButton = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <button 
    className={styles.root} 
    {...props} 
    variant="contained" 
    type="submit">
      {children}
    </button>
  )
}

export default MyButton