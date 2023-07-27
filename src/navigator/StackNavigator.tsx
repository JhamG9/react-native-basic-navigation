import { createStackNavigator } from '@react-navigation/stack';
import { PageOneScreen } from '../screens/PageOneScreen';
import { PageTwoScreen } from '../screens/PageTwoScreen';
import { PageThreeScreen } from '../screens/PageThreeScreen';
import { PersonScreen } from '../screens/PersonScreen';

export type RootStackParams = {
  PageOne: undefined,  
  PageTwo: undefined,
  PageThree: undefined,
  Person: {id: number, name: string},
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='PageOne'
      screenOptions={{
        headerStyle: {
          elevation: 0, // hidden header android
          shadowColor: 'transparent' // hidden header ios
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="pageOne" options={{title: 'Pagina 1'}}  component={PageOneScreen} />
      <Stack.Screen name="PageTwo" options={{title: 'Pagina 2'}} component={PageTwoScreen} />
      <Stack.Screen name="PageThree" options={{title: 'Pagina 3'}} component={PageThreeScreen} />
      <Stack.Screen name="Person" options={{title: 'Person Screen'}} component={PersonScreen} />
    </Stack.Navigator>
  );
}
