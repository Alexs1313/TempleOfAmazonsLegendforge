// Character Card

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const LegendforgeTemplePrimWhite = '#FFFFFF';

export default function CharacterCard({
  character,
  onPress,
  onLongPress,
  paddingVertical = 16,
  marginBottom = 16,
  borderRadius = 18,
  avatarSize = 97,
  avatarRadius = 54,
  avatarMarginBottom = 8,
  nameFontSize = 16,
  epithetPaddingHorizontal = 10,
  epithetPaddingVertical = 4,
  epithetBorderRadius = 12,
  epithetFontSize = 12,
  activeOpacity = 0.85,
}) {
  const LegendforgeTempleImageSource = character.image
    ? { uri: character.image }
    : require('../assets/images/placeholder.png');

  return (
    <TouchableOpacity
      style={[
        styles.templeLegendCard,
        {
          paddingVertical,
          marginBottom,
          borderRadius,
        },
      ]}
      activeOpacity={activeOpacity}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View
        style={[
          styles.templeLegendAvatarWrap,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarRadius,
            marginBottom: avatarMarginBottom,
          },
        ]}
      >
        <Image
          source={LegendforgeTempleImageSource}
          style={[
            styles.templeLegendAvatar,
            {
              width: avatarSize,
              height: avatarSize,
              borderRadius: avatarRadius,
            },
          ]}
        />
      </View>

      <Text style={[styles.templeLegendCardName, { fontSize: nameFontSize }]}>
        {character.name}
      </Text>
      <View
        style={[
          styles.templeLegendEpithetBadge,
          {
            paddingHorizontal: epithetPaddingHorizontal,
            paddingVertical: epithetPaddingVertical,
            borderRadius: epithetBorderRadius,
          },
        ]}
      >
        <Text
          style={[
            styles.templeLegendEpithetText,
            { fontSize: epithetFontSize },
          ]}
        >
          {character.epithet}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  templeLegendCard: {
    width: '48%',
    backgroundColor: '#2B2B2B',
    alignItems: 'center',
  },
  templeLegendAvatarWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendAvatar: {
    borderWidth: 1,
    borderColor: LegendforgeTemplePrimWhite,
  },
  templeLegendCardName: {
    color: LegendforgeTemplePrimWhite,
    fontWeight: '500',
  },
  templeLegendEpithetBadge: {
    backgroundColor: '#FF940080',
    marginTop: 5,
  },
  templeLegendEpithetText: {
    color: LegendforgeTemplePrimWhite,
    fontWeight: '400',
  },
});
