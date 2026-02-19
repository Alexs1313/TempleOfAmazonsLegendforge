import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GradientButton from '../components/GradientButton';
import StoryCard from '../components/StoryCard';
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';
import { useAmazonsStore } from '../store/amazonsCntxt';
import Toast from 'react-native-toast-message';

const GRADIENT_BG = ['rgb(67, 33, 11)', 'rgb(10, 8, 10)'];

const LegendforgeScreen = () => {
  const navigation = useNavigation();
  const { height, sidePad, scrollBottom, pick } = useAdaptiveSizes();
  const paddingTop = pick(height * 0.05, height * 0.06, height * 0.08);
  const titleMarginB = pick(height * 0.02, height * 0.025, height * 0.03);
  const introBoxPad = pick(12, 14, 16);
  const introBoxPadV = pick(18, 21, 24);
  const introBoxWidth = pick('92%', '91%', '90%');
  const introBoxRadius = pick(14, 15, 16);
  const introTextSize = pick(14, 15, 16);
  const introTextMarginB = pick(12, 14, 16);
  const btnHeight = pick(46, 49, 52);
  const btnRadius = pick(14, 15, 16);
  const btnTextSize = pick(14, 15, 16);
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

  // states
  const [stories, setStories] = useState([]);
  const { legendforgeNotificationsEnabled } = useAmazonsStore();

  useFocusEffect(
    useCallback(() => {
      const fetcStories = async () => {
        try {
          const savedStories = await AsyncStorage.getItem('stories');
          const parsedStories = savedStories ? JSON.parse(savedStories) : [];
          setStories(parsedStories);

          console.log('loaded stories!');
        } catch (error) {
          console.error('Failed to load stories ==>', error);
        }
      };

      fetcStories();
    }, []),
  );

  const confirmDeleteHandler = storyId => {
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
        Toast.show({
          text1: 'Story deleted!',
        });

      console.log('deleted legendforge story');
    } catch (error) {
      console.error('Failed to delete the story ==>', error);
    }
  };

  return (
    <LinearGradient colors={GRADIENT_BG} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: scrollBottom }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.introContainer,
            { paddingTop, paddingHorizontal: sidePad },
          ]}
        >
          <Image
            source={require('../assets/images/legendforge_title.png')}
            style={{ marginBottom: titleMarginB }}
          />

          <Image source={require('../assets/images/quiz_logo.png')} />

          <View
            style={[
              styles.introBox,
              {
                padding: introBoxPad,
                paddingVertical: introBoxPadV,
                width: introBoxWidth,
                borderRadius: introBoxRadius,
              },
            ]}
          >
            <Text
              style={[
                styles.introText,
                { fontSize: introTextSize, marginBottom: introTextMarginB },
              ]}
            >
              What is not written will be forgotten
            </Text>

            <GradientButton
              label="Begin a New Saga"
              onPress={() => navigation.navigate('CreateStoryScreen')}
              height={btnHeight}
              borderRadius={btnRadius}
              fontSize={btnTextSize}
            />
          </View>
        </View>

        {stories.map(item => (
          <StoryCard
            key={item.id}
            story={item}
            onPress={() =>
              navigation.navigate('LegendforgeDetailsScreen', { story: item })
            }
            onLongPress={() => confirmDeleteHandler(item.id)}
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
        ))}
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
  },
  introText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default LegendforgeScreen;
