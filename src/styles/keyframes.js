import { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const xpBarFill = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

export const xpBarProgressive = keyframes`
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }
  100% {
    transform: scaleX(0);
    transform-origin: left;
  }
`;

export const levelNumber = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  60% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

export const starTwinkle = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

export const particleFloat = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%) translateX(0) rotate(0deg);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-100%) translateX(20px) rotate(360deg);
  }
`;

export const levelUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.1);
    filter: brightness(2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: brightness(1.5);
  }
`;