import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllCarts, deleteCart, amountIncreased, amountDecreased } from '../../../../features/carts/cartSlice'
import './CartPage.css'
import CartExcerpt from '../CartExcerpt/CartExcerpt'

const CartPage = () => {
  const carts = useSelector(selectAllCarts)
  const dispatch = useDispatch()


  const handleDelete = (id) => {
    dispatch(
      deleteCart(id)
    )
  }

  const handleIncrease = (id) => {
    dispatch(amountIncreased(id))
  }

  const handleDecreased = (id) => {
    dispatch(amountDecreased(id))
  }


  return (
    <div className='container-mx-2 page-container'>
      {console.log(carts)}
      <h1>Shopping cart</h1>
      <div className='row mt-5 mx-2 row-container'>
        <div className='col-md-9 cart-details'>
          {carts.map((cart) => (
            <CartExcerpt cart={cart} handleDelete={handleDelete} handleIncrease={handleIncrease} handleDecreased={handleDecreased} key={cart.id} />
          ))}
        </div>
        <div className='col-md-3 total-sidebar'>
          <h4>Total Items: {carts.length}</h4>
          <br></br>
          <div className='list-cart-summary'>
            {carts.map((cart, index) => (
              <p className='total-summary' key={cart.id}>
                <span>{index + 1}. {cart.title}</span>
                <span>X {cart.amount}</span>
              </p>
            ))}
          </div>

          <h5>Total Price: ${carts.reduce((total, cart) => total + (cart.price * cart.amount), 0)}</h5>
        </div>
      </div>
      {console.log(carts)}</div>
  )
}

export default CartPage