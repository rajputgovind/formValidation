import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import React from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { yupResolver } from '@hookform/resolvers/yup'

const GENDER_OPTION = [
    {text: 'Male' ,value :'male'},
    {text: 'Female' ,value :'female'},
    {text: 'Other' ,value :'other'}
]


const schema = Yup.object({
    name: Yup.string().min(3, 'Name is atleast 3 charecter').max(25).required('name field is required'),
    email: Yup.string().email().required('Email field is required'),
    phone: Yup.string().max(10).required('Phone number is required').matches(/^[0-9]{10}$/, 'Invalid phone number'),
    image: Yup.string().required(),
    gender:Yup.string().required(),
    password: Yup.string().required().min(6).max(18),
    conPassword:Yup.string().required('conform passwored is required').min(6).max(18).oneOf([Yup.ref('password',)],'Password does not match'),
})

const postData = (data)=>{
    console.log("data",data)
}

const SignUp = () => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    })

    return (
        <>
            <Container>
            <h1 className="text-center m-3">Registration Form</h1>
                <Form onSubmit={handleSubmit(postData)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Enter your Name</Form.Label>
                        <Form.Control
                            type='text'
                            name='name'
                            autoComplete='off'
                            // controlId='name'
                            placeholder="Enter name"

                            {...register('name')}
                        />
                           {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
                        
                        <Form.Label >Enter your email</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            autoComplete='off'
                            // controlId='email'
                            placeholder="Enter email"
                            {...register('email')}
                          

                        />
                        {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
                        <Form.Label >Enter your Phone</Form.Label>
                        <Form.Control
                            type='phone'
                            name='phone'
                            autoComplete='off'
                            // controlId='password'
                            placeholder="Enter Phone"
                            {...register('phone')}
                           

                        />
                        {errors.phone && <p style={{color:"red"}}>{errors.phone.message}</p>}
                        <Form.Label >Enter your Image</Form.Label>
                        <Form.Control
                            type='file'
                            name='image'
                            autoComplete='off'
                            // controlId='password'
                            placeholder="Enter image"
                            {...register('image')}
                           

                        />
                         {errors.image && <p style={{color:"red"}}>{errors.image.message}</p>}
                        <div className='mt-4'>
                            <select className="form-control" name="gender" {...register('gender')}>
                            <option value="">Select Gender</option>
                            {
                                GENDER_OPTION.map((option,index)=>{
                                    return <option key={index} value={option.value}>{option.text}</option>
                                })
                            }
                            </select>
                            {errors.gender && <p style={{color:"red"}}>{errors.gender.message}</p>}
                        </div>
                      
                        <Form.Label >Enter your password</Form.Label>
                        <Form.Control
                            type='password'
                            name='password'
                            autoComplete='off'
                            // controlId='password'
                            placeholder="Enter password"
                            {...register('password')}
                           

                        />
                        {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}

                        <Form.Label >Enter your confirm password</Form.Label>
                        <Form.Control
                            type='password'
                            name='conPassword'
                            autoComplete='off'
                            // controlId='password'
                            placeholder="Enter password"
                            {...register('conPassword')}
                           

                        />
                        {errors.conPassword && <p style={{color:"red"}}>{errors.conPassword.message}</p>}

                    </Form.Group>

                    <Button className='btn btn-success' type='submit'>submit</Button>
                </Form>
            </Container>
        </>
    );
}

export default SignUp;

