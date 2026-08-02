// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import * as S from './Banner.styled';

const Banner = () => {
  return (
    <S.Banner>
      <S.ImageContainer>
        <S.BannerImg />
        <S.ImageNote>
          <span>01</span>
          Field-tested optics
        </S.ImageNote>
      </S.ImageContainer>
      <S.TextContainer>
        <S.Eyebrow>Explore beyond the ordinary</S.Eyebrow>
        <S.Title>Bring the universe within reach.</S.Title>
        <S.Description>
          Thoughtfully selected telescopes, binoculars, and field accessories for every curious observer.
        </S.Description>
        <S.Actions>
          <Link href="#hot-products"><S.GoShoppingButton>Explore the collection <span>→</span></S.GoShoppingButton></Link>
          <S.TextLink href="#our-standard">Why TechX</S.TextLink>
        </S.Actions>
        <S.TrustRow>
          <span>Expert selected</span>
          <span>Secure checkout</span>
          <span>Built to explore</span>
        </S.TrustRow>
      </S.TextContainer>
    </S.Banner>
  );
};

export default Banner;
