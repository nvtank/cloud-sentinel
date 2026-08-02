// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import Button from '../Button';

export const CheckoutForm = styled.form`
  position: relative;
`;

export const StateRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 0.72fr 1.28fr;
    gap: 14px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 24px;
  font-size: 24px;

  &:not(:first-child) {
    margin-top: 16px;
    padding-top: 28px;
    border-top: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  }
`;

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 12px;

  > div:last-child {
    grid-column: 1 / -1;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 1fr 1fr 0.72fr;
    gap: 12px;

    > div:last-child {
      grid-column: auto;
    }
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-top: 22px;

  a {
    text-decoration: none;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const CartButton = styled(Button)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.desktop} {
    width: auto;
  }
`;

export const EmptyCartButton = styled(Button)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.desktop} {
    width: auto;
  }
`;
