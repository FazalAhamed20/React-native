import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import ImageData from '../components/ImageData'

const ImageScreen = () => {
  return (
    <View>
   <ImageData title="Forest" image={require('../../assets/forest.jpg')} description="Its a forest"/>
   <ImageData title="Mountain"  image={require('../../assets/mountain.jpg')} description="Its a mountain"/>
   <ImageData title="Beach"  image={require('../../assets/beach.jpg')} description="Its a beach"/>
        </View>
  )
}

export default ImageScreen