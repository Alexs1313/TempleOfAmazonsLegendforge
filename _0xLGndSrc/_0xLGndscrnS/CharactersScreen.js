import {
  useNavigation as _uNV_9xQmTrL7pZaVnK4s,
  useFocusEffect as _uFE_1VaKsQpLxT7nR9mZ2,
} from '@react-navigation/native';
import React, {
  useState as _uST_6mQpZtLxV8nR3aKs,
  useCallback as _uCB_7qPzLxVnT3mA9rKb,
  useEffect as _uEF_5nR3aKsQpLxV8tZm,
} from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  TouchableOpacity as _tOp_7nR3aKsQpLxV8tZm,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  useWindowDimensions as _uWD_2Rm9xQpLzT7nVaKs,
  Alert as _aLt_1VaKsQpLxT7nR9mZ2b,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';

import { useAmazonsStore as _uAS_2Rm9xQpLzT7nVaKs } from '../_0xLGndstr/amazonsCntxt';
import Toast from 'react-native-toast-message';

const _bG_7qPzLxVnT3mA9rKb = ['#FF9400', '#FAD51D'];
const _pW_6mQpZtLxV8nR3aKs = '#FFFFFF';
const _bg_6tVmQpLxZ7nR3aKs = require('../assets/images/main_background.png');

