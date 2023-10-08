import { View, StyleSheet } from 'react-native';
import Developing from '../../ui/errors/Developing';


const WalletView = () => {
  return (
    <View style={styles.container}>
      <Developing />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default WalletView;
