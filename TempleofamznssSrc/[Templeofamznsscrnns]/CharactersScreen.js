// Templeofamzns characters screen

import CharacterCard from '../Templeofamznscompnts/CharacterCard';
import StoryCard from '../Templeofamznscompnts/StoryCard';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LinearGradient from 'react-native-linear-gradient';
import Sound from 'react-native-sound';

import { useAdaptiveSizes } from '../[Templeofamznshkks]/useAdaptiveSizes';
import { useAmazonsStore } from '../Templeofamznsstrr/amazonsCntxt';
import Toast from 'react-native-toast-message';

const primWhite = '#FFFFFF';

const DEFAULT_CHARACTERS = [
  {
    id: 'default-char-1',
    name: 'Eurynome',
    epithet: 'the Lionhearted',
    image: null,
  },
  {
    id: 'default-char-2',
    name: 'Thaleia',
    epithet: 'the Dawnblade',
    image: null,
  },
];

const DEFAULT_STORY_TITLES = [
  'The Forgotten Chronicle',
  'Echoes of the Temple',
  'The First Oath',
  'Whispers of the Amazons',
  'The Unwritten Saga',
];
const DEFAULT_WALKER_NAMES = [
  'A hero',
  'A warrior',
  'An Amazon',
  'A seeker',
  'A guardian',
];

const getDefaultStories = () => {
  const shuffledTitles = [...DEFAULT_STORY_TITLES].sort(
    () => Math.random() - 0.5,
  );
  const shuffledWalkers = [...DEFAULT_WALKER_NAMES].sort(
    () => Math.random() - 0.5,
  );
  return [
    {
      id: 'default-story-1',
      title: shuffledTitles[0],
      savedAt: '—',
      walkers: [{ id: 'dw-1', name: shuffledWalkers[0], image: null }],
    },
    {
      id: 'default-story-2',
      title: shuffledTitles[1],
      savedAt: '—',
      walkers: [{ id: 'dw-2', name: shuffledWalkers[1], image: null }],
    },
  ];
};

