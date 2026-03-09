// Library Story Card

import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function LibraryStoryCard({
  story,
  onPress,
  padding = 12,
  marginBottom = 12,
  borderRadius = 16,
  imageHeight = 180,
  imageBorderRadius = 16,
  titleFontSize = 14,
  titleMarginTop = 8,
  activeOpacity = 0.8,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.templeLegendCard,
        {
          padding,
          marginBottom,
          borderRadius,
        },
      ]}
      activeOpacity={activeOpacity}
      onPress={onPress}
    >
      <Image
        source={story.image}
        style={[
          styles.templeLegendImage,
          {
            height: imageHeight,
            borderRadius: imageBorderRadius,
          },
        ]}
      />
      <Text
        style={[
          styles.templeLegendTitle,
          { fontSize: titleFontSize, marginTop: titleMarginTop },
        ]}
      >
        {story.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  templeLegendCard: {
    width: '48%',
    backgroundColor: '#2B2B2B',
  },
  templeLegendImage: {
    width: '100%',
  },
  templeLegendTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '400',
  },
});
