// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import Button from '../components/Button';

export const Cart = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 42px 20px 90px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 88px 48px 120px;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 34px;

  > div,
  > form {
    padding: 26px;
    border: 1px solid rgba(21, 34, 53, 0.07);
    border-radius: 22px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 16px 42px rgba(26, 39, 58, 0.055);
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: minmax(0, 1.16fr) minmax(390px, 0.84fr);
    align-items: start;
    gap: 36px;

    > div,
    > form {
      padding: 34px;
    }
  }
`;

export const CarTitle = styled.h1`
  margin: 0;
  font-size: 31px;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 42px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 34px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 48px;
  }
`;

export const Subtitle = styled.h3`
  max-width: 520px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.65;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  min-height: 410px;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  padding: 40px 20px;
  border: 1px solid rgba(21, 34, 53, 0.07);
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.white};
`;

export const EmptyCartButton = styled(Button)`
  min-height: auto;
  padding: 8px 0;
  color: ${({ theme }) => theme.colors.otelRed};
`;
