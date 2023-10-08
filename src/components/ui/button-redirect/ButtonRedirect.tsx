import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import StyleText from '../style-text/StyleText';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../../config/theme/theme';

interface Props {
  styleText?: StyleProp<TextStyle>;
  styleTouchable?: StyleProp<ViewStyle>;
  title: string;
}

const ButtonRedirect = ({ styleText, styleTouchable, title }: Props) => {
  return (
    <TouchableOpacity style={styleTouchable}>
      <Fontisto name="recycle" size={30} color={theme.colors.black} style={{ paddingBottom: 5 }} />
      <StyleText style={styleText}>{title}</StyleText>
      <FontAwesome name="arrow-right" size={30} color={theme.colors.black} style={{ paddingBottom: 5 }} />
    </TouchableOpacity>
  );
};

export default ButtonRedirect;
