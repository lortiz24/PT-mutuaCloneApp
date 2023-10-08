import { View, StyleSheet } from 'react-native';
import ButtonRedirect from '../../ui/button-redirect/ButtonRedirect';

import { theme } from '../../../config/theme/theme';

const HomeView = () => {
  return (
    <View style={styles.container}>
      <ButtonRedirect
        styleText={styles.textStyle}
        title="Solicitar recolección"
        styleTouchable={styles.styleTouchable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
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
    position: 'absolute',
    bottom: 25,
    height: 70,
    backgroundColor: theme.colors.green,
    borderRadius: 100,
  },
});

export default HomeView;
