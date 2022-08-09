import React from 'react';
import styled from "styled-components";

const Container = styled.div`
flex: 1;
background-color: ${({ theme }) => theme.bgLighter};
height: 100vh;
color: ${({ theme }) => theme.text};
font-size: 14px;
position: sticky;
top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Menu = () => {
  return (
    <div>Menu</div>
  )
}

export default Menu