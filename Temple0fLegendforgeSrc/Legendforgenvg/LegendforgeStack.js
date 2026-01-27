import { createStackNavigator } from '@react-navigation/stack';

// imports
import LegendforgeOnboarding from '../Templescrns/LegendforgeOnboarding';
import BottomLegendforgeTabs from './BottomLegendforgeTabs';
import StoryDetailsScreen from '../Templescrns/StoryDetailsScreen';
import CreateCharacterScreen from '../Templescrns/CreateCharacterScreen';
import CharacterDetailsScreen from '../Templescrns/CharacterDetailsScreen';
import CreateStoryScreen from '../Templescrns/CreateStoryScreen';
import LegendforgeDetailsScreen from '../Templescrns/LegendforgeDetailsScreen';
import LegendforgeLoader from '../Templescrns/LegendforgeLoader';

const Stack = createStackNavigator();

// stack screens

const LegendforgeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LegendforgeLoader" component={LegendforgeLoader} />
      <Stack.Screen
        name="LegendforgeOnboarding"
        component={LegendforgeOnboarding}
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
