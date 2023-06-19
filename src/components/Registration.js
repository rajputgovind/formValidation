// import { Form } from 'formik';
import { Button, Container, Form } from 'react-bootstrap'
import React from 'react';
import { useFormik } from 'formik';
import { singUpSchema } from './Validate';

const initialValues ={
    name:"",
    email:"",
    password:"",
    confirm_password:""
}

const Registration = () => {
  const {values,touched, handleChange, handleBlur, handleSubmit ,errors} = useFormik({
        initialValues:initialValues,
        validationSchema: singUpSchema,
        onSubmit: ( values,action) =>{
            console.log("Valusss",values)
            action.resetForm()
        }
    })
    // console.log(Formik.values)
    console.log("errrrr",errors)
    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Enter your Name</Form.Label>
                        <Form.Control
                            type='text'
                            name='name' 
                            autoComplete='off' 
                            // controlId='name'
                            placeholder="Enter name" 
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            {(errors.name&&touched.name)?<p style={{color:"red"}}> {errors.name}</p>:null}
                        <Form.Label >Enter your email</Form.Label>
                        <Form.Control
                            type='email'
                            name='email' 
                            autoComplete='off' 
                            // controlId='email'
                            placeholder="Enter email" 
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}

                            />
                            {(errors.email&&touched.email)?<p style={{color:"red"}}> {errors.email}</p>:null}
                        <Form.Label >Enter your password</Form.Label>
                        <Form.Control
                            type='password'
                            name='password' 
                            autoComplete='off' 
                            // controlId='password'
                            placeholder="Enter password" 
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}

                            />
                            {(errors.password&&touched.password)?<p style={{color:"red"}}> {errors.password}</p>:null}
                        <Form.Label >Enter your confirm password</Form.Label>
                        <Form.Control
                            type='password'
                            name='confirm_password' 
                            autoComplete='off' 
                            // controlId='confirm_password'
                            placeholder="Enter confirm password" 
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}

                            />
                            {(errors.confirm_password&&touched.confirm_password)?<p style={{color:"red"}}> {errors.confirm_password}</p>:null}

                    </Form.Group>

                    <Button className='btn btn-success' type='submit'>submit</Button>
                </Form>
            </Container>
        </>
    );
}

export default Registration;
