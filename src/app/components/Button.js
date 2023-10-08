'use client'
const Button = ({price}) => {
  return (
    <div>
        <button onClick={()=>alert(`The price of this product is ${price}`)}>check price</button>
      
    </div>
  )
}

export default Button
