import React, { useState as _uST_6mQpZtLxV8nR3aKs } from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  TouchableOpacity as _tOp_7nR3aKsQpLxV8tZm,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Alert as _aLt_4pLxQnZ8tVmR2aKs,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  useWindowDimensions as _uWD_1VaKsQpLxT7nR9mZ2,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { quizQuestions as _qQ_4uN } from '../_0xLGndtA/quizQuestions';

const _gB_6mQpZtLxV8nR3aKs = ['#FF9400', '#FAD51D'];
const _qN_9xQmTrL7pZaVnK4s = 12;
const _pW_2Rm9xQpLzT7nVaKs = '#FFFFFF';
const _bG_6tVmQpLxZ7nR3aKs = require('../assets/images/main_background.png');

const _gRq_7qPzLxVnT3mA9rKb = (_qs_6mQpZtLxV8nR3aKs, _ct_4pLxQnZ8tVmR2aKs) => {
  const _sh_9xQmTrL7pZaVnK4s = [..._qs_6mQpZtLxV8nR3aKs];

  for (
    let _i_2Rm9xQpLzT7nVaKs = _sh_9xQmTrL7pZaVnK4s.length - 1;
    _i_2Rm9xQpLzT7nVaKs > 0;
    _i_2Rm9xQpLzT7nVaKs--
  ) {
    const _rI_6tVmQpLxZ7nR3aKs = Math.floor(
      Math.random() * (_i_2Rm9xQpLzT7nVaKs + 1),
    );
    [
      _sh_9xQmTrL7pZaVnK4s[_i_2Rm9xQpLzT7nVaKs],
      _sh_9xQmTrL7pZaVnK4s[_rI_6tVmQpLxZ7nR3aKs],
    ] = [
      _sh_9xQmTrL7pZaVnK4s[_rI_6tVmQpLxZ7nR3aKs],
      _sh_9xQmTrL7pZaVnK4s[_i_2Rm9xQpLzT7nVaKs],
    ];
  }

  return _sh_9xQmTrL7pZaVnK4s.slice(0, _ct_4pLxQnZ8tVmR2aKs);
};

const AmazonsQuizScreen = () => {
  const { height: _h_4r } = _uWD_1VaKsQpLxT7nR9mZ2();

  const [_qc_6mQpZtLxV8nR3aKs, _sQc_7qPzLxVnT3mA9rKb] =
    _uST_6mQpZtLxV8nR3aKs('intro');
  const [_qs_9xQmTrL7pZaVnK4s, _sQs_2Rm9xQpLzT7nVaKs] = _uST_6mQpZtLxV8nR3aKs(
    [],
  );
  const [_ci_6tVmQpLxZ7nR3aKs, _sCi_4pLxQnZ8tVmR2aKs] =
    _uST_6mQpZtLxV8nR3aKs(0);
  const [_sl_9tVmQpLxZ7nR3aKs, _sSl_1VaKsQpLxT7nR9mZ2] =
    _uST_6mQpZtLxV8nR3aKs(null);
  const [_cc_7nR3aKsQpLxV8tZm, _sCc_6mQpZtLxV8nR3aKs] =
    _uST_6mQpZtLxV8nR3aKs(0);

  const _qq_4pLxQnZ8tVmR2aKs =
    _qs_9xQmTrL7pZaVnK4s[_ci_6tVmQpLxZ7nR3aKs] || null;

  const _rs_7qPzLxVnT3mA9rKb = () => {
    _sQc_7qPzLxVnT3mA9rKb('intro');
    _sQs_2Rm9xQpLzT7nVaKs([]);
    _sCi_4pLxQnZ8tVmR2aKs(0);
    _sSl_1VaKsQpLxT7nR9mZ2(null);
    _sCc_6mQpZtLxV8nR3aKs(0);
  };

  const _sr_9xQmTrL7pZaVnK4s = () => {
    const _ac_6tVmQpLxZ7nR3aKs = Math.round(
      (_cc_7nR3aKsQpLxV8tZm / _qs_9xQmTrL7pZaVnK4s.length) * 100,
    );

    _aLt_4pLxQnZ8tVmR2aKs.alert(
      'The Trial Ends',
      `Correct Answers: ${_cc_7nR3aKsQpLxV8tZm} / ${_qs_9xQmTrL7pZaVnK4s.length}\nAccuracy: ${_ac_6tVmQpLxZ7nR3aKs}%`,
      [{ text: 'Ok', onPress: _rs_7qPzLxVnT3mA9rKb }],
      { cancelable: false },
    );
  };

  const _ap_2Rm9xQpLzT7nVaKs = _ix_6tVmQpLxZ7nR3aKs => {
    if (_sl_9tVmQpLxZ7nR3aKs !== null) return;

    _sSl_1VaKsQpLxT7nR9mZ2(_ix_6tVmQpLxZ7nR3aKs);

    if (_ix_6tVmQpLxZ7nR3aKs === _qq_4pLxQnZ8tVmR2aKs.correctIndex) {
      _sCc_6mQpZtLxV8nR3aKs(_p_9tVmQpLxZ7nR3aKs => _p_9tVmQpLxZ7nR3aKs + 1);
    }

    setTimeout(() => {
      if (_ci_6tVmQpLxZ7nR3aKs === _qs_9xQmTrL7pZaVnK4s.length - 1) {
        _sr_9xQmTrL7pZaVnK4s();
      } else {
        _sCi_4pLxQnZ8tVmR2aKs(_p_9tVmQpLxZ7nR3aKs => _p_9tVmQpLxZ7nR3aKs + 1);
        _sSl_1VaKsQpLxT7nR9mZ2(null);
      }
    }, 1500);
  };

  const _ex_6mQpZtLxV8nR3aKs = () => {
    _aLt_4pLxQnZ8tVmR2aKs.alert(
      'Are you sure you want to leave?',
      'Your journey is not yet complete.\nLeaving now will forfeit your progress.',
      [
        { text: 'Leave', style: 'destructive', onPress: _rs_7qPzLxVnT3mA9rKb },
        { text: 'Stay and Continue', style: 'cancel' },
      ],
    );
  };

  const _as_9xQmTrL7pZaVnK4s = _ix_6tVmQpLxZ7nR3aKs => {
    if (_sl_9tVmQpLxZ7nR3aKs === null) return _h$.aB_7qPzLxVnT3mA9rKb;

    if (_ix_6tVmQpLxZ7nR3aKs === _qq_4pLxQnZ8tVmR2aKs.correctIndex)
      return [_h$.aB_7qPzLxVnT3mA9rKb, _h$.aC_6mQpZtLxV8nR3aKs];
    if (_ix_6tVmQpLxZ7nR3aKs === _sl_9tVmQpLxZ7nR3aKs)
      return [_h$.aB_7qPzLxVnT3mA9rKb, _h$.aW_9xQmTrL7pZaVnK4s];

    return _h$.aB_7qPzLxVnT3mA9rKb;
  };

  if (_qc_6mQpZtLxV8nR3aKs === 'intro') {
    return (
      <_iBg_4pLxQnZ8tVmR2aKs source={_bG_6tVmQpLxZ7nR3aKs} style={{ flex: 1 }}>
        <_sCv_9xQmTrL7pZaVnK4s
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <_vW_9tVmQpLxZ7nR3aKs
            style={[_h$.iC_6mQpZtLxV8nR3aKs, { paddingTop: _h_4r * 0.08 }]}
          >
            <_iMg_6tVmQpLxZ7nR3aKs
              source={require('../assets/images/quiz_title.png')}
              style={{ marginBottom: _h_4r * 0.03 }}
            />
            <_iMg_6tVmQpLxZ7nR3aKs
              source={require('../assets/images/quiz_logo.png')}
            />

            <_vW_9tVmQpLxZ7nR3aKs style={_h$.iB_7qPzLxVnT3mA9rKb}>
              <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.iT_9xQmTrL7pZaVnK4s}>
                Knowledge is a blade that never dulls. Step forward and face the
                myths that shaped gods and warriors.
              </_tXt_3aKsQpLxVnZ8tRm2>

              <_tOp_7nR3aKsQpLxV8tZm
                onPress={() => {
                  _sQs_2Rm9xQpLzT7nVaKs(
                    _gRq_7qPzLxVnT3mA9rKb(_qQ_4uN, _qN_9xQmTrL7pZaVnK4s),
                  );
                  _sQc_7qPzLxVnT3mA9rKb('quiz');
                }}
                activeOpacity={0.8}
                style={{ width: '100%' }}
              >
                <LinearGradient
                  colors={_gB_6mQpZtLxV8nR3aKs}
                  style={_h$.bB_2Rm9xQpLzT7nVaKs}
                >
                  <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.bT_6tVmQpLxZ7nR3aKs}>
                    Begin the Trial
                  </_tXt_3aKsQpLxVnZ8tRm2>
                </LinearGradient>
              </_tOp_7nR3aKsQpLxV8tZm>
            </_vW_9tVmQpLxZ7nR3aKs>
          </_vW_9tVmQpLxZ7nR3aKs>
        </_sCv_9xQmTrL7pZaVnK4s>
      </_iBg_4pLxQnZ8tVmR2aKs>
    );
  }

  return (
    <_iBg_4pLxQnZ8tVmR2aKs source={_bG_6tVmQpLxZ7nR3aKs} style={{ flex: 1 }}>
      <_sCv_9xQmTrL7pZaVnK4s contentContainerStyle={{ flexGrow: 1 }}>
        <_vW_9tVmQpLxZ7nR3aKs
          style={[_h$.qC_7qPzLxVnT3mA9rKb, { paddingTop: _h_4r * 0.08 }]}
        >
          <_vW_9tVmQpLxZ7nR3aKs style={_h$.hR_6mQpZtLxV8nR3aKs}>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.pG_9xQmTrL7pZaVnK4s}>
              Question {_ci_6tVmQpLxZ7nR3aKs + 1} of{' '}
              {_qs_9xQmTrL7pZaVnK4s.length}
            </_tXt_3aKsQpLxVnZ8tRm2>

            <_tOp_7nR3aKsQpLxV8tZm
              onPress={_ex_6mQpZtLxV8nR3aKs}
              style={_h$.xB_4pLxQnZ8tVmR2aKs}
            >
              <_iMg_6tVmQpLxZ7nR3aKs
                source={require('../assets/icons/iconamoon_close.png')}
              />
            </_tOp_7nR3aKsQpLxV8tZm>
          </_vW_9tVmQpLxZ7nR3aKs>

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.qB_6tVmQpLxZ7nR3aKs}>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.qT_2Rm9xQpLzT7nVaKs}>
              {_qq_4pLxQnZ8tVmR2aKs?.question}
            </_tXt_3aKsQpLxVnZ8tRm2>
          </_vW_9tVmQpLxZ7nR3aKs>

          {_qq_4pLxQnZ8tVmR2aKs?.answers.map(
            (_an_9xQmTrL7pZaVnK4s, _ix_6tVmQpLxZ7nR3aKs) => (
              <_tOp_7nR3aKsQpLxV8tZm
                key={_ix_6tVmQpLxZ7nR3aKs}
                style={_as_9xQmTrL7pZaVnK4s(_ix_6tVmQpLxZ7nR3aKs)}
                onPress={() => _ap_2Rm9xQpLzT7nVaKs(_ix_6tVmQpLxZ7nR3aKs)}
                activeOpacity={0.85}
              >
                <_vW_9tVmQpLxZ7nR3aKs
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                  <_vW_9tVmQpLxZ7nR3aKs style={_h$.lW_6mQpZtLxV8nR3aKs}>
                    <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.lT_7qPzLxVnT3mA9rKb}>
                      {String.fromCharCode(65 + _ix_6tVmQpLxZ7nR3aKs)}
                    </_tXt_3aKsQpLxVnZ8tRm2>
                  </_vW_9tVmQpLxZ7nR3aKs>
                  <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.aT_4pLxQnZ8tVmR2aKs}>
                    {_an_9xQmTrL7pZaVnK4s}
                  </_tXt_3aKsQpLxVnZ8tRm2>
                </_vW_9tVmQpLxZ7nR3aKs>
              </_tOp_7nR3aKsQpLxV8tZm>
            ),
          )}
        </_vW_9tVmQpLxZ7nR3aKs>
      </_sCv_9xQmTrL7pZaVnK4s>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  iC_6mQpZtLxV8nR3aKs: { flex: 1, alignItems: 'center', paddingBottom: 120 },
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

  bB_2Rm9xQpLzT7nVaKs: {
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bT_6tVmQpLxZ7nR3aKs: {
    color: _pW_2Rm9xQpLzT7nVaKs,
    fontSize: 16,
    fontWeight: '600',
  },

  qC_7qPzLxVnT3mA9rKb: { flex: 1, paddingBottom: 120, padding: 16 },
  hR_6mQpZtLxV8nR3aKs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  pG_9xQmTrL7pZaVnK4s: { color: '#FFB907', fontSize: 24, fontWeight: '700' },
  xB_4pLxQnZ8tVmR2aKs: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#251F21',
    justifyContent: 'center',
    alignItems: 'center',
  },

  qB_6tVmQpLxZ7nR3aKs: {
    backgroundColor: '#2B2B2B',
    padding: 16,
    borderRadius: 16,
    marginVertical: 24,
  },
  qT_2Rm9xQpLzT7nVaKs: {
    color: _pW_2Rm9xQpLzT7nVaKs,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },

  aB_7qPzLxVnT3mA9rKb: {
    backgroundColor: '#2B2B2B',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  aC_6mQpZtLxV8nR3aKs: { backgroundColor: '#218C00' },
  aW_9xQmTrL7pZaVnK4s: { backgroundColor: '#C10004' },

  lW_6mQpZtLxV8nR3aKs: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  lT_7qPzLxVnT3mA9rKb: {
    color: _pW_2Rm9xQpLzT7nVaKs,
    fontWeight: '500',
    fontSize: 16,
  },
  aT_4pLxQnZ8tVmR2aKs: {
    color: _pW_2Rm9xQpLzT7nVaKs,
    fontSize: 16,
    fontWeight: '500',
    width: '85%',
  },
});

export default AmazonsQuizScreen;
