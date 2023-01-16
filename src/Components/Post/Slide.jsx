import { Paper } from '@mui/material'
import React from 'react'
import s from './Slide.module.css'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { useDispatch, useSelector } from "react-redux";
import { setVisibleAction } from '../../store/commentsReducer';

const Post = (props) => {

   const dispatch = useDispatch();
   const visible = useSelector(state => state.comments.visible);

   const checkComments = () => {
      visible ? dispatch(setVisibleAction(false))
         : dispatch(setVisibleAction(true))
   }

   return (
      <Paper className={s.paper}>
         <div className={s.swiperSlide}>
            <div className={s.blokRow}>
               <div className={s.imgFace}>
                  <img src={props.post.img.face} alt="img_face" />
               </div>
               <div className={s.imgLogo}>
                  <img src={props.post.img.logo} alt="img_logo" />
               </div>
               <div className={s.data}>
                  <p className={s.name}>{props.post.name.firstName} {props.post.name.lastName}</p>
                  <p className={s.positionAndSite}>{props.post.profession}</p>
                  <p className={s.positionAndSite}>{props.post.site}</p>
               </div>
            </div>
            <p className={s.txt}>{props.post.description}</p>
            <ModeCommentOutlinedIcon onClick={checkComments} />
         </div>
      </Paper>
   )
}

export default Post

