import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
        styles.section,
        {
          marginTop,
          paddingHorizontal,
          ...style,
        },
      ]}
    >
      <Text
        style={[
          styles.sectionTitle,
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
  section: {
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#FFB907',
    fontWeight: '700',
    textAlign: 'center',
  },
});
