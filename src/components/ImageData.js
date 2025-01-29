import React from 'react'
import {View,Text,Image} from 'react-native'

const ImageData = ({title,image,description}) => {
  return (
    <View>
        <Image source={image}/>
        <Text>{title}</Text>
        <Text>{description}</Text>
    </View>
   
  )
}

export default ImageData