import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LibraryStoryCard from '../components/LibraryStoryCard';
import { libraryStories } from '../data/libraryStories';
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';

const GRADIENT_BG = ['rgb(67, 33, 11)', 'rgb(10, 8, 10)'];

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

  return (
    <LinearGradient colors={GRADIENT_BG} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: scrollBottom }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, { paddingTop, padding: sidePad }]}>
          <Image
            source={require('../assets/images/lib_title.png')}
            style={{ alignSelf: 'center', marginBottom: titleMarginB }}
          />

          <View style={styles.cardsWrap}>
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#FFB907',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  cardsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default TempleLibrary;
