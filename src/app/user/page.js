import React from 'react'
import FetchUser from '../util/FetchUser'
import Loading from './loading'
import { Suspense } from 'react'
const page = () => {
  return (
    <div>
      <h1>Hello User!</h1>
      <Suspense fallback={<Loading/>}>
      <FetchUser/>
      </Suspense>
      
    </div>
  )
}

export default page
