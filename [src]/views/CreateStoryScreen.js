import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';
import { useAmazonsStore } from '../store/amazonsCntxt';
import Toast from 'react-native-toast-message';

const BUTTON_GRADIENT = ['#FF9400', '#FAD51D'];
const mainWhite = '#FFFFFF';
const MAX_WALKERS = 3;
const GRADIENT_BG = ['rgb(67, 33, 11)', 'rgb(10, 8, 10)'];

const CreateStoryScreen = () => {
  const navigation = useNavigation();

  // sizes
  const { sidePad, scrollBottom, pick } = useAdaptiveSizes();
  const headerPadT = pick(44, 52, 60);
  const titleSize = pick(18, 20, 22);
  const closeBtnSize = pick(48, 52, 56);
  const closeBtnRadius = pick(10, 11, 12);
  const labelMarginT = pick(18, 21, 24);
  const labelMarginB = pick(4, 5, 6);
  const arrowBtnSize = pick(36, 38, 40);
  const selectorRadius = pick(12, 13, 14);
  const selectorPad = pick(10, 11, 12);
  const selectorInputSize = pick(14, 15, 16);
  const removeBtnSize = pick(36, 38, 40);
  const removeBtnRadius = pick(14, 15, 16);
  const inputBoxMarginB = pick(6, 7, 8);
  const dropdownItemPad = pick(12, 13, 14);
  const plusSize = pick(40, 42, 44);
  const plusRadius = pick(20, 21, 22);
  const plusMarginV = pick(10, 11, 12);
  const plusTextSize = pick(20, 22, 24);
  const inputPad = pick(12, 14, 16);
  const inputRadius = pick(12, 13, 14);
  const textareaHeight = pick(140, 150, 160);
  const saveBtnHeight = pick(48, 52, 56);
  const saveBtnRadius = pick(14, 16, 18);
  const saveBtnMarginT = pick(24, 28, 32);
  const saveBtnMarginH = sidePad;
  const saveTextSize = pick(14, 15, 16);

  // states
  const [characters, setCharacters] = useState([]);
  const [walkers, setWalkers] = useState([
    { id: 'default', type: 'custom', name: '', image: null },
  ]);
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [dirty, setDirty] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const { legendforgeNotificationsEnabled } = useAmazonsStore();

  useEffect(() => {
    const fetcCheracters = async () => {
      try {
        const saved = await AsyncStorage.getItem('characters');
        const charactersParsed = saved ? JSON.parse(saved) : [];
        setCharacters(charactersParsed);

        console.log('loaded !');
      } catch (error) {
        console.error('Failed get characters:', error);
      }
    };
    fetcCheracters();
  }, []);

  const formatDateHandler = () => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date().toLocaleDateString('en-GB', options);
  };
  const canSave =
    title.trim() && story.trim() && walkers.some(w => w.name.trim());
  const addWalker = () => {
    if (walkers.length >= MAX_WALKERS) {
      return;
    }
    setDirty(true);
    setWalkers(prevWalkers => [
      ...prevWalkers,
      { id: Date.now().toString(), type: 'custom', name: '', image: null },
    ]);
  };

  const updateWolker = (id, name) => {
    setDirty(true);
    setWalkers(prevWalkers =>
      prevWalkers.map(walker =>
        walker.id === id
          ? { ...walker, name, type: 'custom', image: null }
          : walker,
      ),
    );

    console.log('updated');
  };

  const selectCharacter = (index, char) => {
    setDirty(true);
    setWalkers(prevWalkers =>
      prevWalkers.map((walker, i) =>
        i === index
          ? {
              id: char.id,
              type: 'character',
              name: char.name,
              image: char.image || null,
            }
          : walker,
      ),
    );
    setDropdownIndex(null);
  };

  const remuvWalker = id => {
    setDirty(true);
    setWalkers(prev => prev.filter(w => w.id !== id));

    console.log('removed');
  };

  const saveStoryHendler = async () => {
    try {
      const storyData = {
        id: Date.now().toString(),
        title,
        story,
        savedAt: formatDateHandler(),
        walkers: walkers.map(walker => ({
          id: walker.id,
          name: walker.name,
          image: walker.image || null,
          epithet: walker.epithet || null,
        })),
      };
      const stored = await AsyncStorage.getItem('stories');
      const stories = stored ? JSON.parse(stored) : [];
      const updatedStories = [...stories, storyData];
      await AsyncStorage.setItem('stories', JSON.stringify(updatedStories));
      setDirty(false);

      legendforgeNotificationsEnabled &&
        Toast.show({
          text1: 'Story saved!',
        });
      console.log('saved story!!');
      navigation.goBack();
    } catch (error) {
      console.error('Failed to save story ==>', error);
    }
  };
  const exitWithautSavingHandler = () => {
    if (!dirty) return navigation.goBack();
    Alert.alert(
      'Story Creation Incomplete',
      'You haven’t finished creating your story yet. Are you sure you want to exit? All progress will be lost',
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
  return (
    <LinearGradient colors={GRADIENT_BG} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: scrollBottom, flexGrow: 1 }}
      >
        <View
          style={[
            styles.header,
            { paddingTop: headerPadT, paddingHorizontal: sidePad },
          ]}
        >
          <Text style={[styles.title, { fontSize: titleSize }]}>
            Open a New Path
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
            onPress={exitWithautSavingHandler}
            activeOpacity={0.7}
          >
            <Image source={require('../assets/icons/iconamoon_close.png')} />
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.label,
            {
              marginTop: labelMarginT,
              marginBottom: labelMarginB,
              paddingHorizontal: sidePad,
            },
          ]}
        >
          Who will walk this road?
        </Text>
        {walkers.map((w, index) => (
          <View key={w.id}>
            <View
              style={[
                styles.inputBox,
                { paddingHorizontal: sidePad, marginBottom: inputBoxMarginB },
              ]}
            >
              <View
                style={[
                  styles.selector,
                  {
                    borderRadius: selectorRadius,
                    padding: selectorPad,
                    paddingHorizontal: selectorPad,
                  },
                ]}
              >
                <TextInput
                  value={w.name}
                  onChangeText={v => updateWolker(w.id, v)}
                  placeholder="Enter a name"
                  placeholderTextColor="#FFFFFF80"
                  style={[
                    styles.selectorInput,
                    { fontSize: selectorInputSize },
                  ]}
                />
                {characters.length > 0 && (
                  <TouchableOpacity
                    style={[
                      styles.arrowSelector,
                      { width: arrowBtnSize, height: arrowBtnSize },
                    ]}
                    onPress={() =>
                      setDropdownIndex(dropdownIndex === index ? null : index)
                    }
                  >
                    <Image source={require('../assets/icons/arrow_down.png')} />
                  </TouchableOpacity>
                )}
              </View>
              {index > 0 && (
                <TouchableOpacity
                  style={[
                    styles.remove,
                    {
                      width: removeBtnSize,
                      height: removeBtnSize,
                      borderRadius: removeBtnRadius,
                    },
                  ]}
                  onPress={() => remuvWalker(w.id)}
                >
                  <Image source={require('../assets/icons/mdi_bin.png')} />
                </TouchableOpacity>
              )}
            </View>
            {dropdownIndex === index && (
              <View style={styles.dropdown}>
                {characters.map(char => (
                  <TouchableOpacity
                    key={char.id}
                    style={[styles.dropdownItem, { padding: dropdownItemPad }]}
                    onPress={() => selectCharacter(index, char)}
                  >
                    <Text style={styles.dropdownText}>{char.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}
        {walkers.length < MAX_WALKERS && (
          <TouchableOpacity
            style={[
              styles.plus,
              {
                width: plusSize,
                height: plusSize,
                borderRadius: plusRadius,
                marginVertical: plusMarginV,
              },
            ]}
            onPress={addWalker}
          >
            <Text style={[styles.plusText, { fontSize: plusTextSize }]}>+</Text>
          </TouchableOpacity>
        )}
        <Text
          style={[
            styles.label,
            {
              marginTop: labelMarginT,
              marginBottom: labelMarginB,
              paddingHorizontal: sidePad,
            },
          ]}
        >
          Title
        </Text>
        <TextInput
          value={title}
          onChangeText={v => {
            setDirty(true);
            setTitle(v);
          }}
          style={[
            styles.input,
            {
              marginHorizontal: sidePad,
              padding: inputPad,
              borderRadius: inputRadius,
            },
          ]}
        />
        <Text
          style={[
            styles.label,
            {
              marginTop: labelMarginT,
              marginBottom: labelMarginB,
              paddingHorizontal: sidePad,
            },
          ]}
        >
          Story Text
        </Text>
        <TextInput
          value={story}
          onChangeText={v => {
            setDirty(true);
            setStory(v);
          }}
          style={[
            styles.input,
            styles.textarea,
            {
              marginHorizontal: sidePad,
              padding: inputPad,
              borderRadius: inputRadius,
              height: textareaHeight,
            },
          ]}
          multiline
        />
        <TouchableOpacity disabled={!canSave} onPress={saveStoryHendler}>
          <LinearGradient
            colors={canSave ? BUTTON_GRADIENT : ['#444', '#444']}
            style={[
              styles.saveBtn,
              {
                height: saveBtnHeight,
                borderRadius: saveBtnRadius,
                marginTop: saveBtnMarginT,
                marginHorizontal: saveBtnMarginH,
              },
            ]}
          >
            <Text style={[styles.saveText, { fontSize: saveTextSize }]}>
              Save
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { color: '#FFB907', fontWeight: '700' },
  closeBtn: {
    backgroundColor: '#251F21',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: mainWhite,
  },
  arrowSelector: {
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  selector: {
    backgroundColor: '#1F1B1D',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  selectorInput: { color: mainWhite, flex: 1 },
  remove: {
    backgroundColor: '#FF383C',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    marginHorizontal: 16,
    backgroundColor: '#1F1B1D',
    borderRadius: 14,
    marginBottom: 8,
    top: -5,
  },
  dropdownItem: {},
  dropdownText: { color: mainWhite },
  plus: {
    alignSelf: 'center',
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: { color: mainWhite },
  input: {
    backgroundColor: '#1F1B1D',
    color: mainWhite,
  },
  textarea: { textAlignVertical: 'top' },
  saveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: { color: mainWhite, fontWeight: '600' },
});
export default CreateStoryScreen;
