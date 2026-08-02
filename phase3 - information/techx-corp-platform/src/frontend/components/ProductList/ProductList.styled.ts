// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px 24px;
  }
`;
