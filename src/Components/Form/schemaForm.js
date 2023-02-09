import * as yup from "yup";

export const schema = yup.object().shape({
   firstName: yup
      .string()
      .max(25)
      .matches(/^([^0-9]*)$/, "First name should not contain numbers")
      .matches(/^([A-z]*)$/, "Use the Latin alphabet!")
      .required("First name is a required field"),
   lastName: yup
      .string()
      .max(25)
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .matches(/^([A-z]*)$/, "Use the Latin alphabet!")
      .required("Last name is a required field"),
   profession: yup
      .string()
      .min(25)
      .max(100)
      .required("Name profession is a required field")
      .matches(/^([A-z- ]*)$/, "Use the Latin alphabet!")
      .matches(/^([^0-9]*)$/, "Last profession should not contain numbers"),
   nameWebsite: yup
      .string()
      .matches(/^([A-z-.]*)$/, "Use the Latin alphabet")
      .matches(/^[^.]+\..*[^-_.]$/, "Example - google.com")
      .required("Name company's website is a required field"),
   description: yup
      .string()
      .min(250)
      .max(1000)
      .matches(/[A-Za-z0-9_]/, "Use the Latin alphabet!")
      .required("Description is a required field")
});