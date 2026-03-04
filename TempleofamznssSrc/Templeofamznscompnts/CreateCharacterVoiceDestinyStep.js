// Create Character Voice Destiny Step

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import GradientButton from './GradientButton';

const LegendforgeTempleFields = [
  ['Voice (How she speaks)', 'voice'],
  ['Destiny Thread (Story Hook)', 'destiny'],
];

export default function CreateCharacterVoiceDestinyStep({
  character,
  setField,
  onShuffle,
  onPickImage,
  canSave,
  onSave,
  onPrevious,
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
  imageBoxPadV = 26,
  imageBoxRadius = 20,
  imageBoxMarginB = 24,
  imageCircleSize = 165,
  btnHeight = 56,
  btnRadius = 18,
  btnMarginTop = 12,
  btnFontSize = 16,
  footerMarginBottom = 40,
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
              />
              <TouchableOpacity
                activeOpacity={0.7}
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
        style={[
          styles.templeLegendImageBox,
          {
            paddingVertical: imageBoxPadV,
            borderRadius: imageBoxRadius,
            marginBottom: imageBoxMarginB,
          },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.templeLegendImageCircle,
            {
              width: imageCircleSize,
              height: imageCircleSize,
              borderRadius: imageCircleSize / 2,
            },
          ]}
          onPress={onPickImage}
          activeOpacity={0.7}
        >
          {character.image ? (
            <Image
              source={{ uri: character.image }}
              style={styles.templeLegendImage}
            />
          ) : (
            <>
              <Image
                source={require('../assets/icons/solar_gallery-bold.png')}
              />
              <Text style={styles.templeLegendUpload}>Upload</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.templeLegendFooter,
          { marginBottom: footerMarginBottom },
        ]}
      >
        <GradientButton
          label="Save"
          onPress={onSave}
          disabled={!canSave}
          height={btnHeight}
          borderRadius={btnRadius}
          fontSize={btnFontSize}
          style={{ marginTop: btnMarginTop }}
        />
        <TouchableOpacity onPress={onPrevious}>
          <Text style={styles.templeLegendPrev}>Previous</Text>
        </TouchableOpacity>
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
  templeLegendImageBox: {
    backgroundColor: '#1F1B1D',
    alignItems: 'center',
  },
  templeLegendImageCircle: {
    backgroundColor: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  templeLegendImage: { width: '100%', height: '100%' },
  templeLegendUpload: { color: '#fff', marginTop: 6 },
  templeLegendFooter: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  templeLegendPrev: { textAlign: 'center', color: '#FFFFFF80', marginTop: 24 },
});
