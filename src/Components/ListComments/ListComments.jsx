import React from 'react'
import MyLoading from '../Ui/Loading/MyLoading'
import s from './ListComments.module.css'

const ListComments = (props) => {

   if (props.comments.length === 0)
      return <MyLoading color='inherit' style={{textAlan: 'center'}}/>

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
