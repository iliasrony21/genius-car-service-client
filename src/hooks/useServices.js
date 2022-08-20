import { useEffect, useState } from 'react'

const useServices = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('https://thawing-temple-19320.herokuapp.com/service')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return [services, setServices]
}
export default useServices
