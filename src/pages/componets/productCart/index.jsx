import React, { useState } from 'react';
import './productCart.scss';
import products from '../../../fakedata';
import toast from 'react-hot-toast';
import { IoIosCart } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ProductCart() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (!cart.find(item => item.heading === product.heading)) {
            setCart([...cart, product]);
            toast('Item added to cart', { style: { color: 'green' } });
        } else {
            toast('Item is already in the cart!', { style: { color: 'red' } });
        }
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };



    return (
        <div className='productCart'>
            <div className="container">
                <section>
                    <div className="heading">
                        <h1>Product Cart</h1>
                    </div>
                    <div className="cart-grid">
                        {products.map((product, index) => (
                            <div className='cart' key={index}>
                                <h2>{product.heading}</h2>
                                <img src={Object.values(product.img)[0]} alt={product.heading} />
                                <p>Price: {product.prize}</p>
                                <ul>
                                    {Object.entries(product.size).map(([size, quantity]) => (
                                        <li key={size}>
                                            {size}: {quantity}
                                        </li>
                                    ))}
                                </ul>
                                <button className="add-to-cart-btn" onClick={() => addToCart(product)}><IoIosCart className='icon' />Add To Cart</button>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <div className="heading">
                        <h2>Your Cart</h2>
                    </div>
                    {cart.length > 0 ? (
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.heading}</td>
                                        <td>{item.prize}</td>
                                        <td><img src={Object.values(item.img)[0]} alt={item.heading} style={{ width: '50px', height: 'auto' }} /></td>
                                        <td><button onClick={() => removeFromCart(index)}><RiDeleteBin6Line className='icon' />Remove</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No items in the cart. Add items using the "Add to Cart" button.</p>
                    )}
                </section>
            </div>
        </div>
    )
}
