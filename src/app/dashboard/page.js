import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Hello! this is a dashboard page!</h1>
      <Link href='/'>Back to home</Link>
    </div>
  )
}

export default page
