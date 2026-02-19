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
            />
            <TouchableOpacity
              activeOpacity={0.7}
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

      <View
        style={[
          styles.imageBox,
          {
            paddingVertical: imageBoxPadV,
            borderRadius: imageBoxRadius,
            marginBottom: imageBoxMarginB,
          },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.imageCircle,
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
            <Image source={{ uri: character.image }} style={styles.image} />
          ) : (
            <>
              <Image
                source={require('../assets/icons/solar_gallery-bold.png')}
              />
              <Text style={styles.upload}>Upload</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      <View style={[styles.footer, { marginBottom: footerMarginBottom }]}>
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
          <Text style={styles.prev}>Previous</Text>
        </TouchableOpacity>
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
  imageBox: {
    backgroundColor: '#1F1B1D',
    alignItems: 'center',
  },
  imageCircle: {
    backgroundColor: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%' },
  upload: { color: '#fff', marginTop: 6 },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  prev: { textAlign: 'center', color: '#FFFFFF80', marginTop: 24 },
});
