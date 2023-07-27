import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLeftBasic } from './src/navigator/MenuLeftBasic';
import { MenuLeft } from './src/navigator/MenuLeft';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLeftBasic />  */}
      <MenuLeft /> 
    </NavigationContainer>

  )
}

export default App;