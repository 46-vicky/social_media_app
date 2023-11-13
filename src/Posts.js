import React from 'react'
import { useParams } from 'react-router-dom'

const Posts = () => {
  const {id} = useParams()
  return (
    <main><h1>Post {id}</h1></main>
  )
}

export default Posts