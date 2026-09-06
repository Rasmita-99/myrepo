import { useState } from "react"

export default function TwowayBinding()
{
    const [ Product,setProduct] = useState({Name: ",Price:0,City:",stock: false});
    const [newProduct,setNewProduct] = useState({Name: ",Price: 0,City: ",stock: false});
    function handelName(e){
        setProduct({
            Name: e.target.value,
            Price: Product.Price,
            City: Product.City,
            stock: Product.stock
        })
    }
    function handlePrice(e){
        setProduct({
            Name: Product.Name,
            Price: e.target.value,
            City: Product.City,
            stock: Product.stock
        })
    }
    function handleCity(e){
        setProduct({
          Name: Product.Name,
          Price: Product.Price,
          City: e.target.value,
          stock: Product.stock
        })
    }
    function handlestock(e){
        setProduct({
         Name: Product.Name,
         Price: Product.Price,
         City: Product.City,
         stock: e.target.checked
        })
    }
    function handleRegister(){
        setNewProduct(Product);
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                 <h2>Register Product</h2>
                 <dl>
                    <dt>Name</dt>
                    <dd><input className="form-control" onChange={handelName} type="text" /></dd>
                    <dt>Price</dt>
                    <dd><input className="form-control" onChange={handlePrice} type="text" /></dd>
                    <dt>City</dt>
                    <dd>
                        <section onChange={handleCity} className="form-select">
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </section>
                    </dd>
                    <dt>stock</dt>
                    <dd className="form-switch">
                        <input onChange={handlestock} className="form-check-input" type="checkbox" /> Avaiable
                    </dd>
                 </dl>
                 <button onClick={handleRegister} className="btn btn-primary w-100">Register</button>
                </div>
                <div className="col-9">
                 <h2>Products Details</h2>
                 <dl>
                    <dt>Name</dt>
                    <dd>{newProduct.Name}</dd>
                    <dt>Price</dt>
                    <dd>{newProduct.Price}</dd>
                    <dt>City</dt>
                    <dd>{newProduct.City}</dd>
                    <dt>stock</dt>
                    <dd>{(newProduct.stock==true)?"Avaiable": "Out Of Stock"}</dd>
                 </dl>
                </div>
            </div>
        </div>
    )
}