import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from './TempleofamznssSrc/Templeofamznsstrr/amazonsCntxt';
import Toast from 'react-native-toast-message';
import LegendforgeRoutes from './LegendforgeRoutes';

const TempleApp = () => {
  return (
    <NavigationContainer>
      <StoreProvider>
        <LegendforgeRoutes />
        <Toast position="top" topOffset={40} />
      </StoreProvider>
    </NavigationContainer>
  );
};

export default TempleApp;
