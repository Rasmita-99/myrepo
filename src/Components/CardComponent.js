

export default function CardComponent(props)
{
    return(
        <div className="card m-2 p-2" style={{widht:'200px'}}>
            <img src={props.product.img} className="card-img-top" height="160" />
            <div className="card-header" style={{height:'160px'}}>
                <p>{props.product.title}</p>
            </div>
        </div>
    )
}