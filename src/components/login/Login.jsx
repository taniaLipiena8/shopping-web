import React from 'react'
import CustomInput from '../form-template/CustomInput'
import { Formik, Form } from 'formik'
import './Login.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import { loginSchema } from '../form-template/ValidationSchema'


const Login = () => {
    const navigate = useNavigate()

    const onSubmit = (values, actions) => {
        console.log(values);
        localStorage.setItem('username', values.username)
        actions.resetForm()
        navigate('/admin/products', {replace: true})
    }
    return (
        <Formik initialValues={{ username: '', password: '' }}
        validationSchema={loginSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form className='login-form'>
                    <h1>Login</h1>
                    <CustomInput label='Username' name='username' type='text' placeholder="Enter your username" />

                    <CustomInput label='Password' name='password' type='password' placeholder="Enter your password" />

                    <Button className='login' variant='success' type='submit' disabled={isSubmitting}>Login</Button>
                </Form>
            )}

        </Formik>

    )
}

export default Login