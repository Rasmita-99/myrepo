
export default function NestedIteration(){
    var menu = [
        {Category: "Electronic",Products: ["Samsung TV","Mobile",""]},
        {Category: "Footwear",products: ["Nike casual","Lee Boot"]}
    ];
    return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    menu.map(item =>
                        <li key={item.Category}>{item.Category}
                        <ul>
                            {
                                item.products.map(product =>
                                    <li key={product}>{product}</li>
                                    )
                            }
                        </ul>
                        </li>
                        )
                }
            </ol>
            <h2>Select a Product</h2>
            <select>
                {
                    menu.map(item=>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.products.map(product=>
                                    <option key={product}>{product}</option>
                                    )
                            }
                        </optgroup>
                        )
                }
            </select>
        </div>
    )
}