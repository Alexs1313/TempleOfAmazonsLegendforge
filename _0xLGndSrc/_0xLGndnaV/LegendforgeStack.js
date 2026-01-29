import { createStackNavigator } from '@react-navigation/stack';

// imports
import LegendforgeOnboarding from '../_0xLGndscrnS/LegendforgeOnboarding';
import BottomLegendforgeTabs from './BottomLegendforgeTabs';
import StoryDetailsScreen from '../_0xLGndscrnS/StoryDetailsScreen';
import CreateCharacterScreen from '../_0xLGndscrnS/CreateCharacterScreen';
import CharacterDetailsScreen from '../_0xLGndscrnS/CharacterDetailsScreen';
import CreateStoryScreen from '../_0xLGndscrnS/CreateStoryScreen';
import LegendforgeDetailsScreen from '../_0xLGndscrnS/LegendforgeDetailsScreen';
import LegendforgeLoader from '../_0xLGndscrnS/LegendforgeLoader';

const Stack = createStackNavigator();

// stack screens

const LegendforgeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LegendforgeLoader" component={LegendforgeLoader} />
      <Stack.Screen
        name="LegendforgeOnboardig"
        component={LegendforgeOnboardig}
      />
      <Stack.Screen
        name="BottomLegendforgeTabs"
        component={BottomLegendforgeTabs}
      />
      <Stack.Screen name="StoryDetailsScreen" component={StoryDetailsScreen} />
      <Stack.Screen
        name="CreateCharacterScreen"
        component={CreateCharacterScreen}
      />
      <Stack.Screen
        name="CharacterDetailsScreen"
        component={CharacterDetailsScreen}
      />
      <Stack.Screen name="CreateStoryScreen" component={CreateStoryScreen} />
      <Stack.Screen
        name="LegendforgeDetailsScreen"
        component={LegendforgeDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default LegendforgeStack;
