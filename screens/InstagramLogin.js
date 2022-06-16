import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import InputField from '../components/InputButton'


const InstagramLogin = () => {
  return (
    <View>
      <Image 
        style={styles.image}
        source={require('../assets/Instagram_logo.png')}
      />
      <InputField placeholder={"Phone number, email or username"} />
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
})

export default InstagramLogin