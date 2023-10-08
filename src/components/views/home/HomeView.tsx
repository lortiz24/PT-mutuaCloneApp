import { View, StyleSheet, Image } from 'react-native';
import FloatButtom from '../../ui/button-redirect/FloatButtom';

import { theme } from '../../../config/theme/theme';
import StyleText from '../../ui/style-text/StyleText';
import { News } from './News/News';

const HomeView = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 15, rowGap: 10 }}>
        <StyleText color="primary" style={{ fontSize: 20, opacity: 0.5 }}>
          Buenas tardes mutante,
        </StyleText>
        <StyleText color="secondary" fontSize="subHeading" style={{ fontSize: 20 }}>
          Jeffrey Saavedra
        </StyleText>
        <View style={{ marginTop: 5 }}>
          <Image
            style={{ width: '100%', height: 180, borderRadius: 7 }}
            source={require('../../../../assets/ImageHome.jpg')}
            resizeMode="cover"
          />

          <View style={styles.textContainer}>
            <StyleText
              color="secondary"
              fontSize="subHeading"
              style={{ fontSize: 22 }}
              fontWeight="bold">
              Conoce nuestra
            </StyleText>
            <StyleText
              color="secondary"
              fontSize="subHeading"
              style={{ fontSize: 22 }}
              fontWeight="bold">
              FUERZA MUTANTE
            </StyleText>
          </View>
        </View>
        <News />
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
  textContainer: {
    position: 'absolute',
    bottom: 40,
    padding: 10,
    borderRadius: 7,
  },
});

export default HomeView;
