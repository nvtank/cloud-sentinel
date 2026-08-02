// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Select = styled.select`
  width: 104px;
  height: 48px;
  padding: 10px 38px 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.textGray};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid rgba(232, 100, 54, 0.14);
    border-color: ${({ theme }) => theme.colors.otelBlue};
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: min-content;
`;

export const Arrow = styled.img.attrs({
  src: '/icons/Chevron.svg',
  alt: 'select',
})`
  position: absolute;
  right: 16px;
  top: 21px;
  width: 9px;
  height: 5px;
  pointer-events: none;
`;
