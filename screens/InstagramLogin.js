import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import InputField from '../components/InputButton'


const InstagramLogin = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require('../assets/Instagram_logo.png')}
      />
      <InputField placeholder={"Phone number, email or username"} />
      <InputField placeholder={"Password"} secureTextEntry={true} />
      <Text>InstagramLogin</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    margin: 8
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default InstagramLogin