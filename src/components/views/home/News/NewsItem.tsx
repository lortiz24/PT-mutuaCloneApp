import { View, StyleSheet } from 'react-native';
import StyleText from '../../../ui/style-text/StyleText';
import { theme } from '../../../../config/theme/theme';

const NewsItem = () => {
  return (
    <View style={styles.cardNew}>
      <StyleText fontSize="subHeading" style={styles.textGreen}>
        $15.000 EN TOM NOODLESHOP
      </StyleText>
      <StyleText fontSize="subHeading">Muestra este cupón y obtén tu beneficio</StyleText>
      <StyleText fontSize="subHeading" style={styles.cupon}>
        25D1-WLCU-EX9F - UTILIZADO
      </StyleText>
      <StyleText fontSize="subHeading">
        * Tendrás 60 días para redimirlo - Válido solo presencial
      </StyleText>
    </View>
  );
};

const styles = StyleSheet.create({
  cardNew: {
    backgroundColor: theme.appBar.primary,
    borderRadius: 7,
    padding: 20,
  },
  textGreen: {
    color: theme.colors.green,
  },
  cupon: {
    paddingVertical: 10,
    fontSize: theme.fontSizes.subHeading,
  },
});

export default NewsItem;
