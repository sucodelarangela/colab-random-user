import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid var(--gray);
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px var(--gray);
    background: var(--blue);
  }

  &.loadBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue);
    color: var(--gray);
    border-radius: 8px;
    font: var(--heading-3);
    margin: 24px auto;
    width: fit-content;
    padding: 8px 16px;
    svg {
      margin-right: 8px;
    }
  }

  &.backToTop {
    position: fixed;
    right: 2.5rem;
    bottom: 2.5rem;
    background: var(--blue);
    border-radius: 50%;
    padding: 8px;
    svg {
      fill: var(--gray);
    }
  }
`;
