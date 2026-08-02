// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    otelBlue: '#E86436',
    otelYellow: '#F2B84B',
    otelGray: '#101C2C',
    otelRed: '#D94F4F',
    backgroundGray: '#F2F5F7',
    lightBorderGray: '#DDE4EA',
    borderGray: '#C8D1DA',
    textGray: '#152235',
    textLightGray: '#677386',
    white: '#FFFFFF',
  },
  breakpoints: {
    desktop: '@media (min-width: 768px)',
  },
  sizes: {
    mxLarge: '22px',
    mLarge: '20px',
    mMedium: '14px',
    mSmall: '12px',
    dxLarge: '58px',
    dLarge: '40px',
    dMedium: '18px',
    dSmall: '16px',
    nano: '8px',
  },
  fonts: {
    bold: '700',
    regular: '400',
    semiBold: '600',
    light: '300',
  },
};

export default Theme;
