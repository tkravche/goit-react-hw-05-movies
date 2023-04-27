import PropTypes from 'prop-types';
import { Wrapper, Input } from './SearchBox.styled';

export const SearchBox = ({ OnHandleSubmit }) => {
  return (
    <Wrapper>
      <form onSubmit={OnHandleSubmit}>
        <Input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  OnHandleSubmit: PropTypes.func.isRequired,
};
