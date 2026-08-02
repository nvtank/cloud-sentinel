// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import Button from '../components/Button';

export const ProductDetail = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 38px 20px 70px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 90px 48px 110px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: minmax(0, 1.08fr) minmax(380px, 0.92fr);
    gap: clamp(60px, 7vw, 110px);
    align-items: center;
  }
`;

export const Image = styled.div<{ $src: string }>`
  width: 100%;
  height: 380px;
  border: 1px solid rgba(21, 34, 53, 0.07);
  border-radius: 28px;
  background: #ffffff url(${({ $src }) => $src}) no-repeat center;
  background-size: 72% auto;
  box-shadow: 0 24px 60px rgba(26, 39, 58, 0.08);

  ${({ theme }) => theme.breakpoints.desktop} {
    height: 650px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Eyebrow = styled.p`
  margin: 0 0 2px;
  color: ${({ theme }) => theme.colors.otelBlue};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 38px;
  line-height: 1.05;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: clamp(46px, 4vw, 66px);
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
`;

export const Description = styled(Text)`
  max-width: 620px;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 15px;
  font-weight: 400;
  line-height: 1.75;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 17px;
  }
`;

export const ProductPrice = styled(Text)`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.textGray};
  font-family: 'Manrope', sans-serif;
  font-size: 30px;
  font-weight: 700;
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 8px 0;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
`;

export const PurchaseRow = styled.div`
  display: grid;
  grid-template-columns: 104px 1fr;
  gap: 14px;
  align-items: end;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AddToCart = styled(Button)`
  width: 100%;
  gap: 10px;
  min-height: 50px;

  img {
    filter: brightness(0) invert(1);
  }
`;

export const Benefits = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 6px;

  span {
    color: ${({ theme }) => theme.colors.textLightGray};
    font-size: 12px;
    font-weight: 400;
  }
`;
