// Story Card comp

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
  const LegendforgeTempleWalkers = story.walkers || [];
  const LegendforgeTempleAvatarsToShow = LegendforgeTempleWalkers.slice(0, 3);

  return (
    <TouchableOpacity
      style={[
        styles.templeLegendCard,
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
      <View style={styles.templeLegendHeader}>
        <Text style={[styles.templeLegendTitle, { fontSize: titleFontSize }]}>
          {story.title}
        </Text>
        <Text style={[styles.templeLegendDate, { fontSize: dateFontSize }]}>
          {story.savedAt}
        </Text>
      </View>

      <View style={styles.templeLegendWalkersWrap}>
        {LegendforgeTempleWalkers.map(
          (LegendforgeTempleWalker, LegendforgeTempleIdx) => (
            <View
              key={LegendforgeTempleIdx}
              style={[
                styles.templeLegendWalkerBadge,
                {
                  paddingHorizontal: badgePaddingHorizontal,
                  paddingVertical: badgePaddingVertical,
                  borderRadius: badgeBorderRadius,
                },
              ]}
            >
              <Text
                style={[
                  styles.templeLegendWalkerText,
                  { fontSize: badgeTextFontSize },
                ]}
              >
                {LegendforgeTempleWalker.name}
              </Text>
            </View>
          ),
        )}

        <View style={styles.templeLegendWalkerAvatars}>
          {LegendforgeTempleAvatarsToShow.map(
            (LegendforgeTempleWalker, LegendforgeTempleIdx) => (
              <Image
                key={LegendforgeTempleIdx}
                source={
                  LegendforgeTempleWalker.image
                    ? { uri: LegendforgeTempleWalker.image }
                    : require('../assets/images/placeholder.png')
                }
                style={[
                  styles.templeLegendWalkerAvatar,
                  {
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: avatarSize / 2,
                    marginLeft: LegendforgeTempleIdx === 0 ? 0 : -avatarOverlap,
                  },
                ]}
              />
            ),
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  templeLegendCard: {
    backgroundColor: '#2B2B2B',
  },
  templeLegendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  templeLegendTitle: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  templeLegendDate: {
    color: '#FFFFFF80',
  },
  templeLegendWalkersWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  templeLegendWalkerBadge: {
    backgroundColor: '#FF940080',
    marginRight: 6,
    marginBottom: 6,
  },
  templeLegendWalkerText: {
    color: '#FFFFFF',
  },
  templeLegendWalkerAvatars: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  templeLegendWalkerAvatar: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#333',
  },
});
