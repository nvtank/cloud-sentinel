// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 48px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-top: 112px;
  }
`;

export const HotProducts = styled.div`
  margin: 72px 0 88px;

  ${({ theme }) => theme.breakpoints.desktop} {
    margin: 0 0 130px;
  }
`;

export const HotProductsTitle = styled.h1`
  max-width: 720px;
  margin: 0;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.08;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 54px;
  }
`;

export const SectionHeader = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 36px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 1.15fr 0.85fr;
    align-items: end;
    margin-bottom: 54px;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.otelBlue};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const SectionCopy = styled.p`
  max-width: 540px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 15px;
  line-height: 1.75;

  ${({ theme }) => theme.breakpoints.desktop} {
    justify-self: end;
    font-size: 17px;
  }
`;

export const Standard = styled.section`
  display: grid;
  gap: 42px;
  padding: 72px 20px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.otelGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 100px;
    padding: 100px max(6vw, 48px);
  }
`;

export const StandardIntro = styled.div`
  ${Eyebrow} {
    color: #f3c078;
  }
`;

export const StandardTitle = styled.h2`
  max-width: 540px;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 38px;
  line-height: 1.06;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 58px;
  }
`;

export const StandardGrid = styled.div`
  display: grid;
  gap: 0;
`;

export const StandardItem = styled.article`
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 7px 14px;
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.14);

  span {
    grid-row: 1 / 3;
    color: #f3c078;
    font-size: 12px;
    font-weight: 700;
  }

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Manrope', sans-serif;
    font-size: 18px;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.58);
    font-size: 14px;
    line-height: 1.55;
  }
`;

export const Home = styled.div`
  background: #f7f8f9;

  @media (max-width: 992px) {
    ${Content} {
      width: 100%;
    }
  }
`;
