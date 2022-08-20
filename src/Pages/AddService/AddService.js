import React from 'react'
import { useForm } from 'react-hook-form'

const AddService = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
    const url = `https://thawing-temple-19320.herokuapp.com/service`
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
      })
  }
  return (
    <div>
      <h1 className='text-center mb-5 mt-5'>Please Add a service:</h1>
      <form
        className=' w-50 mx-auto d-flex flex-column'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='mb-2 p-2'
          placeholder='name'
          {...register('name', { required: true, maxLength: 20 })}
        />
        <textarea
          className='mb-2'
          placeholder='Description'
          {...register('description')}
        />
        <input
          className='mb-2 p-2 '
          placeholder='price'
          type='number'
          {...register('price')}
        />
        <input
          className='mb-2 p-2'
          placeholder='image url'
          type='text'
          {...register('img')}
        />
        <input type='submit' value='Add Service' />
      </form>
    </div>
  )
}

export default AddService
