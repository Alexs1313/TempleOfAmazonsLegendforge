// Hall of Records screen

import Svg, { Path } from 'react-native-svg';
import React, { useState, useCallback, useMemo, useRef } from 'react';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useAdaptiveSizes } from '../[Templeofamznshkks]/useAdaptiveSizes';

const OATH_COLORS = ['#FFDD00', '#FFD68A', '#FF9400'];

function DonutChart({ size, strokeWidth, segments }) {
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1;
  const cx = size / 2;
  const cy = size / 2;
  const R = size / 2;
  const r = R - strokeWidth;
  const deg2rad = deg => ((deg - 90) * Math.PI) / 180;
  const xy = (radius, deg) => ({
    x: cx + radius * Math.cos(deg2rad(deg)),
    y: cy + radius * Math.sin(deg2rad(deg)),
  });

  let startDeg = 0;
  const paths = segments.map((seg, i) => {
    const ratio = seg.value / total;
    const endDeg = startDeg + ratio * 360;
    const large = ratio > 0.5 ? 1 : 0;
    const oStart = xy(R, startDeg);
    const oEnd = xy(R, endDeg);
    const iEnd = xy(r, endDeg);
    const iStart = xy(r, startDeg);
    const d = [
      `M ${oStart.x} ${oStart.y}`,
      `A ${R} ${R} 0 ${large} 1 ${oEnd.x} ${oEnd.y}`,
      `L ${iEnd.x} ${iEnd.y}`,
      `A ${r} ${r} 0 ${large} 0 ${iStart.x} ${iStart.y}`,
      'Z',
    ].join(' ');
    startDeg = endDeg;
    return { d, color: seg.color };
  });

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {paths.map((p, i) => (
        <Path key={i} d={p.d} fill={p.color} />
      ))}
    </Svg>
  );
}

const TITLE_COLOR = '#FFB907';
const DEMO_BANNER_KEY = 'statsDemoCleared';
const TRIALS_KEY = 'trialsCompleted';

function countWords(stories) {
  if (!Array.isArray(stories)) return 0;
  return stories.reduce(
    (sum, s) => sum + (s.story || '').split(/\s+/).filter(Boolean).length,
    0,
  );
}

function getRandomDemoStats() {
  return {
    amazonsForged: Math.floor(Math.random() * 3) + 1,
    storiesWritten: Math.floor(Math.random() * 3) + 1,
    wordsWritten: Math.floor(Math.random() * 600),
    trialsCompleted: Math.floor(Math.random() * 3),
    oathFocus: [
      { label: 'Combat', value: Math.floor(Math.random() * 40) + 30 },
      { label: 'Wisdom', value: Math.floor(Math.random() * 40) + 20 },
      { label: 'Craft', value: Math.floor(Math.random() * 30) + 10 },
    ],
  };
}

