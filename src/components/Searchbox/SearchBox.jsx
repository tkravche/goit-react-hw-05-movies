import PropTypes from 'prop-types';
import { Wrapper, Input } from './SearchBox.styled';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchBox = ({ OnHandleSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    const { value } = e.target;
    setInputValue(value.toLowerCase().trim());

    // const nextParams = inputValue !== '' ? { inputValue } : {};
    // setSearchParams(nextParams);
  };

  return (
    <Wrapper>
      <form onSubmit={OnHandleSubmit}>
        <Input type="text" name="search" onChange={handleChange} />

        <button type="submit" disabled={inputValue ? false : true}>
          Search
        </button>
      </form>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  OnHandleSubmit: PropTypes.func.isRequired,
};
