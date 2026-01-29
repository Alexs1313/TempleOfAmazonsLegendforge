import React, { useState as _uST_6mQpZtLxV8nR3aKs } from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  TextInput as _tIp_4pLxQnZ8tVmR2aKs,
  TouchableOpacity as _tOp_7nR3aKsQpLxV8tZm,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Alert as _aLt_1VaKsQpLxT7nR9mZ2,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary as _lIL_9xQmTrL7pZaVnK4s } from 'react-native-image-picker';
import { ScrollView as _sCv_9xQmTrL7pZaVnK4s } from 'react-native-gesture-handler';
import { useNavigation as _uNV_9xQmTrL7pZaVnK4s } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAmazonsStore as _uAS_2Rm9xQpLzT7nVaKs } from '../_0xLGndstr/amazonsCntxt';
import Toast from 'react-native-toast-message';

const _bG_7qPzLxVnT3mA9rKb = ['#FF9400', '#FAD51D'];
const _bg_6tVmQpLxZ7nR3aKs = require('../assets/images/main_background.png');

const _lN_9tVmQpLxZ7nR3aKs = {
  name: [
    'Lysandra',
    'Thaleia',
    'Kallisto',
    'Eurynome',
    'Phaedra',
    'Alectra',
    'Ianthe',
    'Myrina',
  ],
  epithet: [
    'the Stormbearer',
    'the Iron Oath',
    'the Night Arrow',
    'the Dawnblade',
    'the Lionhearted',
    'the Silent Flame',
    'the Blood Orchid',
    'the Sea-Watcher',
  ],
  homeland: [
    'Themiscyra',
    'The Aegean Coast',
    'Arcadian Highlands',
    'Thracian Frontier',
    'The Marble Isles',
    'The Ashen Steppe',
    'The Cedar Valleys',
    'The Sunlit Ravines',
  ],
  tribe: [
    'The Spear Circle',
    'The Moon Guard',
    'The Laurel Court',
    'The Bronze Sisterhood',
    'The River Wardens',
    'The Ashbound',
    'The Falcon Banner',
    'The Iron Vow',
  ],
  voice: [
    'Precise and formal',
    'Quiet and cutting',
    'Warm but commanding',
    'Blunt and honest',
    'Poetic and symbolic',
    'Cold and strategic',
    'Playful under pressure',
    'Calm like a judge',
  ],
  destiny: [
    'The Temple will demand a sacrifice',
    'A relic will choose her, not the other way around',
    'She will face a sister’s betrayal',
    'A god will test her oath',
    'She must lead a forbidden expedition',
    'Her name will be erased—unless she writes it in fire',
    'Peace will cost her everything',
    'The Oracle has already seen her end',
  ],
};

const _pk_4pLxQnZ8tVmR2aKs = _ar_6mQpZtLxV8nR3aKs =>
  _ar_6mQpZtLxV8nR3aKs[Math.floor(Math.random() * _ar_6mQpZtLxV8nR3aKs.length)];

