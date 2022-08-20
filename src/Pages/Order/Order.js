import { signOut } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import axiosPrivate from '../../api/axiosPrivate'
import auth from '../../firebase.init'

const Order = () => {
  const [user] = useAuthState(auth)
  const [orders, setOrders] = useState([])
  console.log('orders', orders)
  const navigate = useNavigate()
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email
      const url = `https://thawing-temple-19320.herokuapp.com/order?email=${email}`
      try {
        console.log(email)
        const { data } = await axiosPrivate.get(url)
        console.log('order data', data)
        setOrders(data)
      } catch (err) {
        console.log(err.message)
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth)
          navigate('/login')
        }
      }
    }
    getOrders()
  }, [user])
  return (
    <div>
      <h2>Order count is : {orders.length}</h2>
    </div>
  )
}

export default Order
