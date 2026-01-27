import { NavigationContainer } from '@react-navigation/native';
import LegendforgeStack from './Temple0fLegendforgeSrc/Legendforgenvg/LegendforgeStack';
import { StoreProvider } from './Temple0fLegendforgeSrc/LegendforgeStore/amazonsCntxt';
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
