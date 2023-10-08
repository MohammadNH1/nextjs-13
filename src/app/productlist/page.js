import React from "react";
import Button from "../components/Button";
const getProduct = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};
const page = async () => {
  const data = await getProduct();
  const hello = [
    {
        name:'product1',

    },
    {
        name:'product2'
    }
  ]
  return (
    <div>
      <h4>Hello this is a product page</h4>
      {
       data.map((item)=><div key={item.id}>
        {item.title} <br/>
        <Button price ={item.price}/>
       </div>)
      }
    </div>
  );
};

export default page;
