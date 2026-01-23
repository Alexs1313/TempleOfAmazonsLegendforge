import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAmazonsStore } from '../LegendforgeStore/amazonsCntxt';
import Toast from 'react-native-toast-message';

const BUTTON_GRADIENT = ['#FF9400', '#FAD51D'];
const bgImage = require('../assets/images/main_background.png');

const legenforgeNames = {
  name: [
    'Lysandra',
    'Thaleia',
    'Kallisto',
    'Eurynome',
    'Phaedra',
    'Alectra',
    'Ianthe',
    'Myrina',
  ],
  epithet: [
    'the Stormbearer',
    'the Iron Oath',
    'the Night Arrow',
    'the Dawnblade',
    'the Lionhearted',
    'the Silent Flame',
    'the Blood Orchid',
    'the Sea-Watcher',
  ],
  homeland: [
    'Themiscyra',
    'The Aegean Coast',
    'Arcadian Highlands',
    'Thracian Frontier',
    'The Marble Isles',
    'The Ashen Steppe',
    'The Cedar Valleys',
    'The Sunlit Ravines',
  ],
  tribe: [
    'The Spear Circle',
    'The Moon Guard',
    'The Laurel Court',
    'The Bronze Sisterhood',
    'The River Wardens',
    'The Ashbound',
    'The Falcon Banner',
    'The Iron Vow',
  ],
  voice: [
    'Precise and formal',
    'Quiet and cutting',
    'Warm but commanding',
    'Blunt and honest',
    'Poetic and symbolic',
    'Cold and strategic',
    'Playful under pressure',
    'Calm like a judge',
  ],
  destiny: [
    'The Temple will demand a sacrifice',
    'A relic will choose her, not the other way around',
    'She will face a sister’s betrayal',
    'A god will test her oath',
    'She must lead a forbidden expedition',
    'Her name will be erased—unless she writes it in fire',
    'Peace will cost her everything',
    'The Oracle has already seen her end',
  ],
};

const pick = arr => arr[Math.floor(Math.random() * arr.length)];

