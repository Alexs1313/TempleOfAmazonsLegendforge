import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const onboardBackground = require('../assets/images/onboard_background.png');
const buttonGradient = ['#FF9400', '#FAD51D'];

const LegendforgeOnboarding = () => {
  const [currentOnboardIndex, setCurrentOnboardIndex] = useState(0);
  const navigation = useNavigation();

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
        <View style={styles.onboardContainer}>
          <Image
            source={
              currentOnboardIndex === 0
                ? require('../assets/images/onboard_image1.png')
                : currentOnboardIndex === 1
                ? require('../assets/images/onboard_image2.png')
                : require('../assets/images/onboard_image3.png')
            }
          />
          <View style={styles.bottomBox}>
            <Image
              source={
                currentOnboardIndex === 0
                  ? require('../assets/images/first_title.png')
                  : currentOnboardIndex === 1
                  ? require('../assets/images/second_title.png')
                  : require('../assets/images/third_title.png')
              }
            />
            <Text style={styles.boxTitle}>
              {currentOnboardIndex === 0
                ? `Beyond the stone gates stands a place where names become legends. The Temple of Amazons has watched centuries of warriors rise and fall`
                : currentOnboardIndex === 1
                ? `Here, Amazons are shaped by oath and fire. Their stories are not given — they are written by those who dare`
                : `Create a warrior. Write her path. Enter the Temple, and leave your mark among the legends`}
            </Text>

            <View style={styles.paginationWrap}>
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
                style={styles.gradientNextButton}
              >
                <Text style={styles.buttonText}>
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
    padding: 18,
    paddingVertical: 24,
    backgroundColor: '#251F21',
    borderRadius: 16,
    minHeight: 312,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 30,
    marginTop: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  paginationWrap: {
    flexDirection: 'row',
    gap: 5,
  },
  gradientNextButton: {
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 31,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default LegendforgeOnboarding;
