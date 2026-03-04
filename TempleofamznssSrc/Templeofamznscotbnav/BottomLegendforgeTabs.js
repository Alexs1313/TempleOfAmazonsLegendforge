// Bottom Legendforge Tabs

import { useEffect, useRef, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import {
  Animated,
  View,
  Image,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import CharactersScreen from '../[Templeofamznsscrnns]/CharactersScreen';

import TempleLibrary from '../[Templeofamznsscrnns]/TempleLibrary';
import HallOfRecordsScreen from '../[Templeofamznsscrnns]/HallOfRecordsScreen';
import AmazonsQuiz from '../[Templeofamznsscrnns]/AmazonsQuiz';
import BeginModal from '../Templeofamznscompnts/BeginModal';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const EmptyScreen = () => <View style={{ flex: 1 }} />;

const AnimatedTabButton = ({
  children,
  onPress,
  accessibilityState,
  isAddAction = false,
  ...props
}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const isSelected = !!accessibilityState?.selected;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: isSelected && !isAddAction ? 1.08 : 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 8,
    }).start();
  }, [isAddAction, isSelected, scale]);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.92,
      useNativeDriver: true,
      speed: 24,
      bounciness: 0,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: isSelected && !isAddAction ? 1.08 : 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      {...props}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[styles.tabButtonInner, { transform: [{ scale }] }]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
};

const BottomLegendforgeTabs = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const isLandscape = height > width;
  const bottomAddButton = isLandscape ? 0 : -1;

  const openAddModal = () => setAddModalVisible(true);
  const closeAddModal = () => setAddModalVisible(false);

  const handleBeginSaga = () => {
    closeAddModal();
    navigation.navigate('CreateStoryScreen');
  };

  const handleBeginForging = () => {
    closeAddModal();
    navigation.navigate('CreateCharacterScreen');
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [styles.templeLegendBottomTabs],
          tabBarActiveTintColor: '#FF9400',
          tabBarInactiveTintColor: '#FF940080',
          tabBarButton: props => <AnimatedTabButton {...props} />,
        }}
      >
        <Tab.Screen
          name="CharactersScreen"
          component={CharactersScreen}
          options={{
            unmountOnBlur: true,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../assets/icons/ri_quill-pen-fill.png')}
                tintColor={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="TempleLibrary"
          component={TempleLibrary}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../assets/icons/mynaui_book-solid.png')}
                tintColor={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AddAction"
          component={EmptyScreen}
          options={{
            tabBarIcon: () => null,
            tabBarButton: props => (
              <AnimatedTabButton {...props} onPress={openAddModal} isAddAction>
                <LinearGradient
                  colors={['#FF9400', '#FAD51D']}
                  style={[
                    styles.templeLegendAddButton,
                    { bottom: bottomAddButton },
                  ]}
                >
                  <Image source={require('../assets/images/addpl.png')} />
                </LinearGradient>
              </AnimatedTabButton>
            ),
          }}
        />
        <Tab.Screen
          name="HallOfRecords"
          component={HallOfRecordsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../assets/images/stats.png')}
                tintColor={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AmazonsQuiz"
          component={AmazonsQuiz}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../assets/icons/ri_sword-fill.png')}
                tintColor={color}
              />
            ),
          }}
        />
      </Tab.Navigator>

      <BeginModal
        visible={addModalVisible}
        onClose={closeAddModal}
        onBeginSaga={handleBeginSaga}
        onBeginForging={handleBeginForging}
      />
    </>
  );
};

const styles = StyleSheet.create({
  templeLegendBottomTabs: {
    marginHorizontal: 24,
    elevation: 0,
    paddingTop: 18,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 34,
    paddingHorizontal: 6,
    borderTopColor: '#2B2B2B',
    backgroundColor: '#2B2B2B',
    borderRadius: 16,
    height: 73,
    paddingBottom: 20,
  },
  templeLegendAddButton: {
    width: 65,
    height: 65,
    borderRadius: 12,
    backgroundColor: '#FF9400',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 19,
  },
  templeLegendAddButtonText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 32,
  },
  tabButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default BottomLegendforgeTabs;
