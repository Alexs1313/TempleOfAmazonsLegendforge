// Stack Screns

import { createStackNavigator } from '@react-navigation/stack';
import LegendforgeLoader from './TempleofamznssSrc/[Templeofamznsscrnns]/LegendforgeLoader';
import LegendforgeOnboarding from './TempleofamznssSrc/[Templeofamznsscrnns]/LegendforgeOnboarding';
import BottomLegendforgeTabs from './TempleofamznssSrc/Templeofamznscotbnav/BottomLegendforgeTabs';
import StoryDetailsScreen from './TempleofamznssSrc/[Templeofamznsscrnns]/StoryDetailsScreen';
import CreateCharacterScreen from './TempleofamznssSrc/[Templeofamznsscrnns]/CreateCharacterScreen';
import CharacterDetailsScreen from './TempleofamznssSrc/[Templeofamznsscrnns]/CharacterDetailsScreen';
import CreateStoryScreen from './TempleofamznssSrc/[Templeofamznsscrnns]/CreateStoryScreen';
import LegendforgeDetailsScreen from './TempleofamznssSrc/[Templeofamznsscrnns]/LegendforgeDetailsScreen';
import TempleSettingsScreen from './TempleofamznssSrc/[Templeofamznsscrnns]/TempleSettingsScreen';

const Stck = createStackNavigator();

const LegendforgeRoutes = () => {
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
      <Stck.Screen
        name="TempleSettingsScreen"
        component={TempleSettingsScreen}
      />
    </Stck.Navigator>
  );
};

export default LegendforgeRoutes;
