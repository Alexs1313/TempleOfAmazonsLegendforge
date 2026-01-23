import { NavigationContainer } from '@react-navigation/native';
import LegendforgeStack from './TempleOfAmazonsLegendforge/AmazonsNavigation/LegendforgeStack';
import { StoreProvider } from './TempleOfAmazonsLegendforge/LegendforgeStore/amazonsCntxt';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <StoreProvider>
        <LegendforgeStack />
        <Toast position="top" topOffset={40} />
      </StoreProvider>
    </NavigationContainer>
  );
};

export default App;
