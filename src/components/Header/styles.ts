import styled from 'styled-components';

interface Props {
  className: string;
}

export const Header = styled.header<Props>`
  color: var(--purple);
  padding: 16px 0;
  backdrop-filter: blur(10px);
  background-color: rgba(13, 21, 33, .5);
  border-bottom: 1px solid var(--blue);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  div {
    margin: 0 auto;
    max-width: 75rem;
  }

  &.rolling {
    color: var(--white);
    border-bottom: none;
    box-shadow: 0 1px 8px rgba(13, 21, 33, .8);
  }
`;
