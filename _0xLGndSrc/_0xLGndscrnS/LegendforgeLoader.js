import { useNavigation as _uNV_9xQmTrL7pZaVnK4s } from '@react-navigation/native';
import React, {
  useEffect as _uEF_6mQpZtLxV8nR3aKs,
  useRef as _uRF_7qPzLxVnT3mA9rKb,
} from 'react';
import {
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  View as _vW_9tVmQpLxZ7nR3aKs,
  Animated as _aNm_2Rm9xQpLzT7nVaKs,
  Easing as _eSg_6mQpZtLxV8nR3aKs,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  useWindowDimensions as _uWD_7qPzLxVnT3mA9rKb,
} from 'react-native';

const LegendforgeLoader = () => {
  const _bA_6tVmQpLxZ7nR3aKs = _uRF_7qPzLxVnT3mA9rKb(
    new _aNm_2Rm9xQpLzT7nVaKs.Value(0),
  ).current;
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const { height: _ht_2Rm9xQpLzT7nVaKs } = _uWD_7qPzLxVnT3mA9rKb();

  _uEF_6mQpZtLxV8nR3aKs(() => {
    const _tm_4pLxQnZ8tVmR2aKs = setTimeout(() => {
      _nv_9xQmTrL7pZaVnK4s.navigate('LegendforgeOnboarding');
    }, 5500);

    return () => clearTimeout(_tm_4pLxQnZ8tVmR2aKs);
  }, []);

  _uEF_6mQpZtLxV8nR3aKs(() => {
    const _an_9tVmQpLxZ7nR3aKs = _aNm_2Rm9xQpLzT7nVaKs.loop(
      _aNm_2Rm9xQpLzT7nVaKs.sequence([
        _aNm_2Rm9xQpLzT7nVaKs.timing(_bA_6tVmQpLxZ7nR3aKs, {
          toValue: -160,
          duration: 700,
          easing: _eSg_6mQpZtLxV8nR3aKs.out(_eSg_6mQpZtLxV8nR3aKs.quad),
          useNativeDriver: true,
        }),
        _aNm_2Rm9xQpLzT7nVaKs.timing(_bA_6tVmQpLxZ7nR3aKs, {
          toValue: 0,
          duration: 700,
          easing: _eSg_6mQpZtLxV8nR3aKs.in(_eSg_6mQpZtLxV8nR3aKs.quad),
          useNativeDriver: true,
        }),
      ]),
    );

    _an_9tVmQpLxZ7nR3aKs.start();
    return () => _an_9tVmQpLxZ7nR3aKs.stop();
  }, [_bA_6tVmQpLxZ7nR3aKs]);

  return (
    <_iBg_4pLxQnZ8tVmR2aKs
      source={require('../assets/images/main_background.png')}
      style={_h$.bg_8tVmQpLxZ7nR3aKs}
    >
      <_sCv_9xQmTrL7pZaVnK4s
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <_vW_9tVmQpLxZ7nR3aKs style={_h$.tW_6mQpZtLxV8nR3aKs}>
          <_iMg_6tVmQpLxZ7nR3aKs
            source={require('../assets/images/loader_logo.png')}
            style={[
              _h$.lg_9xQmTrL7pZaVnK4s,
              { marginTop: _ht_2Rm9xQpLzT7nVaKs * 0.1 },
            ]}
          />
        </_vW_9tVmQpLxZ7nR3aKs>

        <_vW_9tVmQpLxZ7nR3aKs style={_h$.bx_7qPzLxVnT3mA9rKb}>
          <_aNm_2Rm9xQpLzT7nVaKs.Image
            source={require('../assets/images/loader_image.png')}
            style={[
              _h$.bk_6tVmQpLxZ7nR3aKs,
              { transform: [{ translateY: _bA_6tVmQpLxZ7nR3aKs }] },
            ]}
            resizeMode="contain"
          />
        </_vW_9tVmQpLxZ7nR3aKs>
      </_sCv_9xQmTrL7pZaVnK4s>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  bg_8tVmQpLxZ7nR3aKs: { flex: 1 },

  tW_6mQpZtLxV8nR3aKs: { alignItems: 'center' },
  lg_9xQmTrL7pZaVnK4s: { marginBottom: 120, width: 358, height: 148 },

  bx_7qPzLxVnT3mA9rKb: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
    gap: 30,
  },

  bk_6tVmQpLxZ7nR3aKs: {},
});

export default LegendforgeLoader;
