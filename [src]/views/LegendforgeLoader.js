import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import {
  Image,
  ScrollView,
  View,
  Animated,
  Easing,
  StyleSheet,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';

const LegendforgeLoader = () => {
  const bounceAmzAnim = useRef(new Animated.Value(0)).current;
  const navigateTo = useNavigation();
  const { height, pick } = useAdaptiveSizes();

  // sizes
  const marginTop = pick(height * 0.06, height * 0.08, height * 0.1);
  const logoMarginB = pick(80, 100, 120);
  const logoW =
    Platform.OS === 'ios' ? pick(300, 328, 358) : pick(260, 284, 308);
  const logoH =
    Platform.OS === 'ios' ? pick(120, 134, 148) : pick(98, 108, 118);
  const boxPaddingBottom = pick(36, 44, 50);
  const boxGap = pick(22, 26, 30);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigateTo.navigate('LegendforgeOnboarding');
    }, 5500);

    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    const animation = Animated.loop(
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

    animation.start();
    return () => animation.stop();
  }, [bounceAmzAnim]);

  return (
    <LinearGradient
      colors={['rgb(67, 33, 11)', 'rgb(10, 8, 10)']}
      style={styles.amzBg}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center', marginTop }}>
          {Platform.OS === 'ios' ? (
            <Image
              source={require('../assets/images/amicn.png')}
              style={{
                marginBottom: logoMarginB,
                width: 220,
                height: 220,
                borderRadius: 52,
              }}
            />
          ) : (
            <Image
              source={require('../assets/images/intro.png')}
              style={{ marginBottom: logoMarginB, width: logoW, height: logoH }}
            />
          )}
        </View>
        <View
          style={[
            styles.amzBox,
            { paddingBottom: boxPaddingBottom, gap: boxGap },
          ]}
        >
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  amzBg: { flex: 1 },
  amzBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default LegendforgeLoader;
