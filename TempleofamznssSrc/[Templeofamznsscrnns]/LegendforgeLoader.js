// Legendforge Loader Screen
import { useAdaptiveSizes } from '../[Templeofamznshkks]/useAdaptiveSizes';
import { useNavigation } from '@react-navigation/native';

import {
  ScrollView,
  View,
  Animated,
  Easing,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useRef } from 'react';

const LegendforgeLoader = () => {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(0)).current;
  const navigateTo = useNavigation();
  const { pick } = useAdaptiveSizes();

  // sizes

  const boxPaddingBottom = pick(36, 44, 50);
  const boxGap = pick(22, 26, 30);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigateTo.navigate('LegendforgeOnboarding');
    }, 5500);

    return () => clearTimeout(timeOut);
  }, [navigateTo]);

  useEffect(() => {
    const floatLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 1700,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1700,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    );

    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1400,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 1400,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    );

    floatLoop.start();
    pulseLoop.start();

    return () => {
      floatLoop.stop();
      pulseLoop.stop();
    };
  }, [floatAnim, pulseAnim]);

  const translateY = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -24],
  });

  const scale = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.08],
  });

  const opacity = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.82, 1],
  });

  const rotate = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['-1.5deg', '1.5deg'],
  });

  return (
    <ImageBackground
      source={require('../assets/images/loaderback.png')}
      style={styles.templeLegendAmzBg}
    >
      <ScrollView
        contentContainerStyle={styles.templeLegendScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.templeLegendAmzBox,
            { paddingBottom: boxPaddingBottom, gap: boxGap },
          ]}
        >
          <Animated.Image
            source={require('../assets/images/loaderite.png')}
            style={[
              {
                opacity,
                transform: [{ translateY }, { scale }, { rotate }],
              },
            ]}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  templeLegendAmzBg: { flex: 1 },
  templeLegendScrollContent: { flexGrow: 1 },
  templeLegendAmzBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LegendforgeLoader;
