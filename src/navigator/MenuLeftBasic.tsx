import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuLeftBasic = () => {

  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator useLegacyImplementation={false} screenOptions={{
      drawerType: width >= 768 ? 'permanent': 'front', // Menu modo horizontal
      headerShown: false // Oculta icono hamburguer
    }
    }>
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
      <Drawer.Screen name="Settings" options={{ title: 'Settings' }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

