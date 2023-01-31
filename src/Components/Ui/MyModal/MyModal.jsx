import React from 'react'
import { setVisibleAction } from '../../../store/commentsReducer';
import { setVisibleModelAction } from '../../../store/postsReducer';
import s from './MyModal.module.css'

const MyModal = ({ children, visible, dispatch }) => {

  const addClasses = [s.myModal];

  if(visible)
    {
      addClasses.push(s.active);
      dispatch(setVisibleAction(false));
    }

  return (
    <div className={addClasses.join(' ')} onClick={()=> dispatch(setVisibleModelAction(false))}>
      <div className={s.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal
