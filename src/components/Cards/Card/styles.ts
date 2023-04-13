import styled from 'styled-components';

interface Props {
  src: string;
  randomColor: string;
}

export const Card = styled.div<Props>`
  border-radius: 16px;
  display: grid;
  grid-template-areas: 'header' 'content';
  height: fit-content;

  .header {
    grid-area: header;
    background-color: ${props => props.randomColor};
    border-radius: 16px 16px 0 0;
    height: 110px;
    padding: 16px;
    position: relative;
    span {
      background-image: url(${props => props.src});
      background-size: cover;
      border: 4px solid var(--gray);
      border-radius: 50%;
      height: 120px;
      width: 120px;
      bottom: -30%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
  }

  .content {
    background-color: var(--gray);
    border-radius: 8px;
    padding: 32px 16px 16px;
    h2 {
      color: var(--blue);
      text-align: center;
    }
    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--purple);
      padding-bottom: 24px;
      svg {
        margin-right: 4px;
      }
    }
    
    .info {
      display: flex;
      justify-content: space-between;
      padding-bottom: 24px;
    }
    
    .bio {
      color: var(--dark-gray);
      position: relative;
      padding: 24px 0;
      h3::before {
        content: '';
        background-color: ${props => props.randomColor};
        height: 2px;
        width: 100px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        z-index: 1;
      }
    }
  
    .contact {
      display: flex;
      align-items: center;
      justify-items: center;
      color: var(--purple);
      font-weight: 700;
      margin: 0 auto;
      width: fit-content;
      position: relative;
      &::before {
        content: '';
        background-color: var(--purple);
        height: 2px;
        width: 100%;
        bottom: 0;
        transform: scale(0);
        transform-origin: center;
        transition: transform 0.3s;
        position: absolute;
        z-index: 1;
      }
      &:hover, &:focus {
        color: var(--blue);
        &::before {
          background-color: var(--blue);
          transform: scale(1);
        }
      }
      svg {
        margin-right: 4px;
      }
    }
  
  }
  .footer {
    background-color: ${props => props.randomColor};
    border-radius: 0 0 16px 16px;
    padding: 24px 16px 16px;
    p{
      color: var(--gray);
    }
  }
`;
