import { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';

export const PageTwoScreen = () => {
  const navigator = useNavigation<any>();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras' // Opción atras Ios
    })
  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2</Text>

      <Button title='ir pagina 3'
        onPress={() => navigator.navigate('PageThree')} />
    </View>
  )
}
