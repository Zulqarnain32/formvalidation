import React from 'react'
import "./login.css"
import { useFormik } from 'formik'
import { userSchema } from './Schemas'
const initialValues = {
  name:"",
  email:"",
  password:"",
  confirm_password:"",
}
const App = () => {
   const { values,errors,touched,handleBlur,handleChange,handleSubmit } = useFormik({
     initialValues:initialValues,
     validationSchema:userSchema,
    onSubmit:(values,action) => {
      console.log(values);
      action.resetForm()
    }
   })
  //  console.log(formik); it will provide all the packages of formic
  return (
    <>
 
      <div className='container'>
        <form onSubmit={handleSubmit}>
         <div className="logincontainer">
          <h2>Login</h2>
          
          <p>Username</p>
          <input 
             type="text"
             name='name'
             autoComplete='off'
             value={values.name}
             onChange ={handleChange}
             onBlur = {handleBlur}
           />
          {errors.name && touched.name ?(<p className='error'>{errors.name}</p>):null}
          
          <p>Email</p>
          <input 
            type="email"
            name='email'
            autoComplete='off'
            value={values.email}
            onChange ={handleChange}
            onBlur = {handleBlur}
            
           />
           {errors.email && touched.email ? (<p className='error'>{errors.email}</p>): null}
          <p>Password</p>
          <input
            type="password" 
            name='password'
            autoComplete='off'
            value={values.password}
            onChange ={handleChange}
            onBlur = {handleBlur}
           />
           {errors.password && touched.password ?(<p className='error'>{errors.password}</p>): null}

          <p>Confirm Password</p>
          <input
            type="password" 
            name='confirm_password'
            autoComplete='off'
            value={values.confirm_password}
            onChange ={handleChange}
            onBlur = {handleBlur}
          
          />
          {errors.confirm_password && touched.confirm_password ?( <p className='error'>{errors.confirm_password}</p>): null}
          <button type='submit'>Login</button>
         </div>
        </form>
    </div>
    
    </>
  )
}

export default App