const CharactersScreen = () => {
  const { height, sidePad, scrollBottom, pick, xS, s } = useAdaptiveSizes();

  // sizes

  const cardPadV = pick(12, 14, 16);
  const cardMarginB = pick(10, 12, 16);
  const cardRadius = pick(14, 16, 18);
  const avatarSize = pick(76, 86, 97);
  const avatarRadius = pick(38, 43, 54);
  const cardNameSize = pick(13, 14, 16);
  const epithetPadH = pick(8, 9, 10);
  const epithetPadV = pick(3, 4, 4);
  const epithetRadius = pick(10, 11, 12);
  const epithetTextSize = pick(10, 11, 12);

  const cardWrapperMarginTop = pick(16, 20, 24);
  const avatarMarginBottom = pick(6, 8, 8);
  const headerPadT = pick(44, 52, 60);
  const settingsBtnSize = pick(44, 50, 56);

  const tabTextSize = pick(12, 13, 14);
  const storyCardMarginH = sidePad;
  const storyCardPad = pick(12, 14, 16);
  const storyCardMarginT = pick(12, 14, 16);
  const storyCardRadius = pick(14, 16, 18);
  const storyTitleSize = pick(14, 15, 16);
  const storyDateSize = pick(11, 12, 12);
  const walkerBadgePadH = pick(8, 9, 10);
  const walkerBadgePadV = pick(3, 4, 4);
  const walkerBadgeRadius = pick(10, 11, 12);
  const walkerTextSize = pick(11, 12, 12);
  const walkerAvatarSize = pick(24, 26, 28);

  const navigation = useNavigation();

  // states
  const [characters, setCharacters] = useState([]);
  const [stories, setStories] = useState([]);
  const [activeTab, setActiveTab] = useState('characters'); // 'characters' | 'stories'
  const [legendforgeMusIdx, setLegendforgeMusIdx] = useState(0);
  const defaultStoriesToShow = useMemo(() => getDefaultStories(), []);
  const [sound, setSound] = useState(null);
  const legendforgeTracksCycle = ['music-bg.wav', 'music-bg.wav'];
  const {
    setLegendforgeNotificationsEnabled,
    legendforgeSoundEnabled,
    setLegendforgeSoundEnabled,
    legendforgeNotificationsEnabled,
  } = useAmazonsStore();

  useFocusEffect(
    useCallback(() => {
      getSetings();
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const charsData = await AsyncStorage.getItem('characters');
          const storiesData = await AsyncStorage.getItem('stories');
          setCharacters(charsData ? JSON.parse(charsData) : []);
          setStories(storiesData ? JSON.parse(storiesData) : []);
        } catch (e) {
          console.error('Failed to load characters/stories', e);
        }
      };
      fetchData();
    }, []),
  );

  const getSetings = async () => {
    try {
      const notifValue = await AsyncStorage.getItem('toggleNotifications');
      const sondValue = await AsyncStorage.getItem('toggleSound');

      if (notifValue !== null) {
        setLegendforgeNotificationsEnabled(JSON.parse(notifValue));
      }

      if (sondValue !== null) {
        setLegendforgeSoundEnabled(JSON.parse(sondValue));
      }
    } catch (error) {
      console.log('Error loading settings', error);
    }
  };

  useEffect(() => {
    playLegendforgeMusic(legendforgeMusIdx);

    return () => {
      if (sound) {
        sound.stop(() => {
          sound.release();
        });
      }
    };
  }, [legendforgeMusIdx]);

  const playLegendforgeMusic = index => {
    if (sound) {
      sound.stop(() => {
        sound.release();
      });
    }

    const legendforgeTrackPath = legendforgeTracksCycle[index];

    const newLegendforgeGameSound = new Sound(
      legendforgeTrackPath,

      Sound.MAIN_BUNDLE,

      error => {
        if (error) {
          console.log('Error =>ddd', error);
          return;
        }

        newLegendforgeGameSound.play(success => {
          if (success) {
            setLegendforgeMusIdx(
              prevIndex => (prevIndex + 1) % legendforgeTracksCycle.length,
            );
          } else {
            console.log('Error =>');
          }
        });
        setSound(newLegendforgeGameSound);
      },
    );
  };

  useEffect(() => {
    const setVolumeGameMusic = async () => {
      try {
        const savedMusicValu = await AsyncStorage.getItem('toggleSound');

        const isLegendforgeMusicOn = JSON.parse(savedMusicValu);

        setLegendforgeSoundEnabled(isLegendforgeMusicOn);
        if (sound) {
          sound.setVolume(isLegendforgeMusicOn ? 1 : 0);
        }
      } catch (error) {
        console.error('Error =>aaa', error);
      }
    };

    setVolumeGameMusic();
  }, [sound]);

  useEffect(() => {
    if (sound) {
      sound.setVolume(legendforgeSoundEnabled ? 1 : 0);
    }
  }, [legendforgeSoundEnabled]);

  const deleteCharacterHandler = id => {
    Alert.alert(
      'Delete Character',
      'This character will be permanently removed.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const updated = characters.filter(
                character => character.id !== id,
              );
              setCharacters(updated);

              legendforgeNotificationsEnabled &&
                Toast.show({
                  text1: 'Character deleted!',
                });

              await AsyncStorage.setItem('characters', JSON.stringify(updated));
            } catch (error) {
              console.error('Failed to delete =>', error);
            }
          },
        },
      ],
    );
  };

  const confirmDeleteStoryHandler = storyId => {
    Alert.alert('Delete Story', 'Are you sure you want to delete this story?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => deleteStoryHandler(storyId),
      },
    ]);
  };

  const deleteStoryHandler = async storyId => {
    try {
      const updatedStories = stories.filter(story => story.id !== storyId);
      setStories(updatedStories);
      await AsyncStorage.setItem('stories', JSON.stringify(updatedStories));
      legendforgeNotificationsEnabled &&
        Toast.show({ text1: 'Story deleted!' });
    } catch (error) {
      console.error('Failed to delete story =>', error);
    }
  };

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
          <Image source={require('../assets/images/forged.png')} />
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
            styles.templeLegendTabRow,
            {
              marginHorizontal: sidePad,
              marginTop: 16,
              borderRadius: 16,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.templeLegendTab}
            onPress={() => setActiveTab('characters')}
            activeOpacity={0.9}
          >
            {activeTab === 'characters' ? (
              <LinearGradient
                colors={['#FF9400', '#FAD51D']}
                style={[
                  styles.templeLegendTabActive,
                  { borderRadius: 14, height: 33 },
                ]}
              >
                <Text
                  style={[
                    styles.templeLegendTabText,
                    styles.templeLegendTabTextActive,
                    { fontSize: tabTextSize },
                  ]}
                >
                  The Temple of Amazons
                </Text>
              </LinearGradient>
            ) : (
              <View
                style={[
                  styles.templeLegendTabInactive,
                  { borderRadius: 14, height: 33 },
                ]}
              >
                <Text
                  style={[
                    styles.templeLegendTabText,
                    { fontSize: tabTextSize },
                  ]}
                >
                  The Temple of Amazons
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.templeLegendTab}
            onPress={() => setActiveTab('stories')}
            activeOpacity={0.9}
          >
            {activeTab === 'stories' ? (
              <LinearGradient
                colors={['#FF9400', '#FAD51D']}
                style={[
                  styles.templeLegendTabActive,
                  { borderRadius: 14, height: 33 },
                ]}
              >
                <Text
                  style={[
                    styles.templeLegendTabText,
                    styles.templeLegendTabTextActive,
                    { fontSize: tabTextSize },
                  ]}
                >
                  Legendforge
                </Text>
              </LinearGradient>
            ) : (
              <View
                style={[
                  styles.templeLegendTabInactive,
                  { borderRadius: 14, height: 33 },
                ]}
              >
                <Text
                  style={[
                    styles.templeLegendTabText,
                    { fontSize: tabTextSize },
                  ]}
                >
                  Legendforge
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {activeTab === 'characters' && (
          <>
            <View
              style={[
                styles.templeLegendCardWrapper,
                { paddingHorizontal: sidePad, marginTop: cardWrapperMarginTop },
              ]}
            >
              {(characters.length ? characters : DEFAULT_CHARACTERS).map(
                item => {
                  const isDefault = item.id.startsWith('default-char');
                  return (
                    <CharacterCard
                      key={item.id}
                      character={item}
                      onPress={() =>
                        isDefault
                          ? navigation.navigate('CreateCharacterScreen')
                          : navigation.navigate('CharacterDetailsScreen', {
                              character: item,
                            })
                      }
                      onLongPress={
                        isDefault
                          ? undefined
                          : () => deleteCharacterHandler(item.id)
                      }
                      paddingVertical={cardPadV}
                      marginBottom={cardMarginB}
                      borderRadius={cardRadius}
                      avatarSize={avatarSize}
                      avatarRadius={avatarRadius}
                      avatarMarginBottom={avatarMarginBottom}
                      nameFontSize={cardNameSize}
                      epithetPaddingHorizontal={epithetPadH}
                      epithetPaddingVertical={epithetPadV}
                      epithetBorderRadius={epithetRadius}
                      epithetFontSize={epithetTextSize}
                    />
                  );
                },
              )}
            </View>
          </>
        )}

        {activeTab === 'stories' && (
          <>
            {(stories.length ? stories : defaultStoriesToShow).map(item => {
              const isDefault = item.id.startsWith('default-story');
              return (
                <StoryCard
                  key={item.id}
                  story={item}
                  onPress={() =>
                    isDefault
                      ? navigation.navigate('CreateStoryScreen')
                      : navigation.navigate('LegendforgeDetailsScreen', {
                          story: item,
                        })
                  }
                  onLongPress={
                    isDefault
                      ? undefined
                      : () => confirmDeleteStoryHandler(item.id)
                  }
                  marginHorizontal={storyCardMarginH}
                  padding={storyCardPad}
                  marginTop={storyCardMarginT}
                  borderRadius={storyCardRadius}
                  titleFontSize={storyTitleSize}
                  dateFontSize={storyDateSize}
                  badgePaddingHorizontal={walkerBadgePadH}
                  badgePaddingVertical={walkerBadgePadV}
                  badgeBorderRadius={walkerBadgeRadius}
                  badgeTextFontSize={walkerTextSize}
                  avatarSize={walkerAvatarSize}
                  avatarOverlap={10}
                />
              );
            })}
          </>
        )}
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
  templeLegendIntroContainer: {
    alignItems: 'center',
  },
  templeLegendIntroBox: {
    backgroundColor: '#251F21',
    borderRadius: 16,
    padding: 16,
    paddingVertical: 24,
    width: '92%',
  },
  templeLegendIntroText: {
    color: primWhite,
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  templeLegendBeginButton: {
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendBeginText: {
    color: primWhite,
    fontSize: 16,
    fontWeight: '600',
  },
  templeLegendCardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  templeLegendTabRow: {
    flexDirection: 'row',
    backgroundColor: '#2B2B2B',
    borderRadius: 26,
    padding: 4,
  },
  templeLegendTab: {
    flex: 1,
  },
  templeLegendTabInactive: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendTabActive: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendTabText: {
    color: '#F3F3F3',
  },
  templeLegendTabTextActive: {
    color: '#111111',
    fontWeight: '500',
  },
});

export default CharactersScreen;
