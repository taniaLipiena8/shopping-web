import {  useSearchParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
const SearchForm = () => {
    const [search, setSearch] = useSearchParams()


    const onSearchChange = (e) => {
        const text = e.target.value

        if (text.length === 0) {
            search.delete('q')
            setSearch(search, {
                replace: true
            })
        } else{
            search.set('q', text)
            setSearch(search, {
                replace: true
            })
        }
    }
    

    return (
        <Form className="d-flex" style={{ width: '500px' }}>
            <Form.Control
                type="search"
                placeholder="Search your product here"
                className="me-2 w-100 searchq"
                aria-label="Search"
                onChange={onSearchChange}
            />
        </Form>
    )
}

export default SearchForm