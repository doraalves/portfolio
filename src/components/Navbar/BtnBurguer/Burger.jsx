import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  display: none;
  position: fixed;
  height: 2rem;
  top: 28px;
  right: 20px;
  z-index: 20;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: .25rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    background-color: ${({ open }) => (open ? "#ccc" : "#fff")};
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
