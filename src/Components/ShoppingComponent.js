import { useState,useEffect } from "react"

export default function ShoppingComponent()
{ 
    const [categories, setcategories] = useState([]);
    const [products,setproducts] = useState([]);

    function Loadcategories(){
        fetch('http://fakestoreapi.com/products/categories')
        .then(response=> response.json())
        .then(data=>{
            data.unshift('All');
            setcategories(data);
        })
    }
    function Loadproducts(){
        fetch('http://fakestoreapi.com/products')
        .then(response=> response.json())
        .then(data=>{
            setproducts(data);
        })
    }
    useEffect(()=>{
        Loadcategories();
        Loadproducts();
    },[])

    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 mt-3">
            <h2><span className="bib bi-cart"></span>Shopping Home</h2>
            </header>
            <section className="row">
                <nav className="col-3"> 
                    <div>
                        <label>Select a category</label>
                        <div>
                            <select className="form-select">
                                {
                                    categories.map(category=>
                                      <option key={category}>{category.toUpperCase()}</option>  
                                        )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-9 d-flex flex-wrap overflow-auto" style={{height:'600px'}}>
                   {
                    products.map(product=>
                       <div key={product.id} className="card m-2 p-2 w-25">
                        <img src={product.image} className="card-img-top" height="150" />
                        <div className="card-header">
                            <p>{product.title}</p>
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd>
                                    <span className="bi bi-star-fill text-succcess"></span>
                                    {product.rating.rate} <span>[{product.rating.count}]</span>
                                </dd>
                            </dl>
                        </div>
                       </div> 
                        )
                   }        
                </main>
            </section>
        </div>
    )
}