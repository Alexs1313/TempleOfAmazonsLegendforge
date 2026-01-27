import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  View,
  Animated,
  Easing,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const LegendforgeLoader = () => {
  const bounceAmzAnim = useRef(new Animated.Value(0)).current;
  const navigateTo = useNavigation();
  const { height } = useWindowDimensions();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateTo.navigate('LegendforgeOnboarding');
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAmzAnim, {
          toValue: -160,
          duration: 700,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(bounceAmzAnim, {
          toValue: 0,
          duration: 700,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    );

    anim.start();
    return () => anim.stop();
  }, [bounceAmzAnim]);

  return (
    <ImageBackground
      source={require('../assets/images/main_background.png')}
      style={styles.amzBg}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center', marginTop: height * 0.1 }}>
          <Image
            source={require('../assets/images/loader_logo.png')}
            style={{ marginBottom: 120, width: 358, height: 148 }}
          />
        </View>
        <View style={styles.amzBox}>
          <Animated.Image
            source={require('../assets/images/loader_image.png')}
            style={[
              styles.book,
              { transform: [{ translateY: bounceAmzAnim }] },
            ]}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  amzBg: { flex: 1 },
  amzBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
    gap: 30,
  },
});

export default LegendforgeLoader;
