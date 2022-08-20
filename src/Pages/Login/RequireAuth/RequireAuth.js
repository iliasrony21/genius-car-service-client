import React from 'react'
import {
  useAuthState,
  useSendEmailVerification
} from 'react-firebase-hooks/auth'
import { useLocation, Navigate } from 'react-router-dom'
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading/Loading'

const RequireAuth = ({ children }) => {
  let location = useLocation()
  const [user, loading] = useAuthState(auth)
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth)
  if (loading) {
    return <Loading></Loading>
  }
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return (
      <div className='text-center mt-5'>
        <h3 className='text-danger'>Your Email is not verified!!</h3>
        <h5 className='text-success'> Please Verify your email address</h5>
        <button
          className='btn btn-primary'
          onClick={async () => {
            await sendEmailVerification()
            alert('Sent email')
          }}
        >
          Send Verification Email Again
        </button>
        {/* <ToastContainer></ToastContainer> */}
      </div>
    )
  }
  return children
}

export default RequireAuth
