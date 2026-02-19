import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Switch,
  Linking,
  ScrollView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';
import { useAmazonsStore } from '../store/amazonsCntxt';
import Toast from 'react-native-toast-message';

const switchYellow = '#FF9400';
const GRADIENT_BG = ['rgb(67, 33, 11)', 'rgb(10, 8, 10)'];

const TempleSettingsScreen = () => {
  const {
    legendforgeNotificationsEnabled,
    setLegendforgeNotificationsEnabled,
    legendforgeSoundEnabled,
    setLegendforgeSoundEnabled,
  } = useAmazonsStore();
  const { height, sidePad, scrollBottom, pick } = useAdaptiveSizes();

  // sizes
  const paddingTop = pick(height * 0.05, height * 0.06, height * 0.08);
  const titleMarginB = pick(24, 28, 32);
  const boxPadding = pick(12, 14, 16);
  const boxPaddingV = pick(14, 16, 18);
  const boxMarginB = pick(10, 11, 12);
  const boxTitleSize = pick(14, 15, 16);

  const shareAppHandler = () => {
    Linking.openURL(
      'https://apps.apple.com/us/app/%D0%B0m%D0%B0s0ns-legendforge-of-temple/id6759379999',
    );
  };

  const toggleAppNotifications = async selectedValue => {
    Toast.show({
      text1: !legendforgeNotificationsEnabled
        ? 'Notifications turned on!'
        : 'Notifications turned off!',
    });

    try {
      await AsyncStorage.setItem(
        'toggleNotifications',
        JSON.stringify(selectedValue),
      );
      setLegendforgeNotificationsEnabled(selectedValue);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const toggleAppSound = async selectedValue => {
    legendforgeNotificationsEnabled &&
      Toast.show({
        text1: !legendforgeSoundEnabled
          ? 'Background music turned on!'
          : 'Background music turned off!',
      });

    try {
      await AsyncStorage.setItem('toggleSound', JSON.stringify(selectedValue));

      setLegendforgeSoundEnabled(selectedValue);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const resetSavedHandler = () => {
    Alert.alert(
      'Reset Temple Records?',
      'This will erase your forged Amazons, written sagas, and trial progress from this device. This action cannot be undone',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.clear();
              console.log('All data has been reset.');
            } catch (error) {
              console.error('Failed to reset data:', error);
            }
          },
        },
      ],
    );
  };

  return (
    <LinearGradient colors={GRADIENT_BG} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: scrollBottom }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[styles.container, { paddingTop, paddingHorizontal: sidePad }]}
        >
          <Image
            source={require('../assets/images/sett_title.png')}
            style={{ marginBottom: titleMarginB, alignSelf: 'center' }}
          />

          {Platform.OS === 'ios' && (
            <View
              style={[
                styles.boxWrap,
                {
                  paddingHorizontal: boxPadding,
                  paddingVertical: boxPaddingV,
                  marginBottom: boxMarginB,
                },
              ]}
            >
              <Text style={[styles.boxTitle, { fontSize: boxTitleSize }]}>
                Music
              </Text>
              <Switch
                value={legendforgeSoundEnabled}
                onValueChange={value => toggleAppSound(value)}
                trackColor={{ false: '#555', true: switchYellow }}
                thumbColor="#FFFFFF"
              />
            </View>
          )}

          <View
            style={[
              styles.boxWrap,
              {
                paddingHorizontal: boxPadding,
                paddingVertical: boxPaddingV,
                marginBottom: boxMarginB,
              },
            ]}
          >
            <Text style={[styles.boxTitle, { fontSize: boxTitleSize }]}>
              Notifications
            </Text>
            <Switch
              value={legendforgeNotificationsEnabled}
              onValueChange={value => toggleAppNotifications(value)}
              trackColor={{ false: '#555', true: switchYellow }}
              thumbColor="#FFFFFF"
            />
          </View>

          {Platform.OS === 'ios' && (
            <TouchableOpacity
              style={[
                styles.boxWrap,
                {
                  paddingHorizontal: boxPadding,
                  paddingVertical: boxPaddingV,
                  marginBottom: boxMarginB,
                },
              ]}
              onPress={shareAppHandler}
            >
              <Text style={[styles.boxTitle, { fontSize: boxTitleSize }]}>
                Share the app
              </Text>
              <Image source={require('../assets/icons/share.png')} />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[
              styles.boxWrap,
              {
                paddingHorizontal: boxPadding,
                paddingVertical: boxPaddingV,
                marginBottom: boxMarginB,
              },
            ]}
            onPress={resetSavedHandler}
          >
            <Text style={[styles.boxTitle, { fontSize: boxTitleSize }]}>
              Reset all data
            </Text>
            <Image source={require('../assets/icons/ri_reset-left-line.png')} />
          </TouchableOpacity>

          {Platform.OS === 'ios' && (
            <TouchableOpacity
              style={[
                styles.boxWrap,
                {
                  paddingHorizontal: boxPadding,
                  paddingVertical: boxPaddingV,
                  marginBottom: boxMarginB,
                },
              ]}
              onPress={() =>
                Linking.openURL(
                  'https://app.termsfeed.com/download/192066c9-90f2-48c7-b8b3-07c4aa0f63af',
                )
              }
            >
              <Text style={[styles.boxTitle, { fontSize: boxTitleSize }]}>
                Terms and Conditions
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  boxWrap: {
    backgroundColor: '#2B2B2B',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default TempleSettingsScreen;
