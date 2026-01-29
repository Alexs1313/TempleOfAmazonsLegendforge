import React, {
  useEffect as _uEF_5nR3aKsQpLxV8tZm,
  useState as _uST_6mQpZtLxV8nR3aKs,
} from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  TextInput as _tIp_7nR3aKsQpLxV8tZm,
  TouchableOpacity as _tOp_6tVmQpLxZ7nR3aKs,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Alert as _aLt_1VaKsQpLxT7nR9mZ2,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation as _uNV_9xQmTrL7pZaVnK4s } from '@react-navigation/native';
import { useAmazonsStore } from '../_0xLGndstr/amazonsCntxt';
import Toast from 'react-native-toast-message';

const _bG_7qPzLxVnT3mA9rKb = ['#FF9400', '#FAD51D'];
const _mW_6mQpZtLxV8nR3aKs = '#FFFFFF';
const _mX_9xQmTrL7pZaVnK4s = 3;
const _bg_6tVmQpLxZ7nR3aKs = require('../assets/images/main_background.png');

const CreateStoryScreen = () => {
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const [_chs_6mQpZtLxV8nR3aKs, _sChs_7qPzLxVnT3mA9rKb] = _uST_6mQpZtLxV8nR3aKs(
    [],
  );
  const [_wks_9tVmQpLxZ7nR3aKs, _sWks_4pLxQnZ8tVmR2aKs] = _uST_6mQpZtLxV8nR3aKs(
    [{ id: 'default', type: 'custom', name: '', image: null }],
  );
  const [_ttl_2Rm9xQpLzT7nVaKs, _sTtl_6tVmQpLxZ7nR3aKs] =
    _uST_6mQpZtLxV8nR3aKs('');
  const [_sty_9xQmTrL7pZaVnK4s, _sSty_7nR3aKsQpLxV8tZm] =
    _uST_6mQpZtLxV8nR3aKs('');
  const [_drt_6mQpZtLxV8nR3aKs, _sDrt_7qPzLxVnT3mA9rKb] =
    _uST_6mQpZtLxV8nR3aKs(false);
  const [_ddx_4pLxQnZ8tVmR2aKs, _sDdx_2Rm9xQpLzT7nVaKs] =
    _uST_6mQpZtLxV8nR3aKs(null);

  const { legendforgeNotificationsEnabled: _nE_2Rm9xQpLzT7nVaKs } =
    useAmazonsStore();

  _uEF_5nR3aKsQpLxV8tZm(() => {
    const _ld_7qPzLxVnT3mA9rKb = async () => {
      try {
        const _sv_6mQpZtLxV8nR3aKs = await AsyncStorage.getItem('characters');
        const _ps_9tVmQpLxZ7nR3aKs = _sv_6mQpZtLxV8nR3aKs
          ? JSON.parse(_sv_6mQpZtLxV8nR3aKs)
          : [];
        _sChs_7qPzLxVnT3mA9rKb(_ps_9tVmQpLxZ7nR3aKs);
      } catch (_e_1VaKsQpLxT7nR9mZ2) {
        console.error('Failed get characters:', _e_1VaKsQpLxT7nR9mZ2);
      }
    };
    _ld_7qPzLxVnT3mA9rKb();
  }, []);

  const _fd_6tVmQpLxZ7nR3aKs = () => {
    const _op_7nR3aKsQpLxV8tZm = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    return new Date().toLocaleDateString('en-GB', _op_7nR3aKsQpLxV8tZm);
  };

  const _cs_9xQmTrL7pZaVnK4s =
    _ttl_2Rm9xQpLzT7nVaKs.trim() &&
    _sty_9xQmTrL7pZaVnK4s.trim() &&
    _wks_9tVmQpLxZ7nR3aKs.some(_w_6mQpZtLxV8nR3aKs =>
      _w_6mQpZtLxV8nR3aKs.name.trim(),
    );

  const _aw_4pLxQnZ8tVmR2aKs = () => {
    if (_wks_9tVmQpLxZ7nR3aKs.length >= _mX_9xQmTrL7pZaVnK4s) return;

    _sDrt_7qPzLxVnT3mA9rKb(true);
    _sWks_4pLxQnZ8tVmR2aKs(_p_7qPzLxVnT3mA9rKb => [
      ..._p_7qPzLxVnT3mA9rKb,
      { id: Date.now().toString(), type: 'custom', name: '', image: null },
    ]);
  };

  const _uw_6mQpZtLxV8nR3aKs = (_id_9tVmQpLxZ7nR3aKs, _nm_2Rm9xQpLzT7nVaKs) => {
    _sDrt_7qPzLxVnT3mA9rKb(true);
    _sWks_4pLxQnZ8tVmR2aKs(_p_7qPzLxVnT3mA9rKb =>
      _p_7qPzLxVnT3mA9rKb.map(_w_9xQmTrL7pZaVnK4s =>
        _w_9xQmTrL7pZaVnK4s.id === _id_9tVmQpLxZ7nR3aKs
          ? {
              ..._w_9xQmTrL7pZaVnK4s,
              name: _nm_2Rm9xQpLzT7nVaKs,
              type: 'custom',
              image: null,
            }
          : _w_9xQmTrL7pZaVnK4s,
      ),
    );
  };

  const _sc_7nR3aKsQpLxV8tZm = (_ix_4pLxQnZ8tVmR2aKs, _ch_6tVmQpLxZ7nR3aKs) => {
    _sDrt_7qPzLxVnT3mA9rKb(true);
    _sWks_4pLxQnZ8tVmR2aKs(_p_7qPzLxVnT3mA9rKb =>
      _p_7qPzLxVnT3mA9rKb.map((_w_9xQmTrL7pZaVnK4s, _i_2Rm9xQpLzT7nVaKs) =>
        _i_2Rm9xQpLzT7nVaKs === _ix_4pLxQnZ8tVmR2aKs
          ? {
              id: _ch_6tVmQpLxZ7nR3aKs.id,
              type: 'character',
              name: _ch_6tVmQpLxZ7nR3aKs.name,
              image: _ch_6tVmQpLxZ7nR3aKs.image || null,
            }
          : _w_9xQmTrL7pZaVnK4s,
      ),
    );
    _sDdx_2Rm9xQpLzT7nVaKs(null);
  };

  const _rw_9xQmTrL7pZaVnK4s = _id_6mQpZtLxV8nR3aKs => {
    _sDrt_7qPzLxVnT3mA9rKb(true);
    _sWks_4pLxQnZ8tVmR2aKs(_p_7qPzLxVnT3mA9rKb =>
      _p_7qPzLxVnT3mA9rKb.filter(
        _w_2Rm9xQpLzT7nVaKs => _w_2Rm9xQpLzT7nVaKs.id !== _id_6mQpZtLxV8nR3aKs,
      ),
    );
  };

  const _sv_7qPzLxVnT3mA9rKb = async () => {
    try {
      const _sd_6mQpZtLxV8nR3aKs = {
        id: Date.now().toString(),
        title: _ttl_2Rm9xQpLzT7nVaKs,
        story: _sty_9xQmTrL7pZaVnK4s,
        savedAt: _fd_6tVmQpLxZ7nR3aKs(),
        walkers: _wks_9tVmQpLxZ7nR3aKs.map(_w_6mQpZtLxV8nR3aKs => ({
          id: _w_6mQpZtLxV8nR3aKs.id,
          name: _w_6mQpZtLxV8nR3aKs.name,
          image: _w_6mQpZtLxV8nR3aKs.image || null,
          epithet: _w_6mQpZtLxV8nR3aKs.epithet || null,
        })),
      };

      const _st_9xQmTrL7pZaVnK4s = await AsyncStorage.getItem('stories');
      const _ls_2Rm9xQpLzT7nVaKs = _st_9xQmTrL7pZaVnK4s
        ? JSON.parse(_st_9xQmTrL7pZaVnK4s)
        : [];
      const _up_6tVmQpLxZ7nR3aKs = [
        ..._ls_2Rm9xQpLzT7nVaKs,
        _sd_6mQpZtLxV8nR3aKs,
      ];

      await AsyncStorage.setItem(
        'stories',
        JSON.stringify(_up_6tVmQpLxZ7nR3aKs),
      );
      _sDrt_7qPzLxVnT3mA9rKb(false);

      _nE_2Rm9xQpLzT7nVaKs &&
        Toast.show({
          text1: 'Story saved!',
        });

      _nv_9xQmTrL7pZaVnK4s.goBack();
    } catch (_e_1VaKsQpLxT7nR9mZ2) {
      console.error('Failed to save story ==>', _e_1VaKsQpLxT7nR9mZ2);
    }
  };

  const _ex_4pLxQnZ8tVmR2aKs = () => {
    if (!_drt_6mQpZtLxV8nR3aKs) return _nv_9xQmTrL7pZaVnK4s.goBack();

    _aLt_1VaKsQpLxT7nR9mZ2.alert(
      'Story Creation Incomplete',
      'You haven’t finished creating your story yet. Are you sure you want to exit? All progress will be lost',
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

  return (
    <_iBg_4pLxQnZ8tVmR2aKs source={_bg_6tVmQpLxZ7nR3aKs} style={{ flex: 1 }}>
      <_sCv_9xQmTrL7pZaVnK4s
        contentContainerStyle={{ paddingBottom: 40, flexGrow: 1 }}
      >
        <_vW_9tVmQpLxZ7nR3aKs style={_h$.hd_7qPzLxVnT3mA9rKb}>
          <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.tt_6mQpZtLxV8nR3aKs}>
            Open a New Path
          </_tXt_3aKsQpLxVnZ8tRm2>
          <_tOp_6tVmQpLxZ7nR3aKs
            style={_h$.cl_9xQmTrL7pZaVnK4s}
            onPress={_ex_4pLxQnZ8tVmR2aKs}
            activeOpacity={0.7}
          >
            <_iMg_6tVmQpLxZ7nR3aKs
              source={require('../assets/icons/iconamoon_close.png')}
            />
          </_tOp_6tVmQpLxZ7nR3aKs>
        </_vW_9tVmQpLxZ7nR3aKs>

        <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.lb_2Rm9xQpLzT7nVaKs}>
          Who will walk this road?
        </_tXt_3aKsQpLxVnZ8tRm2>

        {_wks_9tVmQpLxZ7nR3aKs.map(
          (_w_6mQpZtLxV8nR3aKs, _ix_4pLxQnZ8tVmR2aKs) => (
            <_vW_9tVmQpLxZ7nR3aKs key={_w_6mQpZtLxV8nR3aKs.id}>
              <_vW_9tVmQpLxZ7nR3aKs style={_h$.ib_7nR3aKsQpLxV8tZm}>
                <_vW_9tVmQpLxZ7nR3aKs style={_h$.sl_6tVmQpLxZ7nR3aKs}>
                  <_tIp_7nR3aKsQpLxV8tZm
                    value={_w_6mQpZtLxV8nR3aKs.name}
                    onChangeText={_v_9xQmTrL7pZaVnK4s =>
                      _uw_6mQpZtLxV8nR3aKs(
                        _w_6mQpZtLxV8nR3aKs.id,
                        _v_9xQmTrL7pZaVnK4s,
                      )
                    }
                    placeholder="Enter a name"
                    placeholderTextColor="#FFFFFF80"
                    style={_h$.si_2Rm9xQpLzT7nVaKs}
                  />

                  {_chs_6mQpZtLxV8nR3aKs.length > 0 && (
                    <_tOp_6tVmQpLxZ7nR3aKs
                      style={_h$.ar_9xQmTrL7pZaVnK4s}
                      onPress={() =>
                        _sDdx_2Rm9xQpLzT7nVaKs(
                          _ddx_4pLxQnZ8tVmR2aKs === _ix_4pLxQnZ8tVmR2aKs
                            ? null
                            : _ix_4pLxQnZ8tVmR2aKs,
                        )
                      }
                    >
                      <_iMg_6tVmQpLxZ7nR3aKs
                        source={require('../assets/icons/arrow_down.png')}
                      />
                    </_tOp_6tVmQpLxZ7nR3aKs>
                  )}
                </_vW_9tVmQpLxZ7nR3aKs>

                {_ix_4pLxQnZ8tVmR2aKs > 0 && (
                  <_tOp_6tVmQpLxZ7nR3aKs
                    style={_h$.rm_7qPzLxVnT3mA9rKb}
                    onPress={() => _rw_9xQmTrL7pZaVnK4s(_w_6mQpZtLxV8nR3aKs.id)}
                  >
                    <_iMg_6tVmQpLxZ7nR3aKs
                      source={require('../assets/icons/mdi_bin.png')}
                    />
                  </_tOp_6tVmQpLxZ7nR3aKs>
                )}
              </_vW_9tVmQpLxZ7nR3aKs>

              {_ddx_4pLxQnZ8tVmR2aKs === _ix_4pLxQnZ8tVmR2aKs && (
                <_vW_9tVmQpLxZ7nR3aKs style={_h$.dd_6mQpZtLxV8nR3aKs}>
                  {_chs_6mQpZtLxV8nR3aKs.map(_c_2Rm9xQpLzT7nVaKs => (
                    <_tOp_6tVmQpLxZ7nR3aKs
                      key={_c_2Rm9xQpLzT7nVaKs.id}
                      style={_h$.di_9xQmTrL7pZaVnK4s}
                      onPress={() =>
                        _sc_7nR3aKsQpLxV8tZm(
                          _ix_4pLxQnZ8tVmR2aKs,
                          _c_2Rm9xQpLzT7nVaKs,
                        )
                      }
                    >
                      <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.dt_2Rm9xQpLzT7nVaKs}>
                        {_c_2Rm9xQpLzT7nVaKs.name}
                      </_tXt_3aKsQpLxVnZ8tRm2>
                    </_tOp_6tVmQpLxZ7nR3aKs>
                  ))}
                </_vW_9tVmQpLxZ7nR3aKs>
              )}
            </_vW_9tVmQpLxZ7nR3aKs>
          ),
        )}

        {_wks_9tVmQpLxZ7nR3aKs.length < _mX_9xQmTrL7pZaVnK4s && (
          <_tOp_6tVmQpLxZ7nR3aKs
            style={_h$.pl_4pLxQnZ8tVmR2aKs}
            onPress={_aw_4pLxQnZ8tVmR2aKs}
          >
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.pt_6mQpZtLxV8nR3aKs}>
              +
            </_tXt_3aKsQpLxVnZ8tRm2>
          </_tOp_6tVmQpLxZ7nR3aKs>
        )}

        <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.lb_2Rm9xQpLzT7nVaKs}>
          Title
        </_tXt_3aKsQpLxVnZ8tRm2>
        <_tIp_7nR3aKsQpLxV8tZm
          value={_ttl_2Rm9xQpLzT7nVaKs}
          onChangeText={_v_9xQmTrL7pZaVnK4s => {
            _sDrt_7qPzLxVnT3mA9rKb(true);
            _sTtl_6tVmQpLxZ7nR3aKs(_v_9xQmTrL7pZaVnK4s);
          }}
          style={_h$.ip_9xQmTrL7pZaVnK4s}
        />

        <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.lb_2Rm9xQpLzT7nVaKs}>
          Story Text
        </_tXt_3aKsQpLxVnZ8tRm2>
        <_tIp_7nR3aKsQpLxV8tZm
          value={_sty_9xQmTrL7pZaVnK4s}
          onChangeText={_v_9xQmTrL7pZaVnK4s => {
            _sDrt_7qPzLxVnT3mA9rKb(true);
            _sSty_7nR3aKsQpLxV8tZm(_v_9xQmTrL7pZaVnK4s);
          }}
          style={[_h$.ip_9xQmTrL7pZaVnK4s, _h$.ta_7qPzLxVnT3mA9rKb]}
          multiline
        />

        <_tOp_6tVmQpLxZ7nR3aKs
          disabled={!_cs_9xQmTrL7pZaVnK4s}
          onPress={_sv_7qPzLxVnT3mA9rKb}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={
              _cs_9xQmTrL7pZaVnK4s ? _bG_7qPzLxVnT3mA9rKb : ['#444', '#444']
            }
            style={_h$.sb_6mQpZtLxV8nR3aKs}
          >
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.st_9xQmTrL7pZaVnK4s}>
              Save
            </_tXt_3aKsQpLxVnZ8tRm2>
          </LinearGradient>
        </_tOp_6tVmQpLxZ7nR3aKs>
      </_sCv_9xQmTrL7pZaVnK4s>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  hd_7qPzLxVnT3mA9rKb: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tt_6mQpZtLxV8nR3aKs: { color: '#FFB907', fontSize: 22, fontWeight: '700' },
  cl_9xQmTrL7pZaVnK4s: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#251F21',
    justifyContent: 'center',
    alignItems: 'center',
  },

  lb_2Rm9xQpLzT7nVaKs: {
    color: _mW_6mQpZtLxV8nR3aKs,
    marginTop: 24,
    marginBottom: 6,
    paddingHorizontal: 16,
  },

  ib_7nR3aKsQpLxV8tZm: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  sl_6tVmQpLxZ7nR3aKs: {
    backgroundColor: '#1F1B1D',
    borderRadius: 14,
    padding: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  si_2Rm9xQpLzT7nVaKs: { color: _mW_6mQpZtLxV8nR3aKs, fontSize: 16, flex: 1 },

  ar_9xQmTrL7pZaVnK4s: {
    borderRadius: 16,
    backgroundColor: '#FF9400',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rm_7qPzLxVnT3mA9rKb: {
    backgroundColor: '#FF383C',
    width: 40,
    height: 40,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  dd_6mQpZtLxV8nR3aKs: {
    marginHorizontal: 16,
    backgroundColor: '#1F1B1D',
    borderRadius: 14,
    marginBottom: 8,
    top: -5,
  },
  di_9xQmTrL7pZaVnK4s: { padding: 14 },
  dt_2Rm9xQpLzT7nVaKs: { color: _mW_6mQpZtLxV8nR3aKs },

  pl_4pLxQnZ8tVmR2aKs: {
    alignSelf: 'center',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  pt_6mQpZtLxV8nR3aKs: { color: _mW_6mQpZtLxV8nR3aKs, fontSize: 24 },

  ip_9xQmTrL7pZaVnK4s: {
    marginHorizontal: 16,
    backgroundColor: '#1F1B1D',
    borderRadius: 14,
    padding: 16,
    color: _mW_6mQpZtLxV8nR3aKs,
  },
  ta_7qPzLxVnT3mA9rKb: { height: 160, textAlignVertical: 'top' },

  sb_6mQpZtLxV8nR3aKs: {
    height: 56,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 32,
  },
  st_9xQmTrL7pZaVnK4s: {
    color: _mW_6mQpZtLxV8nR3aKs,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CreateStoryScreen;
