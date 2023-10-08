import { View, StyleSheet, ScrollView } from 'react-native';
import StyleText from '../../../ui/style-text/StyleText';
import NewsItem from './NewsItem';

export const News = () => {
  return (
    <View>
      <StyleText color="secondary" fontSize="subHeading" style={styles.title}>
        Lo nuevo
      </StyleText>
      <ScrollView style={{ height: 350 }}>
        <View style={{ rowGap: 10 }}>
          <NewsItem />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
  },
});
