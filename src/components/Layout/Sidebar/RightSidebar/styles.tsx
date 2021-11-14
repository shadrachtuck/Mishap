import styled from 'styled-components';
import { padding } from '../../../../styled-components/mixins';

export const RightSidebarElement = styled.aside<{ shouldScrollTop: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: ${({ shouldScrollTop }) =>
    shouldScrollTop ? 'space-between' : 'flex-end'};
  padding: ${padding('small')} 0;

  position: sticky;
  height: ${({ shouldScrollTop }) => (shouldScrollTop ? '100vh' : '90vh')};
  top: 0;
  left: 0;
`;
