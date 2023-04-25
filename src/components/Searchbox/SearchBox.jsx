import { Wrapper, Input } from './SearchBox.styled';

export const SearchBox = ({ value, OnHandleSubmit }) => {
  return (
    <Wrapper>
      <form onSubmit={OnHandleSubmit}>
        <Input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
    </Wrapper>
  );
};
