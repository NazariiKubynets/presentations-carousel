import React, { useState } from 'react';
import MyButton from '../Ui/MyButton/MyButton';
import { MyInput } from '../Ui/MyInput/MyInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MyTextarea from '../Ui/MyTextarea/MyTextarea';
import { useStyles } from './stylesForm';
import { schema } from './schemaForm';
import MyInputFile from '../Ui/MyInputFile/MyInputFile';
import { addPostsAction, setVisibleModelAction } from '../../store/postsReducer';



const MyForm = ({ dispatch}) => {

   const styles = useStyles();

   const { register, handleSubmit, formState: { errors }, reset } = useForm({
      mode: "onBlur",
      resolver: yupResolver(schema)
   });

   const [faceURL, setFaceURL] = useState();
   const [logoURL, setLogoURL] = useState();
   const [errorFace, setErrorFace] = useState({ nameImg: '', error: '' })
   const [errorLogo, setErrorLogo] = useState({ nameImg: '', error: '' })

   const convertImage = (event, type) => {

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = function (event) {
         if (type === 'face') {
            setFaceURL(event.target.result)
         } else {
            setLogoURL(event.target.result)
         }
      };

   }

   function onImgLoaded(event, type) {
      convertImage(event, type);
      type === 'face'
         ? setErrorFace({ ...errorFace, nameImg: event.target.files[0].name })
         : setErrorLogo({ ...errorLogo, nameImg: event.target.files[0].name })
   };

   const onSubmit = (data) => {
      setErrorFace({ ...errorFace, error: '' })
      setErrorLogo({ ...errorLogo, error: '' })

      if (!faceURL || !logoURL) {
         if (!faceURL && !logoURL) {
            setErrorFace({ ...errorFace, error: "error file face" })
            setErrorLogo({ ...errorLogo, error: "error file logo" })
         }
         else if (!faceURL) setErrorFace({ ...errorFace, error: "error file face" })
         else setErrorLogo({ ...errorLogo, error: "error file logo" })
         return
      }
      else {
         dispatch(setVisibleModelAction(false))
         reset();
      }
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
         <MyInputFile {...register('face')} textImg={errorFace} id='face' name='face' onChange={(e) => onImgLoaded(e, e.target.name)}>Upload face imag</MyInputFile>
         <MyInputFile  {...register('logo')} textImg={errorLogo} id='logo' name='logo' onChange={(e) => onImgLoaded(e, e.target.name)}>Upload logo imag</MyInputFile>
         <MyButton>Add slide</MyButton>
      </form>
   )
}

export default MyForm