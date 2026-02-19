import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const VARIANT_BG = {
  default: '#2B2B2B',
  correct: '#218C00',
  wrong: '#C10004',
};

/**
 * @param {string} letter
 * @param {string} answer
 * @param {'default'|'correct'|'wrong'} variant
 * @param {function} onPress
 * @param {number} padding
 * @param {number} borderRadius
 * @param {number} marginBottom
 * @param {number} labelSize
 * @param {number} labelRadius
 * @param {number} fontSize
 */
export default function QuizAnswerButton({
  letter,
  answer,
  variant = 'default',
  onPress,
  padding = 16,
  borderRadius = 16,
  marginBottom = 12,
  labelSize = 39,
  labelRadius = 20,
  fontSize = 16,
  activeOpacity = 0.85,
}) {
  const backgroundColor = VARIANT_BG[variant] ?? VARIANT_BG.default;

  return (
    <TouchableOpacity
      style={[
        styles.answer,
        {
          backgroundColor,
          padding,
          borderRadius,
          marginBottom,
        },
      ]}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <View style={styles.row}>
        <View
          style={[
            styles.labelContainer,
            {
              width: labelSize,
              height: labelSize,
              borderRadius: labelRadius,
            },
          ]}
        >
          <Text style={[styles.labelText, { fontSize }]}>{letter}</Text>
        </View>
        <Text style={[styles.answerText, { fontSize }]} numberOfLines={2}>
          {answer}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  answer: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContainer: {
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  labelText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  answerText: {
    color: '#FFFFFF',
    fontWeight: '500',
    width: '85%',
  },
});
