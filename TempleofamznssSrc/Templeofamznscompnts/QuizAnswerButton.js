// Quiz Answer Button

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import React from 'react';

const LegendforgeTempleVariantBg = {
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
  const LegendforgeTempleBackgroundColor =
    LegendforgeTempleVariantBg[variant] ?? LegendforgeTempleVariantBg.default;

  return (
    <TouchableOpacity
      style={[
        styles.templeLegendAnswer,
        {
          backgroundColor: LegendforgeTempleBackgroundColor,
          padding,
          borderRadius,
          marginBottom,
        },
      ]}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <View style={styles.templeLegendRow}>
        <View
          style={[
            styles.templeLegendLabelContainer,
            {
              width: labelSize,
              height: labelSize,
              borderRadius: labelRadius,
            },
          ]}
        >
          <Text style={[styles.templeLegendLabelText, { fontSize }]}>
            {letter}
          </Text>
        </View>
        <Text
          style={[styles.templeLegendAnswerText, { fontSize }]}
          numberOfLines={2}
        >
          {answer}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  templeLegendAnswer: {},
  templeLegendRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  templeLegendLabelContainer: {
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  templeLegendLabelText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  templeLegendAnswerText: {
    color: '#FFFFFF',
    fontWeight: '500',
    width: '85%',
  },
});