const CreateCharacterScreen = () => {
  const [step, setStep] = useState(1);
  const [dirty, setDirty] = useState(false);
  const [character, setCharacter] = useState({
    name: '',
    epithet: '',
    homeland: '',
    tribe: '',
    voice: '',
    destiny: '',
    image: null,
  });
  const navigation = useNavigation();
  const { legendforgeNotificationsEnabled } = useAmazonsStore();

  const setField = (key, value) => {
    setDirty(true);
    setCharacter(prev => ({ ...prev, [key]: value }));
  };

  const progress = [
    !!character.name,
    !!character.epithet,
    !!character.homeland,
    !!character.tribe,
    !!(character.voice && character.destiny),
  ];

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      try {
        if (response.didCancel || response.errorCode) {
          return;
        }

        const uri = response.assets?.[0]?.uri;
        if (!uri) {
          return;
        }

        setDirty(true);
        setCharacter(prev => ({ ...prev, image: uri }));
      } catch (error) {
        console.error('Error picker ==>', error);
      }
    });
  };

  const formatDate = () => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date().toLocaleDateString('en-GB', options);
  };

  const onSaveCharacter = async () => {
    try {
      const newCharacter = {
        id: Date.now().toString(),
        name: character.name,
        epithet: character.epithet,
        homeland: character.homeland,
        tribe: character.tribe,
        voice: character.voice,
        destiny: character.destiny,
        image: character.image,
        savedAt: formatDate(),
      };

      const stored = await AsyncStorage.getItem('characters');
      const characters = stored ? JSON.parse(stored) : [];

      const updatedCharacters = [...characters, newCharacter];

      await AsyncStorage.setItem(
        'characters',
        JSON.stringify(updatedCharacters),
      );

      setDirty(false);

      legendforgeNotificationsEnabled &&
        Toast.show({
          text1: 'Character saved!',
        });

      navigation.goBack();
    } catch (error) {
      console.error('Failed to save', error);
    }
  };

  const onExit = () => {
    if (!dirty) return navigation.goBack();

    Alert.alert(
      'Character Creation Incomplete',
      'You haven’t finished creating your character yet. Are you sure you want to exit? All progress will be lost',
      [
        { text: 'Continue Editing', style: 'cancel' },
        {
          text: 'Exit Without Saving',
          style: 'destructive',
          onPress: () => navigation.goBack(),
        },
      ],
    );
  };

  const canNext =
    character.name &&
    character.epithet &&
    character.homeland &&
    character.tribe;

  const canSave = character.voice && character.destiny;

  return (
    <ImageBackground source={bgImage} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>
            {step < 5 ? 'Identity' : 'Voice & Destiny'}
          </Text>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={onExit}
            activeOpacity={0.7}
          >
            <Image source={require('../assets/icons/iconamoon_close.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.progressRow}>
          {progress.map((done, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                done && styles.dotDone,
                step === i + 1 && styles.dotActive,
              ]}
            >
              {done && <Image source={require('../assets/icons/check.png')} />}
            </View>
          ))}
        </View>

        {step < 5 && (
          <View style={styles.block}>
            {[
              ['Name', 'name'],
              ['Epithet (Title)', 'epithet'],
              ['Homeland', 'homeland'],
              ['Tribe / Order', 'tribe'],
            ].map(([label, key], index) => (
              <View key={key} style={styles.field}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.inputWrap}>
                  <TextInput
                    value={character[key]}
                    onChangeText={v => setField(key, v)}
                    style={styles.input}
                    maxLength={30}
                  />
                  <TouchableOpacity
                    style={styles.shuffle}
                    onPress={() => setField(key, pick(legenforgeNames[key]))}
                  >
                    <Image source={require('../assets/icons/shuffle.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            <View
              style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 24 }}
            >
              <TouchableOpacity
                disabled={!canNext}
                onPress={() => setStep(5)}
                activeOpacity={0.7}
              >
                <LinearGradient
                  colors={canNext ? BUTTON_GRADIENT : ['#444', '#444']}
                  style={styles.primaryBtn}
                >
                  <Text style={styles.primaryText}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {step === 5 && (
          <View style={styles.block}>
            {[
              ['Voice (How she speaks)', 'voice'],
              ['Destiny Thread (Story Hook)', 'destiny'],
            ].map(([label, key]) => (
              <View key={key} style={styles.field}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.inputWrap}>
                  <TextInput
                    value={character[key]}
                    onChangeText={v => setField(key, v)}
                    style={styles.input}
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.shuffle}
                    onPress={() => setField(key, pick(legenforgeNames[key]))}
                  >
                    <Image source={require('../assets/icons/shuffle.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            <View style={styles.imageBox}>
              <TouchableOpacity
                style={styles.imageCircle}
                onPress={pickImage}
                activeOpacity={0.7}
              >
                {character.image ? (
                  <Image
                    source={{ uri: character.image }}
                    style={styles.image}
                  />
                ) : (
                  <>
                    <Image
                      source={require('../assets/icons/solar_gallery-bold.png')}
                    />
                    <Text style={styles.upload}>Upload</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 40 }}
            >
              <TouchableOpacity
                disabled={!canSave}
                onPress={onSaveCharacter}
                activeOpacity={0.7}
              >
                <LinearGradient
                  colors={canSave ? BUTTON_GRADIENT : ['#444', '#444']}
                  style={styles.primaryBtn}
                >
                  <Text style={styles.primaryText}>Save</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setStep(1)}>
                <Text style={styles.prev}>Previous</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { color: '#FFB907', fontSize: 22, fontWeight: '700' },
  closeBtn: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#251F21',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: { color: '#fff', fontSize: 18 },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    marginTop: 26,
    marginBottom: 20,
  },
  dot: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotActive: {
    borderWidth: 2,
    borderColor: '#FF9400',
  },
  dotDone: {
    backgroundColor: '#FF9400',
    borderWidth: 2,
    borderColor: '#FF9400',
  },
  block: { padding: 16, flex: 1 },
  field: { marginBottom: 16 },
  label: { color: '#fff', marginBottom: 6, fontSize: 14, fontWeight: '400' },
  inputWrap: {
    flexDirection: 'row',
    backgroundColor: '#1F1B1D',
    borderRadius: 14,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: { flex: 1, color: '#fff', fontSize: 16, paddingVertical: 16 },
  shuffle: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shuffleText: { color: '#fff' },
  imageBox: {
    backgroundColor: '#1F1B1D',
    borderRadius: 20,
    paddingVertical: 26,
    alignItems: 'center',
    marginBottom: 24,
  },
  imageCircle: {
    width: 165,
    height: 165,
    borderRadius: 100,
    backgroundColor: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%' },
  upload: { color: '#fff', marginTop: 6 },
  primaryBtn: {
    height: 56,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  primaryText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  prev: { textAlign: 'center', color: '#FFFFFF80', marginTop: 24 },
});

export default CreateCharacterScreen;
