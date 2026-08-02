// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const ProductReviews = styled.section`
  display: flex;
  margin: 90px 0 0;
  align-items: stretch;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  margin-top: 72px;
  padding: 54px 0 34px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 30px;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 42px;
  }
`;

export const SummaryCard = styled.section`
  width: 100%;
  padding: 24px;
  margin: 0 0 24px;
  border: 1px solid rgba(21, 34, 53, 0.08);
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 14px 38px rgba(26, 39, 58, 0.06);
  display: grid;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 280px 1fr;
    align-items: center;
    padding: 30px;
  }
`;

export const AverageBlock = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 12px;
`;

export const AverageScoreBadge = styled.div`
  min-width: 70px;
  height: 70px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.otelGray};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 25px;
  display: grid;
  place-items: center;
`;

export const StarRating = styled.span`
  color: ${({ theme }) => theme.colors.otelYellow};
  font-size: 16px;
  white-space: nowrap;
`;

export const ScoreCount = styled.span`
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 13px;
`;

export const ScoreDistribution = styled.div`
  display: grid;
  gap: 8px;
`;

export const ScoreRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 40px;
  align-items: center;
  gap: 10px;
`;

export const ScoreLabel = styled.span`
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 12px;
`;

export const ScoreBar = styled.div`
  position: relative;
  height: 7px;
  overflow: hidden;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.backgroundGray};
`;

export const ScoreBarFill = styled.div`
  position: absolute;
  inset: 0 auto 0 0;
  height: 100%;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.otelBlue};
`;

export const ScorePct = styled.span`
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 11px;
  text-align: right;
  font-variant-numeric: tabular-nums;
`;

export const SummaryText = styled.p`
  margin: 0;
  line-height: 1.6;
`;

export const ReviewsGrid = styled.ul`
  display: grid;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 16px;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ReviewCard = styled.li`
  min-height: 170px;
  padding: 20px;
  border: 1px solid rgba(21, 34, 53, 0.08);
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.white};
  display: grid;
  align-content: start;
  gap: 16px;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const ReviewerName = styled.strong`
  font-size: 14px;
  font-weight: 600;
`;

export const ReviewBody = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.65;
`;

export const AskAISection = styled.section`
  position: relative;
  width: 100%;
  padding: 26px;
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(232, 100, 54, 0.15);
  border-radius: 22px;
  background: linear-gradient(135deg, #fff7f2 0%, #ffffff 68%);
  display: grid;
  gap: 16px;

  &::after {
    position: absolute;
    top: -80px;
    right: -60px;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: rgba(242, 184, 75, 0.12);
    content: '';
    pointer-events: none;
  }
`;

export const AskAIHeader = styled.h4`
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 23px;
`;

export const AskAIInputRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
  }
`;

export const AskAIInput = styled.input`
  width: 100%;
  min-width: 0;
  min-height: 50px;
  flex: 1;
  padding: 11px 15px;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-radius: 12px;
  outline: none;
  background: ${({ theme }) => theme.colors.white};
  font-size: 14px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.otelBlue};
    box-shadow: 0 0 0 4px rgba(232, 100, 54, 0.11);
  }
`;

export const AskAIControls = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const QuickPromptButton = styled.button`
  padding: 8px 11px;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.otelBlue};
    border-color: ${({ theme }) => theme.colors.otelBlue};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const AskAIButton = styled.button`
  min-height: 50px;
  padding: 10px 22px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.otelGray};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.otelBlue};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const AIMessage = styled.p`
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 14px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 1.6;
`;
