import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Share,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';

const GRADIENT_BG = ['rgb(67, 33, 11)', 'rgb(10, 8, 10)'];

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
    <LinearGradient colors={GRADIENT_BG} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.header,
            { paddingTop: headerPadT, paddingHorizontal: sidePad },
          ]}
        >
          <View>
            <Text style={[styles.title, { fontSize: titleSize }]}>
              {story.title}
            </Text>
            <Text style={[styles.date, { fontSize: dateSize }]}>
              {story.savedAt}
            </Text>
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity
              style={[
                styles.iconBtn,
                styles.closeBtn,
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
            styles.heroesRow,
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
                styles.heroCard,
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
                  styles.heroImage,
                  {
                    width: heroImageSize,
                    height: heroImageSize,
                    borderRadius: heroImageSize / 2,
                  },
                ]}
              />

              <Text style={[styles.heroName, { fontSize: heroNameSize }]}>
                {w.name}
              </Text>

              {w.epithet && (
                <View
                  style={[
                    styles.epithetBadge,
                    {
                      paddingHorizontal: epithetPadH,
                      paddingVertical: epithetPadV,
                      borderRadius: epithetRadius,
                    },
                  ]}
                >
                  <Text
                    style={[styles.epithetText, { fontSize: epithetTextSize }]}
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
            styles.storyText,
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
          styles.bottomBtn,
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    color: '#FFB907',
    fontWeight: '700',
  },
  date: {
    color: '#FFFFFF80',
    marginTop: 4,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  iconBtn: {
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtn: {
    backgroundColor: '#251F21',
  },
  heroesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heroCard: {
    backgroundColor: '#2B2B2B',
    alignItems: 'center',
  },
  heroImage: {
    marginBottom: 10,
  },
  heroName: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  epithetBadge: {
    backgroundColor: '#FF940080',
    marginTop: 6,
  },
  epithetText: {
    color: '#FFFFFF',
  },
  storyText: {
    color: '#FFFFFF',
  },
  bottomBtn: {
    position: 'absolute',
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LegendforgeDetailsScreen;
