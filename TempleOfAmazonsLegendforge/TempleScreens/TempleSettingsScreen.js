import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
  Switch,
  Linking,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAmazonsStore } from '../LegendforgeStore/amazonsCntxt';
import Toast from 'react-native-toast-message';

const bgImage = require('../assets/images/main_background.png');
const switchYellow = '#FF9400';

const SettingsScreen = () => {
  const {
    legendforgeNotificationsEnabled,
    setLegendforgeNotificationsEnabled,
    legendforgeSoundEnabled,
    setLegendforgeSoundEnabled,
  } = useAmazonsStore();
  const { height } = useWindowDimensions();

  const onShare = () => {
    Linking.openURL(
      'https://apps.apple.com/us/app/amazins-legendforge-of-temple/id6758200045',
    );
  };

  const toggleNotifications = async selectedValue => {
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

  const toggleSound = async selectedValue => {
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

  const onResetAllData = () => {
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
    <ImageBackground source={bgImage} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, { paddingTop: height * 0.08 }]}>
          <Image
            source={require('../assets/images/sett_title.png')}
            style={{ marginBottom: 32, alignSelf: 'center' }}
          />

          <View style={styles.boxWrap}>
            <Text style={styles.boxTitle}>Music</Text>
            <Switch
              value={legendforgeSoundEnabled}
              onValueChange={value => toggleSound(value)}
              trackColor={{ false: '#555', true: switchYellow }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.boxWrap}>
            <Text style={styles.boxTitle}>Notifications</Text>
            <Switch
              value={legendforgeNotificationsEnabled}
              onValueChange={value => toggleNotifications(value)}
              trackColor={{ false: '#555', true: switchYellow }}
              thumbColor="#FFFFFF"
            />
          </View>

          <TouchableOpacity style={styles.boxWrap} onPress={onShare}>
            <Text style={styles.boxTitle}>Share the app</Text>
            <Image source={require('../assets/icons/share.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxWrap} onPress={onResetAllData}>
            <Text style={styles.boxTitle}>Reset all data</Text>
            <Image source={require('../assets/icons/ri_reset-left-line.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boxWrap}
            onPress={() =>
              Linking.openURL(
                'https://www.termsfeed.com/live/926e3eab-569a-42d0-92ab-4351507028aa',
              )
            }
          >
            <Text style={styles.boxTitle}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  boxWrap: {
    backgroundColor: '#2B2B2B',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 12,
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

export default SettingsScreen;
