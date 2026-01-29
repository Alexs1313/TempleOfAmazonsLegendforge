import { useNavigation as _uNV_9xQmTrL7pZaVnK4s } from '@react-navigation/native';
import { useState as _uST_6mQpZtLxV8nR3aKs } from 'react';
import {
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  TouchableOpacity as _tOp_7nR3aKsQpLxV8tZm,
  View as _vW_9tVmQpLxZ7nR3aKs,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const _obg_6tVmQpLxZ7nR3aKs = require('../assets/images/onboard_background.png');
const _bgr_9xQmTrL7pZaVnK4s = ['#FF9400', '#FAD51D'];

const LegendforgeOnboarding = () => {
  const [_ix_2Rm9xQpLzT7nVaKs, _sIx_9tVmQpLxZ7nR3aKs] =
    _uST_6mQpZtLxV8nR3aKs(0);
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();

  const _nx_6mQpZtLxV8nR3aKs = () => {
    if (_ix_2Rm9xQpLzT7nVaKs < 2) {
      _sIx_9tVmQpLxZ7nR3aKs(_ix_2Rm9xQpLzT7nVaKs + 1);
    } else {
      _nv_9xQmTrL7pZaVnK4s.navigate('BottomLegendforgeTabs');
    }
  };

  return (
    <_iBg_4pLxQnZ8tVmR2aKs source={_obg_6tVmQpLxZ7nR3aKs} style={{ flex: 1 }}>
      <_sCv_9xQmTrL7pZaVnK4s
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
      >
        <_vW_9tVmQpLxZ7nR3aKs style={_h$.oC_7qPzLxVnT3mA9rKb}>
          <_iMg_6tVmQpLxZ7nR3aKs
            source={
              _ix_2Rm9xQpLzT7nVaKs === 0
                ? require('../assets/images/onboard_image1.png')
                : _ix_2Rm9xQpLzT7nVaKs === 1
                ? require('../assets/images/onboard_image2.png')
                : require('../assets/images/onboard_image3.png')
            }
          />

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.bB_6mQpZtLxV8nR3aKs}>
            <_iMg_6tVmQpLxZ7nR3aKs
              source={
                _ix_2Rm9xQpLzT7nVaKs === 0
                  ? require('../assets/images/first_title.png')
                  : _ix_2Rm9xQpLzT7nVaKs === 1
                  ? require('../assets/images/second_title.png')
                  : require('../assets/images/third_title.png')
              }
            />

            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.bT_9xQmTrL7pZaVnK4s}>
              {_ix_2Rm9xQpLzT7nVaKs === 0
                ? `Beyond the stone gates stands a place where names become legends. The Temple of Amazons has watched centuries of warriors rise and fall`
                : _ix_2Rm9xQpLzT7nVaKs === 1
                ? `Here, Amazons are shaped by oath and fire. Their stories are not given — they are written by those who dare`
                : `Create a warrior. Write her path. Enter the Temple, and leave your mark among the legends`}
            </_tXt_3aKsQpLxVnZ8tRm2>

            <_vW_9tVmQpLxZ7nR3aKs style={_h$.pW_2Rm9xQpLzT7nVaKs}>
              {[1, 2, 3].map((_, _i_6mQpZtLxV8nR3aKs) => (
                <_iMg_6tVmQpLxZ7nR3aKs
                  key={_i_6mQpZtLxV8nR3aKs}
                  source={
                    _i_6mQpZtLxV8nR3aKs === _ix_2Rm9xQpLzT7nVaKs
                      ? require('../assets/images/active_dot.png')
                      : require('../assets/images/inactive_dot.png')
                  }
                />
              ))}
            </_vW_9tVmQpLxZ7nR3aKs>

            <_tOp_7nR3aKsQpLxV8tZm
              style={{ width: '100%' }}
              onPress={_nx_6mQpZtLxV8nR3aKs}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={_bgr_9xQmTrL7pZaVnK4s}
                style={_h$.nB_6mQpZtLxV8nR3aKs}
              >
                <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.nT_7qPzLxVnT3mA9rKb}>
                  {_ix_2Rm9xQpLzT7nVaKs !== 2 ? 'Continue' : 'Begin'}
                </_tXt_3aKsQpLxVnZ8tRm2>
              </LinearGradient>
            </_tOp_7nR3aKsQpLxV8tZm>
          </_vW_9tVmQpLxZ7nR3aKs>
        </_vW_9tVmQpLxZ7nR3aKs>
      </_sCv_9xQmTrL7pZaVnK4s>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  oC_7qPzLxVnT3mA9rKb: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  bB_6mQpZtLxV8nR3aKs: {
    width: '100%',
    padding: 18,
    paddingVertical: 24,
    backgroundColor: '#251F21',
    borderRadius: 16,
    minHeight: 312,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bT_9xQmTrL7pZaVnK4s: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 30,
    marginTop: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  pW_2Rm9xQpLzT7nVaKs: { flexDirection: 'row', gap: 5 },

  nB_6mQpZtLxV8nR3aKs: {
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 31,
  },

  nT_7qPzLxVnT3mA9rKb: { color: '#FFFFFF', fontSize: 15, fontWeight: '500' },
});

export default LegendforgeOnboarding;
