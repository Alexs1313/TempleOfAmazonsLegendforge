// About Section

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function AboutSection({
  title,
  children,
  marginTop = 16,
  paddingHorizontal = 16,
  titleFontSize = 22,
  titleMarginBottom = 15,
  style,
}) {
  return (
    <View
      style={[
        styles.templeLegendSection,
        {
          marginTop,
          paddingHorizontal,
          ...style,
        },
      ]}
    >
      <Text
        style={[
          styles.templeLegendSectionTitle,
          { fontSize: titleFontSize, marginBottom: titleMarginBottom },
        ]}
      >
        {title}
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  templeLegendSection: {
    textAlign: 'center',
  },
  templeLegendSectionTitle: {
    color: '#FFB907',
    fontWeight: '700',
    textAlign: 'center',
  },
});
