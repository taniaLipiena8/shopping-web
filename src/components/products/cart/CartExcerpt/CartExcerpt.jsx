import React from 'react'
import { FaTrash } from 'react-icons/fa'
import './CartExcerpt.css'
import Button from 'react-bootstrap/Button';

const CartExcerpt = ({ cart, handleDelete, handleIncrease, handleDecreased }) => {
    return (
        <div className="cartExcerpt">
            <div className="card" style={{ width: '50rem' }}>
                <div className="row">
                    <div className="col">
                        <div className='cart-image'>
                            <img src={cart.thumbnail} className="card-img" alt="" style={{ height: '15rem' }} />
                        </div>

                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">{cart.title}</h5>
                            <p className="card-text">{cart.description}</p>
                            <p className="card-text">${cart.price}</p>

                            <div className='cart-buttons'>
                                <Button variant='danger' className='trash' onClick={() => handleDelete(cart.id)}><FaTrash /></Button>
                                <span>
                                    <Button variant='primary' disabled={cart.amount===1 ? true : false} onClick={()=>handleDecreased(cart.id)}>-</Button>
                                    <span className='cart-amount'>{cart.amount}</span>
                                    <Button variant='primary' disabled={cart.amount===cart.stock ? true : false} onClick={()=>handleIncrease(cart.id)}>+</Button>
                                </span>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartExcerpt