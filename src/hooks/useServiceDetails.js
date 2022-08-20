import { useEffect, useState } from 'react'

const useServiceDetails = serviceId => {
  const [services, setServices] = useState({})

  useEffect(() => {
    const url = `https://thawing-temple-19320.herokuapp.com/service/${serviceId}`
    fetch(url)
      .then(res => res.json())
      .then(data => setServices(data))
  }, [serviceId])
  return [services]
}
export default useServiceDetails