const CreateCharacterScreen = () => {
  const [_stp_6mQpZtLxV8nR3aKs, _sStp_7qPzLxVnT3mA9rKb] =
    _uST_6mQpZtLxV8nR3aKs(1);
  const [_drt_9xQmTrL7pZaVnK4s, _sDrt_2Rm9xQpLzT7nVaKs] =
    _uST_6mQpZtLxV8nR3aKs(false);
  const [_ch_4pLxQnZ8tVmR2aKs, _sCh_6tVmQpLxZ7nR3aKs] = _uST_6mQpZtLxV8nR3aKs({
    name: '',
    epithet: '',
    homeland: '',
    tribe: '',
    voice: '',
    destiny: '',
    image: null,
  });

  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const { legendforgeNotificationsEnabled: _nE_7nR3aKsQpLxV8tZm } =
    _uAS_2Rm9xQpLzT7nVaKs();

  const _sF_1VaKsQpLxT7nR9mZ2 = (_k_6tVmQpLxZ7nR3aKs, _v_9tVmQpLxZ7nR3aKs) => {
    _sDrt_2Rm9xQpLzT7nVaKs(true);
    _sCh_6tVmQpLxZ7nR3aKs(_p_7qPzLxVnT3mA9rKb => ({
      ..._p_7qPzLxVnT3mA9rKb,
      [_k_6tVmQpLxZ7nR3aKs]: _v_9tVmQpLxZ7nR3aKs,
    }));
  };

  const _pr_4pLxQnZ8tVmR2aKs = [
    !!_ch_4pLxQnZ8tVmR2aKs.name,
    !!_ch_4pLxQnZ8tVmR2aKs.epithet,
    !!_ch_4pLxQnZ8tVmR2aKs.homeland,
    !!_ch_4pLxQnZ8tVmR2aKs.tribe,
    !!(_ch_4pLxQnZ8tVmR2aKs.voice && _ch_4pLxQnZ8tVmR2aKs.destiny),
  ];

  const _pI_6mQpZtLxV8nR3aKs = () => {
    _lIL_9xQmTrL7pZaVnK4s({ mediaType: 'photo' }, _rs_7qPzLxVnT3mA9rKb => {
      try {
        if (_rs_7qPzLxVnT3mA9rKb.didCancel || _rs_7qPzLxVnT3mA9rKb.errorCode)
          return;
        const _ur_2Rm9xQpLzT7nVaKs = _rs_7qPzLxVnT3mA9rKb.assets?.[0]?.uri;
        if (!_ur_2Rm9xQpLzT7nVaKs) return;

        _sDrt_2Rm9xQpLzT7nVaKs(true);
        _sCh_6tVmQpLxZ7nR3aKs(_p_7qPzLxVnT3mA9rKb => ({
          ..._p_7qPzLxVnT3mA9rKb,
          image: _ur_2Rm9xQpLzT7nVaKs,
        }));
      } catch (_e_1VaKsQpLxT7nR9mZ2) {
        console.error('Error picker ==>', _e_1VaKsQpLxT7nR9mZ2);
      }
    });
  };

  const _fd_6tVmQpLxZ7nR3aKs = () => {
    const _op_9xQmTrL7pZaVnK4s = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    return new Date().toLocaleDateString('en-GB', _op_9xQmTrL7pZaVnK4s);
  };

  const _sv_4pLxQnZ8tVmR2aKs = async () => {
    try {
      const _nc_6mQpZtLxV8nR3aKs = {
        id: Date.now().toString(),
        name: _ch_4pLxQnZ8tVmR2aKs.name,
        epithet: _ch_4pLxQnZ8tVmR2aKs.epithet,
        homeland: _ch_4pLxQnZ8tVmR2aKs.homeland,
        tribe: _ch_4pLxQnZ8tVmR2aKs.tribe,
        voice: _ch_4pLxQnZ8tVmR2aKs.voice,
        destiny: _ch_4pLxQnZ8tVmR2aKs.destiny,
        image: _ch_4pLxQnZ8tVmR2aKs.image,
        savedAt: _fd_6tVmQpLxZ7nR3aKs(),
      };

      const _st_7qPzLxVnT3mA9rKb = await AsyncStorage.getItem('characters');
      const _cs_9tVmQpLxZ7nR3aKs = _st_7qPzLxVnT3mA9rKb
        ? JSON.parse(_st_7qPzLxVnT3mA9rKb)
        : [];
      const _up_2Rm9xQpLzT7nVaKs = [
        ..._cs_9tVmQpLxZ7nR3aKs,
        _nc_6mQpZtLxV8nR3aKs,
      ];

      await AsyncStorage.setItem(
        'characters',
        JSON.stringify(_up_2Rm9xQpLzT7nVaKs),
      );

      _sDrt_2Rm9xQpLzT7nVaKs(false);

      _nE_7nR3aKsQpLxV8tZm &&
        Toast.show({
          text1: 'Character saved!',
        });

      _nv_9xQmTrL7pZaVnK4s.goBack();
    } catch (_e_1VaKsQpLxT7nR9mZ2) {
      console.error('Failed to save', _e_1VaKsQpLxT7nR9mZ2);
    }
  };

  const _ex_6mQpZtLxV8nR3aKs = () => {
    if (!_drt_9xQmTrL7pZaVnK4s) return _nv_9xQmTrL7pZaVnK4s.goBack();

    _aLt_1VaKsQpLxT7nR9mZ2.alert(
      'Character Creation Incomplete',
      'You haven’t finished creating your character yet. Are you sure you want to exit? All progress will be lost',
      [
        { text: 'Continue Editing', style: 'cancel' },
        {
          text: 'Exit Without Saving',
          style: 'destructive',
          onPress: () => _nv_9xQmTrL7pZaVnK4s.goBack(),
        },
      ],
    );
  };

  const _cN_7qPzLxVnT3mA9rKb =
    _ch_4pLxQnZ8tVmR2aKs.name &&
    _ch_4pLxQnZ8tVmR2aKs.epithet &&
    _ch_4pLxQnZ8tVmR2aKs.homeland &&
    _ch_4pLxQnZ8tVmR2aKs.tribe;

  const _cS_9tVmQpLxZ7nR3aKs =
    _ch_4pLxQnZ8tVmR2aKs.voice && _ch_4pLxQnZ8tVmR2aKs.destiny;

  return (
    <_iBg_4pLxQnZ8tVmR2aKs source={_bg_6tVmQpLxZ7nR3aKs} style={{ flex: 1 }}>
      <_sCv_9xQmTrL7pZaVnK4s
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <_vW_9tVmQpLxZ7nR3aKs style={_h$.hd_6mQpZtLxV8nR3aKs}>
          <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.tt_7qPzLxVnT3mA9rKb}>
            {_stp_6mQpZtLxV8nR3aKs < 5 ? 'Identity' : 'Voice & Destiny'}
          </_tXt_3aKsQpLxVnZ8tRm2>

          <_tOp_7nR3aKsQpLxV8tZm
            style={_h$.cB_9xQmTrL7pZaVnK4s}
            onPress={_ex_6mQpZtLxV8nR3aKs}
            activeOpacity={0.7}
          >
            <_iMg_6tVmQpLxZ7nR3aKs
              source={require('../assets/icons/iconamoon_close.png')}
            />
          </_tOp_7nR3aKsQpLxV8tZm>
        </_vW_9tVmQpLxZ7nR3aKs>

        <_vW_9tVmQpLxZ7nR3aKs style={_h$.pR_2Rm9xQpLzT7nVaKs}>
          {_pr_4pLxQnZ8tVmR2aKs.map(
            (_dn_6mQpZtLxV8nR3aKs, _i_7qPzLxVnT3mA9rKb) => (
              <_vW_9tVmQpLxZ7nR3aKs
                key={_i_7qPzLxVnT3mA9rKb}
                style={[
                  _h$.dt_6tVmQpLxZ7nR3aKs,
                  _dn_6mQpZtLxV8nR3aKs && _h$.dtD_9tVmQpLxZ7nR3aKs,
                  _stp_6mQpZtLxV8nR3aKs === _i_7qPzLxVnT3mA9rKb + 1 &&
                    _h$.dtA_7nR3aKsQpLxV8tZm,
                ]}
              >
                {_dn_6mQpZtLxV8nR3aKs && (
                  <_iMg_6tVmQpLxZ7nR3aKs
                    source={require('../assets/icons/check.png')}
                  />
                )}
              </_vW_9tVmQpLxZ7nR3aKs>
            ),
          )}
        </_vW_9tVmQpLxZ7nR3aKs>

        {_stp_6mQpZtLxV8nR3aKs < 5 && (
          <_vW_9tVmQpLxZ7nR3aKs style={_h$.bl_6mQpZtLxV8nR3aKs}>
            {[
              ['Name', 'name'],
              ['Epithet (Title)', 'epithet'],
              ['Homeland', 'homeland'],
              ['Tribe / Order', 'tribe'],
            ].map(([_lb_9xQmTrL7pZaVnK4s, _ky_2Rm9xQpLzT7nVaKs]) => (
              <_vW_9tVmQpLxZ7nR3aKs
                key={_ky_2Rm9xQpLzT7nVaKs}
                style={_h$.fd_4pLxQnZ8tVmR2aKs}
              >
                <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.lb_6tVmQpLxZ7nR3aKs}>
                  {_lb_9xQmTrL7pZaVnK4s}
                </_tXt_3aKsQpLxVnZ8tRm2>

                <_vW_9tVmQpLxZ7nR3aKs style={_h$.iW_7qPzLxVnT3mA9rKb}>
                  <_tIp_4pLxQnZ8tVmR2aKs
                    value={_ch_4pLxQnZ8tVmR2aKs[_ky_2Rm9xQpLzT7nVaKs]}
                    onChangeText={_v_9tVmQpLxZ7nR3aKs =>
                      _sF_1VaKsQpLxT7nR9mZ2(
                        _ky_2Rm9xQpLzT7nVaKs,
                        _v_9tVmQpLxZ7nR3aKs,
                      )
                    }
                    style={_h$.ip_6mQpZtLxV8nR3aKs}
                    maxLength={30}
                  />
                  <_tOp_7nR3aKsQpLxV8tZm
                    style={_h$.sh_9xQmTrL7pZaVnK4s}
                    onPress={() =>
                      _sF_1VaKsQpLxT7nR9mZ2(
                        _ky_2Rm9xQpLzT7nVaKs,
                        _pk_4pLxQnZ8tVmR2aKs(
                          _lN_9tVmQpLxZ7nR3aKs[_ky_2Rm9xQpLzT7nVaKs],
                        ),
                      )
                    }
                  >
                    <_iMg_6tVmQpLxZ7nR3aKs
                      source={require('../assets/icons/shuffle.png')}
                    />
                  </_tOp_7nR3aKsQpLxV8tZm>
                </_vW_9tVmQpLxZ7nR3aKs>
              </_vW_9tVmQpLxZ7nR3aKs>
            ))}

            <_vW_9tVmQpLxZ7nR3aKs
              style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 24 }}
            >
              <_tOp_7nR3aKsQpLxV8tZm
                disabled={!_cN_7qPzLxVnT3mA9rKb}
                onPress={() => _sStp_7qPzLxVnT3mA9rKb(5)}
                activeOpacity={0.7}
              >
                <LinearGradient
                  colors={
                    _cN_7qPzLxVnT3mA9rKb
                      ? _bG_7qPzLxVnT3mA9rKb
                      : ['#444', '#444']
                  }
                  style={_h$.pB_6tVmQpLxZ7nR3aKs}
                >
                  <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.pT_7nR3aKsQpLxV8tZm}>
                    Next
                  </_tXt_3aKsQpLxVnZ8tRm2>
                </LinearGradient>
              </_tOp_7nR3aKsQpLxV8tZm>
            </_vW_9tVmQpLxZ7nR3aKs>
          </_vW_9tVmQpLxZ7nR3aKs>
        )}

        {_stp_6mQpZtLxV8nR3aKs === 5 && (
          <_vW_9tVmQpLxZ7nR3aKs style={_h$.bl_6mQpZtLxV8nR3aKs}>
            {[
              ['Voice (How she speaks)', 'voice'],
              ['Destiny Thread (Story Hook)', 'destiny'],
            ].map(([_lb_9xQmTrL7pZaVnK4s, _ky_2Rm9xQpLzT7nVaKs]) => (
              <_vW_9tVmQpLxZ7nR3aKs
                key={_ky_2Rm9xQpLzT7nVaKs}
                style={_h$.fd_4pLxQnZ8tVmR2aKs}
              >
                <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.lb_6tVmQpLxZ7nR3aKs}>
                  {_lb_9xQmTrL7pZaVnK4s}
                </_tXt_3aKsQpLxVnZ8tRm2>

                <_vW_9tVmQpLxZ7nR3aKs style={_h$.iW_7qPzLxVnT3mA9rKb}>
                  <_tIp_4pLxQnZ8tVmR2aKs
                    value={_ch_4pLxQnZ8tVmR2aKs[_ky_2Rm9xQpLzT7nVaKs]}
                    onChangeText={_v_9tVmQpLxZ7nR3aKs =>
                      _sF_1VaKsQpLxT7nR9mZ2(
                        _ky_2Rm9xQpLzT7nVaKs,
                        _v_9tVmQpLxZ7nR3aKs,
                      )
                    }
                    style={_h$.ip_6mQpZtLxV8nR3aKs}
                  />
                  <_tOp_7nR3aKsQpLxV8tZm
                    activeOpacity={0.7}
                    style={_h$.sh_9xQmTrL7pZaVnK4s}
                    onPress={() =>
                      _sF_1VaKsQpLxT7nR9mZ2(
                        _ky_2Rm9xQpLzT7nVaKs,
                        _pk_4pLxQnZ8tVmR2aKs(
                          _lN_9tVmQpLxZ7nR3aKs[_ky_2Rm9xQpLzT7nVaKs],
                        ),
                      )
                    }
                  >
                    <_iMg_6tVmQpLxZ7nR3aKs
                      source={require('../assets/icons/shuffle.png')}
                    />
                  </_tOp_7nR3aKsQpLxV8tZm>
                </_vW_9tVmQpLxZ7nR3aKs>
              </_vW_9tVmQpLxZ7nR3aKs>
            ))}

            <_vW_9tVmQpLxZ7nR3aKs style={_h$.iBx_4pLxQnZ8tVmR2aKs}>
              <_tOp_7nR3aKsQpLxV8tZm
                style={_h$.iCr_6mQpZtLxV8nR3aKs}
                onPress={_pI_6mQpZtLxV8nR3aKs}
                activeOpacity={0.7}
              >
                {_ch_4pLxQnZ8tVmR2aKs.image ? (
                  <_iMg_6tVmQpLxZ7nR3aKs
                    source={{ uri: _ch_4pLxQnZ8tVmR2aKs.image }}
                    style={_h$.iIm_9tVmQpLxZ7nR3aKs}
                  />
                ) : (
                  <>
                    <_iMg_6tVmQpLxZ7nR3aKs
                      source={require('../assets/icons/solar_gallery-bold.png')}
                    />
                    <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.up_7qPzLxVnT3mA9rKb}>
                      Upload
                    </_tXt_3aKsQpLxVnZ8tRm2>
                  </>
                )}
              </_tOp_7nR3aKsQpLxV8tZm>
            </_vW_9tVmQpLxZ7nR3aKs>

            <_vW_9tVmQpLxZ7nR3aKs
              style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 40 }}
            >
              <_tOp_7nR3aKsQpLxV8tZm
                disabled={!_cS_9tVmQpLxZ7nR3aKs}
                onPress={_sv_4pLxQnZ8tVmR2aKs}
                activeOpacity={0.7}
              >
                <LinearGradient
                  colors={
                    _cS_9tVmQpLxZ7nR3aKs
                      ? _bG_7qPzLxVnT3mA9rKb
                      : ['#444', '#444']
                  }
                  style={_h$.pB_6tVmQpLxZ7nR3aKs}
                >
                  <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.pT_7nR3aKsQpLxV8tZm}>
                    Save
                  </_tXt_3aKsQpLxVnZ8tRm2>
                </LinearGradient>
              </_tOp_7nR3aKsQpLxV8tZm>

              <_tOp_7nR3aKsQpLxV8tZm onPress={() => _sStp_7qPzLxVnT3mA9rKb(1)}>
                <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.pv_2Rm9xQpLzT7nVaKs}>
                  Previous
                </_tXt_3aKsQpLxVnZ8tRm2>
              </_tOp_7nR3aKsQpLxV8tZm>
            </_vW_9tVmQpLxZ7nR3aKs>
          </_vW_9tVmQpLxZ7nR3aKs>
        )}
      </_sCv_9xQmTrL7pZaVnK4s>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  hd_6mQpZtLxV8nR3aKs: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tt_7qPzLxVnT3mA9rKb: { color: '#FFB907', fontSize: 22, fontWeight: '700' },

  cB_9xQmTrL7pZaVnK4s: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#251F21',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pR_2Rm9xQpLzT7nVaKs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    marginTop: 26,
    marginBottom: 20,
  },
  dt_6tVmQpLxZ7nR3aKs: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dtA_7nR3aKsQpLxV8tZm: { borderWidth: 2, borderColor: '#FF9400' },
  dtD_9tVmQpLxZ7nR3aKs: {
    backgroundColor: '#FF9400',
    borderWidth: 2,
    borderColor: '#FF9400',
  },

  bl_6mQpZtLxV8nR3aKs: { padding: 16, flex: 1 },
  fd_4pLxQnZ8tVmR2aKs: { marginBottom: 16 },
  lb_6tVmQpLxZ7nR3aKs: {
    color: '#fff',
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '400',
  },

  iW_7qPzLxVnT3mA9rKb: {
    flexDirection: 'row',
    backgroundColor: '#1F1B1D',
    borderRadius: 14,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  ip_6mQpZtLxV8nR3aKs: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 16,
  },

  sh_9xQmTrL7pZaVnK4s: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iBx_4pLxQnZ8tVmR2aKs: {
    backgroundColor: '#1F1B1D',
    borderRadius: 20,
    paddingVertical: 26,
    alignItems: 'center',
    marginBottom: 24,
  },
  iCr_6mQpZtLxV8nR3aKs: {
    width: 165,
    height: 165,
    borderRadius: 100,
    backgroundColor: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iIm_9tVmQpLxZ7nR3aKs: { width: '100%', height: '100%' },
  up_7qPzLxVnT3mA9rKb: { color: '#fff', marginTop: 6 },

  pB_6tVmQpLxZ7nR3aKs: {
    height: 56,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  pT_7nR3aKsQpLxV8tZm: { color: '#fff', fontSize: 16, fontWeight: '600' },

  pv_2Rm9xQpLzT7nVaKs: {
    textAlign: 'center',
    color: '#FFFFFF80',
    marginTop: 24,
  },
});

export default CreateCharacterScreen;
