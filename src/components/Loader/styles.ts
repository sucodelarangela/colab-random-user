import styled from 'styled-components';

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 50px;
  color: #3f51b5;
  animation: rotate-outer08 1.4s linear infinite;

  .multiColor-loader {
    display: block;
    animation: color-anim08 1.4s infinite;
  }

  .loader-circle {
    stroke: currentColor;
  }

  .MuiCircularProgress-circleStatic {
    transition: stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  .loader-circle-animation {
    animation: rotate-inner08 1.4s ease-in-out
      infinite;
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0;
  }

  @keyframes rotate-outer08 {
    0% {
      transform-origin: 50% 50%;
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-inner08 {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
    }

    100% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -125px;
    }
  }

  @keyframes color-anim08 {
    0% {
      color: #4285f4;
    }

    25% {
      color: #ea4335;
    }

    50% {
      color: #f9bb2d;
    }

    75% {
      color: #34a853;
    }
  }
`;