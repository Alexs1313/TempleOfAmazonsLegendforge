import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  useWindowDimensions,
  Share,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const bgImage = require('../assets/images/main_background.png');

const CharacterDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { height } = useWindowDimensions();
  const { character } = route.params;

  const shareCardDetails = () => {
    const message = formatCharacterDetails(character);
    Share.share({ message });
  };

  const formatCharacterDetails = () => {
    return [
      'Character Details:',
      `Name: ${character.name}`,
      `Epithet: ${character.epithet}`,
      `Homeland: ${character.homeland}`,
      `Tribe: ${character.tribe}`,
      `Voice: ${character.voice}`,
      `Destiny Thread: ${character.destiny}`,
    ].join('\n');
  };

  const AboutSection = ({ title, children }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );

  const TextField = ({ label, value }) => (
    <View style={styles.field}>
      <View style={styles.fieldBox}>
        <Text style={styles.fieldLabel}>{label}</Text>
        <Text style={styles.fieldSubtitle}>{value}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={bgImage} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.container,
            { paddingTop: height * 0.07, paddingBottom: 40 },
          ]}
        >
          <View style={styles.templeHeader}>
            <View>
              <Text style={styles.templeName}>{character.name}</Text>
              <Text style={styles.templeDate}>{character.savedAt}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.iconBackBtn, { marginLeft: 8 }]}
                onPress={() => navigation.goBack()}
              >
                <Image
                  source={require('../assets/icons/iconamoon_close.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.imgWrap}>
            <Image
              source={
                character.image
                  ? { uri: character.image }
                  : require('../assets/images/placeholder.png')
              }
              style={styles.pickerImg}
            />
          </View>

          <AboutSection title="Identity">
            <TextField label="Name" value={character.name} />
            <TextField label="Epithet (Title)" value={character.epithet} />
            <TextField label="Homeland" value={character.homeland} />
            <TextField label="Tribe / Order" value={character.tribe} />
          </AboutSection>

          <AboutSection title="Voice & Destiny">
            <TextField label="Voice" value={character.voice} />
            <TextField label="Destiny Thread" value={character.destiny} />
          </AboutSection>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={shareCardDetails}
        activeOpacity={0.7}
        style={[
          styles.iconBackBtn,
          {
            position: 'absolute',
            bottom: 60,
            right: 16,
            backgroundColor: '#FF9400',
          },
        ]}
      >
        <Image source={require('../assets/icons/mdi_share.png')} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  templeHeader: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  templeName: {
    color: '#FFB907',
    fontSize: 24,
    fontWeight: '700',
  },
  templeDate: {
    color: '#FFFFFF',
    marginTop: 2,
    fontSize: 12,
    fontWeight: '500',
  },
  iconBackBtn: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#251F21',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgWrap: {
    alignItems: 'center',
    marginVertical: 24,
  },
  pickerImg: {
    width: 165,
    height: 165,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  section: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: '#FFB907',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  field: {
    marginBottom: 12,
  },
  fieldLabel: {
    color: '#FFFFFF80',
    fontSize: 10,
    marginBottom: 4,
  },
  fieldBox: {
    backgroundColor: '#2c2527ff',
    borderRadius: 14,
    padding: 12,
    paddingHorizontal: 24,
  },
  fieldSubtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default CharacterDetailsScreen;
