// Text Section Wrap

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function TextSectionWrap({
  label,
  value,
  marginBottom = 12,
  boxPadding = 12,
  boxPaddingHorizontal = 24,
  borderRadius = 14,
  labelFontSize = 10,
  valueFontSize = 18,
  style,
}) {
  return (
    <View style={[styles.templeLegendField, { marginBottom }, style]}>
      <View
        style={[
          styles.templeLegendFieldBox,
          {
            padding: boxPadding,
            paddingHorizontal: boxPaddingHorizontal,
            borderRadius,
          },
        ]}
      >
        <Text style={[styles.templeLegendFieldLabel, { fontSize: labelFontSize }]}>
          {label}
        </Text>
        <Text style={[styles.templeLegendFieldSubtitle, { fontSize: valueFontSize }]}>
          {value}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  templeLegendField: {},
  templeLegendFieldLabel: {
    color: '#FFFFFF80',
    marginBottom: 4,
  },
  templeLegendFieldBox: {
    backgroundColor: '#2c2527ff',
  },
  templeLegendFieldSubtitle: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
