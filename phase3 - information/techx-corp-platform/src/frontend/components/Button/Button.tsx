// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

const Button = styled.button<{ $type?: 'primary' | 'secondary' | 'link' }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.otelBlue};
  color: white;
  border: solid 1px ${({ theme }) => theme.colors.otelBlue};
  padding: 12px 22px;
  outline: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  border-radius: 999px;
  min-height: 50px;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(232, 100, 54, 0.2);
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;

  &:hover:not(:disabled) {
    background: #d9572d;
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(232, 100, 54, 0.26);
  }

  &:focus-visible {
    outline: 3px solid rgba(232, 100, 54, 0.24);
    outline-offset: 3px;
  }

  ${({ $type = 'primary' }) =>
    $type === 'secondary' &&
    css`
      background: none;
      color: ${({ theme }) => theme.colors.otelBlue};
      box-shadow: none;
    `};

  ${({ $type = 'primary' }) =>
    $type === 'link' &&
    css`
      background: none;
      color: ${({ theme }) => theme.colors.otelBlue};
      border: none;
      box-shadow: none;
    `};
`;

export default Button;
