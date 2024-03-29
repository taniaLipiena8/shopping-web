import * as yup from 'yup'

const passwordRules = '^(?=.*[0-9])(?=.*[a-z]).{5,}$';

export const loginSchema = yup.object().shape({
    username: yup.string().min(3, "Username must be at least 3 characters long").required("Required"),
    password: yup.string().min(5).matches(passwordRules, { message: "Please creare a stronger password" }).required('Password is required')
})
//title: '', description: '', price: 0, stock: 0, category: '', brand: '', thumbnail: null, images: null
export const addSchema = yup.object().shape({
    title: yup.string().min(5, "Title must be at least 5 characters long").required("Required"),
    description: yup.string().min(10, 'Description is too short').required('Password is required'),
    price: yup.number().positive('Must be more than 0').required('Required'),
    stock: yup.number().positive('Must be more than 0').required('Required'),
    category: yup.string().oneOf(["smartphones","laptops", "fragrances","skincare","groceries","home-decoration", "furniture", "tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery", "sunglasses","automotive","motorcycle","lighting"], 'Please pick one of the select options').required('Required'),
    brand:  yup.string().min(2, "Brand must be at least 2 characters long").required("Required"),
    thumbnail: yup.mixed().required('Required'),
    images: yup.mixed().required('Required')
})