// Legendforge Details Screen

import { useNavigation, useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Share,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { useAdaptiveSizes } from '../[Templeofamznshkks]/useAdaptiveSizes';

const LegendforgeDetailsScreen = () => {
  const navigation = useNavigation();
  const { story } = useRoute().params;
  const { height, sidePad, pick } = useAdaptiveSizes();

  // sizes
  const headerPadT = pick(height * 0.05, height * 0.06, height * 0.07);
  const titleSize = pick(18, 20, 22);
  const dateSize = pick(11, 12, 12);
  const iconBtnSize = pick(48, 52, 56);
  const iconBtnRadius = pick(14, 15, 16);
  const heroesGap = pick(12, 14, 16);
  const heroesMarginV = pick(20, 24, 28);
  const heroCardWidth = pick(136, 148, 160);
  const heroCardPad = pick(12, 14, 16);
  const heroCardRadius = pick(14, 16, 18);
  const heroImageSize = pick(80, 88, 96);
  const heroNameSize = pick(14, 15, 16);
  const epithetPadH = pick(8, 9, 10);
  const epithetPadV = pick(3, 4, 4);
  const epithetRadius = pick(10, 11, 12);
  const epithetTextSize = pick(11, 12, 12);
  const storyTextSize = pick(14, 15, 15);
  const storyLineHeight = pick(20, 21, 22);
  const bottomBtnRight = sidePad;
  const bottomBtnBottom = pick(44, 50, 54);
  const bottomBtnSize = pick(48, 52, 56);
  const bottomBtnRadius = pick(14, 15, 16);

  const shareStoryHandler = () => {
    try {
      Share.share({
        message: `${story.title}\n\n${story.story}\n\n${story.savedAt}`,
      });
    } catch (error) {
      console.warn('Failed to share the story:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/bgcs.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.templeLegendHeader,
            { paddingTop: headerPadT, paddingHorizontal: sidePad },
          ]}
        >
          <View>
            <Text style={[styles.templeLegendTitle, { fontSize: titleSize }]}>
              {story.title}
            </Text>
            <Text style={[styles.templeLegendDate, { fontSize: dateSize }]}>
              {story.savedAt}
            </Text>
          </View>

          <View style={styles.templeLegendHeaderActions}>
            <TouchableOpacity
              style={[
                styles.templeLegendIconBtn,
                styles.templeLegendCloseBtn,
                {
                  width: iconBtnSize,
                  height: iconBtnSize,
                  borderRadius: iconBtnRadius,
                },
              ]}
              onPress={() => navigation.goBack()}
            >
              <Image source={require('../assets/icons/iconamoon_close.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            styles.templeLegendHeroesRow,
            {
              gap: heroesGap,
              marginVertical: heroesMarginV,
              paddingHorizontal: sidePad,
            },
          ]}
        >
          {story.walkers.map((w, idx) => (
            <View
              key={idx}
              style={[
                styles.templeLegendHeroCard,
                {
                  width: heroCardWidth,
                  padding: heroCardPad,
                  borderRadius: heroCardRadius,
                },
              ]}
            >
              <Image
                source={
                  w.image
                    ? { uri: w.image }
                    : require('../assets/images/placeholder.png')
                }
                style={[
                  styles.templeLegendHeroImage,
                  {
                    width: heroImageSize,
                    height: heroImageSize,
                    borderRadius: heroImageSize / 2,
                  },
                ]}
              />

              <Text style={[styles.templeLegendHeroName, { fontSize: heroNameSize }]}>
                {w.name}
              </Text>

              {w.epithet && (
                <View
                  style={[
                    styles.templeLegendEpithetBadge,
                    {
                      paddingHorizontal: epithetPadH,
                      paddingVertical: epithetPadV,
                      borderRadius: epithetRadius,
                    },
                  ]}
                >
                  <Text
                    style={[styles.templeLegendEpithetText, { fontSize: epithetTextSize }]}
                  >
                    {w.epithet}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>

        <Text
          style={[
            styles.templeLegendStoryText,
            {
              fontSize: storyTextSize,
              lineHeight: storyLineHeight,
              paddingHorizontal: sidePad,
            },
          ]}
        >
          {story.story}
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.templeLegendBottomBtn,
          {
            right: bottomBtnRight,
            bottom: bottomBtnBottom,
            width: bottomBtnSize,
            height: bottomBtnSize,
            borderRadius: bottomBtnRadius,
          },
        ]}
        onPress={shareStoryHandler}
      >
        <Image source={require('../assets/icons/mdi_share.png')} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  templeLegendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  templeLegendTitle: {
    color: '#FFB907',
    fontWeight: '700',
  },
  templeLegendDate: {
    color: '#FFFFFF80',
    marginTop: 4,
  },
  templeLegendHeaderActions: {
    flexDirection: 'row',
    gap: 12,
  },
  templeLegendIconBtn: {
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendCloseBtn: {
    backgroundColor: '#251F21',
  },
  templeLegendHeroesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  templeLegendHeroCard: {
    backgroundColor: '#2B2B2B',
    alignItems: 'center',
  },
  templeLegendHeroImage: {
    marginBottom: 10,
  },
  templeLegendHeroName: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  templeLegendEpithetBadge: {
    backgroundColor: '#FF940080',
    marginTop: 6,
  },
  templeLegendEpithetText: {
    color: '#FFFFFF',
  },
  templeLegendStoryText: {
    color: '#FFFFFF',
  },
  templeLegendBottomBtn: {
    position: 'absolute',
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LegendforgeDetailsScreen;
