import Link from "next/link"
export default function Home() {
  return (
    <main >
      <h1>Hello world!</h1>
      <Link href='/dashboard' style={{marginRight:'10px'}}>Dashboard</Link>
      <Link href='/blog' style={{marginRight:'10px'}}>Blog</Link>
     <Link href='/user' style={{marginRight:'10px'}}>User</Link>
     <Link href='/about' style={{marginRight:'10px'}}>About</Link>
     <Link href='/users' style={{marginRight:'10px'}}>Users</Link>
     <Link href='/addusers' style={{marginRight:'10px'}}>Add Users</Link>
     <Link href='/addproducts' style={{marginRight:'10px'}}>Add Products</Link>
     <Link href='/products' style={{marginRight:'10px'}}>Products</Link>
     
    </main>
  )
}
