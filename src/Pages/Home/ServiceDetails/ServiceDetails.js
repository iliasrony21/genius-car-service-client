import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useServiceDetails from '../../../hooks/useServiceDetails'

const ServiceDetails = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const [services] = useServiceDetails(serviceId)

  // const gotocheckout = () => {
  //   navigate(`/checkout/${serviceId}`)
  // }
  return (
    <div>
      <h1>Worker ID:{services.name}</h1>
      <div className='text-center text-primary'>
        <Link to={`/checkout/${serviceId}`}>
          <button className='btn btn-primary'>Proceed checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default ServiceDetails
