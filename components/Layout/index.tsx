import { globalStyles } from '@/styles/styles';
import styled from '@emotion/styled';
import React, { Fragment } from 'react';

const NavStyles = styled.nav`
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
`;

function Nav() {
  return (
    <NavStyles>
      <div className="nav">
        <img src="./Group.svg" alt="logo" />
        <img src="./shopping-cart.svg" alt="cart" />
      </div>
      <hr />
    </NavStyles>
  );
}

type LayoutProps = {
  children: React.ReactElement | React.ReactElement[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      {globalStyles}
      <Nav />
      <main className="main">{children}</main>
    </Fragment>
  );
}
