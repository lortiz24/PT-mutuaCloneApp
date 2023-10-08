import { View, Image, StyleSheet } from 'react-native';
import StyleText from '../../../ui/style-text/StyleText';

const AboutUsVideo = () => {
  return (
    <View>
      <Image
        style={{ width: '100%', height: 180, borderRadius: 7 }}
        source={require('../../../../../assets/ImageHome.jpg')}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <StyleText color="secondary" fontSize="headingTitle" fontWeight="bold">
          Conoce nuestra
        </StyleText>
        <StyleText color="secondary" fontSize="headingTitle" fontWeight="bold">
          FUERZA MUTANTE
        </StyleText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    bottom: 40,
    padding: 10,
    borderRadius: 7,
  },
});

export default AboutUsVideo;
