// src/components/AddProduct.js
'use client'
import { useState } from 'react';
import './addproduct.css';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    company: '',
    color: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission
    console.log('Product data submitted:', formData);
    // Clear the form after submission
    const response = await fetch(`http://localhost:3000/api/products`,{
      method:"POST",
      body:JSON.stringify({...formData})
    })
    const data = await response.json()
    console.log(data)
    setFormData({
      name: '',
      category: '',
      company: '',
      color: '',
      price: '',
    });
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
