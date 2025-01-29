import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const TextScreen = () => {
    const [name,setName]=useState('')
  return (
  <View>
  <TextInput 
  value={name}
  autoCapitalize='none'
  style={{borderWidth:1 , borderColor:"black", margin:100}}
  onChangeText={(e)=>setName(e)
  }
  />
  <Text>My name is {name}</Text>

  </View>
  )
}

export default TextScreen