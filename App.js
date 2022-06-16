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


    //   <View style={styles.options}>
    //     <View style={styles.spacer}></View>
    //     <Text style={styles.option}>
    //       OR
    //     </Text>
    //     <View style={styles.spacer}></View>
    //   </View>


    //   <Pressable style={styles.facebookButton}>
    //         <Text style={styles.facebook}>Log in with Facebook</Text>
    //   </Pressable>

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
  
   
  options: {
    flexDirection: 'row',
    width: 280,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  spacer: {
    backgroundColor: '#808080',
    width: 120,
    height: 1
  },
  option: {
    color: '#808080',
    fontSize: 15
  },
  facebook: {
    color: '#4267B2',
    fontWeight: 'bold',
    fontSize: 13
  },
  facebookButton: {
    margin: 10,
  }
});
