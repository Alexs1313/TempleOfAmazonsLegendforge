// Quiz Intro Scrrn

import GradientButton from './GradientButton';
import { useAdaptiveSizes } from '../[Templeofamznshkks]/useAdaptiveSizes';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LegendforgeTempleIntroText =
  'Knowledge is a blade that never dulls. Step forward and face the myths that shaped gods and warriors.';

export default function QuizIntro({ onBeginPress }) {
  const LegendforgeTempleNavigation = useNavigation();
  const {
    height: LegendforgeTempleHeight,
    sidePad: LegendforgeTempleSidePad,
    scrollBottom: LegendforgeTempleScrollBottom,
    pick: LegendforgeTemplePick,
  } = useAdaptiveSizes();

  const LegendforgeTemplePaddingTop = LegendforgeTemplePick(
    LegendforgeTempleHeight * 0.05,
    LegendforgeTempleHeight * 0.06,
    60,
  );
  const LegendforgeTempleTitleMarginB = LegendforgeTemplePick(
    LegendforgeTempleHeight * 0.02,
    LegendforgeTempleHeight * 0.025,
    LegendforgeTempleHeight * 0.03,
  );
  const LegendforgeTempleSettingsBtnSize = LegendforgeTemplePick(44, 50, 56);
  const LegendforgeTempleIntroBoxPad = LegendforgeTemplePick(12, 14, 16);
  const LegendforgeTempleIntroBoxPadV = LegendforgeTemplePick(18, 21, 24);
  const LegendforgeTempleIntroBoxWidth = LegendforgeTemplePick(
    '92%',
    '91%',
    '90%',
  );
  const LegendforgeTempleIntroBoxRadius = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleIntroTextSize = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleIntroTextMarginB = LegendforgeTemplePick(12, 14, 16);
  const LegendforgeTempleBtnHeight = LegendforgeTemplePick(46, 49, 52);
  const LegendforgeTempleBtnRadius = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleBtnTextSize = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleAppearFromY = LegendforgeTemplePick(18, 20, 22);

  const LegendforgeTempleHeaderAnim = useRef(new Animated.Value(0)).current;
  const LegendforgeTempleLogoAnim = useRef(new Animated.Value(0)).current;
  const LegendforgeTempleIntroBoxAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    LegendforgeTempleHeaderAnim.setValue(0);
    LegendforgeTempleLogoAnim.setValue(0);
    LegendforgeTempleIntroBoxAnim.setValue(0);

    Animated.stagger(120, [
      Animated.timing(LegendforgeTempleHeaderAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(LegendforgeTempleLogoAnim, {
        toValue: 1,
        duration: 340,
        useNativeDriver: true,
      }),
      Animated.timing(LegendforgeTempleIntroBoxAnim, {
        toValue: 1,
        duration: 360,
        useNativeDriver: true,
      }),
    ]).start();
  }, [
    LegendforgeTempleHeaderAnim,
    LegendforgeTempleLogoAnim,
    LegendforgeTempleIntroBoxAnim,
  ]);

  return (
    <ImageBackground
      source={require('../assets/images/bgcs.png')}
      style={styles.templeLegendGradient}
    >
      <ScrollView
        contentContainerStyle={styles.templeLegendScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.templeLegendIntroContainer,
            {
              paddingTop: LegendforgeTemplePaddingTop,
              paddingHorizontal: LegendforgeTempleSidePad,
              paddingBottom: LegendforgeTempleScrollBottom,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.templeLegendHeader,
              { marginBottom: LegendforgeTempleTitleMarginB },
              {
                opacity: LegendforgeTempleHeaderAnim,
                transform: [
                  {
                    translateY: LegendforgeTempleHeaderAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [LegendforgeTempleAppearFromY, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Image source={require('../assets/images/quiz_title.png')} />
            <TouchableOpacity
              onPress={() =>
                LegendforgeTempleNavigation.navigate('TempleSettingsScreen')
              }
              style={[
                styles.templeLegendSettingsBtn,
                {
                  width: LegendforgeTempleSettingsBtnSize,
                  height: LegendforgeTempleSettingsBtnSize,
                },
              ]}
            >
              <Image
                source={require('../assets/icons/material-symbols_settings-rounded.png')}
                style={styles.templeLegendSettingsIcon}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.Image
            source={require('../assets/images/quiz_logo.png')}
            style={{
              opacity: LegendforgeTempleLogoAnim,
              transform: [
                {
                  translateY: LegendforgeTempleLogoAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [LegendforgeTempleAppearFromY, 0],
                  }),
                },
              ],
            }}
          />

          <Animated.View
            style={[
              styles.templeLegendIntroBox,
              {
                padding: LegendforgeTempleIntroBoxPad,
                paddingVertical: LegendforgeTempleIntroBoxPadV,
                width: LegendforgeTempleIntroBoxWidth,
                borderRadius: LegendforgeTempleIntroBoxRadius,
              },
              {
                opacity: LegendforgeTempleIntroBoxAnim,
                transform: [
                  {
                    translateY: LegendforgeTempleIntroBoxAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [LegendforgeTempleAppearFromY, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text
              style={[
                styles.templeLegendIntroText,
                {
                  fontSize: LegendforgeTempleIntroTextSize,
                  marginBottom: LegendforgeTempleIntroTextMarginB,
                },
              ]}
            >
              {LegendforgeTempleIntroText}
            </Text>

            <GradientButton
              label="Begin the Trial"
              onPress={onBeginPress}
              height={LegendforgeTempleBtnHeight}
              borderRadius={LegendforgeTempleBtnRadius}
              fontSize={LegendforgeTempleBtnTextSize}
              containerStyle={styles.templeLegendFullWidth}
            />
          </Animated.View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  templeLegendGradient: { flex: 1 },
  templeLegendScrollContent: { flexGrow: 1 },
  templeLegendHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  templeLegendSettingsBtn: {
    backgroundColor: '#2B2B2B',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendSettingsIcon: { width: 24, height: 24, tintColor: '#fff' },
  templeLegendIntroContainer: {
    flex: 1,
    alignItems: 'center',
  },
  templeLegendIntroBox: {
    backgroundColor: '#251F21',
  },
  templeLegendIntroText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  templeLegendFullWidth: { width: '100%' },
});
