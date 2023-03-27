import api from '../../api/Base'

export const getAllProducts = async () => {
    try {
        const response = await api.get('/products')

        return Promise.resolve(response.data.products)
    } catch (error) {
        alert('Failed in fetching products')
    }
}

export const getCategories = async () => {
    try {
        const response = await api.get('products/categories')

        return Promise.resolve(response.data)
    } catch (error) {
        alert('Failed in fetching categories')
    }
}

export const getProductByCategory = async (category) => {
    try {
        const response = await api.get(`/products/category/${category}`)
        return Promise.resolve(response.data.products)
    } catch (error) {
        alert(`Failed in fetching data in ${category} category`)
    }
}

export const getProductById = async (id) => {
    try {
        const response = await api.get(`/products/${id}`)
        return Promise.resolve(response.data)
    } catch (error) {
        alert(`Failed in fetching product with id ${id}`)
    }
}

export const getProductByQuery = async(query)=>{
    try {
        const response = await api.get(`products/search?${query}`)
        return Promise.resolve(response.data.products)
    } catch (error) {
        alert('failed in fetching data')
    }
}

export const addNewProduct = async (newProduct) => {
    try {
        const response = await api.post('/products/add', newProduct)
        alert('product added')
        return Promise.resolve(response.data)
    } catch (error) {
        return Promise.reject('Failed in adding product')
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await api.delete(`/products/${id}`)

        return Promise.resolve(response.data)
    } catch (error) {
        return Promise.reject('Failed in deleting product')
    }
}