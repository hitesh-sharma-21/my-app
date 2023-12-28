import React from 'react'
import useHello from '../hooks/useHello'
function Contact() {
  const hello=useHello();
  return (
    <div><h3>Contact page</h3></div>

  )
}

export default Contact