import { PropsWithChildren } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle, View, StyleSheet } from 'react-native';

interface Props extends PropsWithChildren {
  styleTouchable?: StyleProp<ViewStyle>;
}

const RequestPickup = ({ styleTouchable, children }: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styleTouchable}>
        {/* <Fontisto name="recycle" size={25} color={theme.colors.black} />
        <StyleText style={styleText}>{title}</StyleText>
        <FontAwesome name="arrow-right" size={15} color={theme.colors.black} /> */}
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 25,
  },
});

export default RequestPickup;
