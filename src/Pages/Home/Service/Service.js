import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Service.css'

const Service = ({ service }) => {
  const { _id, name, price, description, img } = service
  const navigate = useNavigate()
  const handleWorkerId = id => {
    navigate(`/service/${id}`)
  }

  return (
    <div>
      <div className='services-details'>
        <img className='img-fluid"' src={img} alt='service' />
        <div className='services2'>
          <h2>Name: {name}</h2>
          <p>Price: ${price}</p>
          <p>description:{description}</p>
          <button
            onClick={() => handleWorkerId(_id)}
            className='btn-new bg-primary'
          >
            Book Now:{name}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Service
