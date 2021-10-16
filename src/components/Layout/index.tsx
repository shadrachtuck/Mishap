import React from 'react';
import Header, { HeaderElement } from './Header';
import LeftSidebar, { SidebarElement } from './Sidebar';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styled-components/defaultTheme';
import GlobalStyles from '../../styled-components/globalStyles';
import MainContent from '../Sections/MainContent';

const SiteLayout = styled.div`
  display: grid;
  grid-template-columns: [gutter-left] 1.5rem [content-left] 8% [middle] 84% [content-right] 8% [gutter-right] 1.5rem;
  grid-template-rows: [header] 10vh [right-spacer] 2rem [content] auto [left-spacer] 2rem [footer] auto;

  ${SidebarElement} {
    grid-column: content-left;
    grid-row: header / span footer-end;
  }

  ${HeaderElement} {
    grid-column: middle;
    grid-row: header / span right-spacer;
  }

  ${MainContent} {
    grid-column: middle;
    grid-row: content;
  }
`;

type LayoutProps = {
  children: Array<JSX.Element> | JSX.Element;
  location: Location;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <SiteLayout>
        <LeftSidebar />

        <Header />

        <MainContent>{children}</MainContent>
      </SiteLayout>
    </ThemeProvider>
  );
};

export default Layout;
