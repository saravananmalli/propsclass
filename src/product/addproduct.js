import axios from "axios";
import { useState } from "react";

export const AddProduct = () => {
    const [product, setProduct] = useState({ title: "", price: "", description: "", category: "", image: "same" });
    const handele = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
        console.log(product)
    }
    const addproduct = async () => {
        if (product.title === "") {
            alert("enter the", product.title)
        }
        const data = await axios.post("https://fakestoreapi.com/products", product)
        console.log(data)
    }
    return (
        <div>
            <h1>AddProduct</h1>
            <label>title</label><br />
            <input type="text" name="title" onChange={handele} /><br />
            <label>price</label><br />
            <input type="text" name="price" onChange={handele} /><br />
            <label>description</label><br />
            <input type="text" name="description" onChange={handele} /><br />
            <label>category</label><br />
            <input type="text" name="category" onChange={handele} /><br />
            <button onClick={addproduct}>AddProduct</button>
        </div>
    )
}
