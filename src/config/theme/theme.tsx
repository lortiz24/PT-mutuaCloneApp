export const theme: ITheme = {
    colors: {
      textPrimary: '#F1F1F1',
      textSecondary: '#EEEEEE',
      primary: '#0366d6',
      white: '#fefefe',
      green:'#D8FC3A'
    },
    fontSizes: {
      body: 14,
      subHeading: 16,
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
      textSecondary:'#D8FC3A'
    },
    background:{
      primary:'#212121',
    }
  };
  
  export interface ITheme {
    colors: { [key in TColors]: string };
    fontSizes: { [key in TFontSize]: number };
    fonts: { [key: string]: string };
    appBar: { [key in TAppbar]: string };
    fontWeights: { [key: string]: TFontWeight };
    background: { [key: string]: string };
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
  
  export type TFontSize = 'body' | 'subHeading';
  export type TTextAlign =
    | 'auto'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | undefined;
  export type TColors = 'textPrimary' | 'textSecondary' | 'primary' | 'white' | 'green';
  export type TAppbar = 'primary' | 'textPrimary' | 'textSecondary';
  