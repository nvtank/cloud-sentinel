// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const CartIcon = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  margin-left: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: border-color 180ms ease, transform 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.otelBlue};
    transform: translateY(-1px);
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ItemsCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -3px;
  right: -3px;
  width: 18px;
  height: 18px;
  font-size: 9px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.otelBlue};
`;
