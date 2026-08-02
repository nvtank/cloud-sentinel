// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import styled from 'styled-components';
import Button from '../Button';

export const Banner = styled.div`
  position: relative;
  display: grid;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 18%, rgba(232, 100, 54, 0.16), transparent 30%),
    ${({ theme }) => theme.colors.otelGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    min-height: 620px;
    grid-template-columns: minmax(460px, 0.92fr) minmax(520px, 1.08fr);
  }
`;

export const BannerImg = styled.img.attrs({
  src: '/images/Banner.png',
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 54% center;
  filter: saturate(0.82) contrast(1.04);
`;

export const ImageContainer = styled.div`
  position: relative;
  min-height: 370px;

  &::after {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 58%, rgba(16, 28, 44, 0.34));
    content: '';
    pointer-events: none;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    min-height: 620px;
    grid-column: 2;
    grid-row: 1;
  }
`;

export const ImageNote = styled.div`
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 13px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.white};
  background: rgba(16, 28, 44, 0.54);
  backdrop-filter: blur(10px);
  font-size: 11px;
  font-weight: 500;

  span {
    display: grid;
    width: 23px;
    height: 23px;
    place-items: center;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.otelGray};
    background: ${({ theme }) => theme.colors.white};
    font-size: 9px;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    right: 28px;
    bottom: 28px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 52px 22px 58px;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1;
    grid-row: 1;
    padding: 84px clamp(48px, 7vw, 112px);
  }
`;

export const Title = styled.h1`
  max-width: 680px;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(42px, 10vw, 64px);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.06em;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: clamp(60px, 5.6vw, 84px);
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 24px;
  color: #f3c078;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const Description = styled.p`
  max-width: 560px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-top: 32px;

  a {
    text-decoration: none;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
    align-items: center;
    width: auto;
  }
`;

export const GoShoppingButton = styled(Button)`
  width: 100%;
  gap: 22px;

  ${({ theme }) => theme.breakpoints.desktop} {
    width: auto;
  }
`;

export const TextLink = styled(Link)`
  color: rgba(255, 255, 255, 0.76);
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline !important;
  text-decoration-color: rgba(255, 255, 255, 0.28) !important;
  text-underline-offset: 6px;
`;

export const TrustRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  margin-top: 42px;
  color: rgba(255, 255, 255, 0.56);
  font-size: 11px;
  font-weight: 500;

  span::before {
    margin-right: 7px;
    color: #f3c078;
    content: '•';
  }
`;
