// Legendforge Screen

import AsyncStorage from '@react-native-async-storage/async-storage';
import GradientButton from '../Templeofamznscompnts/GradientButton';
import StoryCard from '../Templeofamznscompnts/StoryCard';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { useAdaptiveSizes } from '../[Templeofamznshkks]/useAdaptiveSizes';
import { useAmazonsStore } from '../Templeofamznsstrr/amazonsCntxt';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';
import Toast from 'react-native-toast-message';

const LegendforgeScreen = () => {
  const LegendforgeTempleNavigation = useNavigation();
  const {
    height: LegendforgeTempleHeight,
    sidePad: LegendforgeTempleSidePad,
    scrollBottom: LegendforgeTempleScrollBottom,
    pick: LegendforgeTemplePick,
  } = useAdaptiveSizes();
  const LegendforgeTemplePaddingTop = LegendforgeTemplePick(
    LegendforgeTempleHeight * 0.05,
    LegendforgeTempleHeight * 0.06,
    LegendforgeTempleHeight * 0.08,
  );
  const LegendforgeTempleTitleMarginB = LegendforgeTemplePick(
    LegendforgeTempleHeight * 0.02,
    LegendforgeTempleHeight * 0.025,
    LegendforgeTempleHeight * 0.03,
  );
  const LegendforgeTempleIntroBoxPad = LegendforgeTemplePick(12, 14, 16);
  const LegendforgeTempleIntroBoxPadV = LegendforgeTemplePick(18, 21, 24);
  const LegendforgeTempleIntroBoxWidth = LegendforgeTemplePick('92%', '91%', '90%');
  const LegendforgeTempleIntroBoxRadius = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleIntroTextSize = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleIntroTextMarginB = LegendforgeTemplePick(12, 14, 16);
  const LegendforgeTempleBtnHeight = LegendforgeTemplePick(46, 49, 52);
  const LegendforgeTempleBtnRadius = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleBtnTextSize = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleStoryCardMarginH = LegendforgeTempleSidePad;
  const LegendforgeTempleStoryCardPad = LegendforgeTemplePick(12, 14, 16);
  const LegendforgeTempleStoryCardMarginT = LegendforgeTemplePick(12, 14, 16);
  const LegendforgeTempleStoryCardRadius = LegendforgeTemplePick(14, 16, 18);
  const LegendforgeTempleStoryTitleSize = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleStoryDateSize = LegendforgeTemplePick(11, 12, 12);
  const LegendforgeTempleWalkerBadgePadH = LegendforgeTemplePick(8, 9, 10);
  const LegendforgeTempleWalkerBadgePadV = LegendforgeTemplePick(3, 4, 4);
  const LegendforgeTempleWalkerBadgeRadius = LegendforgeTemplePick(10, 11, 12);
  const LegendforgeTempleWalkerTextSize = LegendforgeTemplePick(11, 12, 12);
  const LegendforgeTempleWalkerAvatarSize = LegendforgeTemplePick(24, 26, 28);

  // states
  const [LegendforgeTempleStories, setLegendforgeTempleStories] = useState([]);
  const { legendforgeNotificationsEnabled: LegendforgeTempleNotificationsEnabled } =
    useAmazonsStore();

  useFocusEffect(
    useCallback(() => {
      const LegendforgeTempleFetchStories = async () => {
        try {
          const LegendforgeTempleSavedStories = await AsyncStorage.getItem('stories');
          const LegendforgeTempleParsedStories = LegendforgeTempleSavedStories
            ? JSON.parse(LegendforgeTempleSavedStories)
            : [];
          setLegendforgeTempleStories(LegendforgeTempleParsedStories);

          console.log('loaded stories!');
        } catch (error) {
          console.error('Failed to load stories ==>', error);
        }
      };

      LegendforgeTempleFetchStories();
    }, []),
  );

  const LegendforgeTempleConfirmDeleteHandler = LegendforgeTempleStoryId => {
    Alert.alert('Delete Story', 'Are you sure you want to delete this story?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () =>
          LegendforgeTempleDeleteStoryHandler(LegendforgeTempleStoryId),
      },
    ]);
  };

  const LegendforgeTempleDeleteStoryHandler = async LegendforgeTempleStoryId => {
    try {
      const LegendforgeTempleUpdatedStories = LegendforgeTempleStories.filter(
        LegendforgeTempleStory => LegendforgeTempleStory.id !== LegendforgeTempleStoryId,
      );
      setLegendforgeTempleStories(LegendforgeTempleUpdatedStories);

      await AsyncStorage.setItem(
        'stories',
        JSON.stringify(LegendforgeTempleUpdatedStories),
      );

      LegendforgeTempleNotificationsEnabled &&
        Toast.show({
          text1: 'Story deleted!',
        });

      console.log('deleted legendforge story');
    } catch (LegendforgeTempleError) {
      console.error('Failed to delete the story ==>', LegendforgeTempleError);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/bgcs.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: LegendforgeTempleScrollBottom,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.templeLegendIntroContainer,
            {
              paddingTop: LegendforgeTemplePaddingTop,
              paddingHorizontal: LegendforgeTempleSidePad,
            },
          ]}
        >
          <Image
            source={require('../assets/images/legendforge_title.png')}
            style={{ marginBottom: LegendforgeTempleTitleMarginB }}
          />

          <Image source={require('../assets/images/quiz_logo.png')} />

          <View
            style={[
              styles.templeLegendIntroBox,
              {
                padding: LegendforgeTempleIntroBoxPad,
                paddingVertical: LegendforgeTempleIntroBoxPadV,
                width: LegendforgeTempleIntroBoxWidth,
                borderRadius: LegendforgeTempleIntroBoxRadius,
              },
            ]}
          >
            <Text
              style={[
                styles.templeLegendIntroText,
                {
                  fontSize: LegendforgeTempleIntroTextSize,
                  marginBottom: LegendforgeTempleIntroTextMarginB,
                },
              ]}
            >
              What is not written will be forgotten
            </Text>

            <GradientButton
              label="Begin a New Saga"
              onPress={() =>
                LegendforgeTempleNavigation.navigate('CreateStoryScreen')
              }
              height={LegendforgeTempleBtnHeight}
              borderRadius={LegendforgeTempleBtnRadius}
              fontSize={LegendforgeTempleBtnTextSize}
            />
          </View>
        </View>

        {LegendforgeTempleStories.map(LegendforgeTempleItem => (
          <StoryCard
            key={LegendforgeTempleItem.id}
            story={LegendforgeTempleItem}
            onPress={() =>
              LegendforgeTempleNavigation.navigate('LegendforgeDetailsScreen', {
                story: LegendforgeTempleItem,
              })
            }
            onLongPress={() =>
              LegendforgeTempleConfirmDeleteHandler(LegendforgeTempleItem.id)
            }
            marginHorizontal={LegendforgeTempleStoryCardMarginH}
            padding={LegendforgeTempleStoryCardPad}
            marginTop={LegendforgeTempleStoryCardMarginT}
            borderRadius={LegendforgeTempleStoryCardRadius}
            titleFontSize={LegendforgeTempleStoryTitleSize}
            dateFontSize={LegendforgeTempleStoryDateSize}
            badgePaddingHorizontal={LegendforgeTempleWalkerBadgePadH}
            badgePaddingVertical={LegendforgeTempleWalkerBadgePadV}
            badgeBorderRadius={LegendforgeTempleWalkerBadgeRadius}
            badgeTextFontSize={LegendforgeTempleWalkerTextSize}
            avatarSize={LegendforgeTempleWalkerAvatarSize}
            avatarOverlap={10}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  templeLegendIntroContainer: {
    alignItems: 'center',
  },
  templeLegendIntroBox: {
    backgroundColor: '#251F21',
  },
  templeLegendIntroText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default LegendforgeScreen;
