import "./card.css"
const Card = (props)=>{
    return (
        <div className="Card">
            <img src={props.product.image} />
            <div className="card-body">
            <div>{props.product.name}</div>
            <div>{props.product.price}</div>
            </div>
            <button>Add to Cart</button>
        </div>
        
    )
}

export default Card;