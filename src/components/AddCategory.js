import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) =>{
        const value = e.target.value;
        setInputValue(value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submit')
        setCategories(cats=>[inputValue,...cats,]);
        setInputValue('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <h5>Add Category</h5>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                >

            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
