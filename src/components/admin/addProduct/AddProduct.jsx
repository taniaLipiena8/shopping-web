import CustomSelect from '../../form-template/CustomSelect'
import CustomInput from '../../form-template/CustomInput'
import CustomTextarea from '../../form-template/CustomTextarea'
import { Formik, Form } from 'formik'
import './AddProduct.css'
import { useNavigate } from 'react-router-dom'
import { getCategories, addNewProduct } from '../../products-services/ProductsServices'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { addSchema } from '../../form-template/ValidationSchema'

const AddProduct = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        let data = await getCategories()
        setCategories(data)
    }
    useEffect(() => {
        fetchCategories()
    }, [])

    const onSubmit = async (values, actions) => {
        console.log(values);
        try {
            let resp = await addNewProduct(values)
            console.log(resp);
        } catch (error) {
            alert(error)
        }

        actions.resetForm()
        navigate('/admin/products')
    }
    return (
        <Formik initialValues={{ title: '', description: '', price: 0, stock: 0, category: '', brand: '', thumbnail: null, images: null }}
            onSubmit={onSubmit}
            validationSchema={addSchema}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form className='add'>
                    <h1>Add Product</h1>
                    <CustomInput label='Product Name' name='title' type='text' placeholder="Enter product name" />

                    <CustomTextarea label='Description' name='description' placeholder="Enter product description" />

                    <CustomInput label='Price' name='price' type='number' />

                    <CustomInput label='Stock' name='stock' type='number' />

                    <CustomSelect label='Category' name='category' placeholder='Please pick one'>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}

                    </CustomSelect>

                    <CustomInput label='Brand Name' name='brand' type='text' placeholder="Enter product brand" />

                    <label htmlFor="thumbnail">Thumbnail</label>
                    <input id="thumbnail" name="thumbnail" type="file" onChange={(event) => {
                        setFieldValue("thumbnail", event.currentTarget.files[0]);
                    }} />

                    <label htmlFor="images">Image</label>
                    <input id="images" name="images" type="file" onChange={(event) => {
                        setFieldValue("images", event.currentTarget.files[0]);
                    }} />

                    <div className='add-btn'>
                        <Button variant='outline-primary' type='submit' disabled={isSubmitting}>Submit</Button>
                    </div>

                </Form>
            )}

        </Formik>

    )
}

export default AddProduct