import Card from "../card/card";
import "./cart.css"
import images from "../assets/Asset.jpg"
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
const Cart= () =>{

    const [open, setOpen] = useState(false)
    console.log(open);

    const products = [
        {
            id:1,
            image:images,
            name: "Fancy Product",
            price: "$ 18.00"
        },
        {
            id:2,
            image:images,
            name: "Fancy Product",
            price: "$ 18.00"
        },
        {
            id:3,
            image:images,
            name: "Fancy Product",
            price: "$ 18.00"
        },
        {
            id:4,
            image:images,
            name: "Fancy Product",
            price: "$ 18.00"
        },
        {
            id:5,
            image:images,
            name: "Fancy Product",
            price: "$ 18.00"
        },
        {
            id:6,
            image:images,
            name: "Fancy Product",
            price: "$ 18.00"
        },
        {
            id:7,
            image:images,
            name: "Fancy Product",
            price: "$ 18.00"
        },
        {
            id:8,
            image:images,
            name: "Fancy Product",
            price: "$ 18.00"
        },
    ]

    return(
        <div className="container">
            <header className="main">
        <nav className="navbar">
            <a className="logo" href="#">Start Bootstrap</a>
            <div className="navbar-container">
            <ul className="nav-link">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">about</a></li>
                <li className="nav-item dropdown"><a href="#" onClick={ () => setOpen(!open)} >Shop</a>
                {open &&
                    <div className="dropdown-items">
                    <span ><a  href="#">All Products  </a></span>
                    <hr/>
                    <span ><a  href="#">Populer Items</a></span>
                    <span ><a  href="#">New Arrivals</a></span>
                    </div>
                }
                    </li>
            </ul>
            <button type="submit" className="cart"><FaCartPlus/> Cart<span>0</span></button>
            </div>
        </nav>
        
        <div className="content">
            <div className="text">
            <h1>Shop in Style</h1>
            <p>With this shop Home page Template</p>
            </div>
        </div>
        </header>
        <div className="product-list">
            {
                products.map((product, index)=>{
                    return <Card product = {product} key = {index}/>
                })
            }
        </div>
        </div>
    )
}

export default Cart;