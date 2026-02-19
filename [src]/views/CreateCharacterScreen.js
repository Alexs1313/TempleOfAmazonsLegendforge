import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateCharacterIdentityStep from '../components/CreateCharacterIdentityStep';
import CreateCharacterVoiceDestinyStep from '../components/CreateCharacterVoiceDestinyStep';
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';
import { useAmazonsStore } from '../store/amazonsCntxt';
import Toast from 'react-native-toast-message';

const GRADIENT_BG = ['rgb(67, 33, 11)', 'rgb(10, 8, 10)'];

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
  const { sidePad, pick: pickSize } = useAdaptiveSizes();

  // sizes
  const headerPadT = pickSize(44, 52, 60);
  const titleSize = pickSize(18, 20, 22);
  const closeBtnSize = pickSize(48, 52, 56);
  const closeBtnRadius = pickSize(10, 11, 12);
  const progressMarginH = pickSize(24, 28, 32);
  const progressMarginT = pickSize(20, 23, 26);
  const progressMarginB = pickSize(16, 18, 20);
  const dotSize = pickSize(28, 30, 32);
  const blockPad = pickSize(12, 14, 16);
  const fieldMarginB = pickSize(12, 14, 16);
  const labelSize = pickSize(12, 13, 14);
  const labelMarginB = pickSize(4, 5, 6);
  const inputWrapRadius = pickSize(12, 13, 14);
  const inputPadH = pickSize(10, 11, 12);
  const inputSize = pickSize(14, 15, 16);
  const inputPadV = pickSize(12, 14, 16);
  const shuffleSize = pickSize(36, 38, 40);
  const shuffleRadius = pickSize(14, 15, 16);
  const imageBoxPadV = pickSize(20, 23, 26);
  const imageBoxRadius = pickSize(16, 18, 20);
  const imageBoxMarginB = pickSize(18, 21, 24);
  const imageCircleSize = pickSize(140, 152, 165);
  const primaryBtnHeight = pickSize(48, 52, 56);
  const primaryBtnRadius = pickSize(14, 16, 18);
  const primaryBtnMarginT = pickSize(10, 11, 12);
  const primaryTextSize = pickSize(14, 15, 16);
  const blockMarginB = pickSize(20, 22, 24);
  const step5MarginB = pickSize(32, 36, 40);

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

  const pickImage = async () => {
    launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 }, response => {
      console.log('picker press');
      if (response.didCancel) return;
      if (response.errorCode) return;

      const asset = response.assets?.[0];
      if (!asset?.uri) return;

      setDirty(true);
      setCharacter(prev => ({ ...prev, image: asset.uri }));
    });
  };

  // const pickImage = async () => {
  //   try {
  //     console.log('PICK PRESS');
  //     const res = await launchImageLibrary({
  //       mediaType: 'photo',
  //       selectionLimit: 1,
  //     });

  //     console.log('PICK RESULT =>', JSON.stringify(res, null, 2));

  //     if (res.didCancel) return;
  //     if (res.errorCode) {
  //       Alert.alert(
  //         'Picker error',
  //         `${res.errorCode}\n${res.errorMessage ?? ''}`,
  //       );
  //       return;
  //     }

  //     const uri = res.assets?.[0]?.uri;
  //     if (!uri) return;

  //     setCharacter(prev => ({ ...prev, image: uri }));
  //   } catch (e) {
  //     console.log('PICK EXCEPTION', e);
  //     Alert.alert('Picker exception', String(e));
  //   }
  // };

  const formatDateHandler = () => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date().toLocaleDateString('en-GB', options);
  };

  const saveCharacterHendler = async () => {
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
        savedAt: formatDateHandler(),
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

  const exitWithoutSavingHandler = () => {
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

  const handleShuffle = key => setField(key, pick(legenforgeNames[key]));

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
          <Text style={[styles.title, { fontSize: titleSize }]}>
            {step < 5 ? 'Identity' : 'Voice & Destiny'}
          </Text>
          <TouchableOpacity
            style={[
              styles.closeBtn,
              {
                width: closeBtnSize,
                height: closeBtnSize,
                borderRadius: closeBtnRadius,
              },
            ]}
            onPress={exitWithoutSavingHandler}
            activeOpacity={0.7}
          >
            <Image source={require('../assets/icons/iconamoon_close.png')} />
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.progressRow,
            {
              marginHorizontal: progressMarginH,
              marginTop: progressMarginT,
              marginBottom: progressMarginB,
            },
          ]}
        >
          {progress.map((done, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                { width: dotSize, height: dotSize },
                done && styles.dotDone,
                step === i + 1 && styles.dotActive,
              ]}
            >
              {done && <Image source={require('../assets/icons/check.png')} />}
            </View>
          ))}
        </View>

        {step < 5 && (
          <CreateCharacterIdentityStep
            character={character}
            setField={setField}
            onShuffle={handleShuffle}
            canNext={canNext}
            onNext={() => setStep(5)}
            padding={blockPad}
            fieldMarginBottom={fieldMarginB}
            labelFontSize={labelSize}
            labelMarginBottom={labelMarginB}
            inputWrapRadius={inputWrapRadius}
            inputPadH={inputPadH}
            inputFontSize={inputSize}
            inputPadV={inputPadV}
            shuffleSize={shuffleSize}
            shuffleRadius={shuffleRadius}
            btnHeight={primaryBtnHeight}
            btnRadius={primaryBtnRadius}
            btnMarginTop={primaryBtnMarginT}
            btnFontSize={primaryTextSize}
            blockMarginBottom={blockMarginB}
          />
        )}

        {step === 5 && (
          <CreateCharacterVoiceDestinyStep
            character={character}
            setField={setField}
            onShuffle={handleShuffle}
            onPickImage={pickImage}
            canSave={canSave}
            onSave={saveCharacterHendler}
            onPrevious={() => setStep(1)}
            padding={blockPad}
            fieldMarginBottom={fieldMarginB}
            labelFontSize={labelSize}
            labelMarginBottom={labelMarginB}
            inputWrapRadius={inputWrapRadius}
            inputPadH={inputPadH}
            inputFontSize={inputSize}
            inputPadV={inputPadV}
            shuffleSize={shuffleSize}
            shuffleRadius={shuffleRadius}
            imageBoxPadV={imageBoxPadV}
            imageBoxRadius={imageBoxRadius}
            imageBoxMarginB={imageBoxMarginB}
            imageCircleSize={imageCircleSize}
            btnHeight={primaryBtnHeight}
            btnRadius={primaryBtnRadius}
            btnMarginTop={primaryBtnMarginT}
            btnFontSize={primaryTextSize}
            footerMarginBottom={step5MarginB}
          />
        )}
      </ScrollView>
    </LinearGradient>
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
});

export default CreateCharacterScreen;