const HallOfRecordsScreen = () => {
  const navigation = useNavigation();
  const { sidePad, scrollBottom, pick } = useAdaptiveSizes();

  const [realStats, setRealStats] = useState({
    amazonsForged: 0,
    storiesWritten: 0,
    wordsWritten: 0,
    trialsCompleted: 0,
  });
  const [demoCleared, setDemoCleared] = useState(false);
  const [loading, setLoading] = useState(true);
  const LegendforgeTempleCardsAppearAnimations = useRef(
    Array.from({ length: 4 }, () => new Animated.Value(0)),
  ).current;

  const demoStats = useMemo(() => getRandomDemoStats(), []);

  const loadStats = useCallback(async () => {
    try {
      const [charactersRaw, storiesRaw, trialsRaw, clearedRaw] =
        await Promise.all([
          AsyncStorage.getItem('characters'),
          AsyncStorage.getItem('stories'),
          AsyncStorage.getItem(TRIALS_KEY),
          AsyncStorage.getItem(DEMO_BANNER_KEY),
        ]);

      const characters = charactersRaw ? JSON.parse(charactersRaw) : [];
      const stories = storiesRaw ? JSON.parse(storiesRaw) : [];
      const trials = trialsRaw ? parseInt(trialsRaw, 10) : 0;
      const cleared = clearedRaw === 'true';

      setRealStats({
        amazonsForged: Array.isArray(characters) ? characters.length : 0,
        storiesWritten: Array.isArray(stories) ? stories.length : 0,
        wordsWritten: countWords(stories),
        trialsCompleted: isNaN(trials) ? 0 : trials,
      });
      setDemoCleared(cleared);
    } catch (e) {
      console.warn('HallOfRecords loadStats', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadStats();
    }, [loadStats]),
  );

  useFocusEffect(
    useCallback(() => {
      LegendforgeTempleCardsAppearAnimations.forEach(anim => anim.setValue(0));

      const LegendforgeTempleCardAnimations =
        LegendforgeTempleCardsAppearAnimations.map(anim =>
          Animated.timing(anim, {
            toValue: 1,
            duration: 360,
            useNativeDriver: true,
          }),
        );

      Animated.stagger(110, LegendforgeTempleCardAnimations).start();
    }, [LegendforgeTempleCardsAppearAnimations]),
  );

  const hasAnyRealStats =
    realStats.amazonsForged > 0 ||
    realStats.storiesWritten > 0 ||
    realStats.wordsWritten > 0 ||
    realStats.trialsCompleted > 0;

  const showDemo = !demoCleared && !hasAnyRealStats && !loading;

  const stats = showDemo ? demoStats : realStats;
  const oathSegments = showDemo
    ? demoStats.oathFocus
    : [
        { label: 'Combat', value: 40 },
        { label: 'Wisdom', value: 35 },
        { label: 'Craft', value: 25 },
      ];
  const totalOath = oathSegments.reduce((s, x) => s + x.value, 0) || 1;
  const donutSegments = oathSegments.map((seg, i) => ({
    value: seg.value,
    color: OATH_COLORS[i % OATH_COLORS.length],
  }));
  const donutSize = pick(160, 200, 220);
  const donutStrokeWidth = pick(60, 60, 66);

  const clearDemo = async () => {
    await AsyncStorage.setItem(DEMO_BANNER_KEY, 'true');
    setDemoCleared(true);
  };

  const headerPadT = pick(44, 52, 60);
  const headerPadH = sidePad;
  const titleSize = pick(22, 24, 26);
  const settingsBtnSize = pick(44, 50, 56);
  const bannerPad = pick(4, 6, 7);
  const cardPad = pick(14, 16, 18);
  const cardRadius = pick(14, 16, 18);
  const cardTitleSize = pick(10, 11, 12);
  const cardValueSize = pick(13, 14, 15);
  const sectionTitleSize = pick(18, 20, 22);
  const cardAppearFromY = pick(18, 20, 22);

  const getLegendforgeTempleCardAnimatedStyle = index => ({
    opacity: LegendforgeTempleCardsAppearAnimations[index],
    transform: [
      {
        translateY: LegendforgeTempleCardsAppearAnimations[index].interpolate({
          inputRange: [0, 1],
          outputRange: [cardAppearFromY, 0],
        }),
      },
    ],
  });

  if (loading) {
    return (
      <ImageBackground
        source={require('../assets/images/bgcs.png')}
        style={{ flex: 1 }}
      >
        <View style={[styles.templeLegendCentered, { paddingTop: headerPadT }]}>
          <Text style={[styles.templeLegendTitle, { fontSize: titleSize }]}>
            Hall of Records
          </Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/images/bgcs.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={[
          styles.templeLegendScroll,
          { paddingBottom: scrollBottom },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.templeLegendHeader,
            { paddingTop: headerPadT, paddingHorizontal: headerPadH },
          ]}
        >
          <Image source={require('../assets/images/recrds.png')} />
          <TouchableOpacity
            onPress={() => navigation.navigate('TempleSettingsScreen')}
            style={[
              styles.templeLegendSettingsBtn,
              { width: settingsBtnSize, height: settingsBtnSize },
            ]}
          >
            <Image
              source={require('../assets/icons/material-symbols_settings-rounded.png')}
              style={styles.templeLegendSettingsIcon}
            />
          </TouchableOpacity>
        </View>

        {showDemo && (
          <View
            style={[
              styles.templeLegendDemoBanner,
              {
                marginHorizontal: headerPadH,
                padding: bannerPad,
                paddingHorizontal: 12,
              },
            ]}
          >
            <Text style={styles.templeLegendDemoBannerText}>Sample stats</Text>
            <TouchableOpacity
              onPress={clearDemo}
              style={styles.templeLegendClearDemoBtn}
            >
              <Text style={styles.templeLegendClearDemoText}>Clear demo data</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={[styles.templeLegendCardsGrid, { paddingHorizontal: headerPadH }]}>
          <Animated.View
            style={[
              styles.templeLegendStatCard,
              { padding: cardPad, borderRadius: cardRadius },
              getLegendforgeTempleCardAnimatedStyle(0),
            ]}
          >
            <Image
              source={require('../assets/images/amazzns.png')}
              style={styles.templeLegendCardIcon}
            />
            <View>
              <Text style={[styles.templeLegendStatValue, { fontSize: cardValueSize }]}>
                {stats.amazonsForged} Amazons
              </Text>
              <Text style={[styles.templeLegendStatLabel, { fontSize: cardTitleSize }]}>
                Amazons Forged
              </Text>
            </View>
          </Animated.View>

          <Animated.View
            style={[
              styles.templeLegendStatCard,
              { padding: cardPad, borderRadius: cardRadius },
              getLegendforgeTempleCardAnimatedStyle(1),
            ]}
          >
            <Image
              source={require('../assets/images/strrries.png')}
              style={styles.templeLegendCardIcon}
            />
            <View>
              <Text style={[styles.templeLegendStatValue, { fontSize: cardValueSize }]}>
                {stats.storiesWritten} Stories
              </Text>
              <Text style={[styles.templeLegendStatLabel, { fontSize: cardTitleSize }]}>
                Stories Written
              </Text>
            </View>
          </Animated.View>

          <Animated.View
            style={[
              styles.templeLegendStatCard,
              { padding: cardPad, borderRadius: cardRadius },
              getLegendforgeTempleCardAnimatedStyle(2),
            ]}
          >
            <Image
              source={require('../assets/images/worrds.png')}
              style={styles.templeLegendCardIcon}
            />
            <View>
              <Text style={[styles.templeLegendStatValue, { fontSize: cardValueSize }]}>
                {stats.wordsWritten}
              </Text>
              <Text style={[styles.templeLegendStatLabel, { fontSize: cardTitleSize }]}>
                Words Written
              </Text>
            </View>
          </Animated.View>

          <Animated.View
            style={[
              styles.templeLegendStatCard,
              { padding: cardPad, borderRadius: cardRadius },
              getLegendforgeTempleCardAnimatedStyle(3),
            ]}
          >
            <Image
              source={require('../assets/images/triiials.png')}
              style={styles.templeLegendCardIcon}
            />
            <View>
              <Text style={[styles.templeLegendStatValue, { fontSize: cardValueSize }]}>
                {stats.trialsCompleted}
              </Text>
              <Text style={[styles.templeLegendStatLabel, { fontSize: cardTitleSize }]}>
                Trials Completed
              </Text>
            </View>
          </Animated.View>
        </View>

        <View style={[styles.templeLegendOathSection, { paddingHorizontal: headerPadH }]}>
          <Image
            source={require('../assets/images/ofocus.png')}
            style={{ marginBottom: 24 }}
          />
          <View
            style={[
              styles.templeLegendDonutWrap,
              { marginBottom: 20, marginTop: 20 },
            ]}
          >
            <DonutChart
              size={donutSize}
              strokeWidth={donutStrokeWidth}
              segments={donutSegments}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  templeLegendContainer: { flex: 1 },
  templeLegendCentered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  templeLegendScroll: { flexGrow: 1, paddingBottom: 100 },
  templeLegendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  templeLegendTitle: { color: TITLE_COLOR, fontWeight: '700' },
  templeLegendSettingsBtn: {
    backgroundColor: '#2B2B2B',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendSettingsIcon: { width: 24, height: 24, tintColor: '#fff' },
  templeLegendDemoBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF383C',
    borderRadius: 12,
    marginBottom: 20,
  },
  templeLegendDemoBannerText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  templeLegendClearDemoBtn: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 12,
  },
  templeLegendClearDemoText: { color: '#fff', fontSize: 11, fontWeight: '500' },
  templeLegendCardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  templeLegendStatCard: {
    width: '48%',
    backgroundColor: '#2B2B2B',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    minHeight: 87,
  },
  templeLegendCardIcon: { width: 45, height: 45 },
  templeLegendStatValue: {
    color: 'rgb(255, 204, 0)',
    fontWeight: '600',
    fontSize: 14,
  },
  templeLegendStatLabel: {
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
  },
  templeLegendOathSection: { marginBottom: 24 },
  templeLegendOathTitle: { color: TITLE_COLOR, fontWeight: '700', marginBottom: 16 },
  templeLegendDonutWrap: { alignItems: 'center', justifyContent: 'center' },
  templeLegendOathLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  templeLegendOathLegendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  templeLegendOathDot: { width: 10, height: 10, borderRadius: 5 },
  templeLegendOathLegendText: { color: '#fff', fontSize: 13 },
});

export default HallOfRecordsScreen;
