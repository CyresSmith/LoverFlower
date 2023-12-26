import Logo from 'assets/svg/LF_logo.svg?react';
import PhoneIcon from 'assets/svg/mdi-light_phone.svg?react';
import CartButton from 'components/Shared/CartButton';
import { Container } from 'components/Shared/Shared.styled';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import {
  Box,
  CartButtonBox,
  HeaderBox,
  Link,
  NavigationList,
  PhoneLink,
} from './Header.styled';
import Search from './Search';

interface INavLink {
  title: string;
  to: string;
}

const navLinks: INavLink[] = [
  { title: 'Каталог', to: 'catalog' },
  { title: 'Доставка и оплата', to: 'shipping' },
  { title: 'O нас', to: 'about' },
  { title: 'Контакты', to: 'contacts' },
  { title: 'FAQ', to: 'faq' },
];

interface Props {
  scroll: number;
}

const Header = ({ scroll }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchRef = useRef<HTMLFormElement>(null);

  const handleCartBtnClick = () => {
    console.log('cart btn click');
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('value: ', searchValue);
    setSearchValue('');
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchReset = () => {
    setSearchValue('');
  };

  const handleSearchOpen = () => {
    if (isSearchFocused) return;
    setIsSearchOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <HeaderBox scrollValue={scroll}>
      <Container>
        <Box>
          <nav>
            <a href="/">
              <Logo />
            </a>

            <NavigationList>
              {navLinks.map(({ title, to }) => (
                <li key={to}>
                  <Link to={to}>{title}</Link>
                </li>
              ))}
            </NavigationList>
          </nav>

          <Search
            searchRef={searchRef}
            value={searchValue}
            isOpen={isSearchOpen}
            isFocused={isSearchFocused}
            handleSearchOpen={handleSearchOpen}
            onClick={() => setIsSearchFocused(true)}
            onChange={handleSearchChange}
            onResetClick={handleSearchReset}
            onSubmit={handleSearchSubmit}
          />

          {!isSearchOpen && (
            <PhoneLink href="tel:+375291136969">
              <PhoneIcon />

              <span> +380 (98) 555-69-69</span>
            </PhoneLink>
          )}
          <CartButtonBox>
            <CartButton onClick={handleCartBtnClick} cartItemsCount={5} />
          </CartButtonBox>
        </Box>
      </Container>
    </HeaderBox>
  );
};

export default Header;
