import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '../features/cart/cartAPI';
import { setItems } from '../features/cart/cartSlice';
import CartItem from './CartItem';
import './CartList.css';

const CartList = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCartItems();
      dispatch(setItems(data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="cart-list">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-summary">
      <p>QUANTITY: ${totalQuantity}</p>
        <p>SUBTOTAL: ${totalAmount.toFixed(2)}</p>
        <p>SHIPPING: FREE</p>
        <p>TOTAL: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartList;
