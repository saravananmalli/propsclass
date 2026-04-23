const AddProduct = () => {
      const [product, setProduct] = useState({title: "", price: "",description: "",category: "", image: "same" });
       const handele = (e) =>{
          setProduct({...product,[e.target.name]:e.target.value})
       } 
    return (
        <div>
            <h1>AddProduct</h1>
            <label>title</label><br/>
            <input type="text" name="title" /><br/>
            <label>price</label><br/>
            <input type="text" name="price" /><br/>
            <label>description</label><br/>
            <input type="text" name="description" /><br/>
            <label>category</label><br/>
            <input type="text" name="category" /><br/>
        </div>
    )
}
