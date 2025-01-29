import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button  
    onPress={()=>navigation.navigate("Components")}
    title="Component"/>
   <Button
   onPress={()=>navigation.navigate("About")}
   title="About"
   />
      <Button
   onPress={()=>navigation.navigate("Image")}
   title="Image"
   />
       <Button
   onPress={()=>navigation.navigate("Counter")}
   title="Counter"
   />
       <Button
   onPress={()=>navigation.navigate("Colors")}
   title="Colors"
   />
      <Button
   onPress={()=>navigation.navigate("Text")}
   title="Text"
   />

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default HomeScreen;
