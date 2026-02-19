import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function StoryCard({
  story,
  onPress,
  onLongPress,
  marginHorizontal = 16,
  padding = 16,
  marginTop = 16,
  borderRadius = 18,
  titleFontSize = 16,
  dateFontSize = 12,
  badgePaddingHorizontal = 10,
  badgePaddingVertical = 4,
  badgeBorderRadius = 12,
  badgeTextFontSize = 12,
  avatarSize = 28,
  avatarOverlap = 10,
  activeOpacity = 0.9,
}) {
  const walkers = story.walkers || [];
  const avatarsToShow = walkers.slice(0, 3);

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          marginHorizontal,
          padding,
          marginTop,
          borderRadius,
        },
      ]}
      activeOpacity={activeOpacity}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { fontSize: titleFontSize }]}>
          {story.title}
        </Text>
        <Text style={[styles.date, { fontSize: dateFontSize }]}>
          {story.savedAt}
        </Text>
      </View>

      <View style={styles.walkersWrap}>
        {walkers.map((w, idx) => (
          <View
            key={idx}
            style={[
              styles.walkerBadge,
              {
                paddingHorizontal: badgePaddingHorizontal,
                paddingVertical: badgePaddingVertical,
                borderRadius: badgeBorderRadius,
              },
            ]}
          >
            <Text style={[styles.walkerText, { fontSize: badgeTextFontSize }]}>
              {w.name}
            </Text>
          </View>
        ))}

        <View style={styles.walkerAvatars}>
          {avatarsToShow.map((w, idx) => (
            <Image
              key={idx}
              source={
                w.image
                  ? { uri: w.image }
                  : require('../assets/images/placeholder.png')
              }
              style={[
                styles.walkerAvatar,
                {
                  width: avatarSize,
                  height: avatarSize,
                  borderRadius: avatarSize / 2,
                  marginLeft: idx === 0 ? 0 : -avatarOverlap,
                },
              ]}
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2B2B2B',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  date: {
    color: '#FFFFFF80',
  },
  walkersWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  walkerBadge: {
    backgroundColor: '#FF940080',
    marginRight: 6,
    marginBottom: 6,
  },
  walkerText: {
    color: '#FFFFFF',
  },
  walkerAvatars: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  walkerAvatar: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#333',
  },
});
