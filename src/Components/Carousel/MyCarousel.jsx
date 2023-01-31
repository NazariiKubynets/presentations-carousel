import { Paper } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { setVisibleModelAction } from '../../store/postsReducer.js'
import Slide from '../Post/Slide.jsx'
import s from './MyBtn.module.css'

const MyCarousel = (props) => {

  return (
    <div className={s.container}>
      <Carousel className={s.carousel} cycleNavigation={false} autoPlay={false}
        // next={() => props.postId === props.posts.length && props.setVisible(true)}

        onChange={(now) => props.setPostId(now + 1)}
        NavButton={({ onClick, next, prev }) => {

          return (
            <div onClick={onClick} className={s.btnSt}>
              <div className={s.next}>
                {prev && <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.772867 17.4242C0.164629 16.816 0.164091 15.83 0.771666 15.2211L5.72691 10.255C6.3355 9.6451 6.3355 8.65764 5.72691 8.04772L0.771665 3.08165C0.16409 2.47275 0.164629 1.48677 0.772867 0.87853C1.38158 0.269822 2.36849 0.269823 2.97719 0.878531L10.1452 8.04651C10.7554 8.65671 10.7554 9.64603 10.1452 10.2562L2.97719 17.4242C2.36849 18.0329 1.38158 18.0329 0.772867 17.4242Z" fill="white" fillOpacity="0.75" />
                </svg>}
                {/* {props.postId === props.posts.length ?
                  next && "+"
                  : */}
                  {next && <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.83373 0.566031C10.442 1.17427 10.4425 2.16025 9.83493 2.76915L4.90171 7.71315C4.28095 8.33526 4.28095 9.34247 4.90171 9.96459L9.83493 14.9086C10.4425 15.5175 10.442 16.5035 9.83373 17.1117C9.22502 17.7204 8.23811 17.7204 7.6294 17.1117L0.483521 9.96582C-0.138878 9.34342 -0.138879 8.33431 0.483519 7.71192L7.6294 0.566031C8.23811 -0.0426769 9.22502 -0.0426769 9.83373 0.566031Z" fill="white" fillOpacity="0.75" />
                  </svg>

                }
              </div>
            </div>
          )
        }}
      >
        {
          props.posts.map(post =>
            < Slide key={post.id} post={post} />
          )
        }
      </Carousel>
      {
      props.postId === props.posts.length &&
        <div onClick={()=> {props.dispatch(setVisibleModelAction(true)); props.setPostId(1)}} className={s.btnAdd}>
          <div className={s.next}>+</div>
        </div>
      }
    </div>
  )
}

export default MyCarousel

