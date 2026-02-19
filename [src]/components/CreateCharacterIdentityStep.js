import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import GradientButton from './GradientButton';

const FIELDS = [
  ['Name', 'name'],
  ['Epithet (Title)', 'epithet'],
  ['Homeland', 'homeland'],
  ['Tribe / Order', 'tribe'],
];

export default function CreateCharacterIdentityStep({
  character,
  setField,
  onShuffle,
  canNext,
  onNext,
  padding: blockPad = 16,
  fieldMarginBottom = 16,
  labelFontSize = 14,
  labelMarginBottom = 6,
  inputWrapRadius = 14,
  inputPadH = 12,
  inputFontSize = 16,
  inputPadV = 16,
  shuffleSize = 40,
  shuffleRadius = 16,
  btnHeight = 56,
  btnRadius = 18,
  btnMarginTop = 12,
  btnFontSize = 16,
  blockMarginBottom = 24,
}) {
  return (
    <View style={[styles.block, { padding: blockPad }]}>
      {FIELDS.map(([label, key]) => (
        <View
          key={key}
          style={[styles.field, { marginBottom: fieldMarginBottom }]}
        >
          <Text
            style={[
              styles.label,
              { fontSize: labelFontSize, marginBottom: labelMarginBottom },
            ]}
          >
            {label}
          </Text>
          <View
            style={[
              styles.inputWrap,
              {
                borderRadius: inputWrapRadius,
                paddingHorizontal: inputPadH,
              },
            ]}
          >
            <TextInput
              value={character[key]}
              onChangeText={v => setField(key, v)}
              style={[
                styles.input,
                { fontSize: inputFontSize, paddingVertical: inputPadV },
              ]}
              maxLength={30}
            />
            <TouchableOpacity
              style={[
                styles.shuffle,
                {
                  width: shuffleSize,
                  height: shuffleSize,
                  borderRadius: shuffleRadius,
                },
              ]}
              onPress={() => onShuffle(key)}
            >
              <Image source={require('../assets/icons/shuffle.png')} />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={[styles.footer, { marginBottom: blockMarginBottom }]}>
        <GradientButton
          label="Next"
          onPress={onNext}
          disabled={!canNext}
          height={btnHeight}
          borderRadius={btnRadius}
          fontSize={btnFontSize}
          style={{ marginTop: btnMarginTop }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1 },
  field: {},
  label: { color: '#fff', fontWeight: '400' },
  inputWrap: {
    flexDirection: 'row',
    backgroundColor: '#1F1B1D',
    alignItems: 'center',
  },
  input: { flex: 1, color: '#fff' },
  shuffle: {
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
