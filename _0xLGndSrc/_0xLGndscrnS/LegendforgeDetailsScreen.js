import React from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  TouchableOpacity as _tOp_6tVmQpLxZ7nR3aKs,
  Share as _sHr_2Rm9xQpLzT7nVaKs,
  useWindowDimensions as _uWD_7qPzLxVnT3mA9rKb,
} from 'react-native';
import {
  useNavigation as _uNV_9xQmTrL7pZaVnK4s,
  useRoute as _uRT_6mQpZtLxV8nR3aKs,
} from '@react-navigation/native';

const _bg_6tVmQpLxZ7nR3aKs = require('../assets/images/main_background.png');

const LegendforgeDetailsScreen = () => {
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const {
    params: { story: _st_7qPzLxVnT3mA9rKb },
  } = _uRT_6mQpZtLxV8nR3aKs();
  const { height: _ht_2Rm9xQpLzT7nVaKs } = _uWD_7qPzLxVnT3mA9rKb();

  const _sh_4pLxQnZ8tVmR2aKs = () => {
    try {
      _sHr_2Rm9xQpLzT7nVaKs.share({
        message: `${_st_7qPzLxVnT3mA9rKb.title}\n\n${_st_7qPzLxVnT3mA9rKb.story}\n\n${_st_7qPzLxVnT3mA9rKb.savedAt}`,
      });
    } catch (_e_1VaKsQpLxT7nR9mZ2) {
      console.warn('Failed to share the story:', _e_1VaKsQpLxT7nR9mZ2);
    }
  };

  return (
    <_iBg_4pLxQnZ8tVmR2aKs source={_bg_6tVmQpLxZ7nR3aKs} style={{ flex: 1 }}>
      <_sCv_9xQmTrL7pZaVnK4s
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <_vW_9tVmQpLxZ7nR3aKs
          style={[
            _h$.hd_7qPzLxVnT3mA9rKb,
            { paddingTop: _ht_2Rm9xQpLzT7nVaKs * 0.07 },
          ]}
        >
          <_vW_9tVmQpLxZ7nR3aKs>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.tt_6mQpZtLxV8nR3aKs}>
              {_st_7qPzLxVnT3mA9rKb.title}
            </_tXt_3aKsQpLxVnZ8tRm2>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.dt_9xQmTrL7pZaVnK4s}>
              {_st_7qPzLxVnT3mA9rKb.savedAt}
            </_tXt_3aKsQpLxVnZ8tRm2>
          </_vW_9tVmQpLxZ7nR3aKs>

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.ha_2Rm9xQpLzT7nVaKs}>
            <_tOp_6tVmQpLxZ7nR3aKs
              style={[_h$.ib_6tVmQpLxZ7nR3aKs, _h$.cb_7qPzLxVnT3mA9rKb]}
              onPress={() => _nv_9xQmTrL7pZaVnK4s.goBack()}
            >
              <_iMg_6tVmQpLxZ7nR3aKs
                source={require('../assets/icons/iconamoon_close.png')}
              />
            </_tOp_6tVmQpLxZ7nR3aKs>
          </_vW_9tVmQpLxZ7nR3aKs>
        </_vW_9tVmQpLxZ7nR3aKs>

        <_vW_9tVmQpLxZ7nR3aKs style={_h$.hr_4pLxQnZ8tVmR2aKs}>
          {_st_7qPzLxVnT3mA9rKb.walkers.map(
            (_w_6mQpZtLxV8nR3aKs, _ix_9xQmTrL7pZaVnK4s) => (
              <_vW_9tVmQpLxZ7nR3aKs
                key={_ix_9xQmTrL7pZaVnK4s}
                style={_h$.hc_6mQpZtLxV8nR3aKs}
              >
                <_iMg_6tVmQpLxZ7nR3aKs
                  source={
                    _w_6mQpZtLxV8nR3aKs.image
                      ? { uri: _w_6mQpZtLxV8nR3aKs.image }
                      : require('../assets/images/placeholder.png')
                  }
                  style={_h$.hi_7qPzLxVnT3mA9rKb}
                />
                <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.hn_9xQmTrL7pZaVnK4s}>
                  {_w_6mQpZtLxV8nR3aKs.name}
                </_tXt_3aKsQpLxVnZ8tRm2>

                {_w_6mQpZtLxV8nR3aKs.epithet && (
                  <_vW_9tVmQpLxZ7nR3aKs style={_h$.eb_2Rm9xQpLzT7nVaKs}>
                    <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.et_6tVmQpLxZ7nR3aKs}>
                      {_w_6mQpZtLxV8nR3aKs.epithet}
                    </_tXt_3aKsQpLxVnZ8tRm2>
                  </_vW_9tVmQpLxZ7nR3aKs>
                )}
              </_vW_9tVmQpLxZ7nR3aKs>
            ),
          )}
        </_vW_9tVmQpLxZ7nR3aKs>

        <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.st_9xQmTrL7pZaVnK4s}>
          {_st_7qPzLxVnT3mA9rKb.story}
        </_tXt_3aKsQpLxVnZ8tRm2>
      </_sCv_9xQmTrL7pZaVnK4s>

      <_tOp_6tVmQpLxZ7nR3aKs
        style={_h$.bb_7nR3aKsQpLxV8tZm}
        onPress={_sh_4pLxQnZ8tVmR2aKs}
      >
        <_iMg_6tVmQpLxZ7nR3aKs
          source={require('../assets/icons/mdi_share.png')}
        />
      </_tOp_6tVmQpLxZ7nR3aKs>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  hd_7qPzLxVnT3mA9rKb: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  tt_6mQpZtLxV8nR3aKs: { color: '#FFB907', fontSize: 22, fontWeight: '700' },
  dt_9xQmTrL7pZaVnK4s: { color: '#FFFFFF80', fontSize: 12, marginTop: 4 },

  ha_2Rm9xQpLzT7nVaKs: { flexDirection: 'row', gap: 12 },
  ib_6tVmQpLxZ7nR3aKs: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cb_7qPzLxVnT3mA9rKb: { backgroundColor: '#251F21' },

  hr_4pLxQnZ8tVmR2aKs: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginVertical: 28,
    paddingHorizontal: 16,
  },
  hc_6mQpZtLxV8nR3aKs: {
    backgroundColor: '#2B2B2B',
    borderRadius: 18,
    padding: 16,
    alignItems: 'center',
    width: 160,
  },
  hi_7qPzLxVnT3mA9rKb: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 10,
  },
  hn_9xQmTrL7pZaVnK4s: { color: '#FFFFFF', fontSize: 16, fontWeight: '500' },

  eb_2Rm9xQpLzT7nVaKs: {
    backgroundColor: '#FF940080',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 6,
  },
  et_6tVmQpLxZ7nR3aKs: { color: '#FFFFFF', fontSize: 12 },

  st_9xQmTrL7pZaVnK4s: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 22,
    paddingHorizontal: 16,
  },

  bb_7nR3aKsQpLxV8tZm: {
    position: 'absolute',
    right: 16,
    bottom: 54,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LegendforgeDetailsScreen;
