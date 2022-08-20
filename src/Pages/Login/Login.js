import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin'
import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

import Loading from '../Shared/Loading/Loading'

const Login = () => {
  const location = useLocation()

  const navigate = useNavigate()
  const emailRef = useRef('')
  const passwordRef = useRef('')
  let from = location.state?.from?.pathname || '/'
  let errorElement
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error
  ] = useSignInWithEmailAndPassword(auth)
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

  if (loading || sending) {
    return <Loading></Loading>
  }

  if (user) {
    // navigate(from, { replace: true })
  }
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
  const handleLogin = async event => {
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    await signInWithEmailAndPassword(email, password)
    const { data } = await axios.post(
      'https://thawing-temple-19320.herokuapp.com/login',
      { email }
    )
    console.log(data)
    localStorage.setItem('accessToken', data.accessToken)
    navigate(from, { replace: true })
  }
  const resetPassword = async () => {
    const email = emailRef.current.value
    if (email) {
      await sendPasswordResetEmail(email)
      alert('Sent email')
    } else {
      alert('please enter your email address')
    }
  }

  return (
    <div>
      <h1 className='text-primary text-center text-bold'>Log In!!!!!!!!</h1>
      <div className='login-details mx-auto w-50'>
        <Form onSubmit={handleLogin}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type='email'
              placeholder='Enter email'
              required
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type='password'
              placeholder='Password'
              required
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        <p>
          Are you new in this site?{' '}
          <Link className='text-decoration-none mt-2' to={'/signup'}>
            Please SignUp
          </Link>{' '}
        </p>
        <p>
          Forget Password?{' '}
          <button
            className='btn btn-link text-primary pe-auto text-decoration-none'
            onClick={resetPassword}
          >
            Reset Password
          </button>{' '}
        </p>
        <SocialLogin></SocialLogin>
        {/* <ToastContainer /> */}
      </div>
    </div>
  )
}

export default Login
