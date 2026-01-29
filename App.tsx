import { NavigationContainer } from '@react-navigation/native';
import LegendforgeStack from './_0xLGndSrc/_0xLGndnaV/LegendforgeStack';
import { StoreProvider } from './_0xLGndSrc/_0xLGndstr/amazonsCntxt';
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
