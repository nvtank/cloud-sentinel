// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Block = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  height: 28px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.sizes.mSmall};
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.otelBlue};

  ${({ theme }) => theme.breakpoints.desktop} {
    width: auto;
    height: 30px;
    font-size: 11px;
  }
`;
