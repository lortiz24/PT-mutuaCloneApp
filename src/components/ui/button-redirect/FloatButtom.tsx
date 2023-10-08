import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import StyleText from '../style-text/StyleText';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../../config/theme/theme';

interface Props {
  styleText?: StyleProp<TextStyle>;
  styleTouchable?: StyleProp<ViewStyle>;
  title: string;
}

const FloatButtom = ({ styleText, styleTouchable, title }: Props) => {
  return (
    <TouchableOpacity style={styleTouchable}>
      <Fontisto name="recycle" size={25} color={theme.colors.black} />
      <StyleText style={styleText}>{title}</StyleText>
      <FontAwesome name="arrow-right" size={15} color={theme.colors.black} />
    </TouchableOpacity>
  );
};

export default FloatButtom;
