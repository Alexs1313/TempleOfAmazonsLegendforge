import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from './GradientButton';
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';

const GRADIENT_BG = ['rgb(67, 33, 11)', 'rgb(10, 8, 10)'];

const INTRO_TEXT =
  'Knowledge is a blade that never dulls. Step forward and face the myths that shaped gods and warriors.';

export default function QuizIntro({ onBeginPress }) {
  const { height, sidePad, scrollBottom, pick } = useAdaptiveSizes();

  const paddingTop = pick(height * 0.05, height * 0.06, height * 0.08);
  const titleMarginB = pick(height * 0.02, height * 0.025, height * 0.03);
  const introBoxPad = pick(12, 14, 16);
  const introBoxPadV = pick(18, 21, 24);
  const introBoxWidth = pick('92%', '91%', '90%');
  const introBoxRadius = pick(14, 15, 16);
  const introTextSize = pick(14, 15, 16);
  const introTextMarginB = pick(12, 14, 16);
  const btnHeight = pick(46, 49, 52);
  const btnRadius = pick(14, 15, 16);
  const btnTextSize = pick(14, 15, 16);

  return (
    <LinearGradient colors={GRADIENT_BG} style={styles.gradient}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.introContainer,
            {
              paddingTop,
              paddingHorizontal: sidePad,
              paddingBottom: scrollBottom,
            },
          ]}
        >
          <Image
            source={require('../assets/images/quiz_title.png')}
            style={{ marginBottom: titleMarginB }}
          />
          <Image source={require('../assets/images/quiz_logo.png')} />

          <View
            style={[
              styles.introBox,
              {
                padding: introBoxPad,
                paddingVertical: introBoxPadV,
                width: introBoxWidth,
                borderRadius: introBoxRadius,
              },
            ]}
          >
            <Text
              style={[
                styles.introText,
                { fontSize: introTextSize, marginBottom: introTextMarginB },
              ]}
            >
              {INTRO_TEXT}
            </Text>

            <GradientButton
              label="Begin the Trial"
              onPress={onBeginPress}
              height={btnHeight}
              borderRadius={btnRadius}
              fontSize={btnTextSize}
              containerStyle={styles.fullWidth}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  scrollContent: { flexGrow: 1 },
  introContainer: {
    flex: 1,
    alignItems: 'center',
  },
  introBox: {
    backgroundColor: '#251F21',
  },
  introText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  fullWidth: { width: '100%' },
});
