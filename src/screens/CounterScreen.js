import React, { useReducer } from 'react'
import  {View,Text,Button}   from 'react-native'

const reducer =(state,action)=>{
  switch(action.type){
    case "Increment":
      return {...state,count:state.count + action.payload}
      case "Decrement":
        return {...state,count:state.count - action.payload}
        default:
          return state
  }
  

}

const CounterScreen = () => {

  const [state,dispatch] = useReducer(reducer,{count:0})
   
  return (
    <View>
        <Button onPress={()=>dispatch({type:"Increment",payload:1})} title="Increment"/>
        <Button onPress={()=>dispatch({type:"Decrement",payload:1})}  title="Decrement"/>
        <Text>Counter: {state.count}</Text>
    </View>
   
  )
}

export default CounterScreen