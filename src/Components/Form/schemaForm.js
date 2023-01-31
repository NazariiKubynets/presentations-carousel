import * as yup from "yup";

export const schema = yup.object().shape({
   firstName: yup
      .string()
      .matches(/^([^0-9]*)$/, "First name should not contain numbers")
      .matches(/^([A-z]*)$/, "Use the Latin alphabet")
      .required("First name is a required field"),
   lastName: yup
      .string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .matches(/^([A-z]*)$/, "Use the Latin alphabet")
      .required("Last name is a required field"),
   profession: yup
      .string()
      .required("Name profession is a required field")
      .matches(/^([A-z- ]*)$/, "Use the Latin alphabet")
      .matches(/^([^0-9]*)$/, "Last profession should not contain numbers"),
   nameWebsite: yup
      .string()
      .matches(/^([A-z-.]*)$/, "Use the Latin alphabet")
      .matches(/^[^.]+\..*[^-_.]$/, "rgruisof")
      .required("Name company's website is a required field"),
   description: yup
      .string()
      .required("Name company's website is a required field"),
   // face: yup
   //    .required("Name company's website is a required field")

});