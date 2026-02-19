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
import { useAdaptiveSizes } from '../hooks/useAdaptiveSizes';

const StoryDetailsScreen = ({ route, navigation }) => {
  const { story } = route.params;
  const { height, sidePad, pick } = useAdaptiveSizes();
  const imageHeight = pick(height * 0.5, height * 0.47, 450);

  // sizes
  const topBtnTop = pick(40, 46, 50);
  const iconBtnSize = pick(48, 52, 56);
  const iconBtnRadius = pick(14, 15, 16);
  const iconBtnMarginL = pick(8, 9, 10);
  const contentPad = sidePad;
  const contentPadB = pick(24, 28, 30);
  const contentPadT = pick(20, 22, 24);
  const titleSize = pick(20, 22, 24);
  const titleMarginB = pick(10, 11, 12);
  const storyTextSize = pick(14, 15, 16);
  const storyLineHeight = pick(22, 23, 24);
  const imageRadius = pick(12, 14, 16);

  const handleShareStory = () => {
    try {
      Share.share({ message: `${story.title}\n\n${story.content}` });
    } catch (error) {
      console.error('Error sharing story:', error);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgb(67, 33, 11)', 'rgb(10, 8, 10)']}
        style={styles.contentBg}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={false}
        >
          <View style={[styles.imageWrapper, { height: imageHeight }]}>
            <Image
              source={story.image}
              style={[
                styles.image,
                {
                  borderBottomLeftRadius: imageRadius,
                  borderBottomRightRadius: imageRadius,
                },
              ]}
            />

            <View
              style={[styles.topButtons, { top: topBtnTop, right: contentPad }]}
            >
              <TouchableOpacity
                style={[
                  styles.iconButton,
                  {
                    width: iconBtnSize,
                    height: iconBtnSize,
                    borderRadius: iconBtnRadius,
                    marginLeft: iconBtnMarginL,
                  },
                ]}
                onPress={handleShareStory}
                activeOpacity={0.7}
              >
                <Image source={require('../assets/icons/mdi_share.png')} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.iconButton,
                  {
                    backgroundColor: '#251F21',
                    width: iconBtnSize,
                    height: iconBtnSize,
                    borderRadius: iconBtnRadius,
                    marginLeft: iconBtnMarginL,
                  },
                ]}
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
              >
                <Image
                  source={require('../assets/icons/iconamoon_close.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.contentContainer,
              {
                padding: contentPad,
                paddingBottom: contentPadB,
                paddingTop: contentPadT,
              },
            ]}
          >
            <Text
              style={[
                styles.storyTitle,
                { fontSize: titleSize, marginBottom: titleMarginB },
              ]}
            >
              {story.title}
            </Text>
            <Text
              style={[
                styles.storyText,
                { fontSize: storyTextSize, lineHeight: storyLineHeight },
              ]}
            >
              {story.content}
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  topButtons: {
    position: 'absolute',
    flexDirection: 'row',
  },
  iconButton: {
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBg: {
    flex: 1,
  },
  contentContainer: {},
  storyTitle: {
    color: '#FFB907',
    fontWeight: '600',
    textAlign: 'center',
  },
  storyText: {
    color: '#FFFFFF',
    fontWeight: '400',
  },
});

export default StoryDetailsScreen;
