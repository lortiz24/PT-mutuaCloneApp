import { View, StyleSheet } from 'react-native';
import FloatButtom from '../../ui/button-redirect/FloatButtom';

import { theme } from '../../../config/theme/theme';
import StyleText from '../../ui/style-text/StyleText';

const HomeView = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 15 }}>
        <StyleText color="primary" style={{fontSize:20}}>Buenas tardes mutante,</StyleText>
        <StyleText color="secondary" fontSize="subHeading">
          Jeffrey Saavedra
        </StyleText>
      </View>
      <View style={styles.buttonContainer}>
        <FloatButtom
          styleText={styles.textStyle}
          title="Solicitar recolección"
          styleTouchable={styles.styleTouchable}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  textStyle: {
    color: theme.colors.black,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subHeading,
    marginHorizontal: 7,
  },
  styleTouchable: {
    borderWidth: 1,
    color: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    flexDirection: 'row',
    width: 300,
    height: 70,
    backgroundColor: theme.colors.green,
    borderRadius: 100,
  },
  text: {
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.body,
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 25,
  },
});

export default HomeView;
