import { useState, useEffect } from 'react'
import axios from 'axios'
// import { RAPID_API_KEY } from '../.env'r

// const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'ecaec5c67fmshb9e1835dd8c25c6p13fd42jsn81554e3d1a6b',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.request(options)
      console.log(response.data.data)
      setData(response.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      alert('There is an error, try again later')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData
  }

  return { data, isLoading, error, refetch }
}

export default useFetch