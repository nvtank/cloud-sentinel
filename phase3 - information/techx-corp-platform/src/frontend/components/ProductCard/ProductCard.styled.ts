// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import RouterLink from 'next/link';

export const Link = styled(RouterLink)`
  display: block;
  text-decoration: none;
`;

export const ImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(21, 34, 53, 0.07);
  border-radius: 22px;
  background: #ffffff;
  transition: transform 260ms ease, box-shadow 260ms ease;
`;

export const Image = styled.div<{ $src: string }>`
  width: 100%;
  height: 280px;
  padding: 32px;
  background: url(${({ $src }) => $src}) no-repeat center;
  background-size: 72% auto;
  transition: transform 380ms ease;

  ${({ theme }) => theme.breakpoints.desktop} {
    height: 360px;
  }
`;

export const ProductCard = styled.div`
  cursor: pointer;

  &:hover ${ImageWrap} {
    transform: translateY(-5px);
    box-shadow: 0 22px 46px rgba(26, 39, 58, 0.12);
  }

  &:hover ${Image} {
    transform: scale(1.055);
  }
`;

export const CardBadge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 1;
  padding: 7px 10px;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.otelBlue};
  background: #fff2eb;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const Explore = styled.span`
  position: absolute;
  right: 14px;
  bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.otelGray};
  font-size: 11px;
  font-weight: 600;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 220ms ease, transform 220ms ease;

  ${ProductCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: start;
  padding: 18px 5px 6px;
`;

export const ProductName = styled.p`
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.45;
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  white-space: nowrap;
`;
