import styled from 'styled-components';
import { above } from '../../styled-components/mixins';
import { MainContent } from '../Sections';
import Footer from './Footer';
import { HeaderElement } from './Header/styles';
import { LeftSidebarWrapper } from './Sidebar/LeftSidebar/styles';
import { RightSidebarElement } from './Sidebar/RightSidebar/styles';

export const SiteLayout = styled.div`
  display: grid;

  grid-template-columns: [main] 1fr;

  ${LeftSidebarWrapper} {
    grid-column: main;
  }

  ${RightSidebarElement} {
    grid-column: main;
  }

  ${HeaderElement} {
    grid-column: main;
  }

  ${MainContent} {
    grid-column: main;
  }

  ${Footer} {
    grid-column: main;
  }

  ${above.medium`
    grid-template-rows:
      [header] minmax(6vh, 10vh)
      [main] auto
      [spacer] 2rem
      [footer] auto
      [whitespace-bottom] minmax(6vh, 10vh);

    grid-template-columns:
      [gutter-left] 2%
      [content-left] 8%
      [left-middle-gutter] 1%
      [middle] 78%
      [right-middle-gutter] 1%
      [content-right] 8%
      [gutter-right] 2%;

    ${LeftSidebarWrapper} {
      grid-column: content-left;
      grid-row: header / span footer-end;
    }

    ${RightSidebarElement} {
      grid-column: content-right;
      grid-row: main / span footer-end;
    }

    ${HeaderElement} {
      grid-column: middle / span gutter-right;
      grid-row: header;
    }

    ${MainContent} {
      grid-column: middle;
      grid-row: main;
    }

    ${Footer} {
      grid-column: middle;
      grid-row: footer;
    }
  `}
`;