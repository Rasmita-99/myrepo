
export default function DataBindingComponent(){
    var products = [
        {Name: 'Samsung TV',price: 45000.22},
        {Name:'Nike Casual',price: 22000.33}
    ];
    return(
        <div className="container">
          <h2>Products Tables</h2>
          <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(products=>
                     <tr>
                        <td>{products.Name}</td>
                        <td>{products.price}</td>
                     </tr>   
                        )
                }
            </tbody>
          </table>
        </div>
    )
}