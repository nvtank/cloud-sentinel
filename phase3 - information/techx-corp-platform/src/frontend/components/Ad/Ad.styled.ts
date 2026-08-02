// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import RouterLink from 'next/link';

export const Ad = styled.section`
  position: relative;
  margin-top: 50px;
  background: linear-gradient(120deg, #d9572d, ${({ theme }) => theme.colors.otelBlue});
  font-size: ${({ theme }) => theme.sizes.dMedium};
  text-align: center;
  padding: 54px 24px;

  * {
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
    cursor: pointer;
  }
`;

export const Link = styled(RouterLink)`
  color: black;
  text-decoration: none;
`;
