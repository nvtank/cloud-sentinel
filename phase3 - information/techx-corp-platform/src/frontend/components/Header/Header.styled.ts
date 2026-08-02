// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  z-index: 20;
  color: ${({ theme }) => theme.colors.textGray};
`;

export const Announcement = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  min-height: 34px;
  padding: 8px 20px;
  color: rgba(255, 255, 255, 0.82);
  background: ${({ theme }) => theme.colors.otelGray};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  span:first-child::after {
    content: ' ·';
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    justify-content: space-between;
    padding-inline: max(6vw, 48px);
    font-size: 12px;

    span:first-child::after {
      content: '';
    }
  }
`;

export const NavBar = styled.nav`
  height: 78px;
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid rgba(21, 34, 53, 0.08);
  backdrop-filter: blur(18px);

  ${({ theme }) => theme.breakpoints.desktop} {
    height: 88px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 18px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 48px;
  }
`;

export const NavBarBrand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0;
  text-decoration: none;
`;

export const BrandMark = styled.span`
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(145deg, #ef794d 0%, #cf4e29 100%);
  box-shadow: 0 8px 22px rgba(232, 100, 54, 0.25);
  font-size: 20px;
`;

export const BrandCopy = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

export const BrandName = styled.strong`
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.04em;
`;

export const BrandTag = styled.span`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 9px;
  }
`;

export const NavLinks = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-right: 42px;
    margin-left: auto;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  &::after {
    position: absolute;
    right: 0;
    bottom: 4px;
    left: 0;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.otelBlue};
    content: '';
    transform: scaleX(0);
    transition: transform 180ms ease;
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
`;
