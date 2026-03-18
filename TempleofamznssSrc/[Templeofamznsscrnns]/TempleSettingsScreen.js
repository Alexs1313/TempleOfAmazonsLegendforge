// Temple Settings Screen

import { useAmazonsStore } from '../Templeofamznsstrr/amazonsCntxt';
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
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAdaptiveSizes } from '../[Templeofamznshkks]/useAdaptiveSizes';

import Toast from 'react-native-toast-message';

const LegendforgeTempleSwitchYellow = '#FF9400';

const TempleSettingsScreen = () => {
  const LegendforgeTempleNavigation = useNavigation();
  const {
    legendforgeNotificationsEnabled: LegendforgeTempleNotificationsEnabled,
    setLegendforgeNotificationsEnabled:
      LegendforgeTempleSetNotificationsEnabled,
    legendforgeSoundEnabled: LegendforgeTempleSoundEnabled,
    setLegendforgeSoundEnabled: LegendforgeTempleSetSoundEnabled,
  } = useAmazonsStore();
  const {
    sidePad: LegendforgeTempleSidePad,
    scrollBottom: LegendforgeTempleScrollBottom,
    pick: LegendforgeTemplePick,
  } = useAdaptiveSizes();

  // sizes
  const LegendforgeTempleTitleMarginB = LegendforgeTemplePick(24, 28, 32);
  const LegendforgeTempleBoxPadding = LegendforgeTemplePick(12, 14, 16);
  const LegendforgeTempleBoxPaddingV = LegendforgeTemplePick(14, 16, 18);
  const LegendforgeTempleBoxMarginB = LegendforgeTemplePick(10, 11, 12);
  const LegendforgeTempleBoxTitleSize = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleHeaderPadT = LegendforgeTemplePick(44, 52, 60);
  const LegendforgeTempleSettingsBtnSize = LegendforgeTemplePick(44, 50, 56);

  const LegendforgeTempleShareAppHandler = () => {
    Linking.openURL(
      'https://apps.apple.com/us/app/amazin-legendforge-of-t%D0%B5mple/id6760720393',
    );
  };

  const LegendforgeTempleToggleAppNotifications =
    async LegendforgeTempleSelectedValue => {
      Toast.show({
        text1: !LegendforgeTempleNotificationsEnabled
          ? 'Notifications turned on!'
          : 'Notifications turned off!',
      });

      try {
        await AsyncStorage.setItem(
          'toggleNotifications',
          JSON.stringify(LegendforgeTempleSelectedValue),
        );
        LegendforgeTempleSetNotificationsEnabled(
          LegendforgeTempleSelectedValue,
        );
      } catch (LegendforgeTempleError) {
        console.log('Error', LegendforgeTempleError);
      }
    };

  const LegendforgeTempleToggleAppSound =
    async LegendforgeTempleSelectedValue => {
      LegendforgeTempleNotificationsEnabled &&
        Toast.show({
          text1: !LegendforgeTempleSoundEnabled
            ? 'Background music turned on!'
            : 'Background music turned off!',
        });

      try {
        await AsyncStorage.setItem(
          'toggleSound',
          JSON.stringify(LegendforgeTempleSelectedValue),
        );

        LegendforgeTempleSetSoundEnabled(LegendforgeTempleSelectedValue);
      } catch (LegendforgeTempleError) {
        console.log('Error', LegendforgeTempleError);
      }
    };

  const LegendforgeTempleResetSavedHandler = () => {
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
    <ImageBackground
      source={require('../assets/images/bgcs.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: LegendforgeTempleScrollBottom,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.templeLegendHeader,
            {
              paddingTop: LegendforgeTempleHeaderPadT,
              paddingHorizontal: LegendforgeTempleSidePad,
            },
          ]}
        >
          <Image source={require('../assets/images/sett_title.png')} />
          <TouchableOpacity
            onPress={() => LegendforgeTempleNavigation.goBack()}
            activeOpacity={0.8}
            style={[
              styles.templeLegendSettingsBtn,
              {
                width: LegendforgeTempleSettingsBtnSize,
                height: LegendforgeTempleSettingsBtnSize,
              },
            ]}
          >
            <Image
              source={require('../assets/images/clss.png')}
              style={styles.templeLegendSettingsIcon}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.templeLegendContainer,
            {
              paddingTop: 16,
              paddingHorizontal: LegendforgeTempleSidePad,
              marginBottom: LegendforgeTempleTitleMarginB,
            },
          ]}
        >
          {Platform.OS === 'ios' && (
            <View
              style={[
                styles.templeLegendBoxWrap,
                {
                  paddingHorizontal: LegendforgeTempleBoxPadding,
                  paddingVertical: LegendforgeTempleBoxPaddingV,
                  marginBottom: LegendforgeTempleBoxMarginB,
                },
              ]}
            >
              <Text
                style={[
                  styles.templeLegendBoxTitle,
                  { fontSize: LegendforgeTempleBoxTitleSize },
                ]}
              >
                Music
              </Text>
              <Switch
                value={LegendforgeTempleSoundEnabled}
                onValueChange={LegendforgeTempleValue =>
                  LegendforgeTempleToggleAppSound(LegendforgeTempleValue)
                }
                trackColor={{
                  false: '#555',
                  true: LegendforgeTempleSwitchYellow,
                }}
                thumbColor="#FFFFFF"
              />
            </View>
          )}

          <View
            style={[
              styles.templeLegendBoxWrap,
              {
                paddingHorizontal: LegendforgeTempleBoxPadding,
                paddingVertical: LegendforgeTempleBoxPaddingV,
                marginBottom: LegendforgeTempleBoxMarginB,
              },
            ]}
          >
            <Text
              style={[
                styles.templeLegendBoxTitle,
                { fontSize: LegendforgeTempleBoxTitleSize },
              ]}
            >
              Notifications
            </Text>
            <Switch
              value={LegendforgeTempleNotificationsEnabled}
              onValueChange={LegendforgeTempleValue =>
                LegendforgeTempleToggleAppNotifications(LegendforgeTempleValue)
              }
              trackColor={{
                false: '#555',
                true: LegendforgeTempleSwitchYellow,
              }}
              thumbColor="#FFFFFF"
            />
          </View>

          {Platform.OS === 'ios' && (
            <TouchableOpacity
              style={[
                styles.templeLegendBoxWrap,
                {
                  paddingHorizontal: LegendforgeTempleBoxPadding,
                  paddingVertical: LegendforgeTempleBoxPaddingV,
                  marginBottom: LegendforgeTempleBoxMarginB,
                },
              ]}
              onPress={LegendforgeTempleShareAppHandler}
            >
              <Text
                style={[
                  styles.templeLegendBoxTitle,
                  { fontSize: LegendforgeTempleBoxTitleSize },
                ]}
              >
                Share the app
              </Text>
              <Image source={require('../assets/icons/share.png')} />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[
              styles.templeLegendBoxWrap,
              {
                paddingHorizontal: LegendforgeTempleBoxPadding,
                paddingVertical: LegendforgeTempleBoxPaddingV,
                marginBottom: LegendforgeTempleBoxMarginB,
              },
            ]}
            onPress={LegendforgeTempleResetSavedHandler}
          >
            <Text
              style={[
                styles.templeLegendBoxTitle,
                { fontSize: LegendforgeTempleBoxTitleSize },
              ]}
            >
              Reset all data
            </Text>
            <Image source={require('../assets/icons/ri_reset-left-line.png')} />
          </TouchableOpacity>

          {/* {Platform.OS === 'ios' && (
            <TouchableOpacity
              style={[
                styles.templeLegendBoxWrap,
                {
                  paddingHorizontal: LegendforgeTempleBoxPadding,
                  paddingVertical: LegendforgeTempleBoxPaddingV,
                  marginBottom: LegendforgeTempleBoxMarginB,
                },
              ]}
              onPress={() =>
                Linking.openURL(
                  'https://www.termsfeed.com/live/90184202-086b-4d31-83ff-c15e8ad179a4',
                )
              }
            >
              <Text
                style={[
                  styles.templeLegendBoxTitle,
                  { fontSize: LegendforgeTempleBoxTitleSize },
                ]}
              >
                Terms and Conditions
              </Text>
            </TouchableOpacity>
          )} */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  templeLegendHeader: {
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
  templeLegendContainer: {
    paddingBottom: 0,
  },
  templeLegendBoxWrap: {
    backgroundColor: '#2B2B2B',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  templeLegendBoxTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default TempleSettingsScreen;