const CharactersScreen = () => {
  const { height: _ht_9xQmTrL7pZaVnK4s } = _uWD_2Rm9xQpLzT7nVaKs();
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();

  const [_chs_6mQpZtLxV8nR3aKs, _sChs_7qPzLxVnT3mA9rKb] = _uST_6mQpZtLxV8nR3aKs(
    [],
  );
  const [_mi_2Rm9xQpLzT7nVaKs, _sMi_9tVmQpLxZ7nR3aKs] =
    _uST_6mQpZtLxV8nR3aKs(0);
  const [_sd_4pLxQnZ8tVmR2aKs, _sSd_6tVmQpLxZ7nR3aKs] =
    _uST_6mQpZtLxV8nR3aKs(null);

  const _trk_6tVmQpLxZ7nR3aKs = ['music-bg.wav', 'music-bg.wav'];

  const {
    setLegendforgeNotificationsEnabled: _sNE_7nR3aKsQpLxV8tZm,
    legendforgeSoundEnabled: _sE_9tVmQpLxZ7nR3aKs,
    setLegendforgeSoundEnabled: _sSE_4pLxQnZ8tVmR2aKs,
    legendforgeNotificationsEnabled: _nE_2Rm9xQpLzT7nVaKs,
  } = _uAS_2Rm9xQpLzT7nVaKs();

  const _ls_7qPzLxVnT3mA9rKb = _uCB_7qPzLxVnT3mA9rKb(async () => {
    try {
      const _nv_6mQpZtLxV8nR3aKs = await AsyncStorage.getItem(
        'toggleNotifications',
      );
      const _sv_9xQmTrL7pZaVnK4s = await AsyncStorage.getItem('toggleSound');

      if (_nv_6mQpZtLxV8nR3aKs !== null)
        _sNE_7nR3aKsQpLxV8tZm(JSON.parse(_nv_6mQpZtLxV8nR3aKs));
      if (_sv_9xQmTrL7pZaVnK4s !== null)
        _sSE_4pLxQnZ8tVmR2aKs(JSON.parse(_sv_9xQmTrL7pZaVnK4s));
    } catch (_e_1VaKsQpLxT7nR9mZ2) {
      console.log('Error loading settings', _e_1VaKsQpLxT7nR9mZ2);
    }
  }, [_sNE_7nR3aKsQpLxV8tZm, _sSE_4pLxQnZ8tVmR2aKs]);

  _uFE_1VaKsQpLxT7nR9mZ2(
    _uCB_7qPzLxVnT3mA9rKb(() => {
      _ls_7qPzLxVnT3mA9rKb();
    }, [_ls_7qPzLxVnT3mA9rKb]),
  );

  _uFE_1VaKsQpLxT7nR9mZ2(
    _uCB_7qPzLxVnT3mA9rKb(() => {
      const _ld_6tVmQpLxZ7nR3aKs = async () => {
        const _dt_6mQpZtLxV8nR3aKs = await AsyncStorage.getItem('characters');
        _sChs_7qPzLxVnT3mA9rKb(
          _dt_6mQpZtLxV8nR3aKs ? JSON.parse(_dt_6mQpZtLxV8nR3aKs) : [],
        );
      };
      _ld_6tVmQpLxZ7nR3aKs();
    }, []),
  );

  const _pm_4pLxQnZ8tVmR2aKs = _uCB_7qPzLxVnT3mA9rKb(
    _ix_9tVmQpLxZ7nR3aKs => {
      if (_sd_4pLxQnZ8tVmR2aKs) {
        _sd_4pLxQnZ8tVmR2aKs.stop(() => {
          _sd_4pLxQnZ8tVmR2aKs.release();
        });
      }

      const _pt_6mQpZtLxV8nR3aKs = _trk_6tVmQpLxZ7nR3aKs[_ix_9tVmQpLxZ7nR3aKs];

      const _ns_7nR3aKsQpLxV8tZm = new Sound(
        _pt_6mQpZtLxV8nR3aKs,
        Sound.MAIN_BUNDLE,
        _er_2Rm9xQpLzT7nVaKs => {
          if (_er_2Rm9xQpLzT7nVaKs) {
            console.log('Error =>', _er_2Rm9xQpLzT7nVaKs);
            return;
          }

          _ns_7nR3aKsQpLxV8tZm.play(_ok_6tVmQpLxZ7nR3aKs => {
            if (_ok_6tVmQpLxZ7nR3aKs) {
              _sMi_9tVmQpLxZ7nR3aKs(
                _p_9xQmTrL7pZaVnK4s =>
                  (_p_9xQmTrL7pZaVnK4s + 1) % _trk_6tVmQpLxZ7nR3aKs.length,
              );
            } else {
              console.log('Error =>');
            }
          });

          _sSd_6tVmQpLxZ7nR3aKs(_ns_7nR3aKsQpLxV8tZm);
        },
      );
    },
    [_sd_4pLxQnZ8tVmR2aKs, _trk_6tVmQpLxZ7nR3aKs],
  );

  _uEF_5nR3aKsQpLxV8tZm(() => {
    _pm_4pLxQnZ8tVmR2aKs(_mi_2Rm9xQpLzT7nVaKs);

    return () => {
      if (_sd_4pLxQnZ8tVmR2aKs) {
        _sd_4pLxQnZ8tVmR2aKs.stop(() => {
          _sd_4pLxQnZ8tVmR2aKs.release();
        });
      }
    };
  }, [_mi_2Rm9xQpLzT7nVaKs]);

  _uEF_5nR3aKsQpLxV8tZm(() => {
    const _sv_6mQpZtLxV8nR3aKs = async () => {
      try {
        const _mv_9xQmTrL7pZaVnK4s = await AsyncStorage.getItem('toggleSound');
        const _on_2Rm9xQpLzT7nVaKs = JSON.parse(_mv_9xQmTrL7pZaVnK4s);

        _sSE_4pLxQnZ8tVmR2aKs(_on_2Rm9xQpLzT7nVaKs);

        if (_sd_4pLxQnZ8tVmR2aKs)
          _sd_4pLxQnZ8tVmR2aKs.setVolume(_on_2Rm9xQpLzT7nVaKs ? 1 : 0);
      } catch (_e_1VaKsQpLxT7nR9mZ2) {
        console.error('Error =>', _e_1VaKsQpLxT7nR9mZ2);
      }
    };

    _sv_6mQpZtLxV8nR3aKs();
  }, [_sd_4pLxQnZ8tVmR2aKs, _sSE_4pLxQnZ8tVmR2aKs]);

  _uEF_5nR3aKsQpLxV8tZm(() => {
    if (_sd_4pLxQnZ8tVmR2aKs)
      _sd_4pLxQnZ8tVmR2aKs.setVolume(_sE_9tVmQpLxZ7nR3aKs ? 1 : 0);
  }, [_sE_9tVmQpLxZ7nR3aKs, _sd_4pLxQnZ8tVmR2aKs]);

  const _dl_7qPzLxVnT3mA9rKb = _id_6mQpZtLxV8nR3aKs => {
    _aLt_1VaKsQpLxT7nR9mZ2b.alert(
      'Delete Character',
      'This character will be permanently removed.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const _up_9xQmTrL7pZaVnK4s = _chs_6mQpZtLxV8nR3aKs.filter(
                _c_2Rm9xQpLzT7nVaKs =>
                  _c_2Rm9xQpLzT7nVaKs.id !== _id_6mQpZtLxV8nR3aKs,
              );
              _sChs_7qPzLxVnT3mA9rKb(_up_9xQmTrL7pZaVnK4s);

              _nE_2Rm9xQpLzT7nVaKs &&
                Toast.show({
                  text1: 'Character deleted!',
                });

              await AsyncStorage.setItem(
                'characters',
                JSON.stringify(_up_9xQmTrL7pZaVnK4s),
              );
            } catch (_e_1VaKsQpLxT7nR9mZ2) {
              console.error('Failed to delete =>', _e_1VaKsQpLxT7nR9mZ2);
            }
          },
        },
      ],
    );
  };

  return (
    <_iBg_4pLxQnZ8tVmR2aKs source={_bg_6tVmQpLxZ7nR3aKs} style={{ flex: 1 }}>
      <_sCv_9xQmTrL7pZaVnK4s
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <_vW_9tVmQpLxZ7nR3aKs
          style={[
            _h$.iC_6mQpZtLxV8nR3aKs,
            { paddingTop: _ht_9xQmTrL7pZaVnK4s * 0.08 },
          ]}
        >
          <_iMg_6tVmQpLxZ7nR3aKs
            source={require('../assets/images/char_title.png')}
            style={{ marginBottom: _ht_9xQmTrL7pZaVnK4s * 0.03 }}
          />

          <_vW_9tVmQpLxZ7nR3aKs style={{ flexDirection: 'row' }}>
            <_iMg_6tVmQpLxZ7nR3aKs
              source={require('../assets/images/create_1.png')}
              style={{ left: 36 }}
            />
            <_iMg_6tVmQpLxZ7nR3aKs
              source={require('../assets/images/create_2.png')}
              style={{ left: -36 }}
            />
          </_vW_9tVmQpLxZ7nR3aKs>

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.iB_7qPzLxVnT3mA9rKb}>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.iT_9xQmTrL7pZaVnK4s}>
              Not every warrior becomes a legend. Choose her carefully
            </_tXt_3aKsQpLxVnZ8tRm2>

            <_tOp_7nR3aKsQpLxV8tZm
              onPress={() =>
                _nv_9xQmTrL7pZaVnK4s.navigate('CreateCharacterScreen')
              }
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={_bG_7qPzLxVnT3mA9rKb}
                style={_h$.bB_2Rm9xQpLzT7nVaKs}
              >
                <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.bT_6mQpZtLxV8nR3aKs}>
                  Begin Forging
                </_tXt_3aKsQpLxVnZ8tRm2>
              </LinearGradient>
            </_tOp_7nR3aKsQpLxV8tZm>
          </_vW_9tVmQpLxZ7nR3aKs>
        </_vW_9tVmQpLxZ7nR3aKs>

        <_vW_9tVmQpLxZ7nR3aKs style={_h$.cW_7nR3aKsQpLxV8tZm}>
          {_chs_6mQpZtLxV8nR3aKs.map(_it_4pLxQnZ8tVmR2aKs => (
            <_tOp_7nR3aKsQpLxV8tZm
              style={_h$.cd_6tVmQpLxZ7nR3aKs}
              activeOpacity={0.85}
              key={_it_4pLxQnZ8tVmR2aKs.id}
              onLongPress={() => _dl_7qPzLxVnT3mA9rKb(_it_4pLxQnZ8tVmR2aKs.id)}
              onPress={() =>
                _nv_9xQmTrL7pZaVnK4s.navigate('CharacterDetailsScreen', {
                  character: _it_4pLxQnZ8tVmR2aKs,
                })
              }
            >
              <_vW_9tVmQpLxZ7nR3aKs style={_h$.aW_9xQmTrL7pZaVnK4s}>
                <_iMg_6tVmQpLxZ7nR3aKs
                  source={
                    _it_4pLxQnZ8tVmR2aKs.image
                      ? { uri: _it_4pLxQnZ8tVmR2aKs.image }
                      : require('../assets/images/placeholder.png')
                  }
                  style={_h$.av_2Rm9xQpLzT7nVaKs}
                />
              </_vW_9tVmQpLxZ7nR3aKs>

              <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.cN_6mQpZtLxV8nR3aKs}>
                {_it_4pLxQnZ8tVmR2aKs.name}
              </_tXt_3aKsQpLxVnZ8tRm2>

              <_vW_9tVmQpLxZ7nR3aKs style={_h$.eB_7qPzLxVnT3mA9rKb}>
                <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.eT_9xQmTrL7pZaVnK4s}>
                  {_it_4pLxQnZ8tVmR2aKs.epithet}
                </_tXt_3aKsQpLxVnZ8tRm2>
              </_vW_9tVmQpLxZ7nR3aKs>
            </_tOp_7nR3aKsQpLxV8tZm>
          ))}
        </_vW_9tVmQpLxZ7nR3aKs>
      </_sCv_9xQmTrL7pZaVnK4s>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  iC_6mQpZtLxV8nR3aKs: { alignItems: 'center' },
  iB_7qPzLxVnT3mA9rKb: {
    backgroundColor: '#251F21',
    borderRadius: 16,
    padding: 16,
    paddingVertical: 24,
    width: '92%',
  },
  iT_9xQmTrL7pZaVnK4s: {
    color: _pW_6mQpZtLxV8nR3aKs,
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  bB_2Rm9xQpLzT7nVaKs: {
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bT_6mQpZtLxV8nR3aKs: {
    color: _pW_6mQpZtLxV8nR3aKs,
    fontSize: 16,
    fontWeight: '600',
  },

  cW_7nR3aKsQpLxV8tZm: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 24,
  },
  cd_6tVmQpLxZ7nR3aKs: {
    width: '48%',
    backgroundColor: '#2B2B2B',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },

  aW_9xQmTrL7pZaVnK4s: {
    width: 97,
    height: 97,
    borderRadius: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  av_2Rm9xQpLzT7nVaKs: {
    width: 97,
    height: 97,
    borderRadius: 54,
    borderWidth: 1,
    borderColor: _pW_6mQpZtLxV8nR3aKs,
  },

  cN_6mQpZtLxV8nR3aKs: {
    color: _pW_6mQpZtLxV8nR3aKs,
    fontSize: 16,
    fontWeight: '500',
  },

  eB_7qPzLxVnT3mA9rKb: {
    backgroundColor: '#FF940080',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 5,
  },
  eT_9xQmTrL7pZaVnK4s: {
    color: _pW_6mQpZtLxV8nR3aKs,
    fontSize: 12,
    fontWeight: '400',
  },
});

export default CharactersScreen;
