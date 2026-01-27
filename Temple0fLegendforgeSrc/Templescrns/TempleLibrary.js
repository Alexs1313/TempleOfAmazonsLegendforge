import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { libraryStories } from '../Templedta/libraryStories';

const bgImage = require('../assets/images/main_background.png');

const TempleLibraryScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ImageBackground source={bgImage} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, { paddingTop: height * 0.08 }]}>
          <Image
            source={require('../assets/images/lib_title.png')}
            style={{ alignSelf: 'center', marginBottom: height * 0.024 }}
          />

          <View style={styles.cardsWrap}>
            {libraryStories.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('StoryDetailsScreen', { story: item })
                }
              >
                <Image source={item.image} style={styles.image} />
                <Text style={styles.cardTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 100,
  },
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
  card: {
    width: '48%',
    backgroundColor: '#2B2B2B',
    borderRadius: 16,
    marginBottom: 12,
    padding: 12,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 16,
  },
  cardTitle: {
    color: '#FFFFFF',
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default TempleLibraryScreen;
