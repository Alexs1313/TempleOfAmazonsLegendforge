import { NavigationContainer } from '@react-navigation/native';
import LegendforgeStack from './[src]/routes/LegendforgeStack';
import { StoreProvider } from './[src]/store/amazonsCntxt';
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
