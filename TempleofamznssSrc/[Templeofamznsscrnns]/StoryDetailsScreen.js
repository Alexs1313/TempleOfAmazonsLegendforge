// Story Details Screen

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { useAdaptiveSizes } from '../[Templeofamznshkks]/useAdaptiveSizes';

const StoryDetailsScreen = ({
  route: LegendforgeTempleRoute,
  navigation: LegendforgeTempleNavigation,
}) => {
  const { story: LegendforgeTempleStory } = LegendforgeTempleRoute.params;
  const {
    height: LegendforgeTempleHeight,
    sidePad: LegendforgeTempleSidePad,
    pick: LegendforgeTemplePick,
  } = useAdaptiveSizes();
  const LegendforgeTempleImageHeight = LegendforgeTemplePick(
    LegendforgeTempleHeight * 0.5,
    LegendforgeTempleHeight * 0.47,
    450,
  );

  // sizes
  const LegendforgeTempleTopBtnTop = LegendforgeTemplePick(40, 46, 50);
  const LegendforgeTempleIconBtnSize = LegendforgeTemplePick(48, 52, 56);
  const LegendforgeTempleIconBtnRadius = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleIconBtnMarginL = LegendforgeTemplePick(8, 9, 10);
  const LegendforgeTempleContentPad = LegendforgeTempleSidePad;
  const LegendforgeTempleContentPadB = LegendforgeTemplePick(24, 28, 30);
  const LegendforgeTempleContentPadT = LegendforgeTemplePick(20, 22, 24);
  const LegendforgeTempleTitleSize = LegendforgeTemplePick(20, 22, 24);
  const LegendforgeTempleTitleMarginB = LegendforgeTemplePick(10, 11, 12);
  const LegendforgeTempleStoryTextSize = LegendforgeTemplePick(14, 15, 16);
  const LegendforgeTempleStoryLineHeight = LegendforgeTemplePick(22, 23, 24);
  const LegendforgeTempleImageRadius = LegendforgeTemplePick(12, 14, 16);

  const LegendforgeTempleHandleShareStory = () => {
    try {
      Share.share({
        message: `${LegendforgeTempleStory.title}\n\n${LegendforgeTempleStory.content}`,
      });
    } catch (LegendforgeTempleError) {
      console.error('Error sharing story:', LegendforgeTempleError);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/bgcs.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
      >
        <View
          style={[
            styles.templeLegendImageWrapper,
            { height: LegendforgeTempleImageHeight },
          ]}
        >
          <Image
            source={LegendforgeTempleStory.image}
            style={[
              styles.templeLegendImage,
              {
                borderBottomLeftRadius: LegendforgeTempleImageRadius,
                borderBottomRightRadius: LegendforgeTempleImageRadius,
              },
            ]}
          />

          <View
            style={[
              styles.templeLegendTopButtons,
              {
                top: LegendforgeTempleTopBtnTop,
                right: LegendforgeTempleContentPad,
              },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.templeLegendIconButton,
                {
                  width: LegendforgeTempleIconBtnSize,
                  height: LegendforgeTempleIconBtnSize,
                  borderRadius: LegendforgeTempleIconBtnRadius,
                  marginLeft: LegendforgeTempleIconBtnMarginL,
                },
              ]}
              onPress={LegendforgeTempleHandleShareStory}
              activeOpacity={0.7}
            >
              <Image source={require('../assets/icons/mdi_share.png')} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.templeLegendIconButton,
                {
                  backgroundColor: '#251F21',
                  width: LegendforgeTempleIconBtnSize,
                  height: LegendforgeTempleIconBtnSize,
                  borderRadius: LegendforgeTempleIconBtnRadius,
                  marginLeft: LegendforgeTempleIconBtnMarginL,
                },
              ]}
              onPress={() => LegendforgeTempleNavigation.goBack()}
              activeOpacity={0.7}
            >
              <Image source={require('../assets/icons/iconamoon_close.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.templeLegendContentContainer,
            {
              padding: LegendforgeTempleContentPad,
              paddingBottom: LegendforgeTempleContentPadB,
              paddingTop: LegendforgeTempleContentPadT,
            },
          ]}
        >
          <Text
            style={[
              styles.templeLegendStoryTitle,
              {
                fontSize: LegendforgeTempleTitleSize,
                marginBottom: LegendforgeTempleTitleMarginB,
              },
            ]}
          >
            {LegendforgeTempleStory.title}
          </Text>
          <Text
            style={[
              styles.templeLegendStoryText,
              {
                fontSize: LegendforgeTempleStoryTextSize,
                lineHeight: LegendforgeTempleStoryLineHeight,
              },
            ]}
          >
            {LegendforgeTempleStory.content}
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  templeLegendImageWrapper: {
    width: '100%',
  },
  templeLegendImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  templeLegendTopButtons: {
    position: 'absolute',
    flexDirection: 'row',
  },
  templeLegendIconButton: {
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  templeLegendContentContainer: {},
  templeLegendStoryTitle: {
    color: '#FFB907',
    fontWeight: '600',
    textAlign: 'center',
  },
  templeLegendStoryText: {
    color: '#FFFFFF',
    fontWeight: '400',
  },
});

export default StoryDetailsScreen;
