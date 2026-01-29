import React from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  TouchableOpacity as _tOp_7nR3aKsQpLxV8tZm,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  useWindowDimensions as _uWD_1VaKsQpLxT7nR9mZ2,
  Share as _sHr_2Rm9xQpLzT7nVaKs,
} from 'react-native';
import {
  useNavigation as _uNV_9xQmTrL7pZaVnK4s,
  useRoute as _uRT_7qPzLxVnT3mA9rKb,
} from '@react-navigation/native';

const _bG_6tVmQpLxZ7nR3aKs = require('../assets/images/main_background.png');

const CharacterDetailsScreen = () => {
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const _rt_4pLxQnZ8tVmR2aKs = _uRT_7qPzLxVnT3mA9rKb();
  const { height: _h_6mQpZtLxV8nR3aKs } = _uWD_1VaKsQpLxT7nR9mZ2();
  const { character: _ch_2Rm9xQpLzT7nVaKs } = _rt_4pLxQnZ8tVmR2aKs.params;

  const _fm_7nR3aKsQpLxV8tZm = () => {
    return [
      'Character Details:',
      `Name: ${_ch_2Rm9xQpLzT7nVaKs.name}`,
      `Epithet: ${_ch_2Rm9xQpLzT7nVaKs.epithet}`,
      `Homeland: ${_ch_2Rm9xQpLzT7nVaKs.homeland}`,
      `Tribe: ${_ch_2Rm9xQpLzT7nVaKs.tribe}`,
      `Voice: ${_ch_2Rm9xQpLzT7nVaKs.voice}`,
      `Destiny Thread: ${_ch_2Rm9xQpLzT7nVaKs.destiny}`,
    ].join('\n');
  };

  const _sh_4pLxQnZ8tVmR2aKs = () => {
    const _ms_6mQpZtLxV8nR3aKs = _fm_7nR3aKsQpLxV8tZm();
    _sHr_2Rm9xQpLzT7nVaKs.share({ message: _ms_6mQpZtLxV8nR3aKs });
  };

  const _0xAs_9tVmQpLxZ7nR3aKs = ({
    title: _tt_6mQpZtLxV8nR3aKs,
    children: _chd_7qPzLxVnT3mA9rKb,
  }) => (
    <_vW_9tVmQpLxZ7nR3aKs style={_h$.sC_6mQpZtLxV8nR3aKs}>
      <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.sT_7qPzLxVnT3mA9rKb}>
        {_tt_6mQpZtLxV8nR3aKs}
      </_tXt_3aKsQpLxVnZ8tRm2>
      {_chd_7qPzLxVnT3mA9rKb}
    </_vW_9tVmQpLxZ7nR3aKs>
  );

  const _0xTf_4pLxQnZ8tVmR2aKs = ({
    label: _lb_9xQmTrL7pZaVnK4s,
    value: _vl_2Rm9xQpLzT7nVaKs,
  }) => (
    <_vW_9tVmQpLxZ7nR3aKs style={_h$.fW_6tVmQpLxZ7nR3aKs}>
      <_vW_9tVmQpLxZ7nR3aKs style={_h$.fB_4pLxQnZ8tVmR2aKs}>
        <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.fL_9tVmQpLxZ7nR3aKs}>
          {_lb_9xQmTrL7pZaVnK4s}
        </_tXt_3aKsQpLxVnZ8tRm2>
        <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.fV_7nR3aKsQpLxV8tZm}>
          {_vl_2Rm9xQpLzT7nVaKs}
        </_tXt_3aKsQpLxVnZ8tRm2>
      </_vW_9tVmQpLxZ7nR3aKs>
    </_vW_9tVmQpLxZ7nR3aKs>
  );

  return (
    <_iBg_4pLxQnZ8tVmR2aKs source={_bG_6tVmQpLxZ7nR3aKs} style={{ flex: 1 }}>
      <_sCv_9xQmTrL7pZaVnK4s
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <_vW_9tVmQpLxZ7nR3aKs
          style={[
            _h$.ct_8tVmQpLxZ7nR3aKs,
            { paddingTop: _h_6mQpZtLxV8nR3aKs * 0.07, paddingBottom: 40 },
          ]}
        >
          <_vW_9tVmQpLxZ7nR3aKs style={_h$.tH_7qPzLxVnT3mA9rKb}>
            <_vW_9tVmQpLxZ7nR3aKs>
              <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.tN_6mQpZtLxV8nR3aKs}>
                {_ch_2Rm9xQpLzT7nVaKs.name}
              </_tXt_3aKsQpLxVnZ8tRm2>
              <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.tD_9xQmTrL7pZaVnK4s}>
                {_ch_2Rm9xQpLzT7nVaKs.savedAt}
              </_tXt_3aKsQpLxVnZ8tRm2>
            </_vW_9tVmQpLxZ7nR3aKs>

            <_vW_9tVmQpLxZ7nR3aKs style={{ flexDirection: 'row' }}>
              <_tOp_7nR3aKsQpLxV8tZm
                activeOpacity={0.7}
                style={[_h$.iB_2Rm9xQpLzT7nVaKs, { marginLeft: 8 }]}
                onPress={() => _nv_9xQmTrL7pZaVnK4s.goBack()}
              >
                <_iMg_6tVmQpLxZ7nR3aKs
                  source={require('../assets/icons/iconamoon_close.png')}
                />
              </_tOp_7nR3aKsQpLxV8tZm>
            </_vW_9tVmQpLxZ7nR3aKs>
          </_vW_9tVmQpLxZ7nR3aKs>

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.iW_6mQpZtLxV8nR3aKs}>
            <_iMg_6tVmQpLxZ7nR3aKs
              source={
                _ch_2Rm9xQpLzT7nVaKs.image
                  ? { uri: _ch_2Rm9xQpLzT7nVaKs.image }
                  : require('../assets/images/placeholder.png')
              }
              style={_h$.pI_4pLxQnZ8tVmR2aKs}
            />
          </_vW_9tVmQpLxZ7nR3aKs>

          <_0xAs_9tVmQpLxZ7nR3aKs title="Identity">
            <_0xTf_4pLxQnZ8tVmR2aKs
              label="Name"
              value={_ch_2Rm9xQpLzT7nVaKs.name}
            />
            <_0xTf_4pLxQnZ8tVmR2aKs
              label="Epithet (Title)"
              value={_ch_2Rm9xQpLzT7nVaKs.epithet}
            />
            <_0xTf_4pLxQnZ8tVmR2aKs
              label="Homeland"
              value={_ch_2Rm9xQpLzT7nVaKs.homeland}
            />
            <_0xTf_4pLxQnZ8tVmR2aKs
              label="Tribe / Order"
              value={_ch_2Rm9xQpLzT7nVaKs.tribe}
            />
          </_0xAs_9tVmQpLxZ7nR3aKs>

          <_0xAs_9tVmQpLxZ7nR3aKs title="Voice & Destiny">
            <_0xTf_4pLxQnZ8tVmR2aKs
              label="Voice"
              value={_ch_2Rm9xQpLzT7nVaKs.voice}
            />
            <_0xTf_4pLxQnZ8tVmR2aKs
              label="Destiny Thread"
              value={_ch_2Rm9xQpLzT7nVaKs.destiny}
            />
          </_0xAs_9tVmQpLxZ7nR3aKs>
        </_vW_9tVmQpLxZ7nR3aKs>
      </_sCv_9xQmTrL7pZaVnK4s>

      <_tOp_7nR3aKsQpLxV8tZm
        onPress={_sh_4pLxQnZ8tVmR2aKs}
        activeOpacity={0.7}
        style={[
          _h$.iB_2Rm9xQpLzT7nVaKs,
          {
            position: 'absolute',
            bottom: 60,
            right: 16,
            backgroundColor: '#FF9400',
          },
        ]}
      >
        <_iMg_6tVmQpLxZ7nR3aKs
          source={require('../assets/icons/mdi_share.png')}
        />
      </_tOp_7nR3aKsQpLxV8tZm>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  tH_7qPzLxVnT3mA9rKb: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tN_6mQpZtLxV8nR3aKs: { color: '#FFB907', fontSize: 24, fontWeight: '700' },
  tD_9xQmTrL7pZaVnK4s: {
    color: '#FFFFFF',
    marginTop: 2,
    fontSize: 12,
    fontWeight: '500',
  },

  iB_2Rm9xQpLzT7nVaKs: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#251F21',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iW_6mQpZtLxV8nR3aKs: { alignItems: 'center', marginVertical: 24 },
  pI_4pLxQnZ8tVmR2aKs: {
    width: 165,
    height: 165,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  sC_6mQpZtLxV8nR3aKs: { marginTop: 16, paddingHorizontal: 16 },
  sT_7qPzLxVnT3mA9rKb: {
    color: '#FFB907',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },

  fW_6tVmQpLxZ7nR3aKs: { marginBottom: 12 },
  fL_9tVmQpLxZ7nR3aKs: { color: '#FFFFFF80', fontSize: 10, marginBottom: 4 },
  fB_4pLxQnZ8tVmR2aKs: {
    backgroundColor: '#2c2527ff',
    borderRadius: 14,
    padding: 12,
    paddingHorizontal: 24,
  },
  fV_7nR3aKsQpLxV8tZm: { color: '#FFFFFF', fontSize: 18, fontWeight: '500' },

  ct_8tVmQpLxZ7nR3aKs: {},
});

export default CharacterDetailsScreen;
