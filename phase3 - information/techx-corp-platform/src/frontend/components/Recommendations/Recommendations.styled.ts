// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Recommendations = styled.section`
  display: flex;
  margin: 90px 0 10px;
  align-items: center;
  flex-direction: column;
`;

export const ProductList = styled.div`
  display: flex;
  width: 100%;
  padding: 0;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.desktop} {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const TitleContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  padding: 54px 0 36px;
  text-align: left;
  width: 100%;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 30px;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 42px;
  }
`;
