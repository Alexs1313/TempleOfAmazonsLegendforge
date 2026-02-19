import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const primWhite = '#FFFFFF';

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
  const imageSource = character.image
    ? { uri: character.image }
    : require('../assets/images/placeholder.png');

  return (
    <TouchableOpacity
      style={[
        styles.card,
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
          styles.avatarWrap,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarRadius,
            marginBottom: avatarMarginBottom,
          },
        ]}
      >
        <Image
          source={imageSource}
          style={[
            styles.avatar,
            {
              width: avatarSize,
              height: avatarSize,
              borderRadius: avatarRadius,
            },
          ]}
        />
      </View>

      <Text style={[styles.cardName, { fontSize: nameFontSize }]}>
        {character.name}
      </Text>
      <View
        style={[
          styles.epithetBadge,
          {
            paddingHorizontal: epithetPaddingHorizontal,
            paddingVertical: epithetPaddingVertical,
            borderRadius: epithetBorderRadius,
          },
        ]}
      >
        <Text style={[styles.epithetText, { fontSize: epithetFontSize }]}>
          {character.epithet}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#2B2B2B',
    alignItems: 'center',
  },
  avatarWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderWidth: 1,
    borderColor: primWhite,
  },
  cardName: {
    color: primWhite,
    fontWeight: '500',
  },
  epithetBadge: {
    backgroundColor: '#FF940080',
    marginTop: 5,
  },
  epithetText: {
    color: primWhite,
    fontWeight: '400',
  },
});
