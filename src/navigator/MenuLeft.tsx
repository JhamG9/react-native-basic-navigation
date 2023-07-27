import { View, Image, Text, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps, createDrawerNavigator, DrawerContent, DrawerContentScrollView } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLeft = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator useLegacyImplementation={false} screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front', // Menu modo horizontal
    }} drawerContent={(props) => <InternMenu {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const InternMenu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg',
        }}
          style={styles.avatar} />
      </View>

      {/* Opciones de Menu */}
      <View style={ styles.menuContainer}>
        <TouchableOpacity 
        style={styles.menuBoton}
        onPress={() => navigation.navigate('StackNavigator')}
        >
          <Text style={styles.menuTexto}>Navegacion Stack</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.menuTexto}
          onPress={() => navigation.navigate('Settings')}>Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}
