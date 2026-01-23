import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback, useEffect } from 'react';
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
import Sound from 'react-native-sound';

import { useAmazonsStore } from '../LegendforgeStore/amazonsCntxt';
import Toast from 'react-native-toast-message';

const BUTTON_GRADIENT = ['#FF9400', '#FAD51D'];
const primWhite = '#FFFFFF';
const bgImage = require('../assets/images/main_background.png');

const CharactersScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [characters, setCharacters] = useState([]);
  const [legendforgeMusIdx, setLegendforgeMusIdx] = useState(0);
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
      loadSettings();
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const load = async () => {
        const data = await AsyncStorage.getItem('characters');
        setCharacters(data ? JSON.parse(data) : []);
      };
      load();
    }, []),
  );

  const loadSettings = async () => {
    try {
      const notifValue = await AsyncStorage.getItem('toggleNotifications');
      const soundValue = await AsyncStorage.getItem('toggleSound');

      if (notifValue !== null) {
        setLegendforgeNotificationsEnabled(JSON.parse(notifValue));
      }

      if (soundValue !== null) {
        setLegendforgeSoundEnabled(JSON.parse(soundValue));
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
          console.log('Error =>', error);
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
        const legendforgeMusicValue = await AsyncStorage.getItem('toggleSound');

        const isLegendforgeMusicOn = JSON.parse(legendforgeMusicValue);

        setLegendforgeSoundEnabled(isLegendforgeMusicOn);
        if (sound) {
          sound.setVolume(isLegendforgeMusicOn ? 1 : 0);
        }
      } catch (error) {
        console.error('Error =>', error);
      }
    };

    setVolumeGameMusic();
  }, [sound]);

  useEffect(() => {
    if (sound) {
      sound.setVolume(legendforgeSoundEnabled ? 1 : 0);
    }
  }, [legendforgeSoundEnabled]);

  const handleDelete = id => {
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

  return (
    <ImageBackground source={bgImage} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.introContainer, { paddingTop: height * 0.08 }]}>
          <Image
            source={require('../assets/images/char_title.png')}
            style={{ marginBottom: height * 0.03 }}
          />

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../assets/images/create_1.png')}
              style={{ left: 36 }}
            />
            <Image
              source={require('../assets/images/create_2.png')}
              style={{ left: -36 }}
            />
          </View>

          <View style={styles.introBox}>
            <Text style={styles.introText}>
              Not every warrior becomes a legend. Choose her carefully
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('CreateCharacterScreen')}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={BUTTON_GRADIENT}
                style={styles.beginButton}
              >
                <Text style={styles.beginText}>Begin Forging</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardWrapper}>
          {characters.map(item => (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.85}
              key={item.id}
              onLongPress={() => handleDelete(item.id)}
              onPress={() =>
                navigation.navigate('CharacterDetailsScreen', {
                  character: item,
                })
              }
            >
              <View style={styles.avatarWrap}>
                <Image
                  source={
                    item.image
                      ? { uri: item.image }
                      : require('../assets/images/placeholder.png')
                  }
                  style={styles.avatar}
                />
              </View>

              <Text style={styles.cardName}>{item.name}</Text>
              <View style={styles.epithetBadge}>
                <Text style={styles.epithetText}>{item.epithet}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
    width: '92%',
  },
  introText: {
    color: primWhite,
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  beginButton: {
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  beginText: {
    color: primWhite,
    fontSize: 16,
    fontWeight: '600',
  },
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 24,
  },
  card: {
    width: '48%',
    backgroundColor: '#2B2B2B',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarWrap: {
    width: 97,
    height: 97,
    borderRadius: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 97,
    height: 97,
    borderRadius: 54,
    borderWidth: 1,
    borderColor: primWhite,
  },
  cardName: {
    color: primWhite,
    fontSize: 16,
    fontWeight: '500',
  },
  epithetBadge: {
    backgroundColor: '#FF940080',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 5,
  },
  epithetText: {
    color: primWhite,
    fontSize: 12,
    fontWeight: '400',
  },
});

export default CharactersScreen;
