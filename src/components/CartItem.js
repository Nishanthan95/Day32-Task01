import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/cartSlice';
import './CartItem.css'; 

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch(updateQuantity({ itemId: item.id, quantity: newQuantity }));
  };

  return (
    <div className="cart-item">
      <img src={item.images} alt={item.title} className="thumbnail" />
      <div className="details">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <div className="actions">
          <input type="number" value={item.quantity} min="0" onChange={handleQuantityChange} className="quantity" />
          <span className="price">${item.price}</span>
          <button onClick={handleRemove} className="remove">REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
