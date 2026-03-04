// Create Character Identity Step

import GradientButton from './GradientButton';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const LegendforgeTempleFields = [
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
    <View style={[styles.templeLegendBlock, { padding: blockPad }]}>
      {LegendforgeTempleFields.map(
        ([LegendforgeTempleLabel, LegendforgeTempleKey]) => (
          <View
            key={LegendforgeTempleKey}
            style={[
              styles.templeLegendField,
              { marginBottom: fieldMarginBottom },
            ]}
          >
            <Text
              style={[
                styles.templeLegendLabel,
                { fontSize: labelFontSize, marginBottom: labelMarginBottom },
              ]}
            >
              {LegendforgeTempleLabel}
            </Text>
            <View
              style={[
                styles.templeLegendInputWrap,
                {
                  borderRadius: inputWrapRadius,
                  paddingHorizontal: inputPadH,
                },
              ]}
            >
              <TextInput
                value={character[LegendforgeTempleKey]}
                onChangeText={LegendforgeTempleValue =>
                  setField(LegendforgeTempleKey, LegendforgeTempleValue)
                }
                style={[
                  styles.templeLegendInput,
                  { fontSize: inputFontSize, paddingVertical: inputPadV },
                ]}
                maxLength={30}
              />
              <TouchableOpacity
                style={[
                  styles.templeLegendShuffle,
                  {
                    width: shuffleSize,
                    height: shuffleSize,
                    borderRadius: shuffleRadius,
                  },
                ]}
                onPress={() => onShuffle(LegendforgeTempleKey)}
              >
                <Image source={require('../assets/icons/shuffle.png')} />
              </TouchableOpacity>
            </View>
          </View>
        ),
      )}

      <View
        style={[styles.templeLegendFooter, { marginBottom: blockMarginBottom }]}
      >
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
  templeLegendBlock: { flex: 1 },
  templeLegendField: {},
  templeLegendLabel: { color: '#fff', fontWeight: '400' },
  templeLegendInputWrap: {
    flexDirection: 'row',
    backgroundColor: '#1F1B1D',
    alignItems: 'center',
  },
  templeLegendInput: { flex: 1, color: '#fff' },
  templeLegendShuffle: {
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendFooter: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
