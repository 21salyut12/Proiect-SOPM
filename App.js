import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Apploading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Homepage } from './src/screens';

//function for when fonts don't load fast enough
export default function App() {
  let [fontsLoaded] = useFonts({
    'Montserrat_Semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <Apploading />;
  } else {
    return (
      <Homepage />
    );
  }
}

//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
});
