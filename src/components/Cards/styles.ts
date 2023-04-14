import styled from 'styled-components';

export const Cards = styled.section`
  /* width: 100%; */
  max-width: 75rem;
  margin: 6.75rem auto 0;

  .my-masonry-grid {
    display: flex;
    gap: 24px;
    width: 100%;
  }

  .my-masonry-grid_column {
    background-clip: padding-box;
    > div {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 1280px) {
    margin: 6.75rem 32px 0;
  }

  @media screen and (max-width: 768px) {
    margin: 6.75rem 24px 0;
  }
`;
