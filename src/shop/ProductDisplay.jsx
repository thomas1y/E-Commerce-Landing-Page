import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const desc = "Energistia an deliver ataction metrcs after avsionary Apropria trnsition enterpris an sourses application emerging psd template"


const ProductDisplay = ({item}) => {

    const {name,id,price,seller,ratingCount,quantity} = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleDecrease = () =>{
      if(prequantity > 1){
        setQuantity(prequantity - 1)
      }
    }
    const handleIncrease = () =>{
        setQuantity(prequantity + 1)
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        const product ={
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            siize: size,
            color: color,
            coupon: coupon
        }
    
    const exitingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const exitingProductIndex = exitingCart.findIndex((item) => item.id === id);
    if(exitingProductIndex !== -1){
        exitingCart[exitingProductIndex].quantity += prequantity;
    }else{
        exitingCart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(exitingCart));

    setQuantity(1);
    setSize("Select Size")
    setColor("select Color");
    setCoupon("");
    }
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingCount} review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{desc}</p>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <div className='select-product size'>
                    <select value={size} onChange={handleSizeChange}>
                        <option>Select Size</option>
                        <option> SM</option>
                        <option> MD</option>
                        <option> LG</option>
                        <option> XL</option>
                        <option> XXL</option>
                    <i className='icofont-rounded-down'></i>
                    </select>
                </div>
                <div className='select-product color'>
                    <select value={color} onChange={handleColorChange}>
                        <option>Select Color</option>
                        <option> Pink</option>
                        <option> Ash</option>
                        <option> Red</option>
                        <option> White</option>
                        <option> Blue</option>
                        <option> Black</option>
                    <i className='icofont-rounded-down'></i>
                    </select>
                </div>

                <div className='cart-plus-minus'>
                   <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                   <input className='cart-plus-minus-box' type='text' name='qtybutton' id='qtybutton'
                    value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                   <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                   
                </div >

                <div className='discount-code mb-2'>
                    <input type="text" placeholder='EnterDiscount Code' onChange={(e) => setCoupon(e.target.value)}/>
                </div>
                <button type ="submit" className='lab-btn'>
                    <span>Add to Cart</span>
                </button>
                <Link to="/cart-page" className='lab-btn bg-primary'>
                    <span>Check Out</span>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay