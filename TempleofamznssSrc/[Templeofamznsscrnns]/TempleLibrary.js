// Temple Library Screen

import { libraryStories } from '../Templeofamznsddta/libraryStories';
import { useAdaptiveSizes } from '../[Templeofamznshkks]/useAdaptiveSizes';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LibraryStoryCard from '../Templeofamznscompnts/LibraryStoryCard';

const TempleLibrary = () => {
  const navigation = useNavigation();
  const { height, sidePad, scrollBottom, pick } = useAdaptiveSizes();

  // sizes
  const paddingTop = pick(height * 0.05, height * 0.06, height * 0.08);
  const titleMarginB = pick(height * 0.018, height * 0.021, height * 0.024);
  const cardPadding = pick(10, 11, 12);
  const cardMarginB = pick(10, 11, 12);
  const cardRadius = pick(14, 15, 16);
  const imageHeight = pick(130, 145, 180);
  const cardTitleSize = pick(12, 13, 14);
  const cardTitleMarginT = pick(6, 7, 8);
  const headerPadT = pick(44, 52, 60);
  const settingsBtnSize = pick(44, 50, 56);

  return (
    <ImageBackground
      source={require('../assets/images/bgcs.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: scrollBottom }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.templeLegendHeader,
            { paddingTop: headerPadT, paddingHorizontal: sidePad },
          ]}
        >
          <Image source={require('../assets/images/lib_title.png')} />
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

        <View
          style={[
            styles.templeLegendContainer,
            { padding: sidePad, paddingTop: 16 },
          ]}
        >
          <View style={{ marginBottom: titleMarginB }} />

          <View style={styles.templeLegendCardsWrap}>
            {libraryStories.map(item => (
              <LibraryStoryCard
                key={item.id}
                story={item}
                onPress={() =>
                  navigation.navigate('StoryDetailsScreen', { story: item })
                }
                padding={cardPadding}
                marginBottom={cardMarginB}
                borderRadius={cardRadius}
                imageHeight={imageHeight}
                imageBorderRadius={16}
                titleFontSize={cardTitleSize}
                titleMarginTop={cardTitleMarginT}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  templeLegendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  templeLegendSettingsBtn: {
    backgroundColor: '#2B2B2B',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendSettingsIcon: { width: 24, height: 24, tintColor: '#fff' },
  templeLegendContainer: {},
  templeLegendTitle: {
    color: '#FFB907',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  templeLegendCardsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default TempleLibrary;
