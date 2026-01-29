import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import CharactersScreen from '../_0xLGndscrnS/CharactersScreen';
import LegendforgeScreen from '../_0xLGndscrnS/LegendforgeScreen';
import TempleLibrary from '../_0xLGndscrnS/TempleLibrary';
import AmazonsQuiz from '../_0xLGndscrnS/AmazonsQuiz';
import TempleSettingsScreen from '../_0xLGndscrnS/TempleSettingsScreen';

const Tab = createBottomTabNavigator();

const BottomLegendforgeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.bottomTabBar],
        tabBarActiveTintColor: '#FF9400',
        tabBarInactiveTintColor: '#FF940080',
      }}
    >
      <Tab.Screen
        name="CharactersScreen"
        component={CharactersScreen}
        options={{ unmountOnBlur: true }}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/icons/ri_quill-pen-fill.png')}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LegendforgeScreen"
        component={LegendforgeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/icons/ion_book-sharp.png')}
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
      <Tab.Screen
        name="TempleSettingsScreen"
        component={TempleSettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/icons/material-symbols_settings-rounded.png')}
              tintColor={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabBar: {
    marginHorizontal: 16,
    elevation: 0,
    paddingTop: 18,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 34,
    paddingHorizontal: 6,
    borderTopColor: '#2B2B2B',
    backgroundColor: '#2B2B2B',
    borderRadius: 16,
    height: 72,
    paddingBottom: 20,
  },
});

export default BottomLegendforgeTabs;
