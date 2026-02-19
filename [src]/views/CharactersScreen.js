import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CharacterCard from '../components/CharacterCard';
import GradientButton from '../components/GradientButton';
import Sound from 'react-native-sound';

import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';
import { useAmazonsStore } from '../store/amazonsCntxt';
import Toast from 'react-native-toast-message';

const primWhite = '#FFFFFF';

const CharactersScreen = () => {
  const { height, sidePad, scrollBottom, pick, xS, s } = useAdaptiveSizes();

  // sizes
  const introBoxPad = pick(12, 14, 16);
  const introBoxPadV = pick(16, 20, 24);
  const introBoxRadius = pick(12, 14, 16);
  const introTextSize = pick(13, 14, 16);
  const introTextMargin = pick(10, 12, 16);
  const btnHeight = pick(44, 48, 52);
  const btnRadius = pick(12, 14, 16);
  const btnTextSize = pick(14, 15, 16);
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
  const titleMarginB = xS ? height * 0.02 : s ? height * 0.025 : height * 0.03;
  const introTopPad = xS ? height * 0.05 : s ? height * 0.06 : height * 0.08;
  const legendforgeImgW = pick(200, 228, 258);
  const legendforgeImgH = pick(208, 238, 268);
  const createImgLeft = pick(28, 32, 36);
  const cardWrapperMarginTop = pick(16, 20, 24);
  const avatarMarginBottom = pick(6, 8, 8);

  const navigation = useNavigation();

  // states
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
      getSetings();
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const fetcCharakters = async () => {
        const data = await AsyncStorage.getItem('characters');
        setCharacters(data ? JSON.parse(data) : []);
      };
      fetcCharakters();
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

  return (
    <LinearGradient
      colors={['rgb(67, 33, 11)', 'rgb(10, 8, 10)']}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: scrollBottom }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.introContainer,
            { paddingTop: introTopPad, paddingHorizontal: sidePad },
          ]}
        >
          <Image
            source={require('../assets/images/char_title.png')}
            style={{ marginBottom: titleMarginB }}
          />

          {Platform.OS === 'ios' ? (
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/images/create_1.png')}
                style={{ left: createImgLeft }}
              />
              <Image
                source={require('../assets/images/create_2.png')}
                style={{ left: -createImgLeft }}
              />
            </View>
          ) : (
            <Image
              source={require('../assets/images/legendforge.png')}
              style={{ width: legendforgeImgW, height: legendforgeImgH }}
              resizeMode="contain"
            />
          )}

          <View
            style={[
              styles.introBox,
              {
                padding: introBoxPad,
                paddingVertical: introBoxPadV,
                width: xS ? '94%' : '92%',
                borderRadius: introBoxRadius,
              },
            ]}
          >
            <Text
              style={[
                styles.introText,
                { fontSize: introTextSize, marginBottom: introTextMargin },
              ]}
            >
              Not every warrior becomes a legend. Choose her carefully
            </Text>

            <GradientButton
              label="Begin Forging"
              onPress={() => navigation.navigate('CreateCharacterScreen')}
              height={btnHeight}
              borderRadius={btnRadius}
              fontSize={btnTextSize}
            />
          </View>
        </View>

        <View
          style={[
            styles.cardWrapper,
            { paddingHorizontal: sidePad, marginTop: cardWrapperMarginTop },
          ]}
        >
          {characters.map(item => (
            <CharacterCard
              key={item.id}
              character={item}
              onPress={() =>
                navigation.navigate('CharacterDetailsScreen', {
                  character: item,
                })
              }
              onLongPress={() => deleteCharacterHandler(item.id)}
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
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
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
  },
});

export default CharactersScreen;
