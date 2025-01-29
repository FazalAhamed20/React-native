import React from 'react'
import {Text,StyleSheet,View,FlatList} from 'react-native'


const ComponentScreen = () => {

    const friends=[
        {name:"Freind1"},
        {name:"Freind2"},
        {name:"Freind3"},
        {name:"Freind4"},
        {name:"Freind5"},
        {name:"Freind6"},
        {name:"Freind5"},
        {name:"Freind5"},
        {name:"Freind5"},
        {name:"Freind5"},
        {name:"Freind5"},
        {name:"Freind5"},
        {name:"Freind7"},

    ]
   
  return (
<FlatList 

data={friends} 
renderItem={({item})=>{
    
    return <Text style={style.textAlign}>{item.name}</Text>

}}/>
  )
}

const style=StyleSheet.create({
    textAlign:{
        marginVertical: 100
    }
    
})

export default ComponentScreen