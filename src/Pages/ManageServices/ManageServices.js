import React from 'react'
import useServices from '../../hooks/useServices'

const ManageServices = () => {
  const [services, setServices] = useServices()
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure to delete?')
    if (proceed) {
      const url = `https://thawing-temple-19320.herokuapp.com/service/${id}`
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remaining = services.filter(service => service._id !== id)
          setServices(remaining)
        })
    }
  }
  return (
    <div className='text-center'>
      <h2>This is manage services</h2>
      {services.map(service => (
        <div key={service._id}>
          <h4>
            {service.name}{' '}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </h4>
        </div>
      ))}
    </div>
  )
}

export default ManageServices
