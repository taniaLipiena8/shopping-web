import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductCard.css'

const ProductCard = ({ handleCardClick, variant, product, handleClick, buttonTxt }) => {

    const clicked = () => {
        handleCardClick(product.id)
    }
    return (
        <Card style={{ width: '17rem', height: '400px' }} key={product.id} >
            <Card.Img className='card-image' style={{ height: '12rem' }} variant="top" src={product.thumbnail} onClick={() => clicked()} />
            <Card.Body>
                <div className='card-text' onClick={() => clicked()} style={{ marginBottom: '10px' }}>
                    <Card.Text>
                        {product.title}
                    </Card.Text>
                    <Card.Title>${product.price}</Card.Title>
                    <Card.Text>
                        {product.brand}
                    </Card.Text>
                </div>
                <div className='div-button'>
                    <Button className='card-btn' variant={variant} onClick={() => handleClick(product)}>{buttonTxt}</Button>
                </div>


            </Card.Body>
        </Card>
    )
}

export default ProductCard