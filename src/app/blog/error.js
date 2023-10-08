'use client'
 import Link from "next/link"
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
      <Link href='/'>Back to Home</Link>
    </div>
  )
}