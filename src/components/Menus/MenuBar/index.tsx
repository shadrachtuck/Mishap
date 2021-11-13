import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { pxToRem } from '../../../styled-components/mixins';
import { routes } from '../../../../config';
import isExternalLink from '../../../utils/functions/isExternalLink';

type MenuItem = {
  id: number;
  name: string;
  href: string;
};

type MenuItems = Array<MenuItem>;

const menuItems: MenuItems = [
  {
    id: 1,
    name: 'artists',
    href: routes.artists,
  },
  {
    id: 2,
    name: 'contact',
    href: routes.contact,
  },
  {
    id: 3,
    name: 'store',
    href: routes.store,
  },
];

type NavbarProps = {
  displayHorizontally: boolean;
  color?: keyof DefaultTheme['colors'];
  onMenuItemClick?: () => void;
};

const Navbar = styled.ul<NavbarProps>`
  display: flex;
  gap: ${pxToRem(50)};
  flex-flow: ${({ displayHorizontally }) =>
    displayHorizontally ? 'row wrap' : 'column nowrap'};

  li {
    a {
      color: ${({ color = 'black' }) => color};
    }
  }
`;

const Menu = ({
  color,
  displayHorizontally,
  onMenuItemClick,
}: NavbarProps): JSX.Element => {
  return (
    <nav>
      <Navbar color={color} displayHorizontally={displayHorizontally}>
        {menuItems.map(({ id, name, href }) => (
          <li key={id} onClick={onMenuItemClick}>
            {/* safely add # to non-external links by default 
                because this is a single-page site */}
            {isExternalLink(href) ? (
              <a href={href} target="_blank" rel="noreferrer">
                {name}
              </a>
            ) : (
              <a href={`/#${href}`}>{name}</a>
            )}
          </li>
        ))}
      </Navbar>
    </nav>
  );
};

export default Menu;