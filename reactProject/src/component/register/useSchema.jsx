// validationSchema.js
import Joi, { schema } from "joi-browser";
const useSchema=()=> {

const schema={
  id: Joi.string().required(),
  fullName: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().length(11).required(),
  gender: Joi.string().valid("male", "female").required()
    }
    return schema
}
export default useSchema
