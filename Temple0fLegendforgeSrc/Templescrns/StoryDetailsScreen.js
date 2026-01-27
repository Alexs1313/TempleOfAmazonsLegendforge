import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Share,
} from 'react-native';

const StoryDetailsScreen = ({ route, navigation }) => {
  const { story } = route.params;

  const handleShareStory = () => {
    try {
      const message = `${story.title}\n\n${story.content}`;
      Share.share({ message });
    } catch (error) {
      console.error('Error sharing story:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/main_background.png')}
        style={styles.contentBg}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={false}
        >
          <View style={styles.imageWrapper}>
            <Image source={story.image} style={styles.image} />

            <View style={styles.topButtons}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={handleShareStory}
                activeOpacity={0.7}
              >
                <Image source={require('../assets/icons/mdi_share.png')} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.iconButton, { backgroundColor: '#251F21' }]}
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
              >
                <Image
                  source={require('../assets/icons/iconamoon_close.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.storyTitle}>{story.title}</Text>
            <Text style={styles.storyText}>{story.content}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    width: '100%',
    height: 470,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  topButtons: {
    position: 'absolute',
    top: 50,
    right: 16,
    flexDirection: 'row',
  },
  iconButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  contentBg: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 30,
    paddingTop: 24,
  },
  storyTitle: {
    color: '#FFB907',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  storyText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
});

export default StoryDetailsScreen;
