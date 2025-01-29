import React, { useState } from 'react'
import {Button, FlatList, Text, View} from 'react-native'

const randomColor = ()=>{
  let red = Math.floor(Math.random()*230)
  let green = Math.floor(Math.random()*230)
  let blue = Math.floor(Math.random()*230)

  return `rgb(${red},${green},${blue})`
}

const ColorsScreen = () => {
  const [colors,setColors] = useState([])
  console.log(colors);
  
  return (
    <View >
        <Button title="Add color" onPress={()=>setColors([...colors,randomColor()])} />

          <FlatList
         horizontal={true}
          data={colors}
          renderItem={({item})=>(
            
            <View style={{height:100 , width: 100 , backgroundColor:`${item}`, margin:10 }}/>

  )}
          />
          <View style={{height:300,flexDirection:"column",borderWidth:3, borderColor:"black", justifyContent:"space-around" ,margin:10}}>
            <Text style={{borderWidth:2,borderColor:"red",flex:1}}>Child 1</Text>
            <Text style={{borderWidth:2,borderColor:"red",flex:1}}>Child 2</Text>
            <Text style={{borderWidth:2,borderColor:"red",flex:1}}>Child 3</Text>
          </View>
     
    </View>

  )
}

export default ColorsScreen