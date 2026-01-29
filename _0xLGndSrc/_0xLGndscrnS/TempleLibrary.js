import { useNavigation as _uNV_9xQmTrL7pZaVnK4s } from '@react-navigation/native';
import React from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  TouchableOpacity as _tOp_7nR3aKsQpLxV8tZm,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  useWindowDimensions as _uWD_2Rm9xQpLzT7nVaKs,
} from 'react-native';
import { libraryStories as _lSt_6mQpZtLxV8nR3aKs } from '../_0xLGndtA/libraryStories';

const _bg_6tVmQpLxZ7nR3aKs = require('../assets/images/main_background.png');

const TempleLibrary = () => {
  const { height: _ht_6mQpZtLxV8nR3aKs } = _uWD_2Rm9xQpLzT7nVaKs();
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();

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
            source={require('../assets/images/lib_title.png')}
            style={{
              alignSelf: 'center',
              marginBottom: _ht_6mQpZtLxV8nR3aKs * 0.024,
            }}
          />

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.cW_9xQmTrL7pZaVnK4s}>
            {_lSt_6mQpZtLxV8nR3aKs.map(_it_2Rm9xQpLzT7nVaKs => (
              <_tOp_7nR3aKsQpLxV8tZm
                key={_it_2Rm9xQpLzT7nVaKs.id}
                style={_h$.cr_7qPzLxVnT3mA9rKb}
                activeOpacity={0.8}
                onPress={() =>
                  _nv_9xQmTrL7pZaVnK4s.navigate('StoryDetailsScreen', {
                    story: _it_2Rm9xQpLzT7nVaKs,
                  })
                }
              >
                <_iMg_6tVmQpLxZ7nR3aKs
                  source={_it_2Rm9xQpLzT7nVaKs.image}
                  style={_h$.im_6mQpZtLxV8nR3aKs}
                />
                <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.cT_9tVmQpLxZ7nR3aKs}>
                  {_it_2Rm9xQpLzT7nVaKs.title}
                </_tXt_3aKsQpLxVnZ8tRm2>
              </_tOp_7nR3aKsQpLxV8tZm>
            ))}
          </_vW_9tVmQpLxZ7nR3aKs>
        </_vW_9tVmQpLxZ7nR3aKs>
      </_sCv_9xQmTrL7pZaVnK4s>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  ct_6mQpZtLxV8nR3aKs: { padding: 16, paddingBottom: 100 },

  tt_7nR3aKsQpLxV8tZm: {
    color: '#FFB907',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },

  cW_9xQmTrL7pZaVnK4s: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cr_7qPzLxVnT3mA9rKb: {
    width: '48%',
    backgroundColor: '#2B2B2B',
    borderRadius: 16,
    marginBottom: 12,
    padding: 12,
  },
  im_6mQpZtLxV8nR3aKs: { width: '100%', height: 180, borderRadius: 16 },
  cT_9tVmQpLxZ7nR3aKs: {
    color: '#FFFFFF',
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default TempleLibrary;
