import React from 'react'
// import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useServiceDetails from '../../hooks/useServiceDetails'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

import axios from 'axios'
import { toast } from 'react-toastify'

const CheckOut = () => {
  const { serviceId } = useParams()
  const [services] = useServiceDetails(serviceId)
  const [user] = useAuthState(auth)
  console.log(user)
  // const [user, setUser] = useState({
  //   name: 'Kabir Singh',
  //   email: 'kabir@gmail.com',
  //   address: 'mirpur',
  //   phone: '012354767879'
  // })
  // const handleAdress = event => {
  //   console.log(event.target.value)
  //   const { address, ...rest } = user
  //   const newAddress = event.target.value
  //   const newUser = { address: newAddress, ...rest }
  //   console.log(newUser)
  //   setUser(newUser)
  // }
  const handleSubmit = event => {
    event.preventDefault()
    const order = {
      name: user.displayName,
      email: user.email,
      service: services.name,
      address: event.target.address.value,
      phone: event.target.phone.value
    }
    axios
      .post('https://thawing-temple-19320.herokuapp.com/order', order)
      .then(response => {
        const { data } = response
        if (data.insertedId) {
          alert('order is booked')
          event.target.reset()
        }
      })
  }
  return (
    <div className='w-50 mx-auto'>
      <h1>Your service:{services.name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          className='w-100 mb-2'
          value={user.displayName}
          placeholder='Your name'
          required
          readOnly
          disabled
        />
        <br />
        <input
          type='email'
          name='email'
          className='w-100 mb-2'
          value={user.email}
          placeholder='email'
          required
          readOnly
          disabled
        />
        <br />
        <input
          type='text'
          name='service name'
          className='w-100 mb-2'
          value={services.name}
          placeholder=' service name'
          required
          readOnly
          disabled
        />
        <br />
        <input
          type='text'
          name='address'
          className='w-100 mb-2'
          placeholder=' address'
          required
        />
        <br />
        <input
          type='number'
          name='phone'
          className='w-100 mb-2'
          placeholder='phone number'
          required
        />
        <br />
        <input type='submit' className='btn btn-primary' />
      </form>
    </div>
  )
}

export default CheckOut
