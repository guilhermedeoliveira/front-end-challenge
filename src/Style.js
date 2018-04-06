const fontSizeBase = 14;

export default {
  fonts: {
    fontSizeBase,
    fontSizeSmall: 12,
    fontSizeWee: 10,
    fontSizeLarge: Math.ceil(fontSizeBase * 1.25), // 18px
    fontSizeH1: Math.floor(fontSizeBase * 2.6), // 36px
    fontSizeH2: Math.floor(fontSizeBase * 2.15), // 30px
    fontSizeH3: Math.ceil(fontSizeBase * 1.7), // 24px
    fontSizeH4: Math.ceil(fontSizeBase * 1.25), // 18px
    fontSizeH5: Math.ceil(fontSizeBase * 1.125), // 16px
    fontSizeH6: Math.ceil(fontSizeBase * 0.85) // 12px
  },
  weights: {
    fontWeightThin: 100,
    fontWeightLight: 200
  },
  colors: {
    textColor: '#2a2a2a',
    linkColor: '#04669c',
    gray: '#c6c6c6',
    grayDarker: '#2a2a2a',
    grayBase: '#242424',
    grayLight: '#eaeaea',
    white: '#fff',
    wine: '#722f37',
    promotion: '#FF0084'
  }
}