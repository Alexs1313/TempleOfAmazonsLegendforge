import { createStackNavigator } from '@react-navigation/stack';

// screens imports
import LegendforgeOnboarding from '../views/LegendforgeOnboarding';
import BottomLegendforgeTabs from './BottomLegendforgeTabs';
import StoryDetailsScreen from '../views/StoryDetailsScreen';
import CreateCharacterScreen from '../views/CreateCharacterScreen';
import CharacterDetailsScreen from '../views/CharacterDetailsScreen';
import CreateStoryScreen from '../views/CreateStoryScreen';
import LegendforgeDetailsScreen from '../views/LegendforgeDetailsScreen';
import LegendforgeLoader from '../views/LegendforgeLoader';

const Stck = createStackNavigator();

// stack screens

const LegendforgeStack = () => {
  return (
    <Stck.Navigator screenOptions={{ headerShown: false }}>
      <Stck.Screen name="LegendforgeLoader" component={LegendforgeLoader} />
      <Stck.Screen
        name="LegendforgeOnboarding"
        component={LegendforgeOnboarding}
      />
      <Stck.Screen
        name="BottomLegendforgeTabs"
        component={BottomLegendforgeTabs}
      />
      <Stck.Screen name="StoryDetailsScreen" component={StoryDetailsScreen} />
      <Stck.Screen
        name="CreateCharacterScreen"
        component={CreateCharacterScreen}
      />
      <Stck.Screen
        name="CharacterDetailsScreen"
        component={CharacterDetailsScreen}
      />
      <Stck.Screen name="CreateStoryScreen" component={CreateStoryScreen} />
      <Stck.Screen
        name="LegendforgeDetailsScreen"
        component={LegendforgeDetailsScreen}
      />
    </Stck.Navigator>
  );
};

export default LegendforgeStack;
