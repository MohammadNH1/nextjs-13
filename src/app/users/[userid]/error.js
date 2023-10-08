'use client'
 import Link from "next/link"
export default function Error({ error, reset }) {
    console.log(error)
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>  <br/>
      <Link href='/'>Back to Home Page</Link>
    </div>
  )
}