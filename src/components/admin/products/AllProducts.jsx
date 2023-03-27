import { useEffect, useState } from "react"
import { getAllProducts } from "../../products-services/ProductsServices";
import Button from 'react-bootstrap/Button';
import './AllProducts.css'
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { deleteProduct } from "../../products-services/ProductsServices";

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const fetchProducts = async () => {
        let data = await getAllProducts()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const handleDelete = async ({id})=>{
        try {
            let resp = deleteProduct(id)
            console.log(resp);
            alert('successfully deleted product')
        } catch (error) {
            alert(error)
        }
    }

    const handleCardClick =()=>{
        navigate('/admin/products')
    }

    return (
        <div className="Products">
            <div className="AddButton">
                <Button variant="primary"  className="add-button" onClick={()=>navigate('/admin/add')}>
                    + Add New Product
                </Button>
            </div>
            <div className="Product-list">
                {products.map(product => (
                    <ProductCard handleCardClick={handleCardClick} key={product.id}variant = 'outline-danger' product = {product} handleClick={handleDelete} buttonTxt='Delete'/>
                ))}
            </div>
        </div>
    )
}

export default AllProducts