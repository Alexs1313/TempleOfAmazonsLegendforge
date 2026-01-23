import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  useWindowDimensions,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAmazonsStore } from '../LegendforgeStore/amazonsCntxt';
import Toast from 'react-native-toast-message';

const BUTTON_GRADIENT = ['#FF9400', '#FAD51D'];
const bgImage = require('../assets/images/main_background.png');

const LegendforgeScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [stories, setStories] = useState([]);
  const { legendforgeNotificationsEnabled } = useAmazonsStore();

  useFocusEffect(
    useCallback(() => {
      const loadStories = async () => {
        try {
          const savedStories = await AsyncStorage.getItem('stories');
          const parsedStories = savedStories ? JSON.parse(savedStories) : [];
          setStories(parsedStories);

          console.log('loaded stories!');
        } catch (error) {
          console.error('Failed to load stories ==>', error);
        }
      };

      loadStories();
    }, []),
  );

  const confirmDelete = storyId => {
    Alert.alert('Delete Story', 'Are you sure you want to delete this story?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => deleteStory(storyId),
      },
    ]);
  };

  const deleteStory = async storyId => {
    try {
      const updatedStories = stories.filter(story => story.id !== storyId);
      setStories(updatedStories);

      await AsyncStorage.setItem('stories', JSON.stringify(updatedStories));

      legendforgeNotificationsEnabled &&
        Toast.show({
          text1: 'Story deleted!',
        });

      console.log('deleted legendforge story');
    } catch (error) {
      console.error('Failed to delete the story ==>', error);
    }
  };

  return (
    <ImageBackground source={bgImage} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.introContainer, { paddingTop: height * 0.08 }]}>
          <Image
            source={require('../assets/images/legendforge_title.png')}
            style={{ marginBottom: height * 0.03 }}
          />

          <Image source={require('../assets/images/quiz_logo.png')} />

          <View style={styles.introBox}>
            <Text style={styles.introText}>
              What is not written will be forgotten
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('CreateStoryScreen')}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={BUTTON_GRADIENT}
                style={styles.beginButton}
              >
                <Text style={styles.beginText}>Begin a New Saga</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {stories.map(item => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.9}
            onLongPress={() => confirmDelete(item.id)}
            style={styles.storyCard}
            onPress={() =>
              navigation.navigate('LegendforgeDetailsScreen', { story: item })
            }
          >
            <View style={styles.storyHeader}>
              <Text style={styles.storyTitle}>{item.title}</Text>
              <Text style={styles.storyDate}>{item.savedAt}</Text>
            </View>

            <View style={styles.walkersWrap}>
              {item.walkers.map((w, idx) => (
                <View key={idx} style={styles.walkerBadge}>
                  <Text style={styles.walkerText}>{w.name}</Text>
                </View>
              ))}

              <View style={styles.walkerAvatars}>
                {item.walkers.slice(0, 3).map((w, idx) => (
                  <Image
                    key={idx}
                    source={
                      w.image
                        ? { uri: w.image }
                        : require('../assets/images/placeholder.png')
                    }
                    style={[
                      styles.walkerAvatar,
                      { marginLeft: idx === 0 ? 0 : -10 },
                    ]}
                  />
                ))}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    alignItems: 'center',
  },
  introBox: {
    backgroundColor: '#251F21',
    borderRadius: 16,
    padding: 16,
    paddingVertical: 24,
    width: '90%',
  },
  introText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  walkerAvatars: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  walkerAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#333',
  },
  beginButton: {
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  beginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  storyCard: {
    marginHorizontal: 16,
    backgroundColor: '#2B2B2B',
    borderRadius: 18,
    padding: 16,
    marginTop: 16,
  },
  storyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  storyTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  storyDate: {
    color: '#FFFFFF80',
    fontSize: 12,
  },
  walkersWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  walkerBadge: {
    backgroundColor: '#FF940080',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  walkerText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default LegendforgeScreen;
