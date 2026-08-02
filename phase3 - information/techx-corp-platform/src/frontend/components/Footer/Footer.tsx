// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react';
import * as S from './Footer.styled';
import SessionGateway from '../../gateways/Session.gateway';
import { CypressFields } from '../../utils/enums/CypressFields';
import PlatformFlag from '../PlatformFlag';

const currentYear = new Date().getFullYear();

const { userId } = SessionGateway.getSession();

const Footer = () => {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    setSessionId(userId);
  }, []);

  return (
    <S.Footer>
      <S.FooterMain>
        <S.BrandColumn>
          <S.FooterBrand><span>✦</span> TechX</S.FooterBrand>
          <S.BrandStatement>Better tools for looking farther, learning more, and staying curious.</S.BrandStatement>
        </S.BrandColumn>
        <S.LinkColumn>
          <strong>Explore</strong>
          <a href="/#hot-products">Shop all</a>
          <a href="/#hot-products">Best sellers</a>
          <a href="/#our-standard">Our standard</a>
        </S.LinkColumn>
        <S.LinkColumn>
          <strong>Experience</strong>
          <span>Expert selected</span>
          <span>AI shopping assistant</span>
          <span>Secure checkout</span>
        </S.LinkColumn>
      </S.FooterMain>
      <S.FooterBottom>
        <span>© {currentYear} TechX Corp · Demonstration storefront</span>
        <span data-cy={CypressFields.SessionId}>Session {sessionId}</span>
      </S.FooterBottom>
      <PlatformFlag />
    </S.Footer>
  );
};

export default Footer;
