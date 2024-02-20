import React,{useEffect, useState} from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"

const CartPage = () => {

    const [cartItems, setcartItems] = useState([]);

    useEffect(() =>{
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setcartItems(storedCartItems);
    },[])

    const calculateTotalPrice = (item) =>{
        return item.price * item.quantity;
    }

    const handleIncrease = (item) => {
        item.quantity += 1 ;
        setcartItems ([...cartItems])

        localStorage.setItem("cart", JSON.stringify(cartItems));
    };

    const handleDcrease = (item) => {
      if(item.quantity > 1)
        item.quantity -= 1 ;
        setcartItems([...cartItem])

        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    const handleRemoveItems = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

        setcartItems(updatedCart);

        updateLocalStorage(updatedCart);
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const cartSubtotal = cartItems.reduce((total,item) => {
        return total + calculateTotalPrice(item);
    
    },0)

    const orderTotal = cartSubtotal;
  return (
    <div>
        <PageHeader title={"Shop Cart"} curPage={"Cart Page"}/>
        <div className='shop-cart padding-tb'> 
            <div className='container'>
                <div className='section-wrapper'>
                    <div className='cart-top'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='cat-product'>Product</th>
                                    <th className='cat-price'>Price</th>
                                    <th className='cat-quantity'>Quantity</th>
                                    <th className='cat-toprice'>Total</th>
                                    <th className='cat-edit'>Edit</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    cartItems.map((item,indx) =>(
                                        <tr key={indx}>
                                           <td className='product-item cat-product'>
                                               <div className='p-thumb'>
                                                   <Link to="/shop"><img src={item.img} alt=''/></Link>
                                               </div>
                                               <div className='p-content'>
                                                   <Link to="/shop">{item.name}</Link>
                                               </div>
                                           </td>
                                           <td className='cat-price'>${item.price}</td>
                                           <td className='cat-quantity'>
                                              <div className='cart-plus-minus'>
                                                 <div className='dec qtybutton' onClick={() => handleDcrease(item)}>
                                                    -

                                                 </div>
                                                 <input type='text' className='cart-plus-minus-box'
                                                   name="qtybutton" value={item.quantity}
                                                 />
                                                 <div className='inc qtybutton' onClick={() => handleIncrease(item)}>
                                                    +
                                                 </div>
                                              </div>
                                           </td>
                                           <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                                           <td className='cat-edit'>
                                              <a href='#' onClick={() => handleRemoveItems}>
                                                  <img src={delImgUrl} alt=''/>
                                              </a>
                                           </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage