import { useState } from "react";



export const handleFile = (file) => {
   let imgURL;
   
   let reader = new FileReader();
   reader.onload = (event) => {
      imgURL = event.target.result
   };
   reader.readAsDataURL(file)
   // reader.abort();
   // reader.readAsDataURL(file);
   return imgURL;
}