import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useAmazonsStore } from '../LegendforgeStore/amazonsCntxt';
import Toast from 'react-native-toast-message';

const BUTTON_GRADIENT = ['#FF9400', '#FAD51D'];
const mainWhite = '#FFFFFF';
const MAX_WALKERS = 3;
const bgImage = require('../assets/images/main_background.png');

const CreateStoryScreen = () => {
  const navigation = useNavigation();
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
    const loadCharacters = async () => {
      try {
        const saved = await AsyncStorage.getItem('characters');
        const charactersParsed = saved ? JSON.parse(saved) : [];
        setCharacters(charactersParsed);

        console.log('loaded !');
      } catch (error) {
        console.error('Failed get characters:', error);
      }
    };
    loadCharacters();
  }, []);

  const formatDate = () => {
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

  const updateWalker = (id, name) => {
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

  const removeWalker = id => {
    setDirty(true);
    setWalkers(prev => prev.filter(w => w.id !== id));

    console.log('removed');
  };

  const onStorySave = async () => {
    try {
      const storyData = {
        id: Date.now().toString(),
        title,
        story,
        savedAt: formatDate(),
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
  const onExit = () => {
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
    <ImageBackground source={bgImage} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, flexGrow: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Open a New Path</Text>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={onExit}
            activeOpacity={0.7}
          >
            <Image source={require('../assets/icons/iconamoon_close.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Who will walk this road?</Text>
        {walkers.map((w, index) => (
          <View key={w.id}>
            <View style={styles.inputBox}>
              <View style={styles.selector}>
                <TextInput
                  value={w.name}
                  onChangeText={v => updateWalker(w.id, v)}
                  placeholder="Enter a name"
                  placeholderTextColor="#FFFFFF80"
                  style={styles.selectorInput}
                />
                {characters.length > 0 && (
                  <TouchableOpacity
                    style={styles.arrowSelector}
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
                  style={styles.remove}
                  onPress={() => removeWalker(w.id)}
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
                    style={styles.dropdownItem}
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
          <TouchableOpacity style={styles.plus} onPress={addWalker}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={title}
          onChangeText={v => {
            setDirty(true);
            setTitle(v);
          }}
          style={styles.input}
        />
        <Text style={styles.label}>Story Text</Text>
        <TextInput
          value={story}
          onChangeText={v => {
            setDirty(true);
            setStory(v);
          }}
          style={[styles.input, styles.textarea]}
          multiline
        />
        <TouchableOpacity disabled={!canSave} onPress={onStorySave}>
          <LinearGradient
            colors={canSave ? BUTTON_GRADIENT : ['#444', '#444']}
            style={styles.saveBtn}
          >
            <Text style={styles.saveText}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>
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
  label: {
    color: mainWhite,
    marginTop: 24,
    marginBottom: 6,
    paddingHorizontal: 16,
  },
  arrowSelector: {
    borderRadius: 16,
    backgroundColor: '#FF9400',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selector: {
    backgroundColor: '#1F1B1D',
    borderRadius: 14,
    padding: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  selectorInput: { color: mainWhite, fontSize: 16, flex: 1 },
  remove: {
    backgroundColor: '#FF383C',
    width: 40,
    height: 40,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  dropdown: {
    marginHorizontal: 16,
    backgroundColor: '#1F1B1D',
    borderRadius: 14,
    marginBottom: 8,
    top: -5,
  },
  dropdownItem: {
    padding: 14,
  },
  dropdownText: { color: mainWhite },
  plus: {
    alignSelf: 'center',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  plusText: { color: mainWhite, fontSize: 24 },
  input: {
    marginHorizontal: 16,
    backgroundColor: '#1F1B1D',
    borderRadius: 14,
    padding: 16,
    color: mainWhite,
  },
  textarea: { height: 160, textAlignVertical: 'top' },
  saveBtn: {
    height: 56,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 32,
  },
  saveText: { color: mainWhite, fontSize: 16, fontWeight: '600' },
});
export default CreateStoryScreen;
