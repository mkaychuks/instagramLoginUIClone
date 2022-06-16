import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import InputField from './components/InputButton';
import Button from './components/Button';
import InstagramLogin from './screens/InstagramLogin';


export default function App() {
  return (

    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <InstagramLogin />
      </SafeAreaView>
    </PaperProvider>


    // <View style={styles.container}>
    //   
    //   {/* the Instagram Logo*/}
    //   
    //   {/* the Input field*/}
    //   <InputField 
    //     placeholder={"Phone number, email or password"}
    //     keyboardType={'email-address'}
    //   />
    //   <InputField placeholder={"Password"}/>
    //   {/* the button*/}  
    //   <Button />

    //   







    //   <View style={[styles.subtitle, {position: 'absolute', bottom: 5}]}>
    //     <Text style={styles.loginHelp}>
    //       Don't have an account?&nbsp;
    //     </Text>
    //     <Text style={styles.getHelp}>
    //       Sign up
    //     </Text>
    //   </View>


    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
   
  
  option: {
    color: '#808080',
    fontSize: 15
  },
  
});
