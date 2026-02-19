import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';

const onboardBackground = require('../assets/images/onboard_background.png');
const buttonGradient = ['#FF9400', '#FAD51D'];

const LegendforgeOnboarding = () => {
  const [currentOnboardIndex, setCurrentOnboardIndex] = useState(0);
  const navigation = useNavigation();
  const { pick } = useAdaptiveSizes();

  // sizes
  const onboardImgW = pick(300, 252, 343);
  const onboardImgH = pick(420, 350, 480);
  const bottomBoxPad = pick(14, 16, 18);
  const bottomBoxPadV = pick(18, 21, 24);
  const boxTitleSize = pick(14, 15, 16);
  const boxTitleMarginB = pick(22, 26, 30);
  const boxTitleMarginT = pick(10, 11, 12);
  const btnHeight = pick(46, 49, 51);
  const btnRadius = pick(14, 15, 16);
  const btnMarginT = pick(24, 28, 31);
  const btnTextSize = pick(14, 15, 15);
  const paginationGap = pick(4, 5, 5);

  const onNextPress = () => {
    if (currentOnboardIndex < 2) {
      setCurrentOnboardIndex(currentOnboardIndex + 1);

      console.log('next +1');
    } else {
      navigation.navigate('BottomLegendforgeTabs');
    }
  };

  return (
    <ImageBackground source={onboardBackground} style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
      >
        <View style={[styles.onboardContainer]}>
          {Platform.OS === 'ios' ? (
            <Image
              style={{ width: onboardImgW, height: onboardImgH }}
              source={
                currentOnboardIndex === 0
                  ? require('../assets/images/onboard_imageios1.png')
                  : currentOnboardIndex === 1
                  ? require('../assets/images/onboard_imageios2.png')
                  : require('../assets/images/onboard_imageios3.png')
              }
            />
          ) : (
            <Image
              style={{ width: onboardImgW, height: onboardImgH }}
              source={
                currentOnboardIndex === 0
                  ? require('../assets/images/onboard_image1.png')
                  : currentOnboardIndex === 1
                  ? require('../assets/images/onboard_image2.png')
                  : require('../assets/images/onboard_image3.png')
              }
            />
          )}
          <View
            style={[
              styles.bottomBox,
              { padding: bottomBoxPad, paddingVertical: bottomBoxPadV },
            ]}
          >
            <Image
              source={
                currentOnboardIndex === 0
                  ? require('../assets/images/first_title.png')
                  : currentOnboardIndex === 1
                  ? require('../assets/images/second_title.png')
                  : require('../assets/images/third_title.png')
              }
            />
            <Text
              style={[
                styles.boxTitle,
                {
                  fontSize: boxTitleSize,
                  marginBottom: boxTitleMarginB,
                  marginTop: boxTitleMarginT,
                },
              ]}
            >
              {currentOnboardIndex === 0
                ? `Beyond the stone gates stands a place where names become legends. The Temple of Amazons has watched centuries of warriors rise and fall`
                : currentOnboardIndex === 1
                ? `Here, Amazons are shaped by oath and fire. Their stories are not given — they are written by those who dare`
                : `Create a warrior. Write her path. Enter the Temple, and leave your mark among the legends`}
            </Text>

            <View style={[styles.paginationWrap, { gap: paginationGap }]}>
              {[1, 2, 3].map((_, index) => (
                <Image
                  key={index}
                  source={
                    index === currentOnboardIndex
                      ? require('../assets/images/active_dot.png')
                      : require('../assets/images/inactive_dot.png')
                  }
                />
              ))}
            </View>

            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={onNextPress}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={buttonGradient}
                style={[
                  styles.gradientNextButton,
                  {
                    height: btnHeight,
                    borderRadius: btnRadius,
                    marginTop: btnMarginT,
                  },
                ]}
              >
                <Text style={[styles.buttonText, { fontSize: btnTextSize }]}>
                  {currentOnboardIndex !== 2 ? 'Continue' : 'Begin'}
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
  onboardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomBox: {
    width: '100%',
    backgroundColor: '#251F21',
    borderRadius: 16,
    minHeight: 280,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTitle: {
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  paginationWrap: {
    flexDirection: 'row',
  },
  gradientNextButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default LegendforgeOnboarding;
