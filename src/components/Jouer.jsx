import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import basket from '../assets/basket.png';

const Button = () => {
  const buttonRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={buttonRef} />
      {isSticky && (
        <StickyWrapper $isSticky={isSticky}>
          <StyledWrapper $isSticky={isSticky}>
            <button className="btt button sm:ml-15 ml: w-40 h-11 lg:w-70 lg:h-18">
              <div className="dots_border" />
              <img src={basket} alt="icon" className="sparkle ml-1 w-7 -mt-1 lg:w-12 lg:ml-8" />
              <span className="text_button text-xs lg:text-2xl font-semibold" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                Play Now
              </span>
            </button>
          </StyledWrapper>
        </StickyWrapper>
      )}
    </>
  );
};

const StickyWrapper = styled.div`
  position: ${(props) => (props.$isSticky ? 'fixed' : 'static')};
  bottom: ${(props) => (props.$isSticky ? '1.5rem' : 'auto')};
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: ${(props) => (props.$isSticky ? '30' : '999')}; /* Lower z-index */
`;

const StyledWrapper = styled.div`
  .button {
    --black-700: hsla(0 0% 12% / 1);
    --border_radius: 9999px;
    --transtion: 0.3s ease-in-out;
    --offset: 2px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transform-origin: center;
    padding: 20px 27px;
    background-color: transparent;
    
    border-radius: var(--border_radius);
    transform: scale(calc(1 + (var(--active, 0) * 0.1)));
    transition: transform var(--transtion);
    
    /* Reduce size when sticky */
    transform: ${(props) => props.$isSticky ? 'scale(0.8)' : 'scale(1)'};
    opacity: ${(props) => props.$isSticky ? '0.8' : '1'}; /* Lower opacity when sticky */
  }

  .button::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 95%;
    background: linear-gradient(130deg, rgb(61, 64, 82), rgb(61, 78, 107));
    border-radius: var(--border_radius);
    box-shadow:
      inset 0 2px 4px rgba(255, 255, 255, 0.1),
      0px 4px 10px -4px rgba(0, 0, 0, 0.3),
      0 0 0 calc(var(--active, 0) * 0.375rem) hsl(260 97% 50% / 0.75);
    transition: all var(--transtion);
    z-index: 0;
  }

  .button::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgb(73, 95, 117), rgb(79, 95, 126), rgb(55, 82, 130));
    background-position: top;
    opacity: var(--active, 0);
    border-radius: var(--border_radius);
    transition: opacity var(--transtion);
    z-index: 2;
  }

  .button:is(:hover, :focus-visible) {
    --active: 1;
  }

  .button:active {
    transform: scale(1);
  }

  .button .dots_border {
    --size_border: calc(100% + 2px);
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--size_border);
    height: var(--size_border);
    background-color: transparent;
    border-radius: var(--border_radius);
    z-index: -10;
  }

  .button .dots_border::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left;
    transform: rotate(0deg);
    width: 100%;
    height: 2rem;
    filter: blur(2px);
    background-color: rgb(162, 169, 231);
    mask: linear-gradient(transparent 0%, white 120%);
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .button .sparkle {
    position: relative;
    z-index: 10;
    object-fit: contain;
    transition: transform 1s ease-in-out;
  }

  .button:is(:hover, :focus) .sparkle {
    transform: rotate(360deg);
  }

  .button .text_button {
    position: relative;
    z-index: 10;
    color: white;
  }
`;

export default Button;
