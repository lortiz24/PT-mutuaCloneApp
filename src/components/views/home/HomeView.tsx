import { View, StyleSheet } from 'react-native';
import RequestPickup from '../../common/requestPickup/RequestPickup';
import { theme } from '../../../config/theme/theme';
import { News } from './News/News';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderHome from './header/HeaderHome';
import AboutUsVideo from './video-home/AboutUsVideo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StyleText from '../../ui/style-text/StyleText';

const HomeView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentHomeContainer}>
        <HeaderHome />
        <AboutUsVideo />
        <News />
      </View>
      <RequestPickup styleTouchable={styles.styleTouchable}>
        <Fontisto name="recycle" size={25} color={theme.colors.black} />
        <StyleText style={styles.textStyle}>Solicitar recolección</StyleText>
        <FontAwesome name="arrow-right" size={15} color={theme.colors.black} />
      </RequestPickup>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 10 },
  contentHomeContainer: { paddingHorizontal: 15, rowGap: 10 },
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
});

export default HomeView;
