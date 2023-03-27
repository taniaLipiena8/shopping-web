import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../products-services/ProductsServices'
import './ProductDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { cartAdded } from '../../../features/carts/cartSlice';
import Star from '../star-rating/Star';

const ProductDetail = () => {
    const { id } = useParams()
    const [chosenProduct, setChosenProduct] = useState({})
    const [rating, setRating] = useState(0)
    const dispatch = useDispatch()


    const fetchProductById = useCallback(async () => {
        let data = await getProductById(id)
        setChosenProduct(data)
        setRating(Number(data.rating))
    }, [id])

    useEffect(() => {
        fetchProductById()
    }, [rating, fetchProductById])

    const handleAdd = ({ id, title, description, price, stock, thumbnail }) => {
        dispatch(
            cartAdded(id, title, description, price, stock, thumbnail)
        )

        alert('succesfully added to cart')

    }

    return (
        <div className="productDetail">
            <div className="card" style={{ width: '80rem' }}>
                <div className="row">
                    <div className="col">
                        <img src={chosenProduct.thumbnail} className="card-img" alt="" style={{ height: '30rem' }} />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h1 className="title">{chosenProduct.title}</h1>
                            <p className="price">${chosenProduct.price}</p>
                            <div>
                                <Star number = {rating} key={chosenProduct.id}/>
                                <span className='rating'> {chosenProduct.rating} </span>
                                <span className='divider'>|</span>
                                <span className='stock'> Stock: {chosenProduct.stock}</span>

                            </div>

                            <div className='tags-contain'>
                                <span>Tags</span>
                                <br></br>
                                <div className='tags'>{chosenProduct.brand} </div>
                                <div className='tags'> {chosenProduct.category}</div>
                            </div>

                            <span>Product Description</span>
                            <br></br>
                            <p>{chosenProduct.description}</p>

                            <Button variant='primary' onClick={() => handleAdd(chosenProduct)}>Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail