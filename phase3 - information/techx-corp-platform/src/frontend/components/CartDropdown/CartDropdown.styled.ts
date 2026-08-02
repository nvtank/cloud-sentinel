// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Image from 'next/image';
import styled from 'styled-components';
import Button from '../Button';

export const CartDropdown = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 22px;
  padding: 24px 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 28px 70px rgba(8, 20, 34, 0.2);

  ${({ theme }) => theme.breakpoints.desktop} {
    position: absolute;
    inset: auto 24px auto auto;
    top: 105px;
    width: 420px;
    max-height: 650px;
    padding: 24px;
    border: 1px solid rgba(21, 34, 53, 0.08);
    border-radius: 20px;
  }
`;

export const Title = styled.h5`
  margin: 0;
  font-size: 24px;
`;

export const ItemList = styled.div`
  display: grid;
  gap: 4px;

  ${({ theme }) => theme.breakpoints.desktop} {
    max-height: 450px;
    overflow-y: auto;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 86px 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
`;

export const ItemImage = styled(Image).attrs({
  width: '86',
  height: '86',
})`
  padding: 8px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.backgroundGray};
  object-fit: contain;
`;

export const ItemName = styled.p`
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 600;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
`;

export const ItemQuantity = styled(ItemName)`
  color: ${({ theme }) => theme.colors.textLightGray};
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

export const CartButton = styled(Button)`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  flex: 1;
  min-height: 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    overflow-y: visible;
    flex: 0 1 auto;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  span {
    color: ${({ theme }) => theme.colors.otelBlue};
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    span {
      display: none;
    }
  }
`;

export const EmptyCart = styled.h3`
  margin: 48px 0;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
