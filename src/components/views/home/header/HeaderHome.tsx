import { View, StyleSheet } from 'react-native';
import StyleText from '../../../ui/style-text/StyleText';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <StyleText color="primary" fontSize="headingTitle" style={styles.welcomeText}>
        Buenas tardes mutante,
      </StyleText>
      <StyleText color="secondary" fontSize="headingTitle">
        Jeffrey Saavedra
      </StyleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  welcomeText: {
    opacity: 0.5,
  },
});

export default HeaderHome;
