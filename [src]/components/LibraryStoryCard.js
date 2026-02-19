import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

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
        styles.card,
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
          styles.image,
          {
            height: imageHeight,
            borderRadius: imageBorderRadius,
          },
        ]}
      />
      <Text
        style={[
          styles.title,
          { fontSize: titleFontSize, marginTop: titleMarginTop },
        ]}
      >
        {story.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#2B2B2B',
  },
  image: {
    width: '100%',
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '400',
  },
});
