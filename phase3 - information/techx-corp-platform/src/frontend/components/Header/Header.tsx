// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import CartIcon from '../CartIcon';
import CurrencySwitcher from '../CurrencySwitcher';
import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Header>
      <S.Announcement>
        <span>Built for curious minds</span>
        <span>Free delivery on orders over $100</span>
      </S.Announcement>
      <S.NavBar>
        <S.Container>
          <S.NavBarBrand href="/">
            <S.BrandMark aria-hidden="true">✦</S.BrandMark>
            <S.BrandCopy>
              <S.BrandName>TechX</S.BrandName>
              <S.BrandTag>Observatory Supply</S.BrandTag>
            </S.BrandCopy>
          </S.NavBarBrand>
          <S.NavLinks aria-label="Primary navigation">
            <S.NavLink href="/#hot-products">Shop</S.NavLink>
            <S.NavLink href="/#hot-products">Best sellers</S.NavLink>
            <S.NavLink href="/#our-standard">Our standard</S.NavLink>
          </S.NavLinks>
          <S.Controls>
            <CurrencySwitcher />
            <CartIcon />
          </S.Controls>
        </S.Container>
      </S.NavBar>
    </S.Header>
  );
};

export default Header;
