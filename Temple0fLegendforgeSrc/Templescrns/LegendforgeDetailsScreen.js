import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Share,
  useWindowDimensions,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const bgImage = require('../assets/images/main_background.png');

const LegendforgeDetailsScreen = () => {
  const navigation = useNavigation();
  const { story } = useRoute().params;
  const { height } = useWindowDimensions();

  const handleShare = () => {
    try {
      Share.share({
        message: `${story.title}\n\n${story.story}\n\n${story.savedAt}`,
      });
    } catch (error) {
      console.warn('Failed to share the story:', error);
    }
  };

  return (
    <ImageBackground source={bgImage} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.header, { paddingTop: height * 0.07 }]}>
          <View>
            <Text style={styles.title}>{story.title}</Text>
            <Text style={styles.date}>{story.savedAt}</Text>
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity
              style={[styles.iconBtn, styles.closeBtn]}
              onPress={() => navigation.goBack()}
            >
              <Image source={require('../assets/icons/iconamoon_close.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.heroesRow}>
          {story.walkers.map((w, idx) => (
            <View key={idx} style={styles.heroCard}>
              <Image
                source={
                  w.image
                    ? { uri: w.image }
                    : require('../assets/images/placeholder.png')
                }
                style={styles.heroImage}
              />

              <Text style={styles.heroName}>{w.name}</Text>

              {w.epithet && (
                <View style={styles.epithetBadge}>
                  <Text style={styles.epithetText}>{w.epithet}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        <Text style={styles.storyText}>{story.story}</Text>
      </ScrollView>

      <TouchableOpacity style={styles.bottomBtn} onPress={handleShare}>
        <Image source={require('../assets/icons/mdi_share.png')} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    color: '#FFB907',
    fontSize: 22,
    fontWeight: '700',
  },
  date: {
    color: '#FFFFFF80',
    fontSize: 12,
    marginTop: 4,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  iconBtn: {
    width: 56,
    height: 56,
    borderRadius: 16,
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
    gap: 16,
    marginVertical: 28,
    paddingHorizontal: 16,
  },
  heroCard: {
    backgroundColor: '#2B2B2B',
    borderRadius: 18,
    padding: 16,
    alignItems: 'center',
    width: 160,
  },
  heroImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 10,
  },
  heroName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  epithetBadge: {
    backgroundColor: '#FF940080',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 6,
  },
  epithetText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  storyText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  bottomBtn: {
    position: 'absolute',
    right: 16,
    bottom: 54,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LegendforgeDetailsScreen;
