import styled from 'styled-components';

export const Cards = styled.section`
  width: 100%;
  max-width: 75rem;
  margin: 6.75rem auto 0;

  .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
    > div {
      margin-bottom: 30px;
    }
  }
`;
