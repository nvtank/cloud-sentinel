// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const CartItems = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CardItemsHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 64px 74px;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  label {
    color: ${({ theme }) => theme.colors.textLightGray};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  label:not(:first-child) {
    text-align: right;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: minmax(0, 1fr) 90px 100px;
    gap: 18px;
  }
`;

export const CartItemImage = styled.img`
  width: 66px;
  height: 66px;
  padding: 6px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.backgroundGray};
  object-fit: contain;

  ${({ theme }) => theme.breakpoints.desktop} {
    width: 90px;
    height: 90px;
  }
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 64px 74px;
  gap: 10px;
  padding: 20px 0;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  p {
    margin: 0;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: minmax(0, 1fr) 90px 100px;
    gap: 18px;
  }
`;

export const CartItemDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 14px;
  text-align: right;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;

  ${({ theme }) => theme.breakpoints.desktop} {
    gap: 18px;
    font-size: 14px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const DataRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  padding: 18px 0 0;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 14px;
`;

export const TotalText = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 19px;
`;
