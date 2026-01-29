import React from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  TouchableOpacity as _tOp_7nR3aKsQpLxV8tZm,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  Share as _sHr_2Rm9xQpLzT7nVaKs,
} from 'react-native';

const StoryDetailsScreen = ({
  route: _rt_6mQpZtLxV8nR3aKs,
  navigation: _nv_9xQmTrL7pZaVnK4s,
}) => {
  const { story: _st_7qPzLxVnT3mA9rKb } = _rt_6mQpZtLxV8nR3aKs.params;

  const _sh_4pLxQnZ8tVmR2aKs = () => {
    try {
      const _msg_9tVmQpLxZ7nR3aKs = `${_st_7qPzLxVnT3mA9rKb.title}\n\n${_st_7qPzLxVnT3mA9rKb.content}`;
      _sHr_2Rm9xQpLzT7nVaKs.share({ message: _msg_9tVmQpLxZ7nR3aKs });
    } catch (_e_6tVmQpLxZ7nR3aKs) {
      console.error('Error sharing story:', _e_6tVmQpLxZ7nR3aKs);
    }
  };

  return (
    <_vW_9tVmQpLxZ7nR3aKs style={_h$.ct_6mQpZtLxV8nR3aKs}>
      <_iBg_4pLxQnZ8tVmR2aKs
        source={require('../assets/images/main_background.png')}
        style={_h$.cB_7qPzLxVnT3mA9rKb}
      >
        <_sCv_9xQmTrL7pZaVnK4s
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={false}
        >
          <_vW_9tVmQpLxZ7nR3aKs style={_h$.iW_9xQmTrL7pZaVnK4s}>
            <_iMg_6tVmQpLxZ7nR3aKs
              source={_st_7qPzLxVnT3mA9rKb.image}
              style={_h$.im_2Rm9xQpLzT7nVaKs}
            />

            <_vW_9tVmQpLxZ7nR3aKs style={_h$.tB_6tVmQpLxZ7nR3aKs}>
              <_tOp_7nR3aKsQpLxV8tZm
                style={_h$.iB_4pLxQnZ8tVmR2aKs}
                onPress={_sh_4pLxQnZ8tVmR2aKs}
                activeOpacity={0.7}
              >
                <_iMg_6tVmQpLxZ7nR3aKs
                  source={require('../assets/icons/mdi_share.png')}
                />
              </_tOp_7nR3aKsQpLxV8tZm>

              <_tOp_7nR3aKsQpLxV8tZm
                style={[
                  _h$.iB_4pLxQnZ8tVmR2aKs,
                  { backgroundColor: '#251F21' },
                ]}
                onPress={() => _nv_9xQmTrL7pZaVnK4s.goBack()}
                activeOpacity={0.7}
              >
                <_iMg_6tVmQpLxZ7nR3aKs
                  source={require('../assets/icons/iconamoon_close.png')}
                />
              </_tOp_7nR3aKsQpLxV8tZm>
            </_vW_9tVmQpLxZ7nR3aKs>
          </_vW_9tVmQpLxZ7nR3aKs>

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.cC_7nR3aKsQpLxV8tZm}>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.sT_6mQpZtLxV8nR3aKs}>
              {_st_7qPzLxVnT3mA9rKb.title}
            </_tXt_3aKsQpLxVnZ8tRm2>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.sB_9tVmQpLxZ7nR3aKs}>
              {_st_7qPzLxVnT3mA9rKb.content}
            </_tXt_3aKsQpLxVnZ8tRm2>
          </_vW_9tVmQpLxZ7nR3aKs>
        </_sCv_9xQmTrL7pZaVnK4s>
      </_iBg_4pLxQnZ8tVmR2aKs>
    </_vW_9tVmQpLxZ7nR3aKs>
  );
};

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  ct_6mQpZtLxV8nR3aKs: { flex: 1 },
  cB_7qPzLxVnT3mA9rKb: { flex: 1 },

  iW_9xQmTrL7pZaVnK4s: { width: '100%', height: 470 },
  im_2Rm9xQpLzT7nVaKs: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  tB_6tVmQpLxZ7nR3aKs: {
    position: 'absolute',
    top: 50,
    right: 16,
    flexDirection: 'row',
  },
  iB_4pLxQnZ8tVmR2aKs: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  cC_7nR3aKsQpLxV8tZm: { padding: 16, paddingBottom: 30, paddingTop: 24 },
  sT_6mQpZtLxV8nR3aKs: {
    color: '#FFB907',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  sB_9tVmQpLxZ7nR3aKs: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
});

export default StoryDetailsScreen;
