import React, { useEffect, useState } from 'react';
import MyButton from '../Ui/MyButton/MyButton';
import { MyInput } from '../Ui/MyInput/MyInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MyTextarea from '../Ui/MyTextarea/MyTextarea';
import { useStyles } from './stylesForm';
import { schema } from './schemaForm';
import MyInputFile from '../Ui/MyInputFile/MyInputFile';
import { addPostsAction } from '../../store/postsReducer';



const MyForm = ({ dispatch, setVisible }) => {

   const styles = useStyles();

   const { register, handleSubmit, formState: { errors } } = useForm({
      mode: "onBlur",
      resolver: yupResolver(schema)
   });

   const [faceURL, setFaceURL] = useState();
   const [logoURL, setLogoURL] = useState();

   
      const readerFace = new FileReader();
      readerFace.onload = function (event) {
         setFaceURL(event.target.result)
      };
      const readerLogo = new FileReader();
      readerLogo.onload = function (event) {
          setLogoURL(event.target.result)
      };


   const onSubmit = (data) => {

      readerFace.readAsDataURL(data.face[0]);
      readerLogo.readAsDataURL(data.logo[0]);

      dispatch(addPostsAction({
         id: Date.now(),
         name: {
            firstName: data.firstName,
            lastName: data.lastName
         },
         profession: data.profession,
         site: data.nameWebsite,
         img: {
            face: faceURL,
            logo: logoURL
         },
         description: data.description
      }))
      // readerFace.readAsDataURL(data.face[0]);
      // readerLogo.readAsDataURL(data.logo[0]);

      console.log(faceURL);
      console.log(logoURL);
   }

   return (
      <form noValidate className={styles.root} onSubmit={handleSubmit(onSubmit)}>
         <MyInput {...register('firstName')}
            id="firstName" type="text" label="First Name"
            name="firstName" error={!!errors.firstName} helperText={errors?.firstName?.message}
         />
         <MyInput {...register('lastName')}
            id="lastName" type="text" label="Last Name"
            name="lastName" error={!!errors.lastName} helperText={errors?.lastName?.message}
         />
         <MyInput {...register('profession')}
            id="profession" type="text" label="Profession"
            name="profession" error={!!errors.profession} helperText={errors?.profession?.message}
         />
         <MyInput {...register('nameWebsite')}
            id="nameWebsite" type="text" label="Name company's website"
            name="nameWebsite" error={!!errors.nameWebsite} helperText={errors?.nameWebsite?.message}
         />
         <MyTextarea {...register('description')}
            id="description" type="text" label="Brief description"
            name="description" error={!!errors.description} helperText={errors?.description?.message}
         />
         <MyInputFile {...register('face')} id='face' name='face'>Upload face imag</MyInputFile>
         <MyInputFile {...register('logo')} id='logo' name='logo'>Upload logo imag</MyInputFile>
         <MyButton onClick={() => setVisible(false)} >Get slide</MyButton>
      </form>
   )
}

export default MyForm



{/* <MyInput onChange={(e) => setSlide({ ...slide, img: { ...slide.img, face: e.target.value } })} type='file' accept="image/png, image/jpeg, image/gif, image/ico" />
         <MyInput onChange={(e) => setSlide({ ...slide, img: { ...slide.img, logo: e.target.value } })} type='file' accept="image/png, image/jpeg, image/gif, image/ico" />

         <MyInput onChange={(e) => setSlide({ ...slide, name: { ...slide.name, firstName: e.target.value } })} type='text' placeholder="First name" maxlength='25' minlength='2' />
         <MyInput onChange={(e) => setSlide({ ...slide, name: { ...slide.name, lastName: e.target.value } })} type='text' placeholder="Last Name" maxlength='25' minlength='2' />
         <MyInput onChange={(e) => setSlide({ ...slide, profession: e.target.value })} type='text' placeholder="Profession" />
         <MyInput onChange={(e) => setSlide({ ...slide, site: e.target.value })} type='text' placeholder="Links to the company's website" />
         <MyInput onChange={(e) => setSlide({ ...slide, description: e.target.value })} type='text' placeholder="Brief description" /> */}