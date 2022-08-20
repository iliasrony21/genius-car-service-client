import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

const SignUp = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const [
    createUserWithEmailAndPassword,
    user
  ] = useCreateUserWithEmailAndPassword(auth)
  const navigate = useNavigate()

  if (user) {
    navigate('/home')
  }
  const handleSubmitRef = event => {
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    createUserWithEmailAndPassword(email, password)
  }
  return (
    <div>
      <h1 className='text-primary text-center text-bold'>Sign Up!!!!!!!!</h1>
      <div className='login-details mx-auto w-50'>
        <Form onSubmit={handleSubmitRef}>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Your Name</Form.Label>
            <Form.Control type='name' placeholder='Your name' required />
          </Form.Group>
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
          <Link className='text-decoration-none mt-2' to={'/login'}>
            Please Login
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}

export default SignUp
