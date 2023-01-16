import React from 'react'
import s from './ListComments.module.css'

const ListComments = (props) => {
   return (
      <div className={s.container}>
         <div className={s.listCom}>
            {props.comments.map(com =>
               <div className={s.comm} key={com.id} >
                  <h4 className={s.email}>{com.email}:</h4>
                  <p className={s.body}>{com.body}</p>
               </div>
            )}
         </div>
      </div>
   )
}

export default ListComments
