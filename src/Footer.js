import React from 'react'

const Footer = () => {
  const copywriteYear = new Date()
  return (
    <div className='page-footer'>copyright &copy; {copywriteYear.getFullYear()}</div>
  )
}

export default Footer