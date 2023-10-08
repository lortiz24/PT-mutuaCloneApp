import { View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../../config/theme/theme';
import StyleText from '../style-text/StyleText';

const Developing = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="connectdevelop" size={100} color={theme.appBar.textSecondary} />
      <StyleText fontSize="subHeading">En desarrollo</StyleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', rowGap: 20 },
});

export default Developing;
