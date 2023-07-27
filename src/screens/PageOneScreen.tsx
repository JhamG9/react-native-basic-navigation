import { Button, Text, TouchableOpacity, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';


//interface Props extends StackScreenProps<any, any> {};
interface Props extends DrawerScreenProps<any, any> {};

export const PageOneScreen = ({ navigation }: Props) => {

  useEffect(() =>{
    navigation.setOptions({
      headerLeft: () => (
        <Button title='Menu' onPress={() =>navigation.toggleDrawer()} />
      )
    })
  })

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1</Text>

      <Button title='Ir Page 2'
        onPress={() => navigation.navigate('PageTwo')} />


      <Text>Navegar con argumentos</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ ...styles.bigButton, backgroundColor: '#5856D6' }} onPress={() => navigation.navigate('Person', {
          id: 1,
          name: 'Pedro'
        })}>
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          ...styles.bigButton,
          backgroundColor: '#FF9427'
        }} onPress={() => navigation.navigate('Person', {
          id: 2,
          name: 'Maria'
        })}>
          <Text style={styles.bigButtonText}>Maria</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
