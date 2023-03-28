import React, { useEffect, useState } from 'react'
import { getCategories, getAllProducts, getProductByCategory, getProductByQuery } from '../../products-services/ProductsServices'
import Category from '../categories-sidebar/Category'
import './Home.css'
import ProductCard from '../../admin/products/ProductCard'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartAdded } from '../../../features/carts/cartSlice'


const Home = () => {
    const [categories, setCategories] = useState([])
    const [chosenCtg, setChosenCtg] = useState('')
    const [products, setProducts] = useState([])
    const [search] = useSearchParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const fetchCategories = async () => {
        let data = await getCategories()
        setCategories(data)
    }

    const fetchProducts = async () => {
        let data = await getAllProducts()
        setProducts(data)
    }

    const fetchProductsByCategory = async (chosenCtg) => {
        let data = await getProductByCategory(chosenCtg)
        setProducts(data)
    }

    const fetchProductsByQuery = async (keyword) => {
        let data = await getProductByQuery(keyword)
        setProducts(data)
    }

    useEffect(() => {
        fetchCategories()
        if (chosenCtg !== '') {
            fetchProductsByCategory(chosenCtg)

        } 
        
    }, [chosenCtg])

    useEffect(()=>{
        if (search.toString()) {
            fetchProductsByQuery(search.toString().trim())
        } else{
            setChosenCtg('')
            fetchProducts()
        } 
    },[search])

    const handleAdd = ({ id, title, description, price, stock, thumbnail }) => {
        try {
            dispatch(
                cartAdded(id, title, description, price, stock, thumbnail)
            )
            alert('succesfully added to cart')
        } catch (error) {
            alert('error in adding to cart')
        }
        
    }

    const handleCardClick = (id) => {
        navigate(`/products/${id}`)
    }


    return (
        <>
            <div className='container-fluid-mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-2 categories'>
                        <h3>Category</h3>
                        <ul className='category-sidebar'>
                            {categories.map(category => (
                                <Category category={category} setChosenCtg={setChosenCtg} key={category} />
                            ))}
                        </ul>
                    </div>

                    <div className='col-md-10 ' >
                        <h3>
                            Selected Category : {chosenCtg ? chosenCtg : 'All'}
                        </h3>
                        <div className='home-product-list'>
                            {products.map(product => (
                                <ProductCard handleCardClick={handleCardClick} variant='outline-secondary' key={product.id} product={product} handleClick={handleAdd} buttonTxt='Add to cart' />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home