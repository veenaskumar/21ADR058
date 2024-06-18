import React, { useState, useEffect } from 'react';

const apiUrl = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000';

const TopLaptops = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4Njg3NDY5LCJpYXQiOjE3MTg2ODcxNjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI2OGJmNTRkLWFkZTUtNDJlNy04ODg5LWQyNWFjOTJkZjQ4MyIsInN1YiI6InZlZW5hc2t1bWFycy4yMWFpZEBrb25ndS5lZHUifSwiY29tcGFueU5hbWUiOiJBRkZPUkRNRUQiLCJjbGllbnRJRCI6IjI2OGJmNTRkLWFkZTUtNDJlNy04ODg5LWQyNWFjOTJkZjQ4MyIsImNsaWVudFNlY3JldCI6InRHb3ZIWEpVS1VMRmVJRlMiLCJvd25lck5hbWUiOiJWZWVuYXMga3VtYXIiLCJvd25lckVtYWlsIjoidmVlbmFza3VtYXJzLjIxYWlkQGtvbmd1LmVkdSIsInJvbGxObyI6IjU4In0.08Zof5C8eLKrBX0mTWmeItGGzdolLIpjsrDLSS_ruBE'
  const [laptops, setLaptops] = useState([]);
  console.log(token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setLaptops(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Top 10 Laptops Sold on Amazon</h1>
      <ul>
        {laptops.map((laptop, index) => (
          <li key={index}>
            <strong>{laptop.productName}</strong>
            <p>Price: ${laptop.price}</p>
            <p>Rating: {laptop.rating}</p>
            <p>Discount: {laptop.discount}%</p>
            <p>Availability: {laptop.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopLaptops;


