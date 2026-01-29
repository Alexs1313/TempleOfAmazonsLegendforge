import {
  useNavigation as _uNV_9xQmTrL7pZaVnK4s,
  useFocusEffect as _uFE_1VaKsQpLxT7nR9mZ2,
} from '@react-navigation/native';
import React, {
  useCallback as _uCB_7qPzLxVnT3mA9rKb,
  useState as _uST_6mQpZtLxV8nR3aKs,
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
  Alert as _aLt_6mQpZtLxV8nR3aKs,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAmazonsStore } from '../_0xLGndstr/amazonsCntxt';
import Toast from 'react-native-toast-message';

const _bGr_9xQmTrL7pZaVnK4s = ['#FF9400', '#FAD51D'];
const _bg_6tVmQpLxZ7nR3aKs = require('../assets/images/main_background.png');

const LegendforgeScreen = () => {
  const { height: _h_7qPzLxVnT3mA9rKb } = _uWD_2Rm9xQpLzT7nVaKs();
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const [_st_6mQpZtLxV8nR3aKs, _sSt_7qPzLxVnT3mA9rKb] = _uST_6mQpZtLxV8nR3aKs(
    [],
  );
  const { legendforgeNotificationsEnabled: _nt_4pLxQnZ8tVmR2aKs } =
    useAmazonsStore();

  _uFE_1VaKsQpLxT7nR9mZ2(
    _uCB_7qPzLxVnT3mA9rKb(() => {
      const _ld_9tVmQpLxZ7nR3aKs = async () => {
        try {
          const _sv_6mQpZtLxV8nR3aKs = await AsyncStorage.getItem('stories');
          const _ps_2Rm9xQpLzT7nVaKs = _sv_6mQpZtLxV8nR3aKs
            ? JSON.parse(_sv_6mQpZtLxV8nR3aKs)
            : [];
          _sSt_7qPzLxVnT3mA9rKb(_ps_2Rm9xQpLzT7nVaKs);
        } catch (_e_9xQmTrL7pZaVnK4s) {
          console.error('Failed to load stories ==>', _e_9xQmTrL7pZaVnK4s);
        }
      };

      _ld_9tVmQpLxZ7nR3aKs();
    }, []),
  );

  const _cf_6tVmQpLxZ7nR3aKs = _id_7qPzLxVnT3mA9rKb => {
    _aLt_6mQpZtLxV8nR3aKs.alert(
      'Delete Story',
      'Are you sure you want to delete this story?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => _dl_9xQmTrL7pZaVnK4s(_id_7qPzLxVnT3mA9rKb),
        },
      ],
    );
  };

  const _dl_9xQmTrL7pZaVnK4s = async _id_7qPzLxVnT3mA9rKb => {
    try {
      const _nx_2Rm9xQpLzT7nVaKs = _st_6mQpZtLxV8nR3aKs.filter(
        _s_6tVmQpLxZ7nR3aKs => _s_6tVmQpLxZ7nR3aKs.id !== _id_7qPzLxVnT3mA9rKb,
      );
      _sSt_7qPzLxVnT3mA9rKb(_nx_2Rm9xQpLzT7nVaKs);

      await AsyncStorage.setItem(
        'stories',
        JSON.stringify(_nx_2Rm9xQpLzT7nVaKs),
      );

      _nt_4pLxQnZ8tVmR2aKs &&
        Toast.show({
          text1: 'Story deleted!',
        });
    } catch (_e_9xQmTrL7pZaVnK4s) {
      console.error('Failed to delete the story ==>', _e_9xQmTrL7pZaVnK4s);
    }
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
            { paddingTop: _h_7qPzLxVnT3mA9rKb * 0.08 },
          ]}
        >
          <_iMg_6tVmQpLxZ7nR3aKs
            source={require('../assets/images/legendforge_title.png')}
            style={{ marginBottom: _h_7qPzLxVnT3mA9rKb * 0.03 }}
          />

          <_iMg_6tVmQpLxZ7nR3aKs
            source={require('../assets/images/quiz_logo.png')}
          />

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.iB_7qPzLxVnT3mA9rKb}>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.iT_9xQmTrL7pZaVnK4s}>
              What is not written will be forgotten
            </_tXt_3aKsQpLxVnZ8tRm2>

            <_tOp_7nR3aKsQpLxV8tZm
              onPress={() => _nv_9xQmTrL7pZaVnK4s.navigate('CreateStoryScreen')}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={_bGr_9xQmTrL7pZaVnK4s}
                style={_h$.bN_6tVmQpLxZ7nR3aKs}
              >
                <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.bT_2Rm9xQpLzT7nVaKs}>
                  Begin a New Saga
                </_tXt_3aKsQpLxVnZ8tRm2>
              </LinearGradient>
            </_tOp_7nR3aKsQpLxV8tZm>
          </_vW_9tVmQpLxZ7nR3aKs>
        </_vW_9tVmQpLxZ7nR3aKs>

        {_st_6mQpZtLxV8nR3aKs.map(_it_7qPzLxVnT3mA9rKb => (
          <_tOp_7nR3aKsQpLxV8tZm
            key={_it_7qPzLxVnT3mA9rKb.id}
            activeOpacity={0.9}
            onLongPress={() => _cf_6tVmQpLxZ7nR3aKs(_it_7qPzLxVnT3mA9rKb.id)}
            style={_h$.sC_9xQmTrL7pZaVnK4s}
            onPress={() =>
              _nv_9xQmTrL7pZaVnK4s.navigate('LegendforgeDetailsScreen', {
                story: _it_7qPzLxVnT3mA9rKb,
              })
            }
          >
            <_vW_9tVmQpLxZ7nR3aKs style={_h$.sH_6mQpZtLxV8nR3aKs}>
              <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.sT_7qPzLxVnT3mA9rKb}>
                {_it_7qPzLxVnT3mA9rKb.title}
              </_tXt_3aKsQpLxVnZ8tRm2>
              <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.sD_2Rm9xQpLzT7nVaKs}>
                {_it_7qPzLxVnT3mA9rKb.savedAt}
              </_tXt_3aKsQpLxVnZ8tRm2>
            </_vW_9tVmQpLxZ7nR3aKs>

            <_vW_9tVmQpLxZ7nR3aKs style={_h$.wW_9tVmQpLxZ7nR3aKs}>
              {_it_7qPzLxVnT3mA9rKb.walkers.map(
                (_w_6mQpZtLxV8nR3aKs, _i_9xQmTrL7pZaVnK4s) => (
                  <_vW_9tVmQpLxZ7nR3aKs
                    key={_i_9xQmTrL7pZaVnK4s}
                    style={_h$.wB_6tVmQpLxZ7nR3aKs}
                  >
                    <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.wT_7nR3aKsQpLxV8tZm}>
                      {_w_6mQpZtLxV8nR3aKs.name}
                    </_tXt_3aKsQpLxVnZ8tRm2>
                  </_vW_9tVmQpLxZ7nR3aKs>
                ),
              )}

              <_vW_9tVmQpLxZ7nR3aKs style={_h$.aW_4pLxQnZ8tVmR2aKs}>
                {_it_7qPzLxVnT3mA9rKb.walkers
                  .slice(0, 3)
                  .map((_w_6mQpZtLxV8nR3aKs, _i_9xQmTrL7pZaVnK4s) => (
                    <_iMg_6tVmQpLxZ7nR3aKs
                      key={_i_9xQmTrL7pZaVnK4s}
                      source={
                        _w_6mQpZtLxV8nR3aKs.image
                          ? { uri: _w_6mQpZtLxV8nR3aKs.image }
                          : require('../assets/images/placeholder.png')
                      }
                      style={[
                        _h$.aI_1VaKsQpLxT7nR9mZ2,
                        { marginLeft: _i_9xQmTrL7pZaVnK4s === 0 ? 0 : -10 },
                      ]}
                    />
                  ))}
              </_vW_9tVmQpLxZ7nR3aKs>
            </_vW_9tVmQpLxZ7nR3aKs>
          </_tOp_7nR3aKsQpLxV8tZm>
        ))}
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
    width: '90%',
  },
  iT_9xQmTrL7pZaVnK4s: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  bN_6tVmQpLxZ7nR3aKs: {
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bT_2Rm9xQpLzT7nVaKs: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },

  sC_9xQmTrL7pZaVnK4s: {
    marginHorizontal: 16,
    backgroundColor: '#2B2B2B',
    borderRadius: 18,
    padding: 16,
    marginTop: 16,
  },
  sH_6mQpZtLxV8nR3aKs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sT_7qPzLxVnT3mA9rKb: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  sD_2Rm9xQpLzT7nVaKs: { color: '#FFFFFF80', fontSize: 12 },

  wW_9tVmQpLxZ7nR3aKs: { flexDirection: 'row', flexWrap: 'wrap' },
  wB_6tVmQpLxZ7nR3aKs: {
    backgroundColor: '#FF940080',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  wT_7nR3aKsQpLxV8tZm: { color: '#FFFFFF', fontSize: 12 },

  aW_4pLxQnZ8tVmR2aKs: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  aI_1VaKsQpLxT7nR9mZ2: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#333',
  },
});

export default LegendforgeScreen;
