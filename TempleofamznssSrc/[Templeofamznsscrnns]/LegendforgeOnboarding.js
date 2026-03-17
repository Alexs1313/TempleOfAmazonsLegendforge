//  Onboarding Screen

import LinearGradient from 'react-native-linear-gradient';
import { useAdaptiveSizes } from '../[Templeofamznshkks]/useAdaptiveSizes';
import { useNavigation } from '@react-navigation/native';

import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const LegendforgeTempleOnboardBackground = require('../assets/images/onboard_background.png');
const LegendforgeTempleButtonGradient = ['#FF9400', '#FAD51D'];

const LegendforgeOnboarding = () => {
  const [
    LegendforgeTempleCurrentOnboardIndex,
    setLegendforgeTempleCurrentOnboardIndex,
  ] = useState(0);
  const LegendforgeTempleOnboardImageFadeAnim = useRef(
    new Animated.Value(0),
  ).current;
  const LegendforgeTempleOnboardTitleFadeAnim = useRef(
    new Animated.Value(0),
  ).current;
  const LegendforgeTempleNavigation = useNavigation();
  const { pick: LegendforgeTemplePick } = useAdaptiveSizes();

  // sizes
  const LegendforgeTempleOnboardImgW = LegendforgeTemplePick(300, 252, 343);
  const LegendforgeTempleOnboardImgH = LegendforgeTemplePick(420, 350, 480);
  const LegendforgeTempleBottomBoxPad = LegendforgeTemplePick(14, 16, 18);
  const LegendforgeTempleBottomBoxPadV = LegendforgeTemplePick(18, 21, 24);
  const LegendforgeTempleBoxTitleSize = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleBoxTitleMarginB = LegendforgeTemplePick(22, 26, 30);
  const LegendforgeTempleBoxTitleMarginT = LegendforgeTemplePick(10, 11, 12);
  const LegendforgeTempleBtnHeight = LegendforgeTemplePick(46, 49, 51);
  const LegendforgeTempleBtnRadius = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleBtnMarginT = LegendforgeTemplePick(24, 28, 31);
  const LegendforgeTempleBtnTextSize = LegendforgeTemplePick(14, 15, 15);
  const LegendforgeTemplePaginationGap = LegendforgeTemplePick(4, 5, 5);

  useEffect(() => {
    LegendforgeTempleOnboardImageFadeAnim.setValue(0);
    LegendforgeTempleOnboardTitleFadeAnim.setValue(0);

    Animated.parallel([
      Animated.timing(LegendforgeTempleOnboardImageFadeAnim, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true,
      }),
      Animated.timing(LegendforgeTempleOnboardTitleFadeAnim, {
        toValue: 1,
        duration: 320,
        delay: 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, [
    LegendforgeTempleCurrentOnboardIndex,
    LegendforgeTempleOnboardImageFadeAnim,
    LegendforgeTempleOnboardTitleFadeAnim,
  ]);

  const LegendforgeTempleOnNextPress = () => {
    if (LegendforgeTempleCurrentOnboardIndex < 2) {
      setLegendforgeTempleCurrentOnboardIndex(
        LegendforgeTempleCurrentOnboardIndex + 1,
      );

      console.log('next +1');
    } else {
      LegendforgeTempleNavigation.navigate('BottomLegendforgeTabs');
    }
  };

  return (
    <ImageBackground
      source={LegendforgeTempleOnboardBackground}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
      >
        <View style={[styles.templeLegendOnboardContainer]}>
          {Platform.OS === 'ios' ? (
            <Animated.Image
              resizeMode="contain"
              style={{
                width: LegendforgeTempleOnboardImgW,
                height: LegendforgeTempleOnboardImgH,
                opacity: LegendforgeTempleOnboardImageFadeAnim,
              }}
              source={
                LegendforgeTempleCurrentOnboardIndex === 0
                  ? require('../assets/images/onboard_imageios1.png')
                  : LegendforgeTempleCurrentOnboardIndex === 1
                  ? require('../assets/images/onboard_imageios2.png')
                  : require('../assets/images/onboard_imageios3.png')
              }
            />
          ) : (
            <Animated.Image
              resizeMode="contain"
              style={{
                width: LegendforgeTempleOnboardImgW,
                height: LegendforgeTempleOnboardImgH,
                opacity: LegendforgeTempleOnboardImageFadeAnim,
              }}
              source={
                LegendforgeTempleCurrentOnboardIndex === 0
                  ? require('../assets/images/onboard_image1.png')
                  : LegendforgeTempleCurrentOnboardIndex === 1
                  ? require('../assets/images/onboard_image2.png')
                  : require('../assets/images/onboard_image3.png')
              }
            />
          )}
          <View
            style={[
              styles.templeLegendBottomBox,
              {
                padding: LegendforgeTempleBottomBoxPad,
                paddingVertical: LegendforgeTempleBottomBoxPadV,
              },
            ]}
          >
            <Animated.Image
              style={{ opacity: LegendforgeTempleOnboardTitleFadeAnim }}
              source={
                LegendforgeTempleCurrentOnboardIndex === 0
                  ? require('../assets/images/first_title.png')
                  : LegendforgeTempleCurrentOnboardIndex === 1
                  ? require('../assets/images/second_title.png')
                  : require('../assets/images/third_title.png')
              }
            />
            <Text
              style={[
                styles.templeLegendBoxTitle,
                {
                  fontSize: LegendforgeTempleBoxTitleSize,
                  marginBottom: LegendforgeTempleBoxTitleMarginB,
                  marginTop: LegendforgeTempleBoxTitleMarginT,
                },
              ]}
            >
              {LegendforgeTempleCurrentOnboardIndex === 0
                ? `Beyond the stone gates stands a place where names become legends. The Temple has watched centuries of warriors rise and fall`
                : LegendforgeTempleCurrentOnboardIndex === 1
                ? `Here, warriors are shaped by oath and fire. Their stories are not given — they are written by those who dare`
                : `Create a warrior. Write her path. Enter the Temple, and leave your mark among the legends`}
            </Text>

            <View
              style={[
                styles.templeLegendPaginationWrap,
                { gap: LegendforgeTemplePaginationGap },
              ]}
            >
              {[1, 2, 3].map(
                (LegendforgeTempleItem, LegendforgeTempleIndex) => (
                  <Image
                    key={LegendforgeTempleItem}
                    source={
                      LegendforgeTempleIndex ===
                      LegendforgeTempleCurrentOnboardIndex
                        ? require('../assets/images/active_dot.png')
                        : require('../assets/images/inactive_dot.png')
                    }
                  />
                ),
              )}
            </View>

            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={LegendforgeTempleOnNextPress}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={LegendforgeTempleButtonGradient}
                style={[
                  styles.templeLegendGradientNextButton,
                  {
                    height: LegendforgeTempleBtnHeight,
                    borderRadius: LegendforgeTempleBtnRadius,
                    marginTop: LegendforgeTempleBtnMarginT,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.templeLegendButtonText,
                    { fontSize: LegendforgeTempleBtnTextSize },
                  ]}
                >
                  {LegendforgeTempleCurrentOnboardIndex !== 2
                    ? 'Continue'
                    : 'Begin'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  templeLegendOnboardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  templeLegendBottomBox: {
    width: '100%',
    backgroundColor: '#251F21',
    borderRadius: 16,
    minHeight: 330,
    alignItems: 'center',
    justifyContent: 'center',
  },
  templeLegendBoxTitle: {
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  templeLegendPaginationWrap: {
    flexDirection: 'row',
  },
  templeLegendGradientNextButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  templeLegendButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default LegendforgeOnboarding;
