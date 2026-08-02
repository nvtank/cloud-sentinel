// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Footer = styled.footer`
  position: relative;
  padding: 64px 20px 34px;
  color: ${({ theme }) => theme.colors.white};
  background: #0a1421;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 82px max(6vw, 48px) 36px;
  }
`;

export const FooterMain = styled.div`
  display: grid;
  gap: 42px;
  max-width: 1320px;
  margin: 0 auto 64px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 1.6fr 0.7fr 0.9fr;
    gap: 72px;
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterBrand = styled.strong`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Manrope', sans-serif;
  font-size: 25px;
  letter-spacing: -0.04em;

  span {
    display: grid;
    width: 34px;
    height: 34px;
    place-items: center;
    border-radius: 11px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.otelBlue};
  }
`;

export const BrandStatement = styled.p`
  max-width: 440px;
  margin: 0;
  color: rgba(255, 255, 255, 0.56);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  strong {
    margin-bottom: 7px;
    color: #f3c078;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  a,
  span {
    color: rgba(255, 255, 255, 0.64);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 1320px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);

  span {
    color: rgba(255, 255, 255, 0.4);
    font-size: 11px;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
