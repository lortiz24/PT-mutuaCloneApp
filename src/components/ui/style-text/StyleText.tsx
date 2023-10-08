import { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import {
  TFontSize,
  TFontWeight,
  TTextAlign,
  theme,
} from '../../../config/theme/theme';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

interface Props extends PropsWithChildren, TextProps {
  color?: 'primary' | 'secondary';
  fontSize?: TFontSize;
  fontWeight?: TFontWeight;
  style?: StyleProp<TextStyle>;
  align?: TTextAlign;
}

export default function StyleText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  align,
  ...textProps
}: Props) {
  const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subHeading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold,
    style
  ];
console.log('textStyles',textStyles)
  return (
    <Text style={textStyles} {...textProps}>
      {children}
    </Text>
  );
}
