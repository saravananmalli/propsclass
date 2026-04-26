import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux-tool/cartCounter";

function CustomCard() {
    const [product, setProduct] = useState([]);

// useEffect(() => {
//   fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => setProduct(data));
// }, []);

const count = useSelector((state) => state.cartCounter.value); // ✅ correct path
const dispatch = useDispatch();

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/1");
      const data = await response.json();
      setProduct([data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
    fetchData();        
}, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {product.map((e) => (
            <div className="card" style={{ width: "18rem" }} key={e.id}>
                <img src={e.image} className="card-img-top" alt={e.title} />
                <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">{e.description}</p>
                    <button className="btn btn-primary" onClick={()=>dispatch(increment())}>+</button>
                        <span style={{ margin: "0 10px" }}>{count}</span>
                    <button className="btn btn-primary" onClick={()=>dispatch(decrement())}>-</button>
                </div>
            </div>
        ))}
    </div>
  );
}

export default CustomCard;
