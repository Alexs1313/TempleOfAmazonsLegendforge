import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';

// local components
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';
import AboutSection from '../components/AboutSection';
import TextSectionWrap from '../components/TextSectionWrap';

const GRADIENT_BG = ['rgb(67, 33, 11)', 'rgb(10, 8, 10)'];

const CharacterDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const character = route.params?.character;
  if (!character) return null;
  const { height, sidePad, pick } = useAdaptiveSizes();

  // sizes
  const containerPadT = pick(height * 0.05, height * 0.06, height * 0.07);
  const containerPadB = pick(32, 36, 40);
  const nameSize = pick(20, 22, 24);
  const dateSize = pick(11, 12, 12);
  const iconBtnSize = pick(48, 52, 56);
  const iconBtnRadius = pick(12, 13, 14);
  const imgSize = pick(140, 152, 165);
  const imgRadius = pick(70, 76, 80);
  const sectionMarginT = pick(12, 14, 16);
  const sectionTitleSize = pick(20, 22, 24);
  const sectionTitleMarginB = pick(12, 14, 15);
  const fieldMarginB = pick(10, 11, 12);
  const fieldLabelSize = pick(9, 10, 10);
  const fieldBoxPad = pick(10, 11, 12);
  const fieldBoxPadH = pick(20, 22, 24);
  const fieldBoxRadius = pick(12, 13, 14);
  const fieldSubtitleSize = pick(16, 17, 18);
  const shareBtnBottom = pick(48, 54, 60);
  const shareBtnRight = sidePad;

  const formatedShareMessage = () => {
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

  const shareCardDetails = () => {
    Share.share({ message: formatedShareMessage() });
  };

  const sectionProps = {
    marginTop: sectionMarginT,
    paddingHorizontal: sidePad,
    titleFontSize: sectionTitleSize,
    titleMarginBottom: sectionTitleMarginB,
  };

  const fieldProps = {
    marginBottom: fieldMarginB,
    boxPadding: fieldBoxPad,
    boxPaddingHorizontal: fieldBoxPadH,
    borderRadius: fieldBoxRadius,
    labelFontSize: fieldLabelSize,
    valueFontSize: fieldSubtitleSize,
  };

  return (
    <LinearGradient colors={GRADIENT_BG} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: containerPadB }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.container,
            { paddingTop: containerPadT, paddingBottom: containerPadB },
          ]}
        >
          <View style={[styles.templeHeader, { paddingHorizontal: sidePad }]}>
            <View>
              <Text style={[styles.templeName, { fontSize: nameSize }]}>
                {character.name}
              </Text>
              <Text style={[styles.templeDate, { fontSize: dateSize }]}>
                {character.savedAt}
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  styles.iconBackBtn,
                  {
                    width: iconBtnSize,
                    height: iconBtnSize,
                    borderRadius: iconBtnRadius,
                    marginLeft: 8,
                  },
                ]}
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
              style={[
                styles.pickerImg,
                { width: imgSize, height: imgSize, borderRadius: imgRadius },
              ]}
            />
          </View>

          <AboutSection title="Identity" {...sectionProps}>
            <TextSectionWrap
              label="Name"
              value={character.name}
              {...fieldProps}
            />
            <TextSectionWrap
              label="Epithet (Title)"
              value={character.epithet}
              {...fieldProps}
            />
            <TextSectionWrap
              label="Homeland"
              value={character.homeland}
              {...fieldProps}
            />
            <TextSectionWrap
              label="Tribe / Order"
              value={character.tribe}
              {...fieldProps}
            />
          </AboutSection>

          <AboutSection title="Voice & Destiny" {...sectionProps}>
            <TextSectionWrap
              label="Voice"
              value={character.voice}
              {...fieldProps}
            />
            <TextSectionWrap
              label="Destiny Thread"
              value={character.destiny}
              {...fieldProps}
            />
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
            bottom: shareBtnBottom,
            right: shareBtnRight,
            width: iconBtnSize,
            height: iconBtnSize,
            borderRadius: iconBtnRadius,
            backgroundColor: '#FF9400',
          },
        ]}
      >
        <Image source={require('../assets/icons/mdi_share.png')} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  templeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  templeName: {
    color: '#FFB907',
    fontWeight: '700',
  },
  templeDate: {
    color: '#FFFFFF',
    marginTop: 2,
    fontWeight: '500',
  },
  iconBackBtn: {
    backgroundColor: '#251F21',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgWrap: {
    alignItems: 'center',
    marginVertical: 24,
  },
  pickerImg: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});

export default CharacterDetailsScreen;
