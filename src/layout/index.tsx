import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

interface IPropsLayout {
  children: React.ReactNode;
}

const Layout = ({ children }: IPropsLayout) => {
  return (
    <Wrapper>
      <GlobalStyles />
      {children}
    </Wrapper>
  );
};

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export default Layout;
