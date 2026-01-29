import React from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  TouchableOpacity as _tOp_7nR3aKsQpLxV8tZm,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  Alert as _aLt_2Rm9xQpLzT7nVaKs,
  Switch as _sWh_9xQmTrL7pZaVnK4s,
  Linking as _lNk_6mQpZtLxV8nR3aKs,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  useWindowDimensions as _uWD_2Rm9xQpLzT7nVaKs,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAmazonsStore } from '../LegendforgeStore/amazonsCntxt';
import Toast from 'react-native-toast-message';

const _bg_6tVmQpLxZ7nR3aKs = require('../assets/images/main_background.png');
const _sY_9xQmTrL7pZaVnK4s = '#FF9400';

const TempleSettingsScreen = () => {
  const {
    legendforgeNotificationsEnabled: _nf_6mQpZtLxV8nR3aKs,
    setLegendforgeNotificationsEnabled: _sNf_4pLxQnZ8tVmR2aKs,
    legendforgeSoundEnabled: _sd_9tVmQpLxZ7nR3aKs,
    setLegendforgeSoundEnabled: _sSd_2Rm9xQpLzT7nVaKs,
  } = useAmazonsStore();

  const { height: _ht_6mQpZtLxV8nR3aKs } = _uWD_2Rm9xQpLzT7nVaKs();

  const _sh_7nR3aKsQpLxV8tZm = () => {
    _lNk_6mQpZtLxV8nR3aKs.openURL(
      'https://apps.apple.com/us/app/amazins-legendforge-of-temple/id6758200045',
    );
  };

  const _tgNf_9xQmTrL7pZaVnK4s = async _v_2Rm9xQpLzT7nVaKs => {
    Toast.show({
      text1: !_nf_6mQpZtLxV8nR3aKs
        ? 'Notifications turned on!'
        : 'Notifications turned off!',
    });

    try {
      await AsyncStorage.setItem(
        'toggleNotifications',
        JSON.stringify(_v_2Rm9xQpLzT7nVaKs),
      );
      _sNf_4pLxQnZ8tVmR2aKs(_v_2Rm9xQpLzT7nVaKs);
    } catch (_e_6mQpZtLxV8nR3aKs) {
      console.log('Error', _e_6mQpZtLxV8nR3aKs);
    }
  };

  const _tgSd_6tVmQpLxZ7nR3aKs = async _v_2Rm9xQpLzT7nVaKs => {
    _nf_6mQpZtLxV8nR3aKs &&
      Toast.show({
        text1: !_sd_9tVmQpLxZ7nR3aKs
          ? 'Background music turned on!'
          : 'Background music turned off!',
      });

    try {
      await AsyncStorage.setItem(
        'toggleSound',
        JSON.stringify(_v_2Rm9xQpLzT7nVaKs),
      );
      _sSd_2Rm9xQpLzT7nVaKs(_v_2Rm9xQpLzT7nVaKs);
    } catch (_e_6mQpZtLxV8nR3aKs) {
      console.log('Error', _e_6mQpZtLxV8nR3aKs);
    }
  };

  const _rs_4pLxQnZ8tVmR2aKs = () => {
    _aLt_2Rm9xQpLzT7nVaKs.alert(
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
            } catch (_e_6mQpZtLxV8nR3aKs) {
              console.error('Failed to reset data:', _e_6mQpZtLxV8nR3aKs);
            }
          },
        },
      ],
    );
  };

  return (
    <_iBg_4pLxQnZ8tVmR2aKs source={_bg_6tVmQpLxZ7nR3aKs} style={{ flex: 1 }}>
      <_sCv_9xQmTrL7pZaVnK4s
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <_vW_9tVmQpLxZ7nR3aKs
          style={[
            _h$.ct_6mQpZtLxV8nR3aKs,
            { paddingTop: _ht_6mQpZtLxV8nR3aKs * 0.08 },
          ]}
        >
          <_iMg_6tVmQpLxZ7nR3aKs
            source={require('../assets/images/sett_title.png')}
            style={{ marginBottom: 32, alignSelf: 'center' }}
          />

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.bw_7qPzLxVnT3mA9rKb}>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.bt_9xQmTrL7pZaVnK4s}>
              Music
            </_tXt_3aKsQpLxVnZ8tRm2>
            <_sWh_9xQmTrL7pZaVnK4s
              value={_sd_9tVmQpLxZ7nR3aKs}
              onValueChange={_v_2Rm9xQpLzT7nVaKs =>
                _tgSd_6tVmQpLxZ7nR3aKs(_v_2Rm9xQpLzT7nVaKs)
              }
              trackColor={{ false: '#555', true: _sY_9xQmTrL7pZaVnK4s }}
              thumbColor="#FFFFFF"
            />
          </_vW_9tVmQpLxZ7nR3aKs>

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.bw_7qPzLxVnT3mA9rKb}>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.bt_9xQmTrL7pZaVnK4s}>
              Notifications
            </_tXt_3aKsQpLxVnZ8tRm2>
            <_sWh_9xQmTrL7pZaVnK4s
              value={_nf_6mQpZtLxV8nR3aKs}
              onValueChange={_v_2Rm9xQpLzT7nVaKs =>
                _tgNf_9xQmTrL7pZaVnK4s(_v_2Rm9xQpLzT7nVaKs)
              }
              trackColor={{ false: '#555', true: _sY_9xQmTrL7pZaVnK4s }}
              thumbColor="#FFFFFF"
            />
          </_vW_9tVmQpLxZ7nR3aKs>

          <_tOp_7nR3aKsQpLxV8tZm
            style={_h$.bw_7qPzLxVnT3mA9rKb}
            onPress={_sh_7nR3aKsQpLxV8tZm}
          >
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.bt_9xQmTrL7pZaVnK4s}>
              Share the app
            </_tXt_3aKsQpLxVnZ8tRm2>
            <_iMg_6tVmQpLxZ7nR3aKs
              source={require('../assets/icons/share.png')}
            />
          </_tOp_7nR3aKsQpLxV8tZm>

          <_tOp_7nR3aKsQpLxV8tZm
            style={_h$.bw_7qPzLxVnT3mA9rKb}
            onPress={_rs_4pLxQnZ8tVmR2aKs}
          >
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.bt_9xQmTrL7pZaVnK4s}>
              Reset all data
            </_tXt_3aKsQpLxVnZ8tRm2>
            <_iMg_6tVmQpLxZ7nR3aKs
              source={require('../assets/icons/ri_reset-left-line.png')}
            />
          </_tOp_7nR3aKsQpLxV8tZm>

          <_tOp_7nR3aKsQpLxV8tZm
            style={_h$.bw_7qPzLxVnT3mA9rKb}
            onPress={() =>
              _lNk_6mQpZtLxV8nR3aKs.openURL(
                'https://www.termsfeed.com/live/3b01a9ea-0cbf-4c49-a6a3-803772427d0b',
              )
            }
          >
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.bt_9xQmTrL7pZaVnK4s}>
              Terms and Conditions
            </_tXt_3aKsQpLxVnZ8tRm2>
          </_tOp_7nR3aKsQpLxV8tZm>
        </_vW_9tVmQpLxZ7nR3aKs>
      </_sCv_9xQmTrL7pZaVnK4s>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  ct_6mQpZtLxV8nR3aKs: { paddingHorizontal: 16, paddingBottom: 120 },

  bw_7qPzLxVnT3mA9rKb: {
    backgroundColor: '#2B2B2B',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bt_9xQmTrL7pZaVnK4s: { color: '#FFFFFF', fontSize: 16, fontWeight: '500' },
});

export default TempleSettingsScreen;
