import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);

    if (inputValue.trim().length <= 0) return;
    // setCategories(categories => [ inputValue, ...categories]);
    onNewCategory(inputValue.trim())
    setInputValue('');

  }

  return (
    <form onSubmit={onSubmit} aria-label = 'form'>
      <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
