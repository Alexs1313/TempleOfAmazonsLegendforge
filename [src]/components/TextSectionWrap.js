import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    <View style={[styles.field, { marginBottom }, style]}>
      <View
        style={[
          styles.fieldBox,
          {
            padding: boxPadding,
            paddingHorizontal: boxPaddingHorizontal,
            borderRadius,
          },
        ]}
      >
        <Text style={[styles.fieldLabel, { fontSize: labelFontSize }]}>
          {label}
        </Text>
        <Text style={[styles.fieldSubtitle, { fontSize: valueFontSize }]}>
          {value}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {},
  fieldLabel: {
    color: '#FFFFFF80',
    marginBottom: 4,
  },
  fieldBox: {
    backgroundColor: '#2c2527ff',
  },
  fieldSubtitle: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
