export const theme: ITheme = {
  colors: {
    textPrimary: '#F0F0F0',
    textSecondary: '#F4F4F4',
    primary: '#0366d6',
    white: '#fefefe',
    green: '#D8FC3A',
    black: '#01010C',
  },
  fontSizes: {
    body: 14,
    subHeading: 16,
    headingTitle: 22,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  appBar: {
    primary: '#171717',
    textPrimary: '#959595',
    textSecondary: '#D8FC3A',
  },
  background: {
    primary: '#212121',
  },
};

export interface ITheme {
  colors: {
    textPrimary: string;
    textSecondary: string;
    primary: string;
    white: string;
    green: string;
    black: string;
  };
  fontSizes: {
    body: number;
    subHeading: number;
    headingTitle: number;
  };
  fonts: {
    main: string;
  };
  appBar: {
    primary: string;
    textPrimary: string;
    textSecondary: string;
  };
  fontWeights: {
    normal: TFontWeight;
    bold: TFontWeight;
  };
  background: {
    primary: string;
  };
}
export type TFontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

export type TFontSize = keyof ITheme['fontSizes'];
export type TTextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
export type TColors = keyof ITheme['colors'];
export type TAppbar = keyof ITheme['appBar'];
