// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

const controlStyles = `
  width: 100%;
  min-height: 52px;
  padding: 13px 15px;
  border: 1px solid #dce2e7;
  border-radius: 12px;
  outline: none;
  background: #ffffff;
  color: #152235;
  font-size: 15px;
  font-weight: 400;
  transition: border-color 160ms ease, box-shadow 160ms ease;

  &:focus {
    border-color: #e86436;
    box-shadow: 0 0 0 4px rgba(232, 100, 54, 0.11);
  }
`;

export const Input = styled.input`
  ${controlStyles}
`;

export const InputLabel = styled.p`
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 13px;
  font-weight: 600;
`;

export const Select = styled.select`
  ${controlStyles}
  padding-right: 38px;
`;

export const InputRow = styled.div`
  position: relative;
  margin-bottom: 19px;
`;

export const Arrow = styled.img.attrs({
  src: '/icons/Chevron.svg',
  alt: 'arrow',
})`
  position: absolute;
  right: 17px;
  bottom: 22px;
  width: 9px;
  height: 5px;
  pointer-events: none;
`;
