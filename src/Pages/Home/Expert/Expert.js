import React from 'react'

const Expert = ({ expert }) => {
  const { name, img, description } = expert
  return (
    <div>
      <div className='services-details'>
        <img className='img-fluid"' src={img} alt='service' />
        <div className='services2'>
          <h2>Name: {name}</h2>

          <p>description:{description}</p>
          <button className='btn-new bg-primary'>Go Somewhere</button>
        </div>
      </div>
    </div>
  )
}

export default Expert
