// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Checkout = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 44px 20px 90px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 90px 48px 120px;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 90px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 1fr 0.76fr;
    grid-template-areas:
      'left right'
      'items items'
      'button button';
    gap: 28px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 28px;
  border-radius: 22px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.otelGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-area: left;
    min-height: 270px;
    justify-content: center;
    padding: 42px;
  }
`;

export const SuccessMark = styled.span`
  display: grid;
  width: 42px;
  height: 42px;
  margin-bottom: 8px;
  place-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.otelGray};
  background: #f3c078;
  font-size: 20px;
`;

export const SectionTitle = styled.h4`
  margin: 0 0 12px;
  font-size: 22px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  padding: 28px;
  border: 1px solid rgba(21, 34, 53, 0.07);
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-area: right;
    padding: 38px;
  }
`;

export const ItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 28px;
  border: 1px solid rgba(21, 34, 53, 0.07);
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-area: items;
    padding: 38px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  line-height: 1.08;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 46px;
  }
`;

export const Subtitle = styled.h3`
  margin: 0;
  color: rgba(255, 255, 255, 0.62);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 14px;
`;

export const InfoLabel = styled.span`
  color: rgba(255, 255, 255, 0.56);
  font-size: 12px;
  font-weight: 500;
`;

export const InfoValue = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  word-break: break-all;
`;

export const AddressText = styled.p`
  margin: 2px 0;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 14px;
  font-weight: 400;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OrderItem = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
`;

export const ItemImage = styled.img`
  width: 70px;
  height: 70px;
  padding: 6px;
  border-radius: 12px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.backgroundGray};
  object-fit: contain;
`;

export const ItemDetails = styled.div`
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 4px;
`;

export const ItemName = styled.h5`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
`;

export const ItemQuantity = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 12px;
`;

export const ItemPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  text-align: right;
  white-space: nowrap;
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 22px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.backgroundGray};
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 13px;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

export const TotalLabel = styled.span`
  font-size: 17px;
  font-weight: 700;
`;

export const TotalAmount = styled.span`
  font-size: 19px;
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-area: button;
  }
`;

export const DataRow = styled.div`
  display: grid;
  width: 100%;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  span:last-of-type {
    text-align: right;
  }
`;
