// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const CurrencySwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SelectedConcurrency = styled.span`
  position: absolute;
  left: 12px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 13px;
  font-weight: 600;
  pointer-events: none;

  span {
    color: ${({ theme }) => theme.colors.textGray};
    font-size: 11px;
  }
`;

export const Arrow = styled.img.attrs({
  src: '/icons/Chevron.svg',
  alt: 'arrow',
})`
  position: absolute;
  right: 10px;
  width: 9px;
  height: 9px;
  pointer-events: none;
`;

export const Select = styled.select`
  width: 104px;
  height: 40px;
  padding: 0 25px 0 32px;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-radius: 999px;
  color: transparent;
  background: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  option {
    color: ${({ theme }) => theme.colors.textGray};
  }

  &:focus-visible {
    outline: 3px solid rgba(232, 100, 54, 0.18);
    border-color: ${({ theme }) => theme.colors.otelBlue};
  }
`;
